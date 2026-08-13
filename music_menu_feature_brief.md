# Music Menu Feature — Development Brief for Claude Code

## Context

This is an **existing website**. It already has pages, navigation, menus, styling, routing, and other functionality.

The goal is **NOT to rebuild the website**.

The goal is to add one new top-level item to the existing main menu:

**Music**

The Music section will become a long-term personal music knowledge base for a musician who plays:

- Tar
- Setar
- Santoor
- Piano
- Singing / Voice

The website should combine:
- Music theory
- Persian traditional music
- Western music
- Instrument knowledge
- Technique
- Ear training
- Improvisation
- Practice
- Repertoire
- Musicians and composers
- Composition
- Performance
- Personal music notes

---

# 1. Non-negotiable requirement: preserve the existing website

Before changing anything:

1. Inspect the repository.
2. Identify the existing framework and package manager.
3. Identify the current main-navigation component.
4. Identify how routes/pages are implemented.
5. Identify how styles/design tokens/components are implemented.
6. Identify whether the project already has a CMS, database, content files, or another content system.
7. Identify existing reusable menu/dropdown components.

Then add the Music section using the existing architecture wherever possible.

### Do NOT:

- Rebuild the website.
- Replace the existing framework without a compelling technical reason.
- Replace the existing navigation system.
- Redesign unrelated pages.
- Change existing URLs unnecessarily.
- Remove existing menu items.
- Introduce a new UI library when the project already has an equivalent.
- Add a large number of dependencies just for this feature.
- Rewrite unrelated code.

The existing website should look and behave exactly as it did before, except for the new Music functionality.

---

# 2. Main navigation requirement

Add:

**Music**

to the existing main menu.

The Music menu must support a **deep, extensible hierarchy**.

Do NOT hard-code only 2, 3, or 4 submenu levels.

The navigation should be implemented recursively/data-driven so structures like this are possible:

Music
→ Persian Music
→ Dastgah
→ Shur
→ Gusheh
→ Daramad
→ Related material

There should be no architectural assumption that the hierarchy stops at a particular depth.

However, use good UX judgment: deep hierarchy should be represented through appropriate navigation patterns rather than forcing an enormous desktop dropdown.

---

# 3. Recommended Music information architecture

## Music Fundamentals

- What Is Music?
- Sound & Silence
- Pitch
- Rhythm
- Tempo
- Dynamics
- Timbre
- Melody
- Harmony
- Texture
- Musical Form
- Musical Expression

## Notes & Notation

- Notes
- Octaves
- Staff
- Clefs
- Accidentals
- Sharps
- Flats
- Naturals
- Note Values
- Rests
- Time Signatures
- Key Signatures
- Solfège
- Letter Notation
- Reading Music
- Western Notation
- Persian Notation
- Western vs Persian notation/concepts

## Rhythm

- Beat
- Pulse
- Tempo
- Meter
- Simple Meter
- Compound Meter
- Odd Meters
- Subdivision
- Syncopation
- Triplets
- Polyrhythm
- Rhythmic Patterns
- Persian Rhythms
- Rhythm Exercises

## Scales & Modes

- Major Scale
- Natural Minor
- Harmonic Minor
- Melodic Minor
- Chromatic Scale
- Pentatonic Scales
- Whole Tone
- Modes
  - Ionian
  - Dorian
  - Phrygian
  - Lydian
  - Mixolydian
  - Aeolian
  - Locrian
- Tonality
- Tonal Center
- Modulation
- Transposition
- Persian intervals and modal concepts

## Intervals

- What Is an Interval?
- Unison
- Seconds
- Thirds
- Fourths
- Fifths
- Sixths
- Sevenths
- Octaves
- Compound Intervals
- Consonance and Dissonance
- Persian/Microtonal Intervals

## Harmony

- What Is Harmony?
- Triads
- Major Chords
- Minor Chords
- Diminished Chords
- Augmented Chords
- Seventh Chords
- Extended Chords
- Chord Inversions
- Chord Progressions
- Cadences
- Functional Harmony
- Voice Leading
- Chord Substitution
- Reharmonization
- Piano Harmony

## Melody

- What Is Melody?
- Motif
- Phrase
- Musical Sentence
- Repetition
- Variation
- Development
- Melodic Contour
- Ornamentation
- Tension and Release
- Call and Response
- Melodic Improvisation
- Persian melodic concepts

