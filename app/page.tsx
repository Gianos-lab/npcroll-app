"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, Users, Scale, Briefcase } from "lucide-react";
import ExternalLinkButton from "@/components/animata/button/external-link-button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { InfoTooltip } from "@/components/info-tooltip";
import { Info } from "lucide-react";
import { NpcDetailPanel, NpcEmptyState, NpcLoadingState } from "@/components/npc-detail-panel";

// NPC type for the fetched data
type Npc = {
  name: string;
  race: string;
  profession: string;
  morality: "Good" | "Neutral" | "Evil";
  description: string;
  tagline?: string;
  look: string;
  personality: string;
  history: string;
  voice: string;
  hook: string;
  rumor: string;
  line1: string;
  line2: string;
};

// Fetch NPC with minimum delay for UX
async function fetchNpc(filters?: { race?: string; morality?: string; profession?: string }): Promise<Npc> {
  const start = Date.now();
  
  const params = new URLSearchParams();
  if (filters?.race && filters.race !== 'all-races') params.set('race', filters.race);
  if (filters?.morality && filters.morality !== 'all-moralities') params.set('morality', filters.morality);
  if (filters?.profession && filters.profession !== 'all-professions') params.set('profession', filters.profession);
  
  const url = `/api/npc${params.toString() ? `?${params.toString()}` : ''}`;
  const res = await fetch(url);
  
  if (!res.ok) {
    throw new Error('Failed to fetch NPC');
  }
  
  const npc = (await res.json()) as Npc;

  // Ensure minimum delay for better UX
  const MIN_DELAY_MS = 2500;
  const elapsed = Date.now() - start;
  if (elapsed < MIN_DELAY_MS) {
    await new Promise((resolve) =>
      setTimeout(resolve, MIN_DELAY_MS - elapsed)
    );
  }

  return npc;
}

