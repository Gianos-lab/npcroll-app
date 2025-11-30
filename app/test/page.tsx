// app/roll/page.tsx (o app/test/page.tsx)
import React from "react";

type NpcDetailProps = {
  name: string;
  race: string;
  profession: string;
  morality: string;
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

function NpcDetailPanel({
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
}: NpcDetailProps) {
  return (
    <section className="flex-1">
      <div className="h-full rounded-3xl bg-slate-900/80 border border-slate-800/80 shadow-[0_0_40px_rgba(0,0,0,0.7)] px-8 py-7 flex flex-col gap-6">
        {/* HEADER */}
        <header className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide text-slate-50">
            {name}
          </h2>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-slate-950/60 border border-slate-700 text-slate-100">
              {race}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-950/60 border border-slate-700 text-slate-100">
              {profession}
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/50 text-emerald-300 uppercase tracking-wide">
              {morality}
            </span>
          </div>
        </header>

        {/* CHARACTER SECTION */}
        <section className="rounded-2xl bg-slate-950/60 border border-slate-800 p-5 space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold tracking-[0.14em] text-slate-300 uppercase">
              Character
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-400/80 via-slate-600 to-transparent" />
          </div>

          <p className="text-[13px] text-slate-200 leading-relaxed">
            {description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px]">
            <div className="space-y-1">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-slate-400 uppercase">
                Look
              </p>
              <p className="text-slate-200">{look}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-slate-400 uppercase">
                Personality
              </p>
              <p className="text-slate-200">{personality}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-slate-400 uppercase">
                History
              </p>
              <p className="text-slate-200">{history}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-slate-400 uppercase">
                Voice
              </p>
              <p className="text-slate-200">{voice}</p>
            </div>
          </div>
        </section>

        {/* HOOKS & RUMORS */}
        <section className="rounded-2xl bg-slate-950/60 border border-slate-800 p-5 space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold tracking-[0.14em] text-slate-300 uppercase">
              Hooks &amp; Rumors
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-teal-400/80 via-slate-600 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative rounded-xl bg-slate-950 border border-teal-500/50 px-4 py-3">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-teal-400" />
              <p className="text-[11px] font-semibold tracking-[0.18em] text-teal-300 uppercase mb-1 pl-2">
                Hook
              </p>
              <p className="text-[13px] text-slate-100 leading-relaxed pl-2">
                {hook}
              </p>
            </div>

            <div className="relative rounded-xl bg-slate-950 border border-sky-500/50 px-4 py-3">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-sky-400" />
              <p className="text-[11px] font-semibold tracking-[0.18em] text-sky-300 uppercase mb-1 pl-2">
                Rumor
              </p>
              <p className="text-[13px] text-slate-100 leading-relaxed pl-2">
                {rumor}
              </p>
            </div>
          </div>
        </section>

        {/* LINES AT THE TABLE */}
        <section className="rounded-2xl bg-slate-950/60 border border-slate-800 p-5 space-y-3 mt-auto">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold tracking-[0.14em] text-slate-300 uppercase">
              Lines at the table
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-400/80 via-slate-600 to-transparent" />
          </div>

          <p className="text-[11px] text-slate-400">
            Read these aloud the first time this NPC speaks.
          </p>

          <div className="space-y-2">
            <div className="rounded-xl bg-slate-950 border border-slate-700 px-4 py-3">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-slate-400 uppercase mb-1">
                Line 1
              </p>
              <p className="text-[13px] text-slate-100 italic leading-relaxed">
                “{line1}”
              </p>
            </div>

            <div className="rounded-xl bg-slate-950 border border-slate-700 px-4 py-3">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-slate-400 uppercase mb-1">
                Line 2
              </p>
              <p className="text-[13px] text-slate-100 italic leading-relaxed">
                “{line2}”
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default function RollPage() {
  const npc: NpcDetailProps = {
    name: "Tamley Duskpot",
    race: "Halfling",
    profession: "Farmer",
    morality: "Evil",
    description:
      "A smallholder on the edge of the village who always seems to know whose crops failed, whose debts are late, and which fields might change hands soon.",
    look: "Sun-browned skin, ink-stained fingers from keeping obsessive notes, and clothes just a little nicer than a farmer should afford.",
    personality:
      "Polite, patient, and always listening; never forgets a slight and enjoys watching others squirm.",
    history:
      "Once nearly lost the farm to bad harvests and debt. Swore never to be powerless again, and started trading in gossip and quiet leverage.",
    voice:
      "Soft, measured, with the occasional dry joke. Rarely raises their voice; lets silence do the work.",
    hook:
      "Tamley quietly proposes to 'solve' a neighbour's problem if the PCs help him secure a disputed patch of land in return.",
    rumor:
      "Some say Tamley keeps ledgers on everyone in the village—debts, secrets, and favors owed—locked in a chest no one has ever seen open.",
    line1:
      "Oh, what a shame about your beans this year… truly. But perhaps I can help you recover.",
    line2:
      "Nothing grows in poor soil and poor arrangements, friend. Lucky for you, I know how to fix both.",
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
      {/* HEADER */}
      <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full border border-amber-400/70 flex items-center justify-center text-xs font-bold text-amber-300">
              d20
            </div>
            <span className="font-display text-2xl tracking-wide">
              NPCRoll
            </span>
          </div>

          <nav className="flex items-center gap-8 text-sm font-medium">
            <button className="text-amber-200">Roll</button>
            <button className="text-slate-300 hover:text-amber-200">
              Packs
            </button>
            <button className="px-4 py-2 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 text-sm font-semibold shadow-md shadow-teal-500/30">
              Feedback
            </button>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-6 py-10 flex gap-6">
          {/* LEFT PANEL */}
          <section className="w-[360px] shrink-0">
            <div className="mb-6">
              <h1 className="text-3xl font-semibold mb-1">NPCRoll</h1>
              <p className="text-sm text-slate-300 max-w-sm">
                A curated library of NPCs with unique personality, voice and
                hooks. Ready to use at your table.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-900/80 border border-slate-800/80 shadow-[0_0_40px_rgba(0,0,0,0.7)] px-6 py-6 flex flex-col gap-5">
              <h2 className="text-base font-semibold text-slate-50">
                Try it yourself:
              </h2>

              {/* Current Pack card */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold tracking-[0.16em] uppercase text-slate-300">
                    Current Pack
                  </span>
                  <span className="h-4 w-4 rounded-full border border-slate-500 text-[10px] flex items-center justify-center text-slate-300">
                    i
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-slate-950/60 border border-slate-800 px-3 py-3">
                  <div className="h-14 w-20 rounded-xl overflow-hidden bg-slate-800">
                    {/* placeholder image */}
                    <div className="h-full w-full flex items-center justify-center text-[10px] text-slate-300 px-2 text-center">
                      Starting Village
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-slate-50">
                      Starting Village
                    </p>
                    <p className="text-[11px] text-slate-300">
                      Innkeepers, merchants, and the other faces always at the
                      table in any starting campaign.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pack select */}
              <div className="space-y-1 pt-2">
                <label className="text-xs font-semibold text-slate-200">
                  Pack:
                </label>
                <div className="relative">
                  <select
                    disabled
                    className="w-full rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400 px-3 py-2 pr-8 appearance-none"
                  >
                    <option>Starting Village</option>
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-500">
                    ▼
                  </span>
                </div>
              </div>

              {/* Generate NPC button */}
              <div className="pt-2">
                <button className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 hover:from-amber-200 hover:to-amber-400 text-slate-900 font-semibold text-sm shadow-lg shadow-amber-500/30">
                  <span className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-900/10 border border-white/40 text-[11px] font-bold">
                    d20
                  </span>
                  Generate NPC
                </button>
              </div>

              {/* Filters */}
              <div className="border-t border-slate-800/70 pt-4 mt-2 space-y-3">
                <div>
                  <p className="text-xs font-semibold tracking-[0.16em] text-slate-300 uppercase">
                    Filters
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Narrow down the pool before you roll.
                  </p>
                </div>

                <div className="space-y-2 text-xs">
                  {/* Race */}
                  <details className="group rounded-xl bg-slate-950/70 border border-slate-800">
                    <summary className="flex items-center justify-between px-3 py-2 cursor-pointer list-none">
                      <span>Race</span>
                      <span className="text-[10px] text-slate-500 group-open:rotate-180 transition">
                        ▲
                      </span>
                    </summary>
                    <div className="px-3 pb-3 space-y-1 text-[11px] text-slate-300">
                      <label className="flex items-center gap-2">
                        <input type="radio" defaultChecked className="accent-teal-400" />
                        <span>All Races</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" className="accent-teal-400" />
                        <span>Human</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" className="accent-teal-400" />
                        <span>Halfling</span>
                      </label>
                    </div>
                  </details>

                  {/* Morality */}
                  <details className="group rounded-xl bg-slate-950/70 border border-slate-800">
                    <summary className="flex items-center justify-between px-3 py-2 cursor-pointer list-none">
                      <span>Morality</span>
                      <span className="text-[10px] text-slate-500 group-open:rotate-180 transition">
                        ▲
                      </span>
                    </summary>
                    <div className="px-3 pb-3 space-y-1 text-[11px] text-slate-300">
                      <p>All, Good, Neutral, Evil…</p>
                    </div>
                  </details>

                  {/* Profession */}
                  <details className="group rounded-xl bg-slate-950/70 border border-slate-800">
                    <summary className="flex items-center justify-between px-3 py-2 cursor-pointer list-none">
                      <span>Profession</span>
                      <span className="text-[10px] text-slate-500 group-open:rotate-180 transition">
                        ▲
                      </span>
                    </summary>
                    <div className="px-3 pb-3 space-y-1 text-[11px] text-slate-300">
                      <p>Farmer, Innkeeper, Guard, Priest…</p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT PANEL */}
          <NpcDetailPanel {...npc} />
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950/90">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between text-[11px] text-slate-400">
          <p>
            NPCRoll is a curated library of NPCs with unique personality, voice
            and hooks. Ready to use at your table.
          </p>
          <div className="flex items-center gap-4">
            <button className="hover:text-amber-200">Roll</button>
            <button className="hover:text-amber-200">Packs</button>
            <button className="hover:text-amber-200">Feedback</button>
            <span>© 2025 NPCRoll</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
