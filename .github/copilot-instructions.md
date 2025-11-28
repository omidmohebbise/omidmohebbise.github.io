# Copilot Instructions for omidmohebbise.github.io

## Project Overview
This is a **Next.js portfolio/educational site** featuring technical content on software development, architecture, cloud platforms, security, and other IT topics. The site serves as both a personal portfolio and a knowledge base with interactive pages.

**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS, React Bootstrap, SASS

## Architecture & Code Organization

### Directory Structure Pattern
- `/src/app/` - Main application routes (each folder = URL path)
- `/src/components/` - Reusable React components
- Each top-level section (e.g., `development/`, `architecture/`) maps to a menu

### Page Structure Pattern
Pages typically follow this pattern:
1. **Tab-based Pages**: Use `useState` with `PageStates` enum to switch between content tabs (Concept, Tools, Libraries)
2. **Single Topic Pages**: Simple pages in subdirectories like `/development/java/concurrency/`
3. **Data-driven Pages**: Some pages load from `.json` or `.js` files (e.g., `cloud/aws/data.js`)

**Example Page Pattern** (see `/src/app/development/page.tsx`):
```tsx
"use client"
const PageStates = { Concept: 1, Tools: 2, Libraries: 3 }
export default function Page() {
  const [pageState, setPageState] = useState(PageStates.Concept)
  // Tab buttons + conditional rendering
}
```

### Component Patterns
- **NavBar** (`src/components/nav-bar/NavBar.tsx`): Uses React Bootstrap `Dropdown` for menu hierarchy
  - Top-level menus: `Dropdown.Toggle`
  - Sub-items: `Dropdown.Item` or `Nav.Link`
  - Styling via `NavBar.module.css` with CSS classes like `.dropdownItem`, `.subSubItem`
  - CSS class convention: `${styles.dropdownItem}` for consistent styling

## Navigation & Menu System

### Adding New Menu Sections
1. **Update NavBar.tsx** with new `<Dropdown>` block following existing pattern
2. **Create directory structure** in `/src/app/` (e.g., `/src/app/data/`)
3. **Create page.tsx** in section root for main landing page
4. **Create subdirectories** for subsections

### Dropdown Menu Example
```tsx
<Dropdown>
  <Dropdown.Toggle as="span" className={styles.dropdownToggle}>
    Menu Name
  </Dropdown.Toggle>
  <Dropdown.Menu className={styles.dropdownMenu}>
    <Dropdown.Item href="/path" className={styles.dropdownItem}>
      Item
    </Dropdown.Item>
    <Dropdown.Item href="/subpath" className={`${styles.dropdownItem} ${styles.subSubItem}`}>
      Nested Item
    </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
```

## Styling Conventions
- **SCSS Files**: Some pages use `.scss` files (`page.scss`) for scoped styling
- **Tailwind + Bootstrap**: Mixed approach with both utility-first (Tailwind) and component-based (React Bootstrap)
- **CSS Modules**: Navigation uses `.module.css` for local scope
- **Row/Column Layout**: Bootstrap grid system (`col-md-6`, `col-6`, etc.)

## Development Commands
```bash
npm run dev        # Start development server (http://localhost:3000)
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
```

## Key Files & Reference Points
- **Navigation Logic**: `src/components/nav-bar/NavBar.tsx` - Main menu configuration
- **Page Template**: `src/app/development/page.tsx` - Example tab-based layout
- **Data-driven Example**: `src/app/cloud/aws/data.js` - External data source pattern
- **Styling**: `src/app/globals.css`, `src/components/nav-bar/NavBar.module.css`

## Content Creation Guidelines
1. **URL Structure**: Keep routes logical (`/development/java/concurrency` for deep topics)
2. **Component Reuse**: Use existing Bootstrap components (Dropdown, Nav, Container)
3. **Content Organization**: Group related topics in subdirectories
4. **Styling**: Use Bootstrap classes primarily; reserve SCSS for complex custom styling
5. **TypeScript**: All `.tsx` files use strict typing

## Common Patterns to Follow
- Import Bootstrap components from `react-bootstrap`
- Use `"use client"` directive for interactive pages with state
- Leverage `styles.className` for CSS Module references
- Structure content in grid layouts (`.row` and `.col-*` classes)
- Keep NavBar.tsx as the single source of truth for navigation

