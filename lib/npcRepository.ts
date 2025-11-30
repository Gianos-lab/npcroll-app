import npcData from "@/data/pack01/pack01_fv.json";

type RawNpc = {
  id: string;
  pack_id: string;
  race: string;
  profession: string;
  morality: string;
  status: string;
  name: string;
  surname: string;
  description: string;
  look: string;
  personality: string;
  hook: string;
  history: string;
  voice: string;
  line_1: string;
  line_2: string;
  rumor: string;
};

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
  rumor?: string;
};

// Transform raw data to match expected format
const rawNpcs = npcData as RawNpc[];
const npcs: Npc[] = rawNpcs.map((raw) => ({
  id: raw.id,
  race: raw.race,
  sex: "Male", // Default - we don't have this field in pack01
  alignment: raw.morality,
  name: raw.name,
  surname: raw.surname,
  description: raw.description,
  personality: raw.personality,
  history: raw.history,
  motivation: raw.hook, // Using hook as motivation
  voice: raw.voice,
  rumor: raw.rumor,
  hooks: [raw.hook],
  lines: [raw.line_1, raw.line_2].filter(Boolean),
}));

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

export function getAllProfessions(): string[] {
  const professions = new Set<string>();
  for (const raw of rawNpcs) {
    professions.add(raw.profession);
  }
  return Array.from(professions).sort();
}


