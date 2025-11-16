"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  getAllRaces,
  getAllSexes,
  getAllAlignments,
} from "@/lib/npcRepository";
import { downloadNpcAsTxt, downloadNpcAsJson } from "@/lib/downloadNpc";
import { FancySelect } from "@/components/FancySelect";
import { setDefaultAutoSelectFamily } from "net";

type Npc = {
  id: string;
  race: string;
  sex: string;
  alignment: string;
  name: string;
  surname: string;
  description: string;
  personality: string;
  history: string;
  motivation: string;
  voice: string;
  hooks: string[];
  lines: string[];
};

const RACES = ["Random", ...getAllRaces()];
const SEXES = ["Random", ...getAllSexes()];
const ALIGNMENTS = ["Random", ...getAllAlignments()];

const LOADING_MESSAGES = [
  "Consulting the ancient grimoire…",
  "Rolling behind the DM screen…",
  "Finding someone interesting at the tavern…",
  "Bribing goblins for extra info…",
];

async function rollNpcRequest(params: {
  race: string;
  sex: string;
  alignment: string;
}): Promise<Npc> {
  const searchParams = new URLSearchParams();

  if (params.race !== "Random") searchParams.set("race", params.race);
  if (params.sex !== "Random") searchParams.set("sex", params.sex);
  if (params.alignment !== "Random") {
    searchParams.set("alignment", params.alignment);
  }

  const queryString = searchParams.toString();
  const url = queryString ? `/api/npc?${queryString}` : "/api/npc";

  const start = Date.now();
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    let message = "Failed to fetch NPC.";
    try {
      const data = await res.json();
      if ((data as any)?.error) {
        message = (data as any).error;
      }
    } catch {
      // ignore
    }
    throw new Error(message);
  }

  const npc = (await res.json()) as Npc;

  // minimo tempo per far “godere” il loading
  const MIN_DELAY_MS = 1500;
  const elapsed = Date.now() - start;
  if (elapsed < MIN_DELAY_MS) {
    await new Promise((resolve) =>
      setTimeout(resolve, MIN_DELAY_MS - elapsed)
    );
  }

  return npc;
}

