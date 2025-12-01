"use client";

import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, Users, Scale, Briefcase, Info, Sparkles } from "lucide-react";
import ExternalLinkButton from "@/components/animata/button/external-link-button";
import { InfoTooltip } from "@/components/info-tooltip";
import { NpcDetailPanel, NpcEmptyState, NpcLoadingState } from "@/components/npc-detail-panel";
import { motion, AnimatePresence } from "framer-motion";
import { fetchRandomNpc } from "./actions";

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
  motivation: string;
  rumor: string;
  line1: string;
  line2: string;
};

// Fetch NPC with minimum delay for UX
async function fetchNpc(filters?: { race?: string; morality?: string; profession?: string }): Promise<Npc> {
  const start = Date.now();
  
  const npcFilters = {
    race: filters?.race && filters.race !== 'all-races' ? filters.race : null,
    morality: filters?.morality && filters.morality !== 'all-moralities' ? filters.morality : null,
    profession: filters?.profession && filters.profession !== 'all-professions' ? filters.profession : null,
  };
  
  const npc = await fetchRandomNpc(npcFilters);
  
  if (!npc) {
    throw new Error('Failed to fetch NPC');
  }

  // Ensure minimum delay for better UX
  const MIN_DELAY_MS = 2500;
  const elapsed = Date.now() - start;
  if (elapsed < MIN_DELAY_MS) {
    await new Promise((resolve) =>
      setTimeout(resolve, MIN_DELAY_MS - elapsed)
    );
  }

  return npc as Npc;
}

