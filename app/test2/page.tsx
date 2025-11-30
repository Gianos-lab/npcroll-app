// app/roll/page.tsx

import React from "react";

export default function RollPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEFFFF] text-[#17252A]">
      {/* HEADER */}
      <header className="border-b border-[#2B7A78]/30 bg-[#FEFFFF]/70 backdrop-blur">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full border border-[#3AAFA9] flex items-center justify-center text-xs font-bold text-[#2B7A78]">
              d20
            </div>
            <span className="font-display text-2xl tracking-wide text-[#17252A]">
              Np<span className="text-[#3AAFA9]">c</span>Roll
            </span>
          </div>

          {/* Nav */}
          <nav className="flex items-center gap-8 text-sm font-medium">
            <button className="text-[#2B7A78] font-semibold">Roll</button>
            <button className="text-[#17252A] hover:text-[#2B7A78]">
              Packs
            </button>
            <button className="px-4 py-2 rounded-full bg-[#3AAFA9] hover:bg-[#2B7A78] text-white text-sm font-semibold shadow">
              Feedback
            </button>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-6 py-10 flex gap-6">
          {/* COLONNA SINISTRA */}
          <section className="w-[420px] shrink-0">
            <div className="rounded-3xl bg-[#DEF2F1] border border-[#2B7A78]/20 shadow px-7 py-8 flex flex-col gap-6">
              {/* 1. TITOLONE */}
              <div>
                <h1 className="text-xl font-bold text-[#17252A] mb-1">
                  Roll an NPC for your fantasy roleplaying game.
                </h1>
                <p className="text-sm text-[#2B7A78]">
                  Roll fully written characters with personalities, hooks, and
                  story details you can adapt to any system and drop straight
                  into your table.
                </p>
              </div>

              {/* 2. CHOSEN PACK */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold tracking-wide text-[#17252A]">
                      CHOSEN PACK
                    </span>
                    {/* “info point” */}
                    <span className="inline-flex items-center justify-center h-4 w-4 rounded-full bg-white border border-[#2B7A78]/40 text-[10px] text-[#2B7A78]">
                      i
                    </span>
                  </div>
                  <span className="text-[11px] text-[#2B7A78]">
                    1 pack available in this preview
                  </span>
                </div>

                <p className="text-[11px] text-[#2B7A78]">
                  Packs are small themed collections of NPCs. In this early
                  version, you’re rolling from a single pack focused on a
                  classic starting village.
                </p>

                <div className="flex items-start gap-4 mt-1">
                  {/* Cover pack */}
                  <div className="w-28 h-40 rounded-2xl overflow-hidden border border-[#2B7A78]/30 bg-white shadow-sm flex items-center justify-center text-center text-xs px-3 text-[#2B7A78]">
                    Starting Village
                  </div>

                  {/* Testo pack */}
                  <div className="flex-1 flex flex-col gap-1">
                    <h2 className="text-sm font-semibold text-[#17252A]">
                      Starting Village
                    </h2>
                    <p className="text-xs text-[#2B7A78]">
                      Innkeepers, farmers, guards, priests, and other familiar
                      faces that define the first village your players visit.
                    </p>
                    <ul className="mt-1 text-[11px] text-[#2B7A78] list-disc list-inside space-y-0.5">
                      <li>Level 1–3 friendly, neutral, and hostile NPCs</li>
                      <li>Each with personality, goals, and 1–2 hooks</li>
                      <li>Written to be system-agnostic</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3. CHERRY PICKING WINDOW */}
              <div className="rounded-2xl bg-white/80 border border-[#2B7A78]/20 px-4 py-3 flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold text-[#17252A] tracking-wide">
                    QUICK CHERRY PICK (OPTIONAL)
                  </span>
                  <span className="text-[11px] text-[#3AAFA9]">
                    Or just roll anything
                  </span>
                </div>

                {/* Riga 1: “Who are you looking for?” */}
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] text-[#2B7A78]">
                    Who are you looking for?
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-2.5 py-1 rounded-full bg-[#DEF2F1] border border-[#2B7A78]/30 text-[11px] text-[#2B7A78]">
                      Any role
                    </button>
                    <button className="px-2.5 py-1 rounded-full bg-white border border-[#2B7A78]/30 text-[11px] text-[#2B7A78] hover:border-[#2B7A78]">
                      Innkeeper
                    </button>
                    <button className="px-2.5 py-1 rounded-full bg-white border border-[#2B7A78]/30 text-[11px] text-[#2B7A78] hover:border-[#2B7A78]">
                      Farmer
                    </button>
                    <button className="px-2.5 py-1 rounded-full bg-white border border-[#2B7A78]/30 text-[11px] text-[#2B7A78] hover:border-[#2B7A78]">
                      Guard
                    </button>
                  </div>
                </div>

                {/* Riga 2: “What kind of vibe?” */}
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] text-[#2B7A78]">
                    What kind of vibe?
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-2.5 py-1 rounded-full bg-[#DEF2F1] border border-[#2B7A78]/30 text-[11px] text-[#2B7A78]">
                      Any
                    </button>
                    <button className="px-2.5 py-1 rounded-full bg-white border border-[#2B7A78]/30 text-[11px] text-[#2B7A78] hover:border-[#2B7A78]">
                      Friendly
                    </button>
                    <button className="px-2.5 py-1 rounded-full bg-white border border-[#2B7A78]/30 text-[11px] text-[#2B7A78] hover:border-[#2B7A78]">
                      Troubled
                    </button>
                    <button className="px-2.5 py-1 rounded-full bg-white border border-[#2B7A78]/30 text-[11px] text-[#2B7A78] hover:border-[#2B7A78]">
                      Villainous
                    </button>
                  </div>
                </div>

                <span className="text-[10px] text-[#2B7A78]">
                  These are just shortcuts on top of the full filters below.
                </span>
              </div>

              {/* 4. BUTTON */}
              <div className="flex flex-col items-center gap-3">
                <button className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#3AAFA9] hover:bg-[#2B7A78] text-white font-semibold text-sm shadow">
                  <span className="h-8 w-8 rounded-full border border-white/60 flex items-center justify-center text-xs bg-[#2B7A78]/20">
                    d20
                  </span>
                  <span>Roll NPC</span>
                </button>
                <p className="text-[11px] text-[#2B7A78] text-center">
                  Roll a random NPC from{" "}
                  <span className="font-semibold">Starting Village</span>.  
                  Use cherry-pick options or filters if you want something more specific.
                </p>
              </div>

              <div className="border-t border-[#2B7A78]/20 pt-4 mt-2" />

              {/* 5. FILTRI */}
              <div className="flex flex-col gap-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-[#17252A]">
                      FILTERS
                    </p>
                    <p className="text-[11px] text-[#2B7A78]">
                      Showing 42 NPCs
                    </p>
                  </div>
                  <button className="text-[11px] text-[#3AAFA9] hover:text-[#2B7A78]">
                    Clear
                  </button>
                </div>

                <div className="space-y-2">
                  <button className="w-full flex items-center justify-between rounded-xl bg-white border border-[#2B7A78]/30 px-3 py-2 text-xs text-left hover:border-[#2B7A78]">
                    <span>Race</span>
                    <span className="text-[#2B7A78] text-[10px]">▼</span>
                  </button>
                  <button className="w-full flex items-center justify-between rounded-xl bg-white border border-[#2B7A78]/30 px-3 py-2 text-xs text-left hover:border-[#2B7A78]">
                    <span>Morality</span>
                    <span className="text-[#2B7A78] text-[10px]">▼</span>
                  </button>
                  <button className="w-full flex items-center justify-between rounded-xl bg-white border border-[#2B7A78]/30 px-3 py-2 text-xs text-left hover:border-[#2B7A78]">
                    <span>Profession</span>
                    <span className="text-[#2B7A78] text-[10px]">▼</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* COLONNA DESTRA – NPC RESULT (WIP) */}
          <section className="flex-1">
            <div className="rounded-3xl bg-[#DEF2F1] border border-[#2B7A78]/20 px-7 py-8 flex flex-col gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-[#17252A]">
                  Tamley Duskpot
                </h2>
                <p className="text-sm text-[#2B7A78]">Halfling Farmer (Evil)</p>
              </div>

              {/* Quote box */}
              <div className="mt-2">
                <div className="rounded-2xl bg-white border border-[#2B7A78]/30 px-5 py-4 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-[#3AAFA9]" />
                  <p className="text-sm text-[#17252A] pl-2">
                    “Oh, what a shame about your beans this year…”
                  </p>
                </div>
              </div>

              {/* Bottoni Hook/Rumor/Copy */}
              <div className="flex gap-3 mt-2">
                <button className="px-4 py-2 rounded-full border border-[#3AAFA9] text-xs text-[#2B7A78] hover:bg-[#3AAFA9]/10">
                  Hook
                </button>
                <button className="px-4 py-2 rounded-full border border-[#3AAFA9] text-xs text-[#2B7A78] hover:bg-[#3AAFA9]/10">
                  Rumor
                </button>
                <button className="px-4 py-2 rounded-full border border-[#2B7A78] text-xs text-[#17252A] hover:bg-[#2B7A78]/10">
                  Copy
                </button>
              </div>

              <div className="mt-auto pt-6 text-[11px] text-[#2B7A78] text-center">
                ← Click Roll NPC to generate your own character.
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#2B7A78]/20 bg-[#FEFFFF]">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between text-[11px] text-[#2B7A78]">
          <p>
            NPCRoll is a curated library of NPCs with unique personality, voice
            and hooks. Ready to use at your table.
          </p>
          <div className="flex items-center gap-4">
            <button className="hover:text-[#17252A]">Roll</button>
            <button className="hover:text-[#17252A]">Packs</button>
            <button className="hover:text-[#17252A]">Feedback</button>
            <span>© 2025 NPCRoll. Licence &amp; Privacy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
