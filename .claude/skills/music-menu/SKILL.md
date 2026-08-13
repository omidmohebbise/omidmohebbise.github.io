---
name: music-menu
description: Add and maintain the Music knowledge-base section in an existing website. Use when implementing the Music main-menu item, recursive/deep music submenus, music content pages, breadcrumbs, related-content links, or the music information architecture. Preserve the existing site's architecture and styling.
---

# Music Menu Skill

You are working on an **existing website**, not building a new website.

## Core rule

Preserve the existing application.

Before modifying code:
1. Inspect the framework and package manager.
2. Inspect the main navigation.
3. Inspect routing.
4. Inspect styling/design components.
5. Inspect the existing content/data architecture.
6. Reuse existing components and conventions.

Do not replace working architecture without a compelling reason.

## Feature

Add/maintain a top-level **Music** section.

The Music section is a long-term personal knowledge base for a musician who plays:
- Tar
- Setar
- Santoor
- Piano
- Voice

It covers:
- Music fundamentals
- Notes and notation
- Rhythm
- Scales and modes
- Intervals
- Harmony
- Melody
- Persian music
- Dastgah / Radif / Gusheh / Avaz
- Instruments
- Music styles
- Technique
- Ear training
- Improvisation
- Practice
- Repertoire
- Musicians and composers
- Composition
- Performance
- Personal music notes

## Recursive navigation

The hierarchy must be data-driven and recursive.

A navigation node can have children, and children can have children indefinitely.

Do not create separate hard-coded components for:
- level 1
- level 2
- level 3
- level 4

Instead, use one reusable recursive navigation pattern appropriate to the existing framework.

The exact data model must follow the project's conventions.

## UX

Match the existing site's visual language.

Desktop:
- Use the site's existing dropdown/mega-menu patterns.
- Avoid huge unwieldy menus.
- Use progressive disclosure for deep levels where appropriate.

Mobile:
- Use an accessible expandable tree/accordion pattern.

Accessibility:
- Keyboard navigation
- Visible focus
- Correct semantic structure
- Appropriate ARIA only where needed
- Escape/close behavior
- Touch-friendly controls
- Do not depend only on hover

## Content architecture

Educational topics should support reusable fields such as:
- title
- summary
- body
- category
- tags
- parent
- children
- related topics
- related instruments
- related musicians
- references
- personal notes

Do not force every field to be present on every page.

## Cross-linking

Treat the Music section as a connected knowledge system.

Use reusable related-content components where the existing architecture allows it.

Examples:
- Dastgah Shur → Avaz → Gusheh → Radif → Tar → Setar → Repertoire → Musicians
- C major → Piano → Major scale → Intervals → Chords → Harmony → Ear training

## Safety for existing site

Before finishing:
- Run existing tests.
- Run lint/type checks if available.
- Run the production build if available.
- Verify existing navigation still works.
- Verify existing routes still work.
- Test Music at multiple nesting depths.
- Test mobile and desktop.
- Test direct access to nested URLs.
- Test keyboard navigation.

Do not modify unrelated files.

## Reference

The full information architecture is in:

`music_menu_feature_brief.md`

Use that document for the complete Music taxonomy and implementation requirements.