export default function Home() {
  const [isPackExpanded, setIsPackExpanded] = useState(false);
  const [isRaceOpen, setIsRaceOpen] = useState(true);
  const [isMoralityOpen, setIsMoralityOpen] = useState(true);
  const [isProfessionOpen, setIsProfessionOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  const [currentNpc, setCurrentNpc] = useState<Npc | null>(null);
  
  // Mobile toast state
  const [showMobileToast, setShowMobileToast] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
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
      
      // Show toast on mobile
      if (isMobile) {
        setShowMobileToast(true);
        setTimeout(() => setShowMobileToast(false), 3000);
      }
    } catch {
      // Error handled silently - user can retry
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex min-h-screen flex-col"
      style={{
        backgroundImage: 'url(/texture.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
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
      <main className={`flex-1 py-8 ${!currentNpc && !isLoading ? 'flex items-center' : ''}`}>
        <div
          className={`mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:gap-10 ${
            !currentNpc && !isLoading ? 'md:items-stretch' : 'items-start'
          }`}
        >
          {/* LEFT COLUMN - fixed width */}
          <aside
            className={`w-full flex-shrink-0 ${
              !currentNpc && !isLoading ? 'flex' : ''
            } md:w-[360px] lg:w-[420px]`}
          >
            {/* Try it yourself Card */}
            <div className="w-full space-y-5 rounded-xl border border-white/20 bg-white/10 p-5 sm:p-6 backdrop-blur-md">
              {/* Hero Text */}
              <div className="text-center">
                <h1 className="font-display text-2xl font-bold text-white sm:text-3xl">Need an NPC? Roll one</h1>
              </div>

              {/* Current Pack Header - Desktop: with tooltip, Mobile: with static text */}
              <div className="mb-2">
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-semibold text-white/80">Current Pack</h2>
                  {/* Tooltip only on md+ screens */}
                  <div className="hidden md:inline-flex">
                    <InfoTooltip
                      content={
                        <span className="text-sm">NPCs are curated in Packs. Each Pack blends its own mix of races, professions, and personalities.
This early build holds only one pack — but worry not, more are brewing.</span>
                      }
                    >
                      <Info className="w-4 h-4" />
                    </InfoTooltip>
                  </div>
                </div>
                {/* Static text only on small screens */}
                <p className="text-xs text-white/50 mt-1 md:hidden">
                  NPCs are curated in Packs. This early build has just one — more are brewing.
                </p>
              </div>

              {/* Chosen Pack Card */}
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 shadow-sm backdrop-blur-sm">
                <div className="flex-shrink-0">
                  <img
                    src="/packs/starting-village.jpeg"
                    alt="Starting Village"
                    className="h-16 w-16 rounded-lg border border-white/20 object-cover shadow"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center">
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
                  className="group relative overflow-hidden rounded-lg bg-[#D4AF6A] px-10 py-4 transition-all duration-300 shadow-lg shadow-[#D4AF6A]/40 hover:shadow-[#D4AF6A]/60 hover:shadow-xl hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform overflow-hidden rounded-lg bg-white/20 transition-all duration-300 ease-out group-hover:translate-y-14"></span>
                  <div className="relative flex items-center justify-center gap-3">
                    <img src="/roll.svg" alt="dice" className={`w-8 h-8 transition-transform duration-300 ${isLoading ? 'animate-spin' : 'group-hover:rotate-12'}`} style={isLoading ? { animationDuration: '1s' } : undefined} />
                    <span className="font-display font-bold text-lg text-slate-900">{isLoading ? 'ROLLING...' : 'ROLL NPC'}</span>
                  </div>
                </button>
              </div>

              {/* Filters */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wide">Filters</h3>

                {/* Race Filter */}
                <Collapsible open={isRaceOpen} onOpenChange={setIsRaceOpen}>
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3 transition-all duration-200 hover:border-white/20 hover:bg-white/10">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-white/70" />
                      <span className="text-sm font-medium text-white/90">Race</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 text-white/60 transition-transform duration-200 ${isRaceOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-1 pt-3 sm:px-2">
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
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3 transition-all duration-200 hover:border-white/20 hover:bg-white/10">
                    <div className="flex items-center gap-2">
                      <Scale className="w-4 h-4 text-white/70" />
                      <span className="text-sm font-medium text-white/90">Morality</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 text-white/60 transition-transform duration-200 ${isMoralityOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-1 pt-3 sm:px-2">
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
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3 transition-all duration-200 hover:border-white/20 hover:bg-white/10">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-white/70" />
                      <span className="text-sm font-medium text-white/90">Profession</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 text-white/60 transition-transform duration-200 ${isProfessionOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-1 pt-3 sm:px-2">
                    <RadioGroup value={selectedProfession} onValueChange={setSelectedProfession} className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all-professions" id="prof-all" className="border-white/40 text-teal-400" />
                        <Label htmlFor="prof-all" className="text-sm text-white/80 cursor-pointer">All Professions</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Farmer" id="prof-farmer" className="border-white/40 text-teal-400" />
                        <Label htmlFor="prof-farmer" className="text-sm text-white/80 cursor-pointer">Farmer</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Innkeeper" id="prof-innkeeper" className="border-white/40 text-teal-400" />
                        <Label htmlFor="prof-innkeeper" className="text-sm text-white/80 cursor-pointer">Innkeeper</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Merchant" id="prof-merchant" className="border-white/40 text-teal-400" />
                        <Label htmlFor="prof-merchant" className="text-sm text-white/80 cursor-pointer">Merchant</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Priest" id="prof-priest" className="border-white/40 text-teal-400" />
                        <Label htmlFor="prof-priest" className="text-sm text-white/80 cursor-pointer">Priest</Label>
                      </div>
                    </RadioGroup>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN - fills remaining space */}
          <div className="w-full flex-1 min-w-0">
            {isLoading ? (
              <NpcLoadingState />
            ) : currentNpc ? (
              <NpcDetailPanel {...currentNpc} onRollAnother={handleRollNpc} onClear={() => setCurrentNpc(null)} />
            ) : (
              <NpcEmptyState />
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-md border-t border-white/20 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-3 text-white/80 text-sm">
            <div className="md:flex-1 md:text-left text-center">
              NPCRoll is a curated library of NPCs with unique personality, voice and motivations. Ready to use at your table.
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

      {/* Mobile Toast - NPC Created */}
      <AnimatePresence>
        {showMobileToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] md:hidden"
          >
            <div className="flex items-center gap-2 bg-teal-600/95 backdrop-blur-sm text-white px-5 py-3 rounded-full shadow-lg border border-teal-400/30">
              <Sparkles className="w-4 h-4 text-teal-200" />
              <span className="font-medium text-sm">NPC Created! Scroll down</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