---

# 4. Persian Music

This should be a major section.

## Persian Music Theory

- Dastgah
- Avaz
- Gusheh
- Radif
- Maqam
- Persian Intervals
- Microtones
- Quarter-tone concepts
- Melodic Structures
- Ornamentation
- Modulation

## Dastgah

The structure must allow:

Persian Music
→ Dastgah
→ Shur
→ related Gusheh
→ related Avaz
→ related Radif material

Possible Dastgah entries can include:

- Shur
- Mahur
- Homayoun
- Segah
- Chahargah
- Nava
- Rast-Panjgah

Do not assume that the displayed list is exhaustive or permanently fixed.

## Avaz

Support:
- Abu Ata
- Bayat-e Tork
- Afshari
- Dashti
- Other related material

## Persian Musical Forms

- Pishdaramad
- Chaharmezrab
- Daramad
- Tasnif
- Reng
- Avaz
- Improvisation

## Persian Instruments

- Tar
- Setar
- Santoor
- Tombak
- Daf
- Kamancheh
- Barbat/Oud
- Ney

## Persian Music History

Support articles/timeline entries about:
- Historical periods
- Important developments
- Major musicians
- Teachers/schools
- Recordings
- The development/documentation of Radif
- Modern and contemporary Persian music

Factual historical content should support references/sources.

---

# 5. Instruments

The owner's primary instruments should have dedicated sections.

## Tar

Cover:
- History
- Construction
- Strings
- Tuning
- Fretboard
- Right-hand technique
- Left-hand technique
- Ornamentation
- Chaharmezrab
- Improvisation
- Repertoire
- Exercises
- Recordings

## Setar

Cover:
- History
- Construction
- Strings
- Tuning
- Fretboard
- Fingering
- Technique
- Ornamentation
- Radif practice
- Improvisation
- Repertoire
- Exercises
- Differences from Tar

## Santoor

Cover:
- History
- Construction
- Strings
- Tuning
- Mezrab technique
- Tremolo
- Ornamentation
- Dastgah
- Repertoire
- Exercises

## Piano

Cover:
- Keyboard
- Octaves
- Fingering
- Scales
- Arpeggios
- Chords
- Voicings
- Pedaling
- Sight-reading
- Accompaniment
- Improvisation

## Voice / Singing

Cover:
- Vocal anatomy
- Breathing
- Posture
- Resonance
- Vocal registers
- Chest voice
- Head voice
- Mixed voice
- Vocal range
- Pitch
- Intonation
- Articulation
- Diction
- Vibrato
- Dynamics
- Expression
- Warm-ups
- Vocal exercises
- Persian singing
- Tahrir

---

# 6. Music Styles

## Classical / Art Music

- Medieval
- Renaissance
- Baroque
- Classical
- Romantic
- Impressionism
- Modernism
- Contemporary Classical

## Popular Music

- Pop
- Rock
- Jazz
- Blues
- Funk
- Soul
- R&B
- Hip-Hop
- Electronic

## World / Traditional

- Persian
- Indian
- Arabic
- Turkish
- Central Asian
- European Folk
- African
- Latin American

Each style page should support:

1. Origin
2. Historical development
3. Main characteristics
4. Rhythm
5. Melody
6. Harmony
7. Form
8. Instruments
9. Important musicians
10. Important works
11. Listening examples
12. Related styles
13. Personal notes

---

# 7. Technique

## Instrument technique

- Tar Technique
- Setar Technique
- Santoor Technique
- Piano Technique
- Vocal Technique

## Improvisation

- What Is Improvisation?
- Melodic Improvisation
- Rhythmic Improvisation
- Harmonic Improvisation
- Motif Development
- Call and Response
- Tension and Release
- Persian Improvisation
- Avaz
- Tar Improvisation
- Setar Improvisation
- Santoor Improvisation
- Piano Improvisation
- Vocal Improvisation

---

# 8. Ear Training

- Pitch Matching
- Note Recognition
- Interval Recognition
- Scale Recognition
- Chord Recognition
- Chord Progression Recognition
- Rhythm Recognition
- Melodic Dictation
- Harmonic Dictation
- Transcription
- Persian Interval Recognition
- Microtone Recognition

