"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card a sinistra */}
          <div className="flex justify-start mt-8 lg:mt-12">
            <Card className="glass-card max-w-2xl w-full relative" style={{ marginLeft: '1rem' }}>
              <div className="card-top-panel relative rounded-md p-4 mb-4">
                <button className="nav-arrow left-2" aria-label="prev">‹</button>
                <div className="text-xs mb-2">480 NPCs • 2 races • 4 professions</div>
                <h4>Pack 01: Starting Village</h4>
                <p className="text-sm">Folks designed to support the opening moments of a campaign: taverns, chapels, farms, markets, and the friendly (or suspicious) faces within.</p>
                <button className="nav-arrow right-2" aria-label="next">›</button>
              </div>

              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                  <div className="flex flex-col">
                    <label className="text-sm font-medium mb-2">Race</label>
                    <Select defaultValue="random">
                      <SelectTrigger className="w-full glass-select" aria-label="Race">
                        <SelectValue placeholder="Random" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="random">Random</SelectItem>
                        <SelectItem value="human">Human</SelectItem>
                        <SelectItem value="halfling">Halfling</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-medium mb-2">Alignment</label>
                    <Select defaultValue="random">
                      <SelectTrigger className="w-full glass-select" aria-label="Alignment">
                        <SelectValue placeholder="Random" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="random">Random</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="neutral">Neutral</SelectItem>
                        <SelectItem value="evil">Evil</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-medium mb-2">Profession</label>
                    <Select defaultValue="random">
                      <SelectTrigger className="w-full glass-select" aria-label="Profession">
                        <SelectValue placeholder="Random" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="random">Random</SelectItem>
                        <SelectItem value="merchant">Merchant</SelectItem>
                        <SelectItem value="guard">Guard</SelectItem>
                        <SelectItem value="farmer">Farmer</SelectItem>
                        <SelectItem value="innkeeper">Innkeeper</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-center mt-2">
                  <button className="roll-btn flex items-center gap-3 px-6 py-3">
                    <img src="/roll_white.svg" alt="dice" className="w-6 h-6" />
                    <span className="font-display font-bold">ROLL NPC</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Spazio a destra (per ora vuoto) */}
          <div>
            <div className="text-white/60 text-center p-8">
              <p>NPC result will appear here</p>
            </div>
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
