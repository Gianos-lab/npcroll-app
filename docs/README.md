# NPCRoll — Curated NPC Generator for Fantasy TTRPGs
Fully written NPCs with personalities, motivations, rumors, and dialogue lines.  
Instant, system-agnostic, and ready for any fantasy campaign.

## Live Demo
https://npcroll.com

## Project Overview

NPCRoll is a Next.js web application that provides Game Masters with curated and fully written NPCs for fantasy tabletop campaigns.  
Unlike random generators, NPCRoll relies on an internal library of handcrafted characters created through structured data design, prompt-engineering workflows, and manual review.

Every NPC is cohesive and ready for play: personality, motivations, history, voice, dialogue lines, and one hook or rumor that can support improvisation or session prep.

NPCs are organized into thematic Packs. Each Pack represents a small slice of a world with its own races, professions, tones, and narrative focus.  
As the project evolves, new Packs introduce new themes and regions.

## Why NPCRoll is Different

Most NPC generators combine random traits. NPCRoll focuses on delivering characters that feel consistent and useful at the table.

- Curated content: NPCs are internally structured and narratively coherent  
- System-agnostic: works with D&D 5e, Pathfinder, OSR, or any fantasy ruleset  
- Instant prep: each NPC includes hooks, behavior, and two short dialogue lines  
- Extensible design: new Packs can add regions, tones, races, or professions

## Current Packs Available

### Pack 01 — Starting Village
A grounded rural setting suited for early-level adventures.

Includes:
- Races: Human, Halfling  
- Professions: Innkeeper, Merchant, Priest, Farmer  
- Tone: grounded, humble, community-focused  
- Use cases: village introductions, side quests, moral dilemmas, slice-of-life scenes

Pack 01 establishes the baseline tone and structure of the NPCRoll library.  
Future Packs will expand the world with new cultures and themes.

## Key Features

### Fully Written NPCs
Each character includes:
- Personality and behavior  
- Motivations and history  
- Roleplaying voice  
- Physical description  
- One hook  
- One rumor  
- Two short dialogue lines  

NPCs are coherent and immediately usable.

### Curated Packs
NPCs are grouped into thematic Packs with their own races, professions, moralities, and tones.  
This keeps regions internally consistent and easier to improvise around.

### System-Agnostic
No system-specific mechanics.  
NPCs work for any fantasy tabletop game.

### Instant Generation
NPCs come directly from a curated internal library.  
No load times and no unnecessary API calls.

### Smart Filtering
Filter by race, profession, or morality.  
Designed to be fast during live sessions.

### Extensible Architecture
New Packs integrate cleanly without modifying core systems.

### Responsive Interface
Dark-glass UI designed to work on desktop, tablet, and mobile.

### Privacy-First
No accounts, no trackers, no ads.  
The only data collected is optional feedback.

## Tech Stack

NPCRoll uses a modern and maintainable web stack.

### Frontend
- Next.js 16 (App Router, Turbopack) for routing and server components  
- React 19  
- Tailwind CSS 4 for styling  
- shadcn/ui and Radix UI for accessible components  
- Framer Motion for transitions and animations

### Data and Content
- Internal JSON libraries for curated NPC content  
- Schema-driven generation  
- Pack-based segmentation for future expansion

### Tooling and Quality
- TypeScript  
- ESLint and Prettier  
- Sentry for optional error monitoring  
- Vercel for hosting and deployment

### Development Workflow
- AI-assisted development ("vibe coding")  
- Internal audit prompts for security and code quality  
- Structured documentation system for maintainability

## Development Setup

### Prerequisites
- Node.js 20 or later  
- npm, pnpm, or yarn (examples use npm)  
- A local clone of this repository

### 1. Clone the repository
```bash
git clone https://github.com/Gianos-lab/npcroll-app.git
cd npcroll-app
```

### 2. Install dependencies
npm install

### 3. Environment variables
Copy the example env file:
cp .env.example .env.local

Then fill in any required values listed in .env.example.
.env.local is not committed to Git and stays on your machine.

### 4. Run the development server
npm run dev

The app will be available at:
http://localhost:3000

### 5. Useful scripts
```bash
npm run dev      # start development server
npm run lint     # run linting
npm run build    # production build
```

## Project Structure

```
npcroll-app/
├── app/                    # Next.js app directory (pages, API routes, layouts)
│   ├── api/               # API endpoints
│   ├── feedback/          # Feedback page
│   ├── legal/             # Legal/privacy page
│   └── roadmap/           # Roadmap page
├── components/             # React components
│   ├── ui/                # Reusable UI components (shadcn/Radix)
│   └── ...                # Feature components
├── lib/                    # Utilities and shared logic
│   ├── npcRepository.ts   # NPC data access layer
│   ├── types.ts           # TypeScript types
│   └── utils.ts           # Helper functions
├── docs/                   # Public documentation
├── public/                 # Static assets (images, icons)
└── scripts/                # Build utilities
```

## Legal & Licensing
NPCRoll uses only content allowed under the SRD 5.1/5.2 and original text.

Not affiliated with Wizards of the Coast

No copyrighted lore, names, items, spells, or settings

All narrative content is original

Full legal details:
https://npcroll.com/legal

## Feedback

If you want to suggest features or report bugs, use the website form:
https://npcroll.com/feedback

You can also open a GitHub issue.

## Roadmap
- More races and professions
- Optional NPC portraits
- Shareable NPC URLs
- Additional Packs
- Improved mobile UX

## Credits
Created by Gianos to help Game Masters save prep time and enrich their campaigns.