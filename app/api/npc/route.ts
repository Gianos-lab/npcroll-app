import { NextResponse } from "next/server";
import { getRandomNpc } from "@/lib/npcRepository";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const race = searchParams.get("race");
  const sex = searchParams.get("sex");
  const alignment = searchParams.get("alignment");

  const npc = getRandomNpc({ race, sex, alignment });

  if (!npc) {
    return NextResponse.json(
      { error: "No NPC found matching the provided filters." },
      { status: 404 }
    );
  }

  return NextResponse.json(npc);
}
