
# NPCRoll
**Curated NPC Generator for 5e Campaigns**

NPCRoll is a Next.js web application that provides Game Masters with curated, original, and ready-to-use NPCs for fantasy campaigns. Unlike random generators, NPCRoll uses an internal NPC library, ensuring quality, SRD safety, and instant load times.

---


## Project Overview

NPCRoll is designed to deliver high-quality, filterable, and instantly available NPCs. NPCs are organized into thematic "Packs," each containing races, professions, morality, description, motivation, history, voice, two dialogue lines, and one rumor. The library expands over time with new packs.

**Pack 01** (Starting Village):
- Races: Human, Halfling
- Professions: Innkeeper, Merchant, Priest, Farmer

The web generator filters and serves NPCs, simulating a live generator experience without runtime complexity.

---


## Design & Color Palette

Main palette ("Clean and Modern"):

| Color        | Hex      | Recommended Use |
|--------------|----------|-----------------|
| Dark Blue    | #17252A  | Main text, headings, important elements |
| Dark Teal    | #2B7A78  | Button hovers, interactive elements, secondary accents |
| Teal         | #3AAFA9  | Primary color (brand), links, buttons, accents |
| Light Blue   | #DEF2F1  | Secondary backgrounds, cards, soft elements |
| White        | #FEFFFF  | Main backgrounds, text on dark backgrounds |

CSS Example:
```css
.my-element {
  color: var(--color-dark);           /* Dark blue */
  background: var(--color-teal);      /* Teal */
  border-color: var(--color-teal-dark); /* Dark teal */
}
```

Tailwind Example:
```jsx
<div className="bg-npc-teal text-npc-white">Hello!</div>
<button className="bg-npc-teal hover:bg-npc-teal-dark">Click me</button>
<div className="bg-npc-light text-npc-dark">
```

---

## Tech Stack  
- **Next.js 14 (App Router)**  
- **TypeScript**  
- **React**  
- **Custom CSS**  
- **Vercel** (hosting)  
- **FormSubmit** (feedback)  
- Mobile-first design  

---

## Project Structure

app/
├ page.tsx → Main NPC generator
├ feedback/ → Feedback form
├ thanks/ → Feedback success page
└ legal/ → Terms, Privacy, SRD Credits, Cookies

public/
├ og-cover.png → OpenGraph image
├ favicon.* → App icons
└ logo.svg → Branding assets

---

## Legal & Licensing
NPCRoll uses only content allowed under the SRD 5.1/5.2 and original text.

Not affiliated with Wizards of the Coast

No copyrighted lore, names, items, spells, or settings

All narrative content is original

Full legal details:
https://npcroll.com/legal

---

## Contributing

NPCRoll is currently developed and maintained by a single creator.  
For this reason, **external code contributions (PRs) are not being accepted** at this time.

However, feedback and ideas are always welcome!

You can help by sharing:

- Feature suggestions  
- UI/UX ideas  
- Bug reports  
- Accessibility tips  
- Requests for new filters or pack themes  

Please use the in-site feedback form or open a GitHub issue.
👉 https://npcroll.com/feedback  

---

## Feedback

If you want to suggest features or report bugs, use the website feedback form:  
https://npcroll.com/feedback  

Or open a GitHub issue with your idea.

---

Roadmap
 More races & professions

 Optional NPC portraits

 Shareable NPC URLs

 NPC Packs by different criteria

 Improved mobile UX

---

Credits
Created by Gianos to help Game Masters save prep time and enrich their campaigns.