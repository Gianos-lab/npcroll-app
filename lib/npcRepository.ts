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
  motivation: string;
  history: string;
  voice: string;
  line_1: string;
  line_2: string;
  rumor: string;
  tagline?: string;
};

// NPC type matching what the frontend card expects
export type Npc = {
  id: string;
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
};

// Transform raw data to match expected format
const rawNpcs = npcData as RawNpc[];
const npcs: Npc[] = rawNpcs.map((raw) => ({
  id: raw.id,
  name: `${raw.name}${raw.surname ? ` ${raw.surname}` : ''}`,
  race: raw.race,
  profession: raw.profession,
  morality: raw.morality as "Good" | "Neutral" | "Evil",
  description: raw.description,
  tagline: raw.tagline,
  look: raw.look,
  personality: raw.personality,
  history: raw.history,
  voice: raw.voice,
  motivation: raw.motivation,
  rumor: raw.rumor,
  line1: raw.line_1,
  line2: raw.line_2,
}));

export type NpcFilters = {
  race?: string | null;
  morality?: string | null;
  profession?: string | null;
};

function matchesFilter(value: string, filter?: string | null) {
  if (!filter || filter === "Random") return true;
  return value.toLowerCase() === filter.toLowerCase();
}

export function getFilteredNpcs(filters: NpcFilters): Npc[] {
  return npcs.filter((npc) => {
    if (!matchesFilter(npc.race, filters.race)) return false;
    if (!matchesFilter(npc.morality, filters.morality)) return false;
    if (!matchesFilter(npc.profession, filters.profession)) return false;
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

export function getAllMoralities(): string[] {
  const moralities = new Set<string>();
  for (const npc of npcs) {
    moralities.add(npc.morality);
  }
  return Array.from(moralities).sort();
}

export function getAllProfessions(): string[] {
  const professions = new Set<string>();
  for (const npc of npcs) {
    professions.add(npc.profession);
  }
  return Array.from(professions).sort();
}


