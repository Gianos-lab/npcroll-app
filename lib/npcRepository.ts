// NPC Data URL from Vercel Blob Storage
const NPC_DATA_URL = "https://3vo03d27strgbkim.public.blob.vercel-storage.com/pack01_fv.json";

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
let npcs: Npc[] = [];
let dataLoaded = false;

async function loadNpcData(): Promise<void> {
  if (dataLoaded) return;
  
  const response = await fetch(NPC_DATA_URL, { next: { revalidate: 3600 } });
  const rawNpcs = await response.json() as RawNpc[];
  
  npcs = rawNpcs.map((raw) => ({
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
  
  dataLoaded = true;
}

export type NpcFilters = {
  race?: string | null;
  morality?: string | null;
  profession?: string | null;
};

function matchesFilter(value: string, filter?: string | null) {
  if (!filter || filter === "Random") return true;
  return value.toLowerCase() === filter.toLowerCase();
}

export async function getFilteredNpcs(filters: NpcFilters): Promise<Npc[]> {
  await loadNpcData();
  return npcs.filter((npc) => {
    if (!matchesFilter(npc.race, filters.race)) return false;
    if (!matchesFilter(npc.morality, filters.morality)) return false;
    if (!matchesFilter(npc.profession, filters.profession)) return false;
    return true;
  });
}

export async function getRandomNpc(filters: NpcFilters): Promise<Npc | null> {
  await loadNpcData();
  const pool = await getFilteredNpcs(filters);
  if (pool.length === 0) {
    return null;
  }
  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}

/**
 * Metadati per popolare i dropdown in base al contenuto reale del JSON
 */
export async function getAllRaces(): Promise<string[]> {
  await loadNpcData();
  const races = new Set<string>();
  for (const npc of npcs) {
    races.add(npc.race);
  }
  return Array.from(races).sort();
}

export async function getAllMoralities(): Promise<string[]> {
  await loadNpcData();
  const moralities = new Set<string>();
  for (const npc of npcs) {
    moralities.add(npc.morality);
  }
  return Array.from(moralities).sort();
}

export async function getAllProfessions(): Promise<string[]> {
  await loadNpcData();
  const professions = new Set<string>();
  for (const npc of npcs) {
    professions.add(npc.profession);
  }
  return Array.from(professions).sort();
}


