"use server";

import { getRandomNpc, type NpcFilters } from "@/lib/npcRepository";

export async function fetchRandomNpc(filters: NpcFilters) {
  const npc = await getRandomNpc(filters);
  return npc;
}
