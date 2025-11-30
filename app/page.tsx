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
import { ChevronDown } from "lucide-react";
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

export default function Home() {
  const [isPackExpanded, setIsPackExpanded] = useState(false);
  const [isRaceOpen, setIsRaceOpen] = useState(true);
  const [isMoralityOpen, setIsMoralityOpen] = useState(true);
  const [isProfessionOpen, setIsProfessionOpen] = useState(true);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundImage: 'url(/texture.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Header - Solo Logo */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between" style={{ minHeight: '56px' }}>
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="NPCRoll Logo" className="w-16 h-16" />
          </div>
          <nav className="flex items-center gap-6">
            <ExternalLinkButton text="Feedback" />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto flex gap-10 p-8">
          {/* LEFT COLUMN */}
          <aside className="w-[460px] max-w-full flex-shrink-0 space-y-6">
            {/* Try it yourself Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-7 space-y-6 w-full">
              {/* Hero Text */}
              <div className="text-center">
                <h1 className="text-3xl font-bold text-white font-display">Need an NPC? Roll one.</h1>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-sm font-semibold text-white/80">Current Pack</h2>
                <InfoTooltip
                  content={
                    <span className="text-sm">Packs are themed slices of the world; each one contains its own races, roles and personalities. This preview includes only one pack, but more are in the works.</span>
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
                <button className="group relative overflow-hidden rounded-lg bg-[#D4AF6A] px-6 py-3 transition-all shadow-lg shadow-[#D4AF6A]/30">
                  <span className="absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform overflow-hidden rounded-lg bg-white/15 transition-all duration-300 ease-out group-hover:translate-y-14"></span>
                  <div className="relative flex items-center justify-center gap-2">
                    <img src="/roll.svg" alt="dice" className="w-6 h-6" />
                    <span className="font-display font-bold text-sm text-slate-900">ROLL NPC</span>
                  </div>
                </button>
              </div>

              {/* Filters */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wide">Filters</h3>

                {/* Race Filter */}
                <Collapsible open={isRaceOpen} onOpenChange={setIsRaceOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-md bg-white/5 hover:bg-white/10 transition-colors">
                    <span className="text-sm font-medium text-white/90">Race</span>
                    <ChevronDown className={`h-4 w-4 text-white/60 transition-transform ${isRaceOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-3 px-2">
                    <RadioGroup defaultValue="all-races" className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all-races" id="race-all" className="border-white/40 text-teal-400" />
                        <Label htmlFor="race-all" className="text-sm text-white/80 cursor-pointer">All Races</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="human" id="race-human" className="border-white/40 text-teal-400" />
                        <Label htmlFor="race-human" className="text-sm text-white/80 cursor-pointer">Human</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="halfling" id="race-halfling" className="border-white/40 text-teal-400" />
                        <Label htmlFor="race-halfling" className="text-sm text-white/80 cursor-pointer">Halfling</Label>
                      </div>
                    </RadioGroup>
                  </CollapsibleContent>
                </Collapsible>

                {/* Morality Filter */}
                <Collapsible open={isMoralityOpen} onOpenChange={setIsMoralityOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-md bg-white/5 hover:bg-white/10 transition-colors">
                    <span className="text-sm font-medium text-white/90">Morality</span>
                    <ChevronDown className={`h-4 w-4 text-white/60 transition-transform ${isMoralityOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-3 px-2">
                    <RadioGroup defaultValue="all" className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all" id="morality-all" className="border-white/40 text-teal-400" />
                        <Label htmlFor="morality-all" className="text-sm text-white/80 cursor-pointer">All</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="good" id="morality-good" className="border-white/40 text-teal-400" />
                        <Label htmlFor="morality-good" className="text-sm text-white/80 cursor-pointer">Good</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="neutral" id="morality-neutral" className="border-white/40 text-teal-400" />
                        <Label htmlFor="morality-neutral" className="text-sm text-white/80 cursor-pointer">Neutral</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="evil" id="morality-evil" className="border-white/40 text-teal-400" />
                        <Label htmlFor="morality-evil" className="text-sm text-white/80 cursor-pointer">Evil</Label>
                      </div>
                    </RadioGroup>
                  </CollapsibleContent>
                </Collapsible>

                {/* Profession Filter */}
                <Collapsible open={isProfessionOpen} onOpenChange={setIsProfessionOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-md bg-white/5 hover:bg-white/10 transition-colors">
                    <span className="text-sm font-medium text-white/90">Profession</span>
                    <ChevronDown className={`h-4 w-4 text-white/60 transition-transform ${isProfessionOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-3 px-2">
                    <RadioGroup defaultValue="all-professions" className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all-professions" id="prof-all" className="border-white/40 text-teal-400" />
                        <Label htmlFor="prof-all" className="text-sm text-white/80 cursor-pointer">All Professions</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="merchant" id="prof-merchant" className="border-white/40 text-teal-400" />
                        <Label htmlFor="prof-merchant" className="text-sm text-white/80 cursor-pointer">Merchant</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="guard" id="prof-guard" className="border-white/40 text-teal-400" />
                        <Label htmlFor="prof-guard" className="text-sm text-white/80 cursor-pointer">Guard</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="farmer" id="prof-farmer" className="border-white/40 text-teal-400" />
                        <Label htmlFor="prof-farmer" className="text-sm text-white/80 cursor-pointer">Farmer</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="innkeeper" id="prof-innkeeper" className="border-white/40 text-teal-400" />
                        <Label htmlFor="prof-innkeeper" className="text-sm text-white/80 cursor-pointer">Innkeeper</Label>
                      </div>
                    </RadioGroup>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN */}
          <section className="flex-1 min-w-0">
            {/* MAIN AREA - Destra */}
            <div className="flex-1 flex items-start justify-center pt-12">
              <Card className="glass-card max-w-2xl w-full">
                <CardHeader>
                  <CardTitle className="text-3xl font-display">Tamley Duskpot</CardTitle>
                  <p className="text-lg text-white/80 mt-1">Halfling Farmer (Evil)</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Quote */}
                  <div className="bg-white/5 border-l-4 border-teal-400 p-4 rounded">
                    <p className="text-white/90 italic">"Oh, what a shame about your beans this year..."</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" className="glass-select">
                      Hook
                    </Button>
                    <Button variant="outline" className="glass-select">
                      Rumor
                    </Button>
                    <Button variant="outline" className="glass-select">
                      Copy
                    </Button>
                  </div>

                  {/* Helper Text */}
                  <div className="text-center pt-4 border-t border-white/20">
                    <p className="text-white/60 text-sm">← Click Generate for yours</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
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
