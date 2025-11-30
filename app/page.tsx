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
import NavTabs from "@/components/animata/container/nav-tabs";
import ExternalLinkButton from "@/components/animata/button/external-link-button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

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
            <NavTabs tabs={["Roll", "Packs"]} size="sm" />
            <ExternalLinkButton text="Feedback" />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex">
        <div className="w-full max-w-7xl mx-auto flex gap-8 p-8">
          {/* SIDEBAR - Sinistra */}
          <aside className="w-80 flex-shrink-0 space-y-6">
            {/* NPCRoll Title */}
            <div className="text-white">
              <h1 className="text-4xl font-display font-bold mb-2">NPCRoll</h1>
              <p className="text-white/70 text-sm">A curated library of NPCs with unique personality, voice and hooks.</p>
            </div>

            {/* Try it yourself Section */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 space-y-4">
              <h2 className="text-xl font-semibold text-white">Try it yourself:</h2>

              {/* Pack Selection */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-white/90 block">Pack:</label>
                <Select defaultValue="starting-village">
                  <SelectTrigger className="w-full glass-select" aria-label="Pack">
                    <SelectValue placeholder="Select pack" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="starting-village">Starting Village</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator className="bg-white/20" />

              {/* Generate Button */}
              <button className="w-full roll-btn flex items-center justify-center gap-3 px-6 py-3">
                <img src="/roll_white.svg" alt="dice" className="w-6 h-6" />
                <span className="font-display font-bold">GENERATE NPC</span>
              </button>

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
              <a href="/packs" className="text-teal-300 hover:text-teal-200 transition-colors">Packs</a>
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
