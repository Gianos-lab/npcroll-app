"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  getAllRaces,
  getAllSexes,
  getAllAlignments,
} from "@/lib/npcRepository";
import { FancySelect } from "@/components/FancySelect";

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
  "Brewing a fresh batch of trouble…",
  "Asking the barkeep about the regulars…",
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
      // ignore parse errors
    }
    throw new Error(message);
  }

  const npc = (await res.json()) as Npc;

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
  const [copied, setCopied] = useState(false);

  const mutation = useMutation({
    mutationFn: rollNpcRequest,
  });

  const npc = (mutation.data as Npc | undefined) ?? null;
  const isPending = mutation.isPending;
  const error = mutation.error as Error | null;

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

  function handleCopyToClipboard(npc: Npc) {
    const textBlock = [
      `${npc.name} ${npc.surname}`,
      `${npc.race} • ${npc.sex} • ${npc.alignment}`,
      "",
      `Description: ${npc.description}`,
      `Personality: ${npc.personality}`,
      `History: ${npc.history}`,
      `Motivation: ${npc.motivation}`,
      `Voice: ${npc.voice}`,
      "",
      "Hooks:",
      ...npc.hooks.map((h) => `- ${h}`),
      "",
      "Lines:",
      ...npc.lines.map((l) => `"${l}"`),
    ].join("\n");

    try {
      const el = document.createElement("textarea");
      el.value = textBlock;
      el.style.position = "fixed";
      el.style.top = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);

      setCopied(true);
      setTimeout(() => setCopied(false), 1500);

    } catch (err) {
      console.error("Copy failed", err);
      setCopied(false);
    }
  }

  return (
    <>
      <div className="shell">
        <section className="left">
          <header>
            <div className="brand-row">
              <div className="logo-box">
                <img src="/logo.svg" alt="NPCRoll logo" />
              </div>
            </div>

            <p className="hero-text">
              Need a character on the fly? Can&apos;t find inspiration for that
              backstory NPC? We&apos;ve got thousands brewing. Pick your filters,
              roll the dice, and summon a curated NPC for your 5e campaign. Each
              comes with personality, backstory, motivations, voice, hooks and
              dialogue lines. That&apos;s it.
            </p>
          </header>

          <div className="form-card">
            <div className="field">
              <label>RACE</label>
              <FancySelect value={race} onChange={setRace} options={RACES} />
            </div>

            <div className="field">
              <label>SEX</label>
              <FancySelect value={sex} onChange={setSex} options={SEXES} />
            </div>

            <div className="field">
              <label>ALIGNMENT</label>
              <FancySelect
                value={alignment}
                onChange={setAlignment}
                options={ALIGNMENTS}
              />
            </div>
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "1.1rem",
            }}
          >
            <button
              className="npc-button"
              type="button"
              onClick={handleRoll}
            >
              <span>ROLL NPC</span>
              <div className="icon">
                <img src="/roll.svg" alt="Roll d20" />
              </div>
            </button>

          </div>
        </section>

        <section className="right">
          {showEmpty ? (
            <div
              className="empty-state"
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                paddingTop: "40px",
              }}
            >
              <img
                src="/roll_white.svg"
                alt="d20"
                style={{
                  width: "48px",
                  height: "48px",
                  marginBottom: "12px",
                  opacity: 0.9,
                }}
              />
              <p className="empty-title" style={{ fontSize: "0.95rem" }}>
                No NPC has been summoned yet.
              </p>
            </div>
          ) : (
            <article
              className="npc-card"
              key={npc ? npc.id : showLoading ? "loading" : "empty"}
            >
              <div className="npc-inner">
                {showLoading && (
                  <div className="loading-state">
                    <img
                      src="/roll_white.svg"
                      alt=""
                      className="loading-die"
                    />
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
                      <strong>Alignment</strong>, or set one of the filters
                      back to <strong>Random</strong> and roll again.
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

                        <button
                          className={`button-copy ${copied ? "copied" : ""}`}
                          onClick={() => handleCopyToClipboard(npc)}
                        >
                          {copied ? "Copied!" : "Copy NPC"}
                        </button>

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
          )}
        </section>
      </div>

      <footer
        style={{
          marginTop: "1px",
          padding: "16px 0 16px",
          textAlign: "center",
          fontFamily: "'Lora', serif",
          lineHeight: 1.6,
          color: "#DEF2F1",         // testo chiaro e leggibile
          fontSize: "0.95rem",
        }}
      >

        {/* Feedback */}
        <p style={{ marginBottom: "10px" }}>
          Got feedback? Share it through our quick{" "}
          <a href="/feedback" style={{ textDecoration: "underline", color: "#3AAFA9" }}>
            feedback form
          </a>{" "}
          — every idea helps make NPCRoll better.
        </p>

        {/* Legal link */}
        <p style={{ marginBottom: "8px" }}>
          <a
            href="/legal"
            style={{
              textDecoration: "none",
              fontWeight: 600,
              color: "#3AAFA9",        // teal accent
            }}
          >
            Legal &amp; Policies
          </a>
        </p>

        {/* Disclaimer */}
        <p
          style={{
            marginTop: "6px",
            fontSize: "0.85rem",
            color: "#BCD9D7",           // leggermente più tenue ma visibile
            maxWidth: "640px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.4,
          }}
        >
          NPCRoll is not affiliated with Wizards of the Coast. This tool uses only
          content released within the 5e System Reference Document (5.1/5.2). All
          other content is original.
        </p>

      </footer>


    </>
  );
}