export default function Home() {
  const [isPackExpanded, setIsPackExpanded] = useState(false);
  const [isRaceOpen, setIsRaceOpen] = useState(true);
  const [isMoralityOpen, setIsMoralityOpen] = useState(true);
  const [isProfessionOpen, setIsProfessionOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [currentNpc, setCurrentNpc] = useState<Npc | null>(null);
  
  // Filter states
  const [selectedRace, setSelectedRace] = useState("all-races");
  const [selectedMorality, setSelectedMorality] = useState("all-moralities");
  const [selectedProfession, setSelectedProfession] = useState("all-professions");

  // Handle roll NPC
  const handleRollNpc = async () => {
    setIsLoading(true);
    try {
      const npc = await fetchNpc({
        race: selectedRace,
        morality: selectedMorality,
        profession: selectedProfession,
      });
      setCurrentNpc(npc);
    } catch (error) {
      console.error('Failed to fetch NPC:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundImage: 'url(/texture.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      {/* Header - Solo Logo */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between" style={{ minHeight: '56px' }}>
          <div className="flex items-center gap-2">
            <img src="/logo_nav.svg" alt="NPCRoll Logo" className="w-16 h-16" />
          </div>
          <nav className="flex items-center gap-6">
            <ExternalLinkButton text="Feedback" />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center py-8 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto flex gap-10 px-8 items-stretch">
          {/* LEFT COLUMN */}
          <aside className="w-[480px] max-w-full flex-shrink-0">
            {/* Try it yourself Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 space-y-5 w-full">
              {/* Hero Text */}
              <div className="text-center">
                <h1 className="text-3xl font-bold text-white font-display">Need an NPC? Roll one.</h1>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-sm font-semibold text-white/80">Current Pack</h2>
                <InfoTooltip
                  content={
                    <span className="text-sm">NPCs are curated in Packs. Each Pack blends its own mix of races, professions, and personalities.
This early build holds only one pack — but worry not, more are brewing..</span>
                  }
                >
                  <Info className="w-4 h-4" />
                </InfoTooltip>
              </div>

              {/* Chosen Pack Card */}
              <div className="flex items-center gap-4 rounded-xl bg-white/5 backdrop-blur-sm px-4 py-3 shadow-sm border border-white/10 w-full">
                <div className="flex-shrink-0">
                  <img
                    src="/packs/starting-village.jpeg"
                    alt="Starting Village"
                    className="w-16 h-16 rounded-lg object-cover border border-white/20 shadow"
                  />
                </div>
                <div className="flex flex-col justify-center min-w-0 flex-1">
                  <span className="font-bold text-base text-white leading-tight">
                    Starting Village
                  </span>
                  <span className="text-sm text-white/70 leading-snug mt-1">
                    Innkeepers, merchants, and the essential faces in any starting adventure.
                  </span>
                </div>
              </div>

              <Separator className="bg-white/20" />

              {/* Generate Button */}
              <div className="flex justify-center">
                <button 
                  onClick={handleRollNpc}
                  disabled={isLoading}
                  className="group relative overflow-hidden rounded-lg bg-[#D4AF6A] px-8 py-3.5 transition-all duration-300 shadow-lg shadow-[#D4AF6A]/40 hover:shadow-[#D4AF6A]/60 hover:shadow-xl hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform overflow-hidden rounded-lg bg-white/20 transition-all duration-300 ease-out group-hover:translate-y-14"></span>
                  <div className="relative flex items-center justify-center gap-2">
                    <img src="/roll.svg" alt="dice" className={`w-6 h-6 transition-transform duration-300 ${isLoading ? 'animate-spin' : 'group-hover:rotate-12'}`} style={isLoading ? { animationDuration: '1s' } : undefined} />
                    <span className="font-display font-bold text-sm text-slate-900">{isLoading ? 'ROLLING...' : 'ROLL NPC'}</span>
                  </div>
                </button>
              </div>

              {/* Filters */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wide">Filters</h3>

                {/* Race Filter */}
                <Collapsible open={isRaceOpen} onOpenChange={setIsRaceOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-white/70" />
                      <span className="text-sm font-medium text-white/90">Race</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 text-white/60 transition-transform duration-200 ${isRaceOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-3 px-2">
                    <RadioGroup value={selectedRace} onValueChange={setSelectedRace} className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all-races" id="race-all" className="border-white/40 text-teal-400" />
                        <Label htmlFor="race-all" className="text-sm text-white/80 cursor-pointer">All Races</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Human" id="race-human" className="border-white/40 text-teal-400" />
                        <Label htmlFor="race-human" className="text-sm text-white/80 cursor-pointer">Human</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Halfling" id="race-halfling" className="border-white/40 text-teal-400" />
                        <Label htmlFor="race-halfling" className="text-sm text-white/80 cursor-pointer">Halfling</Label>
                      </div>
                    </RadioGroup>
                  </CollapsibleContent>
                </Collapsible>

                {/* Morality Filter */}
                <Collapsible open={isMoralityOpen} onOpenChange={setIsMoralityOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200">
                    <div className="flex items-center gap-2">
                      <Scale className="w-4 h-4 text-white/70" />
                      <span className="text-sm font-medium text-white/90">Morality</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 text-white/60 transition-transform duration-200 ${isMoralityOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-3 px-2">
                    <RadioGroup value={selectedMorality} onValueChange={setSelectedMorality} className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all-moralities" id="morality-all" className="border-white/40 text-teal-400" />
                        <Label htmlFor="morality-all" className="text-sm text-white/80 cursor-pointer">All</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Good" id="morality-good" className="border-white/40 text-teal-400" />
                        <Label htmlFor="morality-good" className="text-sm text-white/80 cursor-pointer">Good</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Neutral" id="morality-neutral" className="border-white/40 text-teal-400" />
                        <Label htmlFor="morality-neutral" className="text-sm text-white/80 cursor-pointer">Neutral</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Evil" id="morality-evil" className="border-white/40 text-teal-400" />
                        <Label htmlFor="morality-evil" className="text-sm text-white/80 cursor-pointer">Evil</Label>
                      </div>
                    </RadioGroup>
                  </CollapsibleContent>
                </Collapsible>

                {/* Profession Filter */}
                <Collapsible open={isProfessionOpen} onOpenChange={setIsProfessionOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-white/70" />
                      <span className="text-sm font-medium text-white/90">Profession</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 text-white/60 transition-transform duration-200 ${isProfessionOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-3 px-2">
                    <RadioGroup value={selectedProfession} onValueChange={setSelectedProfession} className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all-professions" id="prof-all" className="border-white/40 text-teal-400" />
                        <Label htmlFor="prof-all" className="text-sm text-white/80 cursor-pointer">All Professions</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Merchant" id="prof-merchant" className="border-white/40 text-teal-400" />
                        <Label htmlFor="prof-merchant" className="text-sm text-white/80 cursor-pointer">Merchant</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Guard" id="prof-guard" className="border-white/40 text-teal-400" />
                        <Label htmlFor="prof-guard" className="text-sm text-white/80 cursor-pointer">Guard</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Farmer" id="prof-farmer" className="border-white/40 text-teal-400" />
                        <Label htmlFor="prof-farmer" className="text-sm text-white/80 cursor-pointer">Farmer</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Innkeeper" id="prof-innkeeper" className="border-white/40 text-teal-400" />
                        <Label htmlFor="prof-innkeeper" className="text-sm text-white/80 cursor-pointer">Innkeeper</Label>
                      </div>
                    </RadioGroup>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN */}
          {isLoading ? (
            <NpcLoadingState />
          ) : currentNpc ? (
            <NpcDetailPanel {...currentNpc} />
          ) : (
            <NpcEmptyState />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-3 text-white/80 text-sm">
            <div className="md:flex-1 md:text-left text-center">
              NPCRoll is a curated library of NPCs with unique personality, voice and hooks. Ready to use at your table.
            </div>

            <div className="flex items-center gap-4 mt-2 md:mt-0">
              <a href="/" className="text-teal-300 hover:text-teal-200 transition-colors">Roll</a>
              <span className="text-white/40 hidden md:inline">|</span>
              <a href="/feedback" className="text-teal-300 hover:text-teal-200 transition-colors">Feedback</a>
            </div>

            <div className="md:text-right text-center text-white/70 mt-2 md:mt-0">
              © 2025 NPCRoll. <a href="/legal" className="text-teal-300 hover:text-teal-200 transition-colors">Licence & Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
