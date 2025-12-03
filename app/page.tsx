"use client";

import { useState, useEffect, useRef } from "react";
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
import { NpcDetailPanel, NpcEmptyState } from "@/components/npc-detail-panel";
import { motion, AnimatePresence } from "framer-motion";
import { fetchRandomNpc } from "./actions";
import { trackCtaClick, trackNpcGenerated, trackFilterChange } from "@/lib/analytics";

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

// Fetch NPC - instant response, no artificial delays
async function fetchNpc(filters?: { race?: string; morality?: string; profession?: string }): Promise<Npc> {
  const npcFilters = {
    race: filters?.race && filters.race !== 'all-races' ? filters.race : null,
    morality: filters?.morality && filters.morality !== 'all-moralities' ? filters.morality : null,
    profession: filters?.profession && filters.profession !== 'all-professions' ? filters.profession : null,
  };
  
  const npc = await fetchRandomNpc(npcFilters);
  
  if (!npc) {
    throw new Error('Failed to fetch NPC');
  }

  return npc as Npc;
}

export default function Home() {
  const [isPackExpanded, setIsPackExpanded] = useState(false);
  const [isRaceOpen, setIsRaceOpen] = useState(true);
  const [isMoralityOpen, setIsMoralityOpen] = useState(true);
  const [isProfessionOpen, setIsProfessionOpen] = useState(true);
  
  const [currentNpc, setCurrentNpc] = useState<Npc | null>(null);
  const [isInitializing, setIsInitializing] = useState(true); // Hide empty state during initial load
  
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
  
  // Pre-load an NPC on first visit (no artificial delay for initial load)
  useEffect(() => {
    const preloadNpc = async () => {
      try {
        const npc = await fetchRandomNpc({
          race: null,
          morality: null,
          profession: null,
        });
        if (npc) {
          setCurrentNpc(npc as Npc);
          // Track initial preload as roll 0
          trackNpcGenerated(0);
        }
      } catch {
        // Silent fail - user can roll manually
      } finally {
        setIsInitializing(false);
      }
    };
    preloadNpc();
  }, []);
  
  // Filter states
  const [selectedRace, setSelectedRace] = useState("all-races");
  const [selectedMorality, setSelectedMorality] = useState("all-moralities");
  const [selectedProfession, setSelectedProfession] = useState("all-professions");
  
  // Roll counter for analytics
  const rollCountRef = useRef(0);

  // Handle roll NPC
  const handleRollNpc = async () => {
    // Track CTA click
    trackCtaClick('hero_button');
    
    try {
      const npc = await fetchNpc({
        race: selectedRace,
        morality: selectedMorality,
        profession: selectedProfession,
      });
      setCurrentNpc(npc);
      
      // Track NPC generated
      rollCountRef.current += 1;
      trackNpcGenerated(rollCountRef.current);
      
      // Show toast on mobile
      if (isMobile) {
        setShowMobileToast(true);
        setTimeout(() => setShowMobileToast(false), 3000);
      }
    } catch {
      // Error handled silently - user can retry
    }
  };

  // Filter change handlers with analytics
  const handleRaceChange = (value: string) => {
    setSelectedRace(value);
    if (value !== 'all-races') {
      trackFilterChange('race', value);
    }
  };

  const handleMoralityChange = (value: string) => {
    setSelectedMorality(value);
    if (value !== 'all-moralities') {
      trackFilterChange('morality', value);
    }
  };

  const handleProfessionChange = (value: string) => {
    setSelectedProfession(value);
    if (value !== 'all-professions') {
      trackFilterChange('profession', value);
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
            <img src="/logo_white.png" alt="NPCRoll Logo" className="w-16 h-16" />
          </div>
          <nav className="flex items-center gap-6">
            <ExternalLinkButton text="Feedback" />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className={`flex-1 py-8 ${!currentNpc ? 'flex items-center' : ''}`}>
        <div
          className={`mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:gap-8 ${
            !currentNpc ? 'md:items-stretch' : 'items-start'
          }`}
        >
          {/* LEFT COLUMN - fixed width */}
          <aside
            className={`w-full flex-shrink-0 ${
              !currentNpc ? 'flex' : ''
            } md:w-[360px] lg:w-[420px]`}
          >
            {/* Try it yourself Card */}
            <div className="w-full space-y-5 rounded-xl border border-white/20 bg-white/10 p-5 sm:p-6 backdrop-blur-md">
              {/* Hero Text */}
              <div className="text-center">
                <h1 className="font-display text-xl font-bold text-white sm:text-2xl md:text-3xl leading-tight">Roll Fully-Written NPCs, Not Just Names.</h1>
                <p className="mt-2 text-sm text-white/70 sm:text-base">Instantly generate system-agnostic characters complete with unique personalities, detailed motivations, and plot-driving secrets.</p>
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
                  className="group relative overflow-hidden rounded-lg bg-[#D4AF6A] px-10 py-4 transition-all duration-300 shadow-lg shadow-[#D4AF6A]/40 hover:shadow-[#D4AF6A]/60 hover:shadow-xl hover:scale-[1.02]"
                >
                  <span className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform overflow-hidden rounded-lg bg-white/20 transition-all duration-300 ease-out group-hover:translate-y-14"></span>
                  <div className="relative flex items-center justify-center gap-3">
                    <img src="/roll.svg" alt="dice" className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12" />
                    <span className="font-display font-bold text-lg text-slate-900">ROLL A CURATED NPC</span>
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
                    <RadioGroup value={selectedRace} onValueChange={handleRaceChange} className="space-y-2">
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
                    <RadioGroup value={selectedMorality} onValueChange={handleMoralityChange} className="space-y-2">
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
                    <RadioGroup value={selectedProfession} onValueChange={handleProfessionChange} className="space-y-2">
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
            {isInitializing ? null : currentNpc ? (
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
