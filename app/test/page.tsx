// app/test/page.tsx
import { NpcDetailPanel } from "@/components/npc-detail-panel";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-4xl mx-auto">
        <NpcDetailPanel
          name="Tamley Duskpot"
          race="Halfling"
          profession="Farmer"
          morality="Evil"
          description="A smallholder on the edge of the village who always seems to know whose crops failed, whose debts are late, and which fields might change hands soon."
          tagline="The quiet farmer who knows too much."
          look="Sun-browned skin, ink-stained fingers from keeping obsessive notes, and clothes just a little nicer than a farmer should afford."
          personality="Polite, patient, and always listening; never forgets a slight and enjoys watching others squirm."
          history="Once nearly lost the farm to bad harvests and debt. Swore never to be powerless again, and started trading in gossip and quiet leverage."
          voice="Soft, measured, with the occasional dry joke. Rarely raises their voice; lets silence do the work."
          hook="Tamley quietly proposes to 'solve' a neighbour's problem if the PCs help him secure a disputed patch of land in return."
          rumor="Some say Tamley keeps ledgers on everyone in the village—debts, secrets, and favors owed—locked in a chest no one has ever seen open."
          line1="Oh, what a shame about your beans this year… truly. But perhaps I can help you recover."
          line2="Nothing grows in poor soil and poor arrangements, friend. Lucky for you, I know how to fix both."
        />
      </div>
    </div>
  );
}
