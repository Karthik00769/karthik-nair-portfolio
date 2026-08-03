# Karthik Nair — Portfolio

A one-page, production-quality portfolio built with Next.js 15 (App Router),
TypeScript, Tailwind CSS, and Framer Motion. Content is sourced entirely from
Karthik's resume — see `lib/data.ts` for the single source of truth.

## Tech stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS, hand-rolled shadcn/ui-style primitives (`components/ui`)
- **Animation:** Framer Motion (fade/slide reveals only, respects `prefers-reduced-motion`)
- **Icons:** Lucide React
- **Fonts:** Geist Sans / Geist Mono (via the `geist` package)
- **Deployment:** Vercel

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you deploy

1. **Add your resume PDF.** Drop the actual file at `public/resume.pdf` —
   every "Download Resume" button links to `/resume.pdf`. Delete
   `public/README-ADD-RESUME.txt` once done.
2. **Update the canonical URL.** `app/layout.tsx`, `app/robots.ts`, and
   `app/sitemap.ts` currently point at `https://karthiknair.dev` as a
   placeholder — replace with your real production domain.
3. **Wire up project links.** In `lib/data.ts`, each entry in `projects` has
   optional `github` and `demo` fields. Fill these in with real repo/demo
   URLs once available; until then, project "Code" buttons fall back to the
   main GitHub profile and "Live Demo" buttons are hidden.

Real product screenshots for ProjectForge, SmartSpend, and SentinelRoute are
already included at `public/projects/` and rendered inside the
`BrowserFrame` component (`components/browser-frame.tsx`) — no placeholders
to swap out. If you update a product's UI, just replace the corresponding
PNG and adjust `width`/`height` in `lib/data.ts` to match the new image's
actual pixel dimensions.

## Project structure

```
app/
  layout.tsx        Root layout: fonts, global SEO metadata
  page.tsx           Assembles all sections for the single page
  globals.css        Tailwind layers + base styles
  robots.ts           robots.txt via Next metadata API
  sitemap.ts         sitemap.xml via Next metadata API

components/
  navbar.tsx          Sticky nav with mobile menu
  footer.tsx
  section-heading.tsx Shared eyebrow/heading pattern
  reveal.tsx          Minimal Framer Motion scroll-reveal wrapper
  browser-frame.tsx    Browser-chrome mockup wrapping real product screenshots
  ui/                 button, badge, card primitives
  sections/           hero, about, philosophy, experience, projects,
                      achievements, skills, github, contact

lib/
  data.ts             All resume-sourced content (single source of truth)
  utils.ts            `cn()` class-merging helper

types/                (reserved for shared types as the project grows)
public/
  projects/           Real product screenshots (ProjectForge, SmartSpend,
                      SentinelRoute) shown in the Featured Projects section
  resume.pdf          Add your resume here (see below)
```

## Editing content

All copy, experience, projects, achievements, and skills live in
`lib/data.ts` as typed exports. Update facts there; every section
component reads from this file, so there is no duplicated content to
keep in sync.

## Deploying to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset is auto-detected as Next.js (see `vercel.json`).
4. Deploy — no environment variables are required.

## Performance & accessibility notes

- All animations are fade/slide only, gated behind
  `prefers-reduced-motion`.
- Visible focus rings on all interactive elements.
- GitHub stats/contribution images are loaded via `next/image` with
  `unoptimized` (they're already server-rendered SVG/PNG from GitHub's
  own services) and lazy-load by default.
- Semantic headings (`h1`–`h3`) and landmark elements (`header`, `main`,
  `footer`, `section`) throughout for screen readers and SEO.
