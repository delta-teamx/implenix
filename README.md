# Implenix

We Automate the Call. You Close the Deal.

Production website for [Implenix](https://implenix.net) — AI receptionist and automated calling systems for local businesses.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- Contentlayer (MDX)
- next-seo + next-sitemap
- React Hook Form + Zod
- Lucide React

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

`postbuild` runs `next-sitemap` to generate `/public/sitemap.xml` and `/public/robots.txt`.

## Content

MDX content lives in `/content`:

- `industries/` — 8 industry SEO pages
- `case-studies/` — case study templates
- `docs/` — full documentation tree
- `blog/` — blog posts
- `resources/` — guides and playbooks

## Pre-launch checklist

Search the codebase for `PLACEHOLDER` and `REPLACE` to find every spot that needs real content, integrations, or logos before going live.

Tracking IDs in `/app/layout.tsx`:

- `GTM-XXXXXXX`
- `000000000000000` (Meta Pixel)
- `AW-XXXXXXXXXX` (Google Ads)
