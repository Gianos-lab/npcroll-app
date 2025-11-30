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
  hook: string;
  lines: string[];
};

export type PackStatus = "available" | "coming_soon";

export type Pack = {
  id: string;
  name: string;
  tagline: string;
  meta: string;
  status: PackStatus;
};
