---
name: design-system
description: Design system rules for this portfolio site — page shell order, hero/header styling, color tokens, spacing, and card conventions. Use whenever adding or restyling a page, header, hero, or top-of-page section, or when picking colors for a new component.
---

# Design system

Rules learned from the 2026-08-05 header/hero redesign. Follow these for any
new page, header, or section rather than re-deriving style choices from
scratch.

## Page shell order

`src/app/layout.tsx` renders, in this order: `<NavBar />`, `<Header />`,
`{children}`, `<Footer />`. **NavBar is always the first element** — it is
the sticky top-of-page layer (`position: sticky; top: 0`). Never put a hero
or banner above it.

## No dark hero blocks

Do not use dark gradient backgrounds (navy, indigo, black) for hero/header
sections. The user explicitly rejected this pattern for being too heavy and
"not my favorite blue." Headers and heroes use the same light surface as the
rest of the page:

```css
background: var(--color-bg);           /* #f8fafc — matches <body> */
border-bottom: 1px solid var(--color-border);
```

Text/UI inside a hero use the same tokens as body content (`--color-text`,
`--color-text-secondary`, `--color-text-muted`) — not white/light-gray
values tuned for a dark background.

## Color tokens

Defined in `src/app/globals.css` under `:root`. Always reference these
variables instead of hardcoding hex values:

- `--color-primary` (#2563eb) / `--color-primary-dark` / `--color-primary-light`
  / `--color-primary-subtle` — the one accent blue used for CTAs, links,
  active nav state. This accent stayed intentionally; only the dark hero
  *background* was rejected, not the accent color.
- `--color-bg` (#f8fafc) — page/hero background.
- `--color-surface` (#ffffff) — cards, buttons, icon chips.
- `--color-border` / `--color-border-strong` — card and input borders.
- `--color-text` / `--color-text-secondary` / `--color-text-muted` — text
  hierarchy, darkest to lightest.
- `--shadow-xs/sm/md/lg`, `--radius-sm/md/lg/xl/full` — reuse, don't
  reinvent.

## Card pattern

Light surface, not glassmorphism. No `backdrop-filter` blur / translucent
white-on-dark tricks (that pattern was removed from the stats card and
social icons):

```css
background: var(--color-surface);
border: 1px solid var(--color-border);
border-radius: 16px;
box-shadow: var(--shadow-sm);
```

## Spacing — keep it compact

Prefer tight vertical rhythm over generous hero-style padding:

- Section/hero padding: ~2–2.25rem top/bottom (not 4rem+).
- Gaps between stacked elements (badge → heading → subtitle → body →
  actions): 0.35rem–1.25rem, not 1.5–2rem+.
- This applies especially to any above-the-fold summary/intro content —
  keep it scannable in one viewport alongside the nav bar.

## Reference implementation

`src/components/header/Header.tsx` + `Header.module.css` is the canonical
example of all the rules above — check there first before styling a new
top-of-page section.
