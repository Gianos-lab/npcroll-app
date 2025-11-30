"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import {
  getAllRaces,
  getAllAlignments,
  getAllProfessions,
} from "@/lib/npcRepository";

const RACES = ["Random", ...getAllRaces()];
const ALIGNMENTS = ["Random", ...getAllAlignments()];
const PROFESSIONS = ["Random", ...getAllProfessions()];

const npcSets = [
  {
    name: "Pack 01: Starting Village",
    stats: "480 NPCs • 2 races • 4 professions",
    description: "Designed to support the opening moments of a campaign: taverns, chapels, farms, markets, and the friendly (or suspicious) faces within."
  }
];

export default function Home() {
  const [race, setRace] = useState("random");
  const [alignment, setAlignment] = useState("random");
  const [profession, setProfession] = useState("random");

  return (
    <div
      className="min-h-screen font-serif flex flex-col"
      style={{
        backgroundImage: 'url(/texture.jpg), radial-gradient(900px 600px at 20% -10%, rgba(58, 175, 169, 0.35), transparent 55%), radial-gradient(800px 500px at 110% 110%, rgba(23, 37, 42, 0.9), transparent 55%), linear-gradient(145deg, #05090b, #0b1518)',
        backgroundSize: 'cover, auto, auto, auto',
        backgroundPosition: 'center, center, center, center',
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Navbar */}
      <nav
        className="border-b font-serif"
        style={{
          background: 'rgba(23, 37, 42, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderColor: 'rgba(58, 175, 169, 0.2)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(58, 175, 169, 0.1)'
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between" style={{ minHeight: '80px' }}>
            {/* Logo aligned left */}
            <Link href="/" className="flex items-center transition-transform hover:scale-105" style={{ marginRight: '32px' }}>
              <img src="/logo_nav.svg" alt="NPCRoll Logo" style={{ height: '80px', width: '80px', display: 'block' }} />
            </Link>
            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              <Link
                href="/"
                className="text-sm font-medium transition-all hover:opacity-80 hover:-translate-y-0.5 relative group"
                style={{ color: '#ffffff' }}
              >
                Roll NPC
                <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#3AAFA9' }}></span>
              </Link>
              <Link
                href="/packs"
                className="text-sm font-medium transition-all hover:opacity-80 hover:-translate-y-0.5 relative group"
                style={{ color: '#ffffff' }}
              >
                Packs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#3AAFA9' }}></span>
              </Link>
              <Link
                href="/roadmap"
                className="text-sm font-medium transition-all hover:opacity-80 hover:-translate-y-0.5 relative group"
                style={{ color: '#ffffff' }}
              >
                Roadmap
                <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#3AAFA9' }}></span>
              </Link>
              <Button
                asChild
                className="text-sm transition-all hover:scale-105 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  background: 'rgba(58, 175, 169, 0.9)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  color: '#17252A',
                  fontFamily: '"Germania One", serif',
                  letterSpacing: '0.08em',
                  boxShadow: '0 4px 12px rgba(23, 37, 42, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                <Link href="/feedback">Feedback</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div style={{ maxWidth: '620px', width: '100%', paddingLeft: '2rem', paddingRight: '2rem' }}>
          {/* Header Section */}
          <div className="mb-6">
            <h2
              className="text-[2rem] mb-2 leading-tight"
              style={{
                color: '#FFFFFF',
                fontFamily: '"Germania One", serif',
                letterSpacing: '0.02em',
                textShadow: '0 2px 8px rgba(23, 37, 42, 0.3)'
              }}
            >
              Roll an NPC for your Campaign!
            </h2>
          </div>

          {/* Main Card Container */}
          <div
            className="rounded-2xl border"
            style={{
              background: 'linear-gradient(145deg, #1a2a2f 0%, #1e3338 50%, #1a2a2f 100%)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
              padding: '2rem'
            }}
          >
            {/* Pack Carousel */}
            <div className="mb-6">
              <Carousel className="w-full">
                <CarouselContent>
                  {npcSets.map((set, index) => (
                    <CarouselItem key={index}>
                      <div
                        className="rounded-xl"
                        style={{
                          background: 'rgba(255, 255, 255, 0.08)',
                          border: '1px solid rgba(58, 175, 169, 0.25)',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                          padding: '1rem 1.25rem'
                        }}
                      >
                        <p
                          className="text-xs mb-1.5"
                          style={{
                            color: 'rgba(222, 242, 241, 0.7)',
                            fontFamily: '"Lora", serif',
                            fontWeight: 500
                          }}
                        >
                          {set.stats}
                        </p>
                        <h3
                          className="text-lg mb-1.5 flex items-center"
                          style={{
                            color: '#DEF2F1',
                            fontFamily: 'Germania One, serif',
                            fontWeight: 600,
                            fontSize: '1.25em'
                          }}
                        >
                          <span style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '0.35em'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"/><path d="M6 8h4"/><path d="M6 18h4"/><path d="m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"/><path d="M14 8h4"/><path d="M14 18h4"/><path d="m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"/></svg>
                          </span>
                          {set.name}
                        </h3>
                        <p
                          className="text-xs leading-relaxed"
                          style={{
                            color: 'rgba(222, 242, 241, 0.6)',
                            fontFamily: '"Lora", serif'
                          }}
                        >
                          Folks {set.description}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious
                  className="left-2 w-10 h-10 border-0 hover:opacity-80"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    color: '#FEFFFF'
                  }}
                />
                <CarouselNext
                  className="right-2 w-10 h-10 border-0 hover:opacity-80"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    color: '#FEFFFF'
                  }}
                />
              </Carousel>
            </div>

            {/* Filter Dropdowns */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {/* Race Filter */}
              <div>
                <label
                  className="block text-xs mb-1.5"
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontFamily: '"Germania One", serif',
                    letterSpacing: '0.05em'
                  }}
                >
                  Race
                </label>
              <Select value={race} onValueChange={setRace}>
                <SelectTrigger
                  className="w-full capitalize border-0 shadow-none focus:ring-0 focus-visible:ring-0"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#FEFFFF',
                    fontFamily: '"Lora", sans-serif',
                    fontSize: '0.875rem',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.5rem',
                    height: 'auto'
                  }}
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent
                  className="border-0"
                  style={{
                    background: '#1a2a2f',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.75rem',
                    padding: '0.5rem',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  {RACES.map((option) => (
                    <SelectItem key={option} value={option.toLowerCase()} className="text-white hover:bg-[#2B7A78]/30 focus:bg-[#2B7A78]/30 rounded-md capitalize">
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              </div>

              {/* Alignment Filter */}
              <div>
                <label
                  className="block text-xs mb-1.5"
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontFamily: '"Germania One", serif',
                    letterSpacing: '0.05em'
                  }}
                >
                  Alignment
                </label>
              <Select value={alignment} onValueChange={setAlignment}>
                <SelectTrigger
                  className="w-full capitalize border-0 shadow-none focus:ring-0 focus-visible:ring-0"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#FEFFFF',
                    fontFamily: '"Lora", sans-serif',
                    fontSize: '0.875rem',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.5rem',
                    height: 'auto'
                  }}
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent
                  className="border-0"
                  style={{
                    background: '#1a2a2f',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.75rem',
                    padding: '0.5rem',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  {ALIGNMENTS.map((option) => (
                    <SelectItem key={option} value={option.toLowerCase()} className="text-white hover:bg-[#2B7A78]/30 focus:bg-[#2B7A78]/30 rounded-md capitalize">
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              </div>

              {/* Profession Filter */}
              <div>
                <label
                  className="block text-xs mb-1.5"
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontFamily: '"Germania One", serif',
                    letterSpacing: '0.05em'
                  }}
                >
                  Profession
                </label>
              <Select value={profession} onValueChange={setProfession}>
                <SelectTrigger
                  className="w-full capitalize border-0 shadow-none focus:ring-0 focus-visible:ring-0"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#FEFFFF',
                    fontFamily: '"Lora", sans-serif',
                    fontSize: '0.875rem',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.5rem',
                    height: 'auto'
                  }}
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent
                  className="border-0"
                  style={{
                    background: '#1a2a2f',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.75rem',
                    padding: '0.5rem',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  {PROFESSIONS.map((option) => (
                    <SelectItem key={option} value={option.toLowerCase()} className="text-white hover:bg-[#2B7A78]/30 focus:bg-[#2B7A78]/30 rounded-md capitalize">
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              </div>
            </div>

            {/* Roll Section */}
            <div className="flex items-center justify-center">
              <button
                className="flex items-center gap-3 px-8 py-3 rounded-xl transition-all hover:scale-105 active:scale-95 focus:outline-none"
                style={{
                  background: '#C89666',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(200, 150, 102, 0.4)'
                }}
              >
                <img
                  src="/roll.svg"
                  alt="Roll dice"
                  className="w-8 h-8"
                  style={{
                    filter: 'brightness(0) invert(1)'
                  }}
                />
                <span
                  className="text-lg font-medium"
                  style={{
                    fontFamily: '"Germania One", serif',
                    color: '#FEFFFF',
                    letterSpacing: '0.05em'
                  }}
                >
                  ROLL NPC
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="mt-auto border-t"
        style={{
          background: 'rgba(23, 37, 42, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderColor: 'rgba(58, 175, 169, 0.2)',
          boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1), inset 0 -1px 0 rgba(58, 175, 169, 0.1)'
        }}
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between text-xs" style={{ color: '#999999' }}>
            <div className="flex items-center gap-4">
              <span>NPCRoll is a curated library of NPCs with unique personality, dialogue, and plot hooks. Ready to use instantly.</span>
              <span>|</span>
              <Link href="/feedback" className="hover:opacity-80 transition-opacity">
                Feedback
              </Link>
              <span>|</span>
              <Link href="/roadmap" className="hover:opacity-80 transition-opacity">
                Roadmap
              </Link>
            </div>
            <div>
              © 2025 NPCRoll
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
