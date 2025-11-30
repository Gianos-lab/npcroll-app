// lib/downloadNpc.ts
"use client";

import type { Npc } from "@/lib/npcRepository";

function triggerDownload(content: BlobPart, filename: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}

function buildNpcTxt(npc: Npc): string {
  const lines: string[] = [];

  lines.push(`${npc.name} ${npc.surname}`);
  lines.push(`${npc.race} • ${npc.sex} • ${npc.alignment}`);
  lines.push("");
  lines.push(`Description: ${npc.description}`);
  lines.push(`Personality: ${npc.personality}`);
  lines.push(`History: ${npc.history}`);
  lines.push(`Rumor: ${npc.rumor}`);
  lines.push(`Voice: ${npc.voice}`);
  lines.push("");
  lines.push("Lines:");
  npc.lines.forEach((l) => lines.push(`- \"${l}\"`));

  return lines.join("\n");
}

function safeFilename(npc: Npc, ext: string): string {
  // fallback se manca id
  const base =
    npc.id ||
    `${npc.name}-${npc.surname}`
      .toLowerCase()
      .replace(/[^a-z0-9-_]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

  return `npc-${base || "unknown"}.${ext}`;
}

export function downloadNpcAsTxt(npc: Npc) {
  const content = buildNpcTxt(npc);
  const filename = safeFilename(npc, "txt");
  triggerDownload(content, filename, "text/plain;charset=utf-8");
}

export function downloadNpcAsJson(npc: Npc) {
  const json = JSON.stringify(npc, null, 2);
  const filename = safeFilename(npc, "json");
  triggerDownload(json, filename, "application/json;charset=utf-8");
}
