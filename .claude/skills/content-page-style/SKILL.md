---
name: content-page-style
description: Canonical markup pattern for content pages (headings, lists, tables) under src/app/**. Use whenever writing or reviewing a knowledge-base page — development, architecture, cloud, ai, security, devops, data, etc. — so text size and structure stay consistent instead of falling back to raw browser defaults.
---

# Content page style

Fixed on 2026-08-07 after the `data/` section had a visible split: some
pages (`role-of-data/*`, `databases-storage/*`) used a polished
card + list-group pattern, others (`data-architecture/*`,
`data-processing/*`, and the `data/page.tsx` tab bodies) used bare
`<h3>`/`<ul>` at raw browser defaults (1rem text, default bullets, no
color token). The user's complaint — "fonts and text size are not
good" — was this split. Fixed by converting every page to the pattern
below. Apply this pattern to *any* new or edited content page in the
site, not just `data/`.

## Page skeleton

Every content page (single-topic or one tab of a tab-based page)
follows this shape:

```tsx
<div className="container py-5">
  <p className="section-label">{Domain}</p>
  <h1 className="section-title">{Page Title}</h1>
  <hr className="section-rule" />

  <div className="card mb-4 shadow-sm">
    <div className="card-body">
      <div className="row">
        <div className="col-md-6">
          <h5>{Topic}</h5>
          {/* content for this topic */}
        </div>
        <div className="col-md-6">
          <h5>{Topic}</h5>
          {/* content for this topic */}
        </div>
      </div>
      {/* additional <div className="row mt-4"> blocks for more topic pairs */}
    </div>
  </div>
