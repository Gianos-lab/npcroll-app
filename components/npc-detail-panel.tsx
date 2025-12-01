"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";
import { Dices, Copy, Check, RotateCcw } from "lucide-react";

const LOADING_MESSAGES = [
  "Consulting the ancient grimoire…",
  "Rolling behind the DM screen…",
  "Finding someone interesting at the tavern…",
  "Bribing goblins for extra info…",
  "Brewing a fresh batch of trouble…",
  "Asking the barkeep about the regulars…",
];

/**
 * Skeleton placeholder bar component
 */
function SkeletonBar({ className }: { className?: string }) {
  return (
    <div className={`bg-white/10 rounded animate-pulse ${className || ''}`} />
  );
}

/**
 * Loading state component for when an NPC is being fetched.
 * Shows a skeleton "ghost" card that mimics the full NPC layout.
 */
export function NpcLoadingState() {
  const [messageIndex, setMessageIndex] = React.useState(0);

  React.useEffect(() => {
    setMessageIndex(Math.floor(Math.random() * LOADING_MESSAGES.length));
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full">
      {/* Main panel - same glass style as full state */}
      <div className="rounded-xl bg-[#17252A]/95 backdrop-blur-md border border-white/10 shadow-[0_8_60px_rgba(0,0,0,0.6)] px-7 py-7 flex flex-col gap-6">
        
        {/* Loading message at top */}
        <div className="flex items-center gap-3 mb-2">
          <Dices className="w-5 h-5 text-[#3AAFA9] animate-spin" style={{ animationDuration: '2s' }} />
          <p className="text-sm text-[#3AAFA9] font-medium">
            {LOADING_MESSAGES[messageIndex]}
          </p>
        </div>

        {/* 1) HEADER skeleton */}
        <header>
          <SkeletonBar className="h-8 w-3/4 mb-2" />
          <SkeletonBar className="h-4 w-1/2" />
        </header>

        {/* 2) OVERVIEW skeleton */}
        <section>
          <SkeletonBar className="h-3 w-20 mb-3" />
          <div className="rounded-lg bg-white/5 border border-white/10 p-4 space-y-2">
            <SkeletonBar className="h-4 w-full" />
            <SkeletonBar className="h-4 w-5/6" />
            <SkeletonBar className="h-4 w-4/6" />
          </div>
        </section>

        {/* 3) WHAT DEFINES THEM skeleton */}
        <section>
          <SkeletonBar className="h-3 w-32 mb-3" />
          <div className="rounded-lg bg-white/5 border border-white/10 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Look', 'Personality', 'History', 'Voice'].map((label) => (
                <div key={label}>
                  <SkeletonBar className="h-2.5 w-16 mb-2" />
                  <SkeletonBar className="h-4 w-full" />
                  <SkeletonBar className="h-4 w-3/4 mt-1" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4) AT THE TABLE skeleton */}
        <section className="mt-auto">
          <SkeletonBar className="h-3 w-24 mb-3" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg bg-white/5 border border-white/10 p-4">
                <SkeletonBar className="h-2.5 w-14 mb-3" />
                <SkeletonBar className="h-4 w-full" />
                <SkeletonBar className="h-4 w-5/6 mt-1" />
              </div>
            ))}
          </div>
        </section>
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
    <section className="w-full h-full">
      {/* Main panel - same glass style as full state */}
      <div className="h-full rounded-xl bg-[#17252A]/95 backdrop-blur-md border border-white/10 shadow-[0_8_60px_rgba(0,0,0,0.6)] px-7 py-7 flex flex-col items-center justify-center relative overflow-hidden">
        
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        {/* Centered minimal content */}
        <div className="relative flex flex-col items-center text-center gap-4">
          {/* Large animated dice icon with glow */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#3AAFA9]/20 blur-2xl rounded-full scale-150" />
            <Dices 
              className="relative w-16 h-16 text-white/70 drop-shadow-[0_0_12px_rgba(58,175,169,0.4)] animate-pulse"
              style={{ animationDuration: '3s' }}
            />
          </div>
          
          {/* Title */}
          <p className="text-base text-[#FEFFFF] font-medium">
            Your next NPC awaits
          </p>
          
          {/* Subtitle */}
          <p className="text-sm text-[#DEF2F1]/50 max-w-[320px] leading-relaxed">
            Click the  Roll NPC button on the left to summon a new character.
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
  motivation: string;
  rumor: string;
  line1: string;
  line2: string;
  onRollAnother?: () => void;
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
  motivation,
  rumor,
  line1,
  line2,
  onRollAnother,
}: NpcDetailPanelProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    const formattedText = `
${name}
${race} · ${profession} · ${morality}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OVERVIEW
${description}${tagline ? `\n"${tagline}"` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHAT DEFINES THEM

Look: ${look}
Personality: ${personality}
History: ${history}
Voice: ${voice}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AT THE TABLE

Motivation: ${motivation}
Rumor: ${rumor}

Lines:
• "${line1}"
• "${line2}"
`.trim();

    try {
      await navigator.clipboard.writeText(formattedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
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
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Border beam wrapper - frames the entire NPC panel */}
      <div className="relative">
        <BorderBeam 
          duration={6} 
          colorFrom="#3AAFA9" 
          colorTo="#2B7A78"
        />
        
        {/* Main panel - inverted glass style: darker, more prominent - z-10 to sit above beam */}
        <div className="relative z-10 rounded-xl bg-[#17252A] backdrop-blur-md border border-white/10 shadow-[0_8_60px_rgba(0,0,0,0.6)] px-7 py-7 flex flex-col gap-6">
        
        {/* 1) HEADER */}
        <motion.header variants={childVariants} className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-[#FEFFFF] font-display mb-1">
              {name}
            </h2>
            <p className="text-sm text-[#DEF2F1]/70">
              {race} · {profession} · {morality}
            </p>
          </div>
          
          {/* Action buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Copy to Clipboard */}
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 text-[#DEF2F1]/80 hover:text-[#FEFFFF] text-xs font-medium transition-all duration-200"
              title="Copy NPC to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#3AAFA9]" />
                  <span className="text-[#3AAFA9]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
            
            {/* Roll Another */}
            {onRollAnother && (
              <button
                onClick={onRollAnother}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#3AAFA9]/20 hover:bg-[#3AAFA9]/30 border border-[#3AAFA9]/30 hover:border-[#3AAFA9]/50 text-[#3AAFA9] hover:text-[#FEFFFF] text-xs font-medium transition-all duration-200"
                title="Roll another NPC"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Roll Another</span>
              </button>
            )}
          </div>
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
        <motion.section variants={childVariants}>
          <h3 className="text-[11px] font-semibold tracking-[0.14em] text-[#DEF2F1]/50 uppercase mb-3">
            At the table
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Card 1: MOTIVATION */}
            <div className="relative rounded-lg bg-white/5 border border-white/10 p-4">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-lg bg-[#3AAFA9]/70" />
              <p className="text-[10px] font-semibold tracking-[0.14em] text-[#3AAFA9] uppercase mb-2 pl-2">
                Motivation
              </p>
              <p className="text-[13px] text-[#FEFFFF]/80 leading-relaxed pl-2">
                {motivation}
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
