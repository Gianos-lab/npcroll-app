import { Pack } from "./types";

export const PACKS: Pack[] = [
  {
    id: "pack_01",
    name: "Starting Village Pack",
    tagline: "For low-level adventures in small towns and crossroads.",
    meta: "480 NPCs · 2 races · 4 professions",
    status: "available",
  },
  {
    id: "wilderness",
    name: "Wilderness Pack",
    tagline: "Rangers, trappers, hermits and strange voices in the trees.",
    meta: "Coming soon",
    status: "coming_soon",
  },
  {
    id: "city",
    name: "City & Market Pack",
    tagline: "Merchants, guards, informants and street mystics.",
    meta: "Coming soon",
    status: "coming_soon",
  },
];

export const LOADING_MESSAGES = [
  "Consulting the ancient grimoire…",
  "Rolling behind the DM screen…",
  "Finding someone interesting at the tavern…",
  "Bribing goblins for extra info…",
  "Brewing a fresh batch of trouble…",
  "Asking the barkeep about the regulars…",
];
