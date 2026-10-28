# Algorithms & Math Visualizers — Product + Design Spec

## 1. Problem & goal (PO view)

The site is a personal knowledge base. Text and bullet lists explain *what* an algorithm is,
but not *how it behaves over time* — which is the part that actually builds understanding.
Same for the math section (derivatives, matrix transforms, distributions).

**Goal:** a reader should be able to open any algorithm page, press Play, and within a minute
understand (a) what it does step by step, (b) why it costs what it costs, (c) when to use it.

**Primary user:** me (and visitors) revising or learning fundamentals — "I know the name, I want
to *see* it". Secondary: interview prep (complexity, trade-offs).

**Non-goals (v1):** user-supplied code execution, accounts/progress tracking, backend,
animation of every algorithm ever. No new npm dependencies (static export, small bundle).

## 2. Information architecture

- New Data-menu item **Algorithms** → `/data/algorithms` (overview, grouped by category + level)
- One page per algorithm → `/data/algorithms/<slug>` (single dynamic route, static export)
- Navigation is generated from one metadata registry (`components/algorithms/meta.ts`) so the
  menu, overview, and pages never drift (same idea as `musicTree`).

Categories × difficulty ladder (Basic → Intermediate → Advanced):

| Category | v1 (built) | Roadmap |
|---|---|---|
| Searching | Linear (Basic), Binary (Basic) | Jump, Interpolation, Hash lookup |
| Sorting | Bubble, Selection, Insertion (Basic) · Merge, Quick (Intermediate) | Heap, Counting/Radix (Adv.) |
| Graph | BFS, DFS (Intermediate) · Dijkstra (Advanced) | Bellman-Ford, A*, Topological sort, MST (Kruskal/Prim) |
| Dynamic programming | — | Fibonacci memo, Knapsack, LCS, Edit distance (grid visualizer) |
| Trees / Strings / Recursion | — | BST ops, Tries, KMP, Backtracking (N-Queens) |

## 3. Page template (every algorithm)

1. Header: label · title · level badge · category
2. **Summary** (1–2 sentences) + **How it works** (numbered steps)
3. **Visualizer** (the main event — see §4)
4. **Complexity** table: best / average / worst / space (+ stable / in-place for sorts)
5. **When to use** and **Watch out for** (two columns)
6. Prev/next link inside the category (keeps learners moving up the ladder)

Follows existing `content-page-style` + `design-system` rules (cards, light surfaces, tokens).

## 4. Visualizer UX spec

Layout: visualization (left, ~60%) · annotated code (right, ~40%); stacks on mobile.

Controls (always visible, one row): **Reset · Step back · Play/Pause · Step forward · Speed ·
scrubber** + input row: **Shuffle / Size** (array algos), **Target** (searches), **Start node**
(graphs).

Rules learned from good algorithm visualizers:
- **Narrate every step**: a one-line message under the canvas ("Compare 14 and 37 — swap?"),
  announced via `aria-live`, so the animation is never a mystery.
- **Code ↔ animation sync**: the line currently executing is highlighted in the code pane.
- **Step back + scrubber**: learners need to re-watch one step; so all frames are precomputed
  (pure functions → `Frame[]`), making back/scrub free and the logic testable.
- **Color has one meaning everywhere** (legend always shown): amber = comparing, red = swap/write,
  green = found/sorted, blue = active, purple = pivot, soft blue = processed, cyan = frontier,
  grey = ruled out. Never rely on color alone: pointers (`i`, `lo`, `mid`, `hi`) are text labels.
- Data structures that matter are shown explicitly (queue for BFS, call stack for DFS,
  priority queue for Dijkstra; distance labels on nodes).
- Respect `prefers-reduced-motion` (no CSS transitions; stepping still works).
- Keyboard-reachable buttons with `aria-label`s; sensible defaults so the page is useful before
  any interaction (deterministic initial data → no hydration mismatch).

## 5. Technical design

```
components/algorithms/
  types.ts            Frame = ArrayFrame | GraphFrame, Tone, AlgorithmInput
  meta.ts             serializable metadata + code lines (server + nav safe)
  runners.ts          slug → generator (client only)
  generators/         search.ts, sorting.ts, graph.ts — pure fns: input → Frame[]
  AlgorithmPlayer.tsx controls, state, playback loop (client)
  ArrayView.tsx       bars + pointers      GraphView.tsx  SVG graph + structure panel
app/data/algorithms/  page.tsx (overview), [slug]/page.tsx (template, generateStaticParams)
```
Adding an algorithm = one generator + one meta entry. A new *visual form* (e.g. DP grid) =
one new `Frame` kind + one view component.

## 6. Math visualizers (same philosophy: manipulate → see)

| Page | Component | What you learn |
|---|---|---|
| Calculus | Tangent Explorer | derivative = slope of tangent; drag x, switch function |
| Linear Algebra | Transform Explorer | a matrix is a transformation; determinant = area scale |
| Probability & Stats | Normal Explorer | μ/σ shape the bell curve; 68–95–99.7 rule as shaded area |
| Roadmap | Limit/ε-δ, Riemann sums, Bayes natural-frequency, vector dot product | |

## 7. Acceptance criteria (v1)

- Data menu has **Algorithms** with 10 entries; overview page lists them by category with level.
- Each algorithm page plays, pauses, steps forward/back, scrubs, resets, and changes speed.
- Code highlight and message match the frame at every step; final frame states the result.
- Sorting algorithms end fully sorted for any array (verified by script); searches report
  found/not-found correctly; Dijkstra distances match the known answer.
- `npm run build` and `npm run lint` pass; mobile width has no horizontal scroll.