</div>
```

- `section-label` / `section-title` / `section-rule` are global classes
  from `src/app/globals.css` — always use them for the page header,
  never inline styles.
- Wrap body content in `.card.mb-4.shadow-sm` > `.card-body`. Don't
  leave `<h3>`/`<ul>` floating directly in a bare `<div className="col-md-6">`
  with no card — that's the exact pattern that was fixed.
- One topic = one `<h5>`, not `<h3>`. `<h3>` reads oversized and
  inconsistent next to every other page's `<h5>` card headers.
- Multiple independent topics stacked in the same column? Give each
  its own `<h5>` (see `data-architecture/core-components`) — don't
  invent a shared wrapper heading. If a column has ONE overarching
  topic with sub-groups, use `<h6 className="mt-3">` for the
  sub-groups (see `data-processing/batch-processing`).
- Rows after the first use `className="row mt-4"` (not `mt-5` — that
  was an inconsistency in the old data-processing pages).

## Lists — the actual font-size fix

Two list styles, chosen by content shape:

1. **Definition-style bullets** (`**Term:** description`) →
   `<ul className="list-group list-group-flush mb-3">` with
   `<li className="list-group-item">`. `.list-group-item` is already
   styled in `globals.css` at `0.875rem` / `var(--color-text-secondary)`
   — this is the single source of truth for list font size, don't
   override it per-page.
2. **Plain-sentence bullets** (no leading term) →
   `<ul className="list-unstyled mb-0">` with `<li className="mb-1">`
   on all but the last item (`mb-0` on the last).
3. **Sequential steps** → `<ol className="list-group list-group-numbered list-group-flush">`
   with `<li className="list-group-item">` — gives numbered steps the
   same boxed, consistent look as definition lists (Bootstrap 5.3
   feature, already in `package.json`).

Belt-and-suspenders: `globals.css` also has a `main ul:not(.list-group) li`
/ `main ol:not(.list-group) li` rule that sizes any *plain* list at
`0.9rem` even if a page forgets to add a class. Don't rely on this as
the primary mechanism — always add the explicit `list-group`/`list-unstyled`
classes above — but it means a forgotten list won't silently regress
to full 1rem browser-default styling.

## Tables

Always wrap in `<div className="table-responsive">`, table itself gets
`className="table table-striped"` (drop `table-sm` — not used
elsewhere, keep tables consistent).

## Architecture-diagram pages

Added 2026-08-07 for `devops/k8s` and `devops/terraform` — the pattern
for a tool/technology page anchored on a provided architecture diagram:

1. **Intro card**: `<h5>What is {Tool}?</h5>` + a short lead paragraph
   + a `list-group` of its defining traits.
2. **Architecture diagram card**: `<h5>{Tool} Architecture</h5>` + one
   lead paragraph, then the diagram as the first `<img>` on the page
   (`className="img-fluid border rounded shadow-sm"`, wrapped in
   `<div className="text-center mb-3">`), then a `list-group`
   translating the diagram's boxes/flow into text — don't make the
   image the only explanation, screen readers and skimmers need the
   list too. Write a real, specific `alt` describing the flow, not
   just the tool name.
3. **Core Concepts/Objects card**: same 2-column themed `list-group`
   pattern as the rest of this skill.
4. **Workflow commands / enumerable standalone items** (e.g. `terraform
   plan`, `kube-apiserver`): use a *grid of individual cards*
   (`col-md-4`/`col-md-6` > `card h-100 shadow-sm` > `card-title` +
   `card-text`) instead of `list-group`. These are named, standalone
   things that deserve their own visual weight — cramming a dozen
   named commands into list-group rows reads worse than a grid. This
   is the one deliberate exception to "always list-group" above.
5. **Use Cases card**: plain `list-group` definition list.
6. **Example card**: a real, runnable snippet in
   `<pre className="bg-light p-3 rounded"><code>{...}</code></pre>`
   (established convention, see `development/java/concurrency/page.tsx`)
   followed by one paragraph walking through it.
7. **Best Practices card**: `list-unstyled` — same as everywhere else.

Image assets: source files land in `src/images/` (not servable);
copy to `public/images/` before referencing with `/images/<name>.png`.

## Prose-only topics (no bullets)

When a topic is genuinely just a paragraph of explanation with nothing
to itemize (see `security/security-areas`), skip the list entirely:
`<h5>{Topic}</h5>` + `<p className="mb-0">{explanation}</p>` in each
column. Don't force a one-item list-group just to "match the pattern."

## Extract a shared component for repeated data-driven markup

Added 2026-08-07 for `cloud/aws`, `cloud/azure`, `cloud/gcp` — they
rendered the same `{title, services: [{title, description, level}]}`
shape with byte-for-byte identical JSX (including a triplicated
`levelDot()` helper and inline-styled colored dots). When 3+ pages
share the same data shape and rendering logic, extract one shared
component (e.g. `src/app/cloud/CloudServiceLevel.tsx` + a CSS module
for anything that was inline-styled) instead of copy-pasting per page.
Each page becomes a thin wrapper: import the shared component, pass
its data, done. This is what "integrated UI" means in practice — one
place to fix a bug or restyle, not three.

## What NOT to change

The top-level tab-switcher buttons on tab-based pages (`PageStates`
pattern — see CLAUDE.md) use inline `style={}` objects with hardcoded
hex colors (`#2563eb`, `#475569`, `#e2e8f0`). This is a pre-existing
convention duplicated identically across `development/page.tsx`,
`architecture/page.tsx`, and `data/page.tsx`. Don't "fix" it as a
side effect of a content pass — that's a separate, larger refactor
(extracting a shared tab-button component/CSS module) that needs its
own explicit go-ahead.

## Reference implementations

- `src/app/data/data-processing/batch-processing/page.tsx` — full
  pattern: lead paragraph, `h6` sub-groups, definition list-group,
  plain list-unstyled, numbered list-group, comparison table.
- `src/app/data/data-architecture/core-components/page.tsx` — simplest
  case: four equal-weight topics, one `h5` + one `list-group` each.
- `src/app/data/role-of-data/why-data-matters/page.tsx` — the
  pre-existing page this pattern was generalized from.
- `src/app/devops/terraform/page.tsx` — full architecture-diagram
  pattern: intro, diagram+summary, core concepts, workflow-command
  card grid, use cases, code example, best practices.
- `src/app/devops/k8s/page.tsx` — same pattern, plus an example of
  mixing card-grids (Control Plane/Node/Addon components) with
  `alert-*` boxes for architecture variations.
- `src/app/security/algorithms/page.tsx` — 6 equal-weight topics as
  3 stacked rows of `h5` + `list-group`, in one outer card.
- `src/app/security/security-areas/page.tsx` — prose-only topics,
  no lists at all.
- `src/app/cloud/CloudServiceLevel.tsx` + `cloud/aws/page.tsx` —
  the shared-component extraction pattern above.

See also [[design-system]] for the site's color tokens, hero pattern,
and spacing rules — this skill covers content-page *body* markup
specifically, that one covers the page shell (nav/hero/cards-in-general).
