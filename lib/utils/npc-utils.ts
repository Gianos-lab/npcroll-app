import { Npc } from "../types";

export function copyNpcToClipboard(npc: Npc): Promise<boolean> {
  const textBlock = [
    `${npc.name} ${npc.surname}`,
    `${npc.race} • ${npc.sex} • ${npc.alignment}`,
    "",
    `Description: ${npc.description}`,
    `Personality: ${npc.personality}`,
    `History: ${npc.history}`,
    `Rumor: ${npc.rumor}`,
    `Voice: ${npc.voice}`,
    "",
    "Lines:",
    ...npc.lines.map((l) => `"${l}"`),
  ].join("\n");

  return new Promise((resolve) => {
    try {
      const el = document.createElement("textarea");
      el.value = textBlock;
      el.style.position = "fixed";
      el.style.top = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      resolve(true);
    } catch (err) {
      console.error("Copy failed", err);
      resolve(false);
    }
  });
}

export function getRandomLoadingMessage(messages: string[]): string {
  return messages[Math.floor(Math.random() * messages.length)];
}
