# Nebula Conf 2026

Production-ready Next.js 14 (App Router) website for a fictional AI & design conference in Lisbon, May 14–16, 2026.

## Stack
- Next.js 14 + TypeScript
- Tailwind CSS
- HeroUI (Navbar, Tabs, Accordion, Card, Button)
- Framer Motion
- Aceternity-style components: Spotlight, BackgroundBeams, TextGenerate, MovingBorder
- Lucide icons

## Getting started
```bash
npm install   # or pnpm / bun / yarn
npm run dev
```
Then open http://localhost:3000.

## Build
```bash
npm run build
npm start
```

## Structure
- `app/` — App Router entrypoint (layout, providers, page)
- `components/sections/` — page sections (Hero, Speakers, Schedule, Venue, Tickets, FAQ, Footer)
- `components/aceternity/` — Aceternity-style animated primitives
- `lib/utils.ts` — `cn()` helper

Dark mode is the only mode. Fonts are loaded via `next/font` (Inter + Instrument Serif).
