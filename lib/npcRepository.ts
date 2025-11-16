import npcData from "@/data/npcs.json";

export type Npc = {
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

const npcs = npcData as Npc[];

export type NpcFilters = {
  race?: string | null;
  sex?: string | null;
  alignment?: string | null;
};

function matchesFilter(value: string, filter?: string | null) {
  if (!filter || filter === "Random") return true;
  return value.toLowerCase() === filter.toLowerCase();
}

export function getFilteredNpcs(filters: NpcFilters): Npc[] {
  return npcs.filter((npc) => {
    if (!matchesFilter(npc.race, filters.race)) return false;
    if (!matchesFilter(npc.sex, filters.sex)) return false;
    if (!matchesFilter(npc.alignment, filters.alignment)) return false;
    return true;
  });
}

export function getRandomNpc(filters: NpcFilters): Npc | null {
  const pool = getFilteredNpcs(filters);
  if (pool.length === 0) {
    return null;
  }
  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}

/**
 * Metadati per popolare i dropdown in base al contenuto reale del JSON
 */
export function getAllRaces(): string[] {
  const races = new Set<string>();
  for (const npc of npcs) {
    races.add(npc.race);
  }
  return Array.from(races).sort();
}

export function getAllSexes(): string[] {
  const sexes = new Set<string>();
  for (const npc of npcs) {
    sexes.add(npc.sex);
  }
  return Array.from(sexes).sort();
}

export function getAllAlignments(): string[] {
  const alignments = new Set<string>();
  for (const npc of npcs) {
    alignments.add(npc.alignment);
  }
  return Array.from(alignments).sort();
}


