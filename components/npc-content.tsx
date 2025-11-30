import { Npc } from "@/lib/types";

type NpcContentProps = {
  npc: Npc;
  onCopy: (npc: Npc) => void;
  copied: boolean;
};

export function NpcContent({ npc, onCopy, copied }: NpcContentProps) {
  return (
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
            onClick={() => onCopy(npc)}
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
            "{line}"
          </p>
        ))}
      </section>
    </>
  );
}
