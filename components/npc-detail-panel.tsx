"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";

const LOADING_MESSAGES = [
  "Consulting the ancient grimoire…",
  "Rolling behind the DM screen…",
  "Finding someone interesting at the tavern…",
  "Bribing goblins for extra info…",
  "Brewing a fresh batch of trouble…",
  "Asking the barkeep about the regulars…",
];

/**
 * Loading state component for when an NPC is being fetched.
 * Shows a spinning dice and rotating flavor messages.
 */
export function NpcLoadingState() {
  const [messageIndex, setMessageIndex] = React.useState(0);

  React.useEffect(() => {
    // Pick a random starting message
    setMessageIndex(Math.floor(Math.random() * LOADING_MESSAGES.length));
    
    // Rotate messages every 1500ms
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex-1 min-w-0 self-start">
      {/* Container matches the full panel style */}
      <div className="h-[220px] rounded-xl bg-[#17252A]/95 backdrop-blur-md border border-white/10 shadow-[0_8_60px_rgba(0,0,0,0.6)] px-7 py-7 flex flex-col items-center justify-center">
        
        {/* Centered content */}
        <div className="flex flex-col items-center text-center gap-4">
          
          {/* Spinning dice icon */}
          <img 
            src="/roll_white.svg" 
            alt="Loading" 
            className="w-12 h-12 opacity-80 drop-shadow-[0_0_12px_rgba(58,175,169,0.5)] animate-spin"
            style={{ animationDuration: '2s' }}
          />
          
          {/* Rotating loading message */}
          <p className="text-sm text-[#FEFFFF] transition-opacity duration-300">
            {LOADING_MESSAGES[messageIndex]}
          </p>
          
        </div>
      </div>
    </section>
  );
}

/**
 * Empty state component for when no NPC has been rolled yet.
 * Minimal, centered design with just title and subtitle.
 */
export function NpcEmptyState() {
  return (
    <section className="flex-1 min-w-0 flex">
      {/* Main panel - same glass style as full state */}
      <div className="flex-1 rounded-xl bg-[#17252A]/95 backdrop-blur-md border border-white/10 shadow-[0_8_60px_rgba(0,0,0,0.6)] px-7 py-7 flex flex-col items-center justify-center relative overflow-hidden">
        
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        {/* Centered minimal content */}
        <div className="relative flex flex-col items-center text-center gap-4">
          {/* Animated d20 icon with glow */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#3AAFA9]/20 blur-xl rounded-full scale-150" />
            <img 
              src="/roll_white.svg" 
              alt="" 
              className="relative w-12 h-12 opacity-60 drop-shadow-[0_0_8px_rgba(58,175,169,0.3)]"
            />
          </div>
          
          {/* Title */}
          <p className="text-base text-[#FEFFFF] font-medium">
            Your next NPC awaits
          </p>
          
          {/* Subtitle */}
          <p className="text-sm text-[#DEF2F1]/50 max-w-[320px] leading-relaxed">
            Roll the dice to summon a unique character with personality, voice, and story hooks ready for your table.
          </p>
          
          {/* Decorative hint */}
          <div className="flex items-center gap-2 mt-2 text-xs text-[#3AAFA9]/60">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#3AAFA9]/40" />
            <span>use the filters to narrow your search</span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#3AAFA9]/40" />
          </div>
        </div>
      </div>
    </section>
  );
}

type NpcDetailPanelProps = {
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

export function NpcDetailPanel({
  name,
  race,
  profession,
  morality,
  description,
  tagline,
  look,
  personality,
  history,
  voice,
  hook,
  rumor,
  line1,
  line2,
}: NpcDetailPanelProps) {
  // Color palette from README:
  // Dark Blue (#17252A), Teal (#3AAFA9), Dark Teal (#2B7A78), Light Blue (#DEF2F1), White (#FEFFFF)
  const moralityColor = {
    Good: "text-[#3AAFA9]",      // Teal
    Neutral: "text-white/60",
    Evil: "text-[#2B7A78]",      // Dark Teal (subtle distinction)
  };

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: [0.25, 0.1, 0.25, 1] as const, // easeOut cubic-bezier
        staggerChildren: 0.08,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <motion.section
      key={name}
      className="flex-1 min-w-0"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Border beam wrapper - frames the entire NPC panel */}
      <div className="relative h-full">
        <BorderBeam 
          duration={6} 
          colorFrom="#3AAFA9" 
          colorTo="#2B7A78"
        />
        
        {/* Main panel - inverted glass style: darker, more prominent - z-10 to sit above beam */}
        <div className="relative z-10 h-full rounded-xl bg-[#17252A] backdrop-blur-md border border-white/10 shadow-[0_8_60px_rgba(0,0,0,0.6)] px-7 py-7 flex flex-col gap-6">
        
        {/* 1) HEADER */}
        <motion.header variants={childVariants}>
          <h2 className="text-3xl font-bold text-[#FEFFFF] font-display mb-1">
            {name}
          </h2>
          <p className="text-sm text-[#DEF2F1]/70">
            {race} · {profession} · {morality}
          </p>
        </motion.header>

        {/* 2) SECTION: OVERVIEW */}
        <motion.section variants={childVariants}>
          <h3 className="text-[11px] font-semibold tracking-[0.14em] text-[#DEF2F1]/50 uppercase mb-3">
            Overview
          </h3>
          <div className="relative rounded-lg bg-white/5 border border-white/10 p-4">
            {/* Top gradient accent - using Teal */}
            <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-lg bg-gradient-to-r from-[#3AAFA9]/60 via-[#DEF2F1]/20 to-transparent" />
            <p className="text-sm text-[#FEFFFF]/90 leading-relaxed">
              {description}
            </p>
            {tagline && (
              <p className="text-xs text-[#DEF2F1]/50 italic mt-2">
                {tagline}
              </p>
            )}
          </div>
        </motion.section>

        {/* 3) SECTION: WHAT DEFINES THEM */}
        <motion.section variants={childVariants}>
          <h3 className="text-[11px] font-semibold tracking-[0.14em] text-[#DEF2F1]/50 uppercase mb-3">
            What defines them
          </h3>
          <div className="rounded-lg bg-white/5 border border-white/10 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.14em] text-[#DEF2F1]/50 uppercase mb-1">
                  Look
                </p>
                <p className="text-[13px] text-[#FEFFFF]/80 leading-relaxed">{look}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.14em] text-[#DEF2F1]/50 uppercase mb-1">
                  Personality
                </p>
                <p className="text-[13px] text-[#FEFFFF]/80 leading-relaxed">{personality}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.14em] text-[#DEF2F1]/50 uppercase mb-1">
                  History
                </p>
                <p className="text-[13px] text-[#FEFFFF]/80 leading-relaxed">{history}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-[0.14em] text-[#DEF2F1]/50 uppercase mb-1">
                  Voice
                </p>
                <p className="text-[13px] text-[#FEFFFF]/80 leading-relaxed">{voice}</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 4) SECTION: AT THE TABLE */}
        <motion.section className="mt-auto" variants={childVariants}>
          <h3 className="text-[11px] font-semibold tracking-[0.14em] text-[#DEF2F1]/50 uppercase mb-3">
            At the table
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Card 1: HOOK */}
            <div className="relative rounded-lg bg-white/5 border border-white/10 p-4">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-lg bg-[#3AAFA9]/70" />
              <p className="text-[10px] font-semibold tracking-[0.14em] text-[#3AAFA9] uppercase mb-2 pl-2">
                Hook
              </p>
              <p className="text-[13px] text-[#FEFFFF]/80 leading-relaxed pl-2">
                {hook}
              </p>
            </div>

            {/* Card 2: RUMOR */}
            <div className="relative rounded-lg bg-white/5 border border-white/10 p-4">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-lg bg-[#2B7A78]/70" />
              <p className="text-[10px] font-semibold tracking-[0.14em] text-[#2B7A78] uppercase mb-2 pl-2">
                Rumor
              </p>
              <p className="text-[13px] text-[#FEFFFF]/80 leading-relaxed pl-2">
                {rumor}
              </p>
            </div>

            {/* Card 3: LINES AT THE TABLE */}
            <div className="relative rounded-lg bg-white/5 border border-white/10 p-4">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-lg bg-[#DEF2F1]/40" />
              <p className="text-[10px] font-semibold tracking-[0.14em] text-[#DEF2F1]/70 uppercase mb-2 pl-2">
                Lines
              </p>
              <div className="pl-2 space-y-3">
                {/* Line 1 */}
                <div>
                  <p className="text-[10px] text-[#DEF2F1]/40 uppercase mb-0.5">Line 1</p>
                  <p className="text-[13px] text-[#FEFFFF]/80 italic leading-relaxed">
                    &ldquo;{line1}&rdquo;
                  </p>
                </div>

                {/* Line 2 */}
                <div>
                  <p className="text-[10px] text-[#DEF2F1]/40 uppercase mb-0.5">Line 2</p>
                  <p className="text-[13px] text-[#FEFFFF]/80 italic leading-relaxed">
                    &ldquo;{line2}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        </div>
      </div>
    </motion.section>
  );
}