A future implementation may include interactive exercises, but do not over-engineer the first version.

---

# 9. Practice

## Practice philosophy

- Deliberate Practice
- Slow Practice
- Repetition
- Mistake Management
- Mental Practice
- Goal Setting

## Practice areas

- Tar
- Setar
- Santoor
- Piano
- Voice
- Ear Training
- Rhythm
- Theory

## Practice journal

Support entries with:

- Date
- Instrument
- Exercise
- Duration
- Difficulty
- Problem
- What Improved
- Next Step
- Notes

---

# 10. Repertoire

Each repertoire item should support:

- Title
- Composer
- Artist
- Style
- Instrument
- Dastgah / key / mode
- Difficulty
- Status
- Date Started
- Date Completed
- Recording
- Sheet music reference
- Notes

Recommended statuses:

- Want to Learn
- Learning
- Almost Ready
- Performance Ready
- Memorized
- Recorded

Allow filtering by instrument, style, difficulty, and status.

---

# 11. Musicians & Composers

Profiles should support:

- Biography
- Instrument
- Style
- Important Works
- Technique
- Recordings
- Influences
- Influence on music
- Personal notes

Categories may include:
- Persian musicians
- Classical composers
- Pianists
- Singers
- Jazz musicians
- Contemporary musicians

---

# 12. Composition

- Musical Ideas
- Motifs
- Melody Writing
- Harmony
- Chord Progressions
- Form
- Counterpoint
- Arrangement
- Instrumentation
- Orchestration
- Songwriting
- Persian Composition
- Persian/Western Fusion Ideas
- My Compositions

---

# 13. Musical Forms

- Phrase
- Period
- Binary
- Ternary
- Rondo
- Theme and Variations
- Sonata Form
- Fugue
- Song Form
- Verse / Chorus
- Bridge
- Introduction
- Interlude
- Outro
- Persian Musical Forms

---

# 14. Performance

- Stage Preparation
- Practice Before Performance
- Memorization
- Playing From Notation
- Playing From Memory
- Improvisation on Stage
- Ensemble Playing
- Accompaniment
- Dynamics
- Expression
- Stage Presence
- Performance Anxiety
- Recording Yourself
- Performance Evaluation

---

# 15. My Music

- My Journey
- My Instruments
- My Teachers
- My Influences
- My Repertoire
- My Recordings
- My Performances
- My Compositions
- My Practice Journal
- My Musical Goals
- Things I Am Learning
- Things I Want to Learn

---

# 16. Critical architecture: hierarchical and recursive

The menu must be data-driven.

Conceptually, each navigation node should support something similar to:

```text
{
  title,
  slug,
  parent,
  children,
  route/content reference
}
```

The actual implementation must follow the existing project's architecture.

Do not force this exact data shape if the existing project has a better established pattern.

The important requirement is:

**A node can contain children, and each child can contain children recursively.**

The navigation should not need a new component for every depth.

---

# 17. Navigation UX

Desktop:
- Match the existing site's menu style.
- Use an appropriate mega-menu or hierarchical dropdown if that fits the existing design.
- Do not create an absurdly tall dropdown for deep content.
- Consider progressive disclosure for deeper levels.

Mobile:
- Use an accordion/tree-style navigation.
- Each level must be easy to expand/collapse.
- Preserve keyboard and touch usability.

Accessibility:
- Keyboard navigation
- Visible focus
- Semantic navigation
- Correct ARIA behavior where required
- Screen-reader-friendly labels
- Escape/close behavior for menus
- Do not rely only on hover

---

# 18. Content pages

The navigation hierarchy and content hierarchy should be related but should not be unnecessarily coupled.

For most educational topics, support a reusable page template containing:

1. Title
2. Short summary
3. Definition
4. Why it matters
5. Explanation
6. Musical examples
7. Notation/examples where relevant
8. How to hear it
9. How to sing it
10. How to play it on Piano
11. How it applies to Tar/Setar/Santoor
12. Persian-music connection
13. Exercises
14. Related topics
15. References
16. Personal notes

All sections should be optional.

---

# 19. Internal linking / knowledge graph

The Music section should become a connected knowledge system.

Examples:

