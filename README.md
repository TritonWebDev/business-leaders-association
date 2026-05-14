# Business Leaders Association Website

Next.js + React + Tailwind site for the Business Leaders Association.

## Setup

Use Node 22 LTS or newer.

```bash
cd bla-website
npm install
npm run dev
```

Open `http://localhost:3000` for the site.

TinaCMS runs with the dev server. Open `http://localhost:3000/admin/index.html` to edit the local JSON content in `content/pages/home.json`.

## Scripts

```bash
npm run dev        # TinaCMS + Next dev server
npm run dev:next   # Next dev server only
npm run build      # Local TinaCMS build + static Next export
npm run typecheck  # TypeScript check
npm run lint       # ESLint
```

The production build is static and outputs to `bla-website/out`.

## Page Sections

The homepage is one scrolling page. Each major section has its own component in `bla-website/components/sections` so developers can work in separate files with fewer merge conflicts.

Suggested split:

- Developer 1: `site-nav.tsx` and `hero-section.tsx`
- Developer 2: `about-section.tsx`
- Developer 3: `membership-section.tsx`
- Developer 4: `faq-section.tsx`, `board-section.tsx`, `gallery-section.tsx`, and `socials-section.tsx`
