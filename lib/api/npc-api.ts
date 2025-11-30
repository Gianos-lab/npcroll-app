import { Npc } from "../types";

type RollNpcParams = {
  race: string;
  sex: string;
  alignment: string;
  packId: string;
};

export async function rollNpcRequest(params: RollNpcParams): Promise<Npc> {
  const searchParams = new URLSearchParams();

  if (params.race !== "Random") searchParams.set("race", params.race);
  if (params.sex !== "Random") searchParams.set("sex", params.sex);
  if (params.alignment !== "Random") {
    searchParams.set("alignment", params.alignment);
  }
  if (params.packId) {
    searchParams.set("packId", params.packId);
  }

  const queryString = searchParams.toString();
  const url = queryString ? `/api/npc?${queryString}` : "/api/npc";

  const start = Date.now();
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    let message = "Failed to fetch NPC.";
    try {
      const data = await res.json();
      if (data?.error) {
        message = data.error;
      }
    } catch {
      // ignore parse errors
    }
    throw new Error(message);
  }

  const npc = (await res.json()) as Npc;

  const MIN_DELAY_MS = 1500;
  const elapsed = Date.now() - start;
  if (elapsed < MIN_DELAY_MS) {
    await new Promise((resolve) =>
      setTimeout(resolve, MIN_DELAY_MS - elapsed)
    );
  }

  return npc;
}