Dastgah Shur should connect to:
- Persian intervals
- Avaz
- Gusheh
- Radif
- Tar
- Setar
- Santoor
- Persian singing
- Ornamentation
- Repertoire
- Musicians
- Recordings
- Personal notes

C major should connect to:
- Piano
- Major scale
- Intervals
- Chords
- Harmony
- Ear training
- Transposition

Use reusable "Related Topics", "Related Instruments", "Related Musicians", and similar components.

---

# 20. Search

The Music section should eventually support:

- Global search
- Title search
- Tag search
- Instrument filtering
- Genre/style filtering
- Persian/Western filtering
- Content-type filtering

Search should be compatible with the existing site's search architecture if one already exists.

---

# 21. URL strategy

Use stable, readable URLs if the existing routing architecture allows them.

Examples:

- `/music`
- `/music/fundamentals/pitch`
- `/music/notation/notes`
- `/music/scales/major-scale`
- `/music/persian/dastgah/shur`
- `/music/instruments/tar`
- `/music/instruments/setar`
- `/music/instruments/santoor`
- `/music/instruments/piano`
- `/music/instruments/voice`
- `/music/practice`
- `/music/repertoire`

Do not change existing URL conventions merely to match these examples.

---

# 22. First implementation milestone

Do not create hundreds of pages.

First implement:

- Music top-level navigation item
- Recursive/deep submenu capability
- Music landing page
- Music Fundamentals landing page
- One Fundamentals topic, e.g. Pitch
- Persian Music landing page
- Dastgah landing page
- Shur example page
- Instruments landing page
- Tar page
- Setar page
- Santoor page
- Piano page
- Voice page
- Breadcrumbs
- Related-content component
- Responsive navigation
- Basic search integration if the existing website already has search

Use these pages to prove the architecture.

Then expand the content.

---

# 23. Development workflow

Follow this sequence:

### Step 1 — Inspect
Understand the existing project before editing.

### Step 2 — Plan
Explain the safest implementation approach.

### Step 3 — Implement navigation
Add Music without disturbing existing navigation.

### Step 4 — Implement recursive hierarchy
Make the submenu data-driven and extensible.

### Step 5 — Implement representative content
Create a small number of real pages.

### Step 6 — Verify
Run existing:
- Build
- Tests
- Lint
- Type checks
- Formatting checks

### Step 7 — Test manually
Check:
- Desktop
- Mobile
- Keyboard navigation
- Deep nesting
- Existing menus
- Existing routes
- Back/forward navigation
- Direct URL access
- Refreshing nested pages

### Step 8 — Only then expand

---

# 24. Important rule for Claude

Do not make assumptions about the current stack.

First inspect it.

Do not replace working architecture merely because another framework/library would be easier.

Reuse existing:
- Navigation components
- Layouts
- Buttons
- Typography
- Cards
- Routing
- Content system
- Search
- Theme
- Icons
- CSS/design tokens

The new Music section should feel like it has always been part of the website.

---

# 25. Future extensibility

Leave room for:

- Audio player
- Embedded recordings
- Sheet music/PDF attachments
- Interactive piano
- Interactive fretboard
- Rhythm exercises
- Ear training
- Metronome
- Tuner
- MIDI
- Practice statistics
- Favorites/bookmarks
- Multilingual content
- Persian/English
- RTL support
- AI-assisted organization

Do not implement these unless needed for the current milestone.

---

# 26. Definition of success

The feature is successful when:

1. The existing website is unchanged except for the new Music functionality.
2. Music appears naturally in the existing main navigation.
3. Music supports arbitrarily deep hierarchical navigation.
4. Adding a new category does not require rewriting the navigation component.
5. The navigation works on desktop and mobile.
6. Deep pages have clear breadcrumbs.
7. Music pages use reusable templates/components.
8. Topics can link to related topics, instruments, musicians, repertoire, and recordings.
9. The architecture can grow for years without becoming difficult to maintain.

---

# 27. Start here

First inspect the existing repository.

Do NOT immediately start coding.

Report:

- Framework
- Package manager
- Navigation implementation
- Routing implementation
- Styling system
- Content/data architecture
- Existing reusable components
- Existing search architecture
- Recommended implementation approach
- Files you expect to modify

Then implement the smallest safe vertical slice.

Do not modify unrelated files.
