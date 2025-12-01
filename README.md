# NPCRoll

**Curated NPC Generator for 5e Campaigns**

NPCRoll is a Next.js web application that provides Game Masters with curated, original, and ready-to-use NPCs for fantasy campaigns. Unlike random generators, NPCRoll uses an internal NPC library, ensuring quality, SRD safety, and instant load times.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 📦 Pack 01: Starting Village

**480 NPCs** ready to use
- **Races**: Human, Halfling
- **Professions**: Innkeeper, Merchant, Priest, Farmer
- **Morality**: Good, Neutral, Evil

---

## 📖 Documentation

- **[Project Documentation](docs/README.md)** — Full project overview, design system, tech stack
- **[Contributing Guidelines](docs/CONTRIBUTING.md)** — How to contribute
- **[License](docs/LICENSE.md)** — Project license
- **[Code of Conduct](docs/CODE_OF_CONDUCT.md)** — Community guidelines

---

## 🏗️ Project Structure

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

---

## 🎨 Design System

**Color Palette**:
- **Dark Blue** (#17252A) — Text and headings
- **Teal** (#3AAFA9) — Primary brand color
- **Dark Teal** (#2B7A78) — Hovers and accents
- **Light Blue** (#DEF2F1) — Backgrounds
- **White** (#FEFFFF) — Main backgrounds

See [docs/README.md](docs/README.md) for full design guidelines.

---

## 🛠️ Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **React 19**
- **Tailwind CSS**
- **shadcn/ui** components
- **Radix UI** primitives
- **Framer Motion** (animations)
- **Sentry** (error tracking)
- **Vercel** (deployment)

---

## 📝 License

See [LICENSE.md](docs/LICENSE.md) for details.

NPCRoll uses only content allowed under the SRD 5.1/5.2 and original text.

Not affiliated with Wizards of the Coast.

---

## 🤝 Contributing

Currently developed and maintained by a single creator.

**External code contributions (PRs) are not being accepted** at this time.

However, feedback and ideas are welcome:
- Use the in-site feedback form: [https://npcroll.com/feedback](https://npcroll.com/feedback)
- Open a GitHub issue with suggestions

See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for more info.

---

## 🗺️ Roadmap

- ✅ Pack 01: Starting Village (480 NPCs)
- ⏳ More races & professions
- ⏳ Optional NPC portraits
- ⏳ Shareable NPC URLs
- ⏳ Additional packs by theme

See [https://npcroll.com/roadmap](https://npcroll.com/roadmap) for full roadmap.

---

## 📧 Contact

Created by **Gianos** to help Game Masters save prep time and enrich their campaigns.

Feedback: [https://npcroll.com/feedback](https://npcroll.com/feedback)

---

**Happy Gaming! 🎲**
