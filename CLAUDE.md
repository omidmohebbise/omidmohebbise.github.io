# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Build static export to ./out/
npm run lint     # Run ESLint
```

There are no tests. Build output goes to `./out/` (static export — `next.config.mjs` sets `output: "export"`). Pushes to `main` trigger automatic deployment to GitHub Pages via `.github/workflows/nextjs.yml`.

## Architecture

This is a Next.js 14 personal portfolio/knowledge-base site using the App Router. It has no backend — every page is a static React component.

**Tech stack:** Next.js 14, React 18, TypeScript, React Bootstrap, Tailwind CSS, SASS

### Global shell

`src/app/layout.tsx` wraps every page with three fixed components: `<Header>`, `<NavBar>`, and `<Footer>`. The root container is a Bootstrap `container` div.

### Routing

Each folder under `src/app/` maps 1:1 to a URL path. The main content domains are:

- `/development/` — Java (versions, concurrency, security), Spring
- `/architecture/` — software, data, enterprise, integration, security, DevOps, big-data, AI/ML
- `/cloud/` — AWS, Azure, GCP, service mapping
- `/ai/` — main concepts, tools, libraries
- `/security/` — key concepts, areas, web security, algorithms, frameworks
- `/devops/` — Kubernetes
- `/data/` — role of data, databases/storage, data processing, data architecture

### Page patterns

**Tab-based pages** (e.g. `src/app/development/page.tsx`): use `"use client"` + `useState` with a `PageStates` enum (`{ Concept: 1, Tools: 2, Libraries: 3 }`). Tabs are rendered by mapping `Object.keys(PageStates)` and each tab returns JSX from a local getter function.

**Single-topic pages**: plain server components under a subdirectory (e.g. `src/app/development/java/concurrency/thread-local/page.tsx`). No state needed.

**Data-driven pages**: content loaded from a co-located `data.js` or `data.json` file (e.g. `src/app/cloud/aws/data.js`). Data files export plain JS objects/arrays; the page component maps over them.

### Navigation

`src/components/nav-bar/NavBar.tsx` is the **single source of truth** for all navigation. It uses React Bootstrap `<Dropdown>` components. Two indentation levels exist:
- `styles.dropdownItem` — top-level section header within a dropdown
- `styles.dropdownItem + styles.subSubItem` — nested sub-page link

When adding a new page, always add the corresponding `<Dropdown.Item>` entry to `NavBar.tsx`.

### Styling conventions

- Bootstrap grid (`row`, `col-md-6`, etc.) for layout
- CSS Modules (`.module.css`) for NavBar scoped styles
- SCSS (`page.scss`) for page-specific overrides — imported directly in the page file
- Tailwind available but used sparingly alongside Bootstrap