export default function Home() {
  const [race, setRace] = useState<string>("Random");
  const [sex, setSex] = useState<string>("Random");
  const [alignment, setAlignment] = useState<string>("Random");
  const [loadingMessage, setLoadingMessage] = useState<string>(
    "Generating your NPC…"
  );
  const [hasRolled, setHasRolled] = useState(false);

  const mutation = useMutation({
    mutationFn: rollNpcRequest,
  });

  const npc = (mutation.data as Npc | undefined) ?? null;
  const isPending = mutation.isPending;
  const error = mutation.error as Error | null;

  // ── Gestione stati della card ───────────────────────────
  const showEmpty = !hasRolled && !isPending && !npc && !error;
  const showLoading = isPending;
  const showNpc = !!npc && !isPending;
  const showError = !!error && !isPending && !npc;

  function handleRoll() {
    const msg =
      LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)];
    setLoadingMessage(msg);
    setHasRolled(true);
    mutation.reset();
    mutation.mutate({ race, sex, alignment });
  }

  return (
    <>
      <div className="shell">
        {/* LEFT COLUMN */}
        <section className="left">
          <header>
            <div className="brand-row">
              <div className="logo-box">
                <img src="/logo.svg" alt="NPCRoll logo" />
              </div>
            </div>

            <p className="hero-text">
              Drop-in ready NPCs for busy Dungeon Masters. NPCRoll is a curated
              library of 2,520 handcrafted characters from 14 fantasy races,
              each with unique backstories, motivations, and narrative hooks.
              Pick your parameters, hit <strong>Roll NPC</strong>, and drop a
              fully playable character into your session in seconds.
            </p>
          </header>

          <div className="form-card">
            {/* RACE */}
            <div className="field">
              <label>RACE</label>
              <FancySelect value={race} onChange={setRace} options={RACES} />
            </div>

            {/* SEX */}
            <div className="field">
              <label>SEX</label>
              <FancySelect value={sex} onChange={setSex} options={SEXES} />
            </div>

            {/* ALIGNMENT */}
            <div className="field">
              <label>ALIGNMENT</label>
              <FancySelect
                value={alignment}
                onChange={setAlignment}
                options={ALIGNMENTS}
              />
            </div>
          </div>

          <button
            className="roll-big"
            type="button"
            onClick={handleRoll}
            disabled={isPending}
          >
            <img src="/roll.svg" alt="" className="roll-big-die" />
            <span className="roll-big-label">ROLL NPC</span>
          </button>
        </section>

        {/* RIGHT COLUMN */}
        <section className="right">
          <article className="npc-card">
            <div className="npc-inner">
              {showEmpty && (
                <div className="empty-state">
                  <img src="/roll.svg" alt="" className="empty-die" />
                  <p className="empty-title">No NPC has been summoned yet.</p>
                </div>
              )}

              {showLoading && (
                <div className="loading-state">
                  <div className="spinner" />
                  <p className="loading-text">{loadingMessage}</p>
                </div>
              )}

              {showError && (
                <div className="error-state">
                  <p className="error-title">
                    The tavern is empty for those filters.
                  </p>
                  <p className="error-body">
                    The goblins couldn&apos;t find anyone with that vibe. Try
                    changing <strong>Race</strong> or{" "}
                    <strong>Alignment</strong>, or set one of the filters back
                    to <strong>Random</strong> and roll again.
                  </p>
                </div>
              )}

              {showNpc && npc && (
                <>
                  <header className="npc-header">
                    <div className="npc-header-row">
                      <div className="npc-title-block">
                        <h2 className="npc-name">
                          {npc.name} {npc.surname}
                        </h2>
                        <p className="npc-meta">
                          {npc.race} • {npc.sex} • {npc.alignment}
                        </p>
                      </div>

                      <div className="download-links download-links--top">
                        <button
                          type="button"
                          className="download-link"
                          onClick={() => downloadNpcAsTxt(npc)}
                        >
                          TXT
                        </button>
                        <button
                          type="button"
                          className="download-link"
                          onClick={() => downloadNpcAsJson(npc)}
                        >
                          JSON
                        </button>
                      </div>
                    </div>
                  </header>

                  <section className="section">
                    <h3 className="section-title">DESCRIPTION</h3>
                    <p className="section-body">{npc.description}</p>
                  </section>

                  <section className="section">
                    <h3 className="section-title">PERSONALITY</h3>
                    <p className="section-body">{npc.personality}</p>
                  </section>

                  <section className="section">
                    <h3 className="section-title">HISTORY</h3>
                    <p className="section-body">{npc.history}</p>
                  </section>

                  <section className="section">
                    <h3 className="section-title">MOTIVATION</h3>
                    <p className="section-body">{npc.motivation}</p>
                  </section>

                  <section className="section">
                    <h3 className="section-title">VOICE</h3>
                    <p className="section-body">{npc.voice}</p>
                  </section>

                  <section className="section">
                    <h3 className="section-title">HOOKS</h3>
                    <ul className="hooks">
                      {npc.hooks.map((hook, idx) => (
                        <li key={idx}>{hook}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="section">
                    <h3 className="section-title">LINES</h3>
                    {npc.lines.map((line, idx) => (
                      <p key={idx} className="quote">
                        “{line}”
                      </p>
                    ))}
                  </section>
                </>
              )}
            </div>
          </article>
        </section>
      </div>

      {/* FOOTER FISSO CON FEEDBACK */}
      <footer className="site-footer">
        <p className="footer-text">
          Help evolve NPCRoll.com by filling out this{" "}
          <a
            href="https://example.com/feedback"
            target="_blank"
            rel="noreferrer"
          >
            short feedback form
          </a>
          , or reach out on{" "}
          <a href="https://reddit.com" target="_blank" rel="noreferrer">
            Reddit
          </a>{" "}
          or{" "}
          <a href="https://discord.com" target="_blank" rel="noreferrer">
            Discord
          </a>{" "}
          to share what you&apos;d love to see next.
        </p>
      </footer>
    </>
  );
}
