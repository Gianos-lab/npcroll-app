 "use client";

import * as React from "react";
import { BorderBeam } from "@/components/ui/border-beam";
import {
  Dices,
  Copy,
  Check,
  RotateCcw,
  X,
  User,
  FileText,
  MessageCircle,
  Flame,
  BookOpen,
  Settings,
} from "lucide-react";
import { trackCopyAction, trackRollAnotherClick } from "@/lib/analytics";

/**
 * Empty state component for when no NPC has been rolled yet.
 */
export function NpcEmptyState() {
  return (
    <section className="h-full w-full">
      <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#17252A]/95 px-5 py-8 text-center shadow-[0_8_60px_rgba(0,0,0,0.6)] backdrop-blur-md sm:px-7">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative flex flex-col items-center gap-4 text-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#3AAFA9]/20 blur-2xl scale-150" />
            <Dices
              className="relative h-16 w-16 text-white/70 drop-shadow-[0_0_12px_rgba(58,175,169,0.4)] animate-pulse"
              style={{ animationDuration: "3s" }}
            />
          </div>
          <p className="text-base font-medium text-[#FEFFFF]">Your next NPC awaits</p>
          <p className="max-w-[320px] text-sm leading-relaxed text-[#DEF2F1]/50">
            Click the Roll NPC button on the left to summon a new character.
          </p>
          <div className="mt-2 flex items-center gap-2 text-xs text-[#3AAFA9]/60">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#3AAFA9]/40" />
            <span>use the filters to narrow your search</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#3AAFA9]/40" />
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
  onClear?: () => void;
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
  onClear,
}: NpcDetailPanelProps) {
  const [copied, setCopied] = React.useState(false);
  const [hideName, setHideName] = React.useState(false);

  const displayName = hideName ? "[Name] [Surname]" : name;

  const copyToClipboard = async () => {
    const formattedText = `
${displayName}
${race} · ${profession} · ${morality}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OVERVIEW
${description}${tagline ? `\n"${tagline}"` : ""}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHAT DEFINES THEM

Look: ${look}
Personality: ${personality}
History: ${history}
Voice: ${voice}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AT THE TABLE

Motivation: ${motivation}
Rumor: "${rumor}"

Lines:
• "${line1}"
• "${line2}"
`.trim();

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(formattedText);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = formattedText;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }
      setCopied(true);
      trackCopyAction("full_npc");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = formattedText;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
        setCopied(true);
        trackCopyAction("full_npc");
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // silent
      }
    }
  };

  const handleRollAnother = () => {
    trackRollAnotherClick("npc_card_button");
    onRollAnother?.();
  };

  return (
    <section>
      <div className="relative">
        <BorderBeam duration={6} colorFrom="#3AAFA9" colorTo="#2B7A78" />
        <div className="relative z-10 w-full max-w-4xl mx-auto rounded-xl border border-white/10 bg-[#17252A] px-6 py-8 shadow-[0_8_60px_rgba(0,0,0,0.6)] backdrop-blur-md sm:px-8 md:px-9">
          <div className="grid grid-cols-[120px_1fr] items-start gap-x-6 gap-y-6">
            {/* HEADLINE */}
            <div className="flex items-center">
              <div className="flex items-center gap-2 text-[#DEF2F1]/65">
                <User className="h-4 w-4" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em]">Headline</span>
              </div>
            </div>
            <div className="space-y-2 border-l border-white/10 pl-5 text-left">
              <div className="flex flex-col gap-1">
                <h2 className="font-display text-2xl font-bold text-[#FEFFFF] sm:text-[28px] md:text-3xl">
                  {hideName ? <span className="italic text-[#DEF2F1]/50 font-normal">[Name] [Surname]</span> : name}
                </h2>
                <p className="text-sm text-[#DEF2F1]/70">
                  {race} · {profession} · {morality}
                </p>
              </div>
            </div>

            {/* OVERVIEW */}
            <div className="flex items-center">
              <div className="flex items-center gap-2 text-[#DEF2F1]/65">
                <FileText className="h-4 w-4" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em]">Overview</span>
              </div>
            </div>
            <div className="space-y-2 border-l border-white/10 pl-5 text-left">
              <p className="text-sm text-[#FEFFFF]/90 leading-relaxed">{description}</p>
              {tagline && <p className="text-xs text-[#DEF2F1]/55 italic">{tagline}</p>}
            </div>

            {/* LIVE PLAY */}
            <div className="flex items-center">
              <div className="flex items-center gap-2 text-[#DEF2F1]/65">
                <MessageCircle className="h-4 w-4" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em]">Live-play</span>
              </div>
            </div>
            <div className="border-l border-white/10 pl-5">
              <div className="space-y-3 text-[13px] leading-relaxed text-[#DEF2F1]/85">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-[#FEFFFF]">Memorable Detail:</span>
                  <span className="text-left">{look}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-[#FEFFFF]">Tone &amp; Manner:</span>
                  <span className="text-left">{voice}</span>
                </div>
              </div>
            </div>

            {/* HOOKS */}
            <div className="flex items-center">
              <div className="flex items-center gap-2 text-[#DEF2F1]/65">
                <Flame className="h-4 w-4" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em]">Hooks</span>
              </div>
            </div>
            <div className="border-l border-white/10 pl-5">
              <div className="grid grid-cols-[140px_1fr] gap-y-2 gap-x-3 text-[13px] leading-relaxed text-[#DEF2F1]/85">
                <div className="font-semibold text-[#FEFFFF] text-left">Motivation:</div>
                <div className="text-left">{motivation}</div>
                <div className="font-semibold text-[#FEFFFF] text-left">Rumor:</div>
                <div className="italic text-left text-[#DEF2F1]/85">&ldquo;{rumor}&rdquo;</div>
              </div>
            </div>

            {/* DEEP FLAVOUR */}
            <div className="flex items-center">
              <div className="flex items-center gap-2 text-[#DEF2F1]/65">
                <BookOpen className="h-4 w-4" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em]">Deep flavour</span>
              </div>
            </div>
            <div className="space-y-3 border-l border-white/10 pl-5 text-left">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#DEF2F1]/55 mb-1">Personality</p>
                <p className="text-[13px] text-[#DEF2F1]/85 leading-relaxed">{personality}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#DEF2F1]/55 mb-1">History</p>
                <p className="text-[13px] text-[#DEF2F1]/85 leading-relaxed">{history}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#DEF2F1]/55 mb-1">Lines</p>
                <div className="space-y-1.5 text-[13px] text-[#DEF2F1]/80 italic leading-relaxed">
                  <p>&ldquo;{line1}&rdquo;</p>
                  <p>&ldquo;{line2}&rdquo;</p>
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center">
              <div className="flex items-center gap-2 text-[#DEF2F1]/65">
                <Settings className="h-4 w-4" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em]">Actions</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 border-l border-white/10 pl-5">
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 rounded-md border border-[#3AAFA9]/50 bg-[#3AAFA9]/20 px-3 py-2 text-xs font-semibold text-[#E4FBF8] transition-all duration-200 hover:border-[#3AAFA9]/70 hover:bg-[#3AAFA9]/30"
                title="Copy NPC to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : "Copy NPC"}</span>
              </button>
              {onRollAnother && (
                <button
                  onClick={handleRollAnother}
                  className="flex items-center gap-2 rounded-md border border-white/12 bg-white/10 px-3 py-2 text-xs font-medium text-[#DEF2F1]/85 transition-all duration-200 hover:border-white/20 hover:bg-white/16 hover:text-white"
                  title="Roll another NPC"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Roll Another</span>
                </button>
              )}
              {onClear && (
                <button
                  onClick={onClear}
                  className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-[#DEF2F1]/60 transition-all duration-200 hover:border-white/18 hover:bg-white/10 hover:text-[#DEF2F1]/80"
                  title="Clear NPC"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Clear</span>
                </button>
              )}
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={hideName}
                  onChange={(e) => setHideName(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="flex h-4 w-4 items-center justify-center rounded border border-white/20 bg-white/5 transition-all peer-checked:border-[#3AAFA9]/60 peer-checked:bg-[#3AAFA9]/25 group-hover:border-white/30">
                  {hideName && <Check className="h-3 w-3 text-[#3AAFA9]" />}
                </div>
                <span className="text-[11px] text-[#DEF2F1]/55 transition-colors group-hover:text-[#DEF2F1]/80">
                  Hide name
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
