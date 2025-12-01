"use client";

import * as React from "react";

type NpcDetailPanelProps = {
  name: string;
  race: string;
  profession: string;
  morality: "Good" | "Neutral" | "Evil";
  description: string;
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
  look,
  personality,
  history,
  voice,
  hook,
  rumor,
  line1,
  line2,
}: NpcDetailPanelProps) {
  const [activeTab, setActiveTab] = React.useState<"details" | "hooks" | "lines">("details");
  const [activeHookType, setActiveHookType] = React.useState<"hook" | "rumor">("hook");
  const [activeLine, setActiveLine] = React.useState<1 | 2>(1);

  const moralityColor = {
    Good: "text-emerald-300",
    Neutral: "text-white/70",
    Evil: "text-red-300",
  };

  const tabs = [
    { id: "details" as const, label: "Details" },
    { id: "hooks" as const, label: "Hooks & Rumors" },
    { id: "lines" as const, label: "Lines" },
  ];

  return (
    <section className="flex-1 min-w-0">
      {/* Main panel - glassmorphism matching left card */}
      <div className="h-full rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-6 py-6 flex flex-col gap-5">
        
        {/* HEADER */}
        <header className="space-y-1">
          <h2 className="text-2xl font-bold tracking-wide text-white font-display">
            {name}
          </h2>
          <p className="text-sm text-white/70">
            {race} · {profession} · <span className={moralityColor[morality]}>{morality}</span>
          </p>
        </header>

        {/* OVERVIEW */}
        <div className="rounded-lg bg-white/5 border border-white/10 p-4 relative">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-400/60 via-white/20 to-transparent" />
          <p className="text-[11px] font-medium tracking-[0.14em] text-white/50 uppercase mb-2">
            Overview
          </p>
          <p className="text-[14px] text-white/90 leading-relaxed">
            {description}
          </p>
        </div>

        {/* TABS */}
        <div className="border-b border-white/20">
          <nav className="flex items-center gap-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-2 text-xs font-medium uppercase tracking-wide transition-colors ${
                  activeTab === tab.id
                    ? "text-white border-b-2 border-teal-400"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* TAB CONTENT */}
        <div className="flex-1 min-h-0">
          {/* DETAILS */}
          {activeTab === "details" && (
            <div className="rounded-lg bg-white/5 border border-white/10 p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-[13px]">
                <div className="space-y-1">
                  <p className="text-[11px] font-medium tracking-[0.14em] text-white/50 uppercase">
                    Look
                  </p>
                  <p className="text-white/80 leading-relaxed">{look}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-medium tracking-[0.14em] text-white/50 uppercase">
                    Personality
                  </p>
                  <p className="text-white/80 leading-relaxed">{personality}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-medium tracking-[0.14em] text-white/50 uppercase">
                    History
                  </p>
                  <p className="text-white/80 leading-relaxed">{history}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] font-medium tracking-[0.14em] text-white/50 uppercase">
                    Voice
                  </p>
                  <p className="text-white/80 leading-relaxed">{voice}</p>
                </div>
              </div>
            </div>
          )}

          {/* HOOKS & RUMORS */}
          {activeTab === "hooks" && (
            <div className="space-y-4">
              {/* Toggle - text with underline */}
              <div className="flex items-center gap-4 text-xs font-medium">
                <button
                  onClick={() => setActiveHookType("hook")}
                  className={`pb-0.5 transition-colors ${
                    activeHookType === "hook"
                      ? "text-teal-300 border-b border-teal-400"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  Hook
                </button>
                <span className="text-white/30">/</span>
                <button
                  onClick={() => setActiveHookType("rumor")}
                  className={`pb-0.5 transition-colors ${
                    activeHookType === "rumor"
                      ? "text-teal-300 border-b border-teal-400"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  Rumor
                </button>
              </div>

              {/* Content Card */}
              <div className="relative rounded-lg bg-white/5 border border-white/10 px-4 py-4">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-lg bg-teal-400" />
                <p className="text-[13px] text-white/80 leading-relaxed pl-3">
                  {activeHookType === "hook" ? hook : rumor}
                </p>
              </div>
            </div>
          )}

          {/* LINES */}
          {activeTab === "lines" && (
            <div className="space-y-4">
              <p className="text-[11px] text-white/50">
                Use these as ready-made lines when the NPC speaks.
              </p>

              {/* Toggle - text with underline */}
              <div className="flex items-center gap-4 text-xs font-medium">
                <button
                  onClick={() => setActiveLine(1)}
                  className={`pb-0.5 transition-colors ${
                    activeLine === 1
                      ? "text-white border-b border-white/60"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  Line 1
                </button>
                <span className="text-white/30">|</span>
                <button
                  onClick={() => setActiveLine(2)}
                  className={`pb-0.5 transition-colors ${
                    activeLine === 2
                      ? "text-white border-b border-white/60"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  Line 2
                </button>
              </div>

              {/* Quote Card */}
              <div className="rounded-lg bg-white/5 border border-white/10 px-4 py-4">
                <p className="text-[14px] text-white/80 italic leading-relaxed">
                  &ldquo;{activeLine === 1 ? line1 : line2}&rdquo;
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
