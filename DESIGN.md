---
name: Cristovao Freitas Studio
description: An expressive editorial portfolio for QA, apps, and games.
colors:
  paper: "#efbf58"
  ink: "#24221d"
  secondary: "#58503a"
  rule: "#aa8638"
  accent: "#853322"
  forest: "#253b30"
  forest-text: "#edf0dc"
  wine: "#5a3038"
  wine-text: "#f6e8d6"
  forest-hover: "#304939"
  wine-hover: "#693b43"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(3.25rem, 6.6vw, 6rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(1.85rem, 3.6vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.16
    letterSpacing: "-.025em"
  title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "-.015em"
  game-title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.8rem, 4.5vw, 4.2rem)"
    fontWeight: 400
    lineHeight: 1.03
    letterSpacing: "-.025em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "16px"
    lineHeight: 1.6
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: ".85rem"
rounded:
  square: "0"
spacing:
  page-inset: "44px"
  page-inset-medium: "28px"
  page-inset-small: "20px"
  section: "54px"
  section-small: "37px"
  card: "36px"
  card-medium: "28px"
  card-small: "27px"
  grid-gap: "20px"
  control-gap: "6px"
  row-gap: "24px"
  credential-gap: "48px"
components:
  filter:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "9px 13px"
  filter-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "9px 13px"
  contact-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "13px 20px"
  contact-link-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "13px 20px"
  game-forest:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.forest-text}"
    rounded: "{rounded.square}"
    padding: "{spacing.card}"
  game-wine:
    backgroundColor: "{colors.wine}"
    textColor: "{colors.wine-text}"
    rounded: "{rounded.square}"
    padding: "{spacing.card}"
---

# Design System: Cristovao Freitas Studio

## Overview

**Creative North Star: "The Editorial Studio"**

A warm, expressive studio world gives professional QA work and personal creative projects a shared identity. Mustard paper, oversized geometric headlines, and serif game covers make the portfolio feel authored and approachable. Clear body copy and visible professional evidence preserve credibility.

The material language is flat and typographic: ruled lists, squared controls, and solid cover colors establish hierarchy without decorative chrome. Space opens around major statements and tightens around practical metadata. This captures the Studio direction selected by the user and the completed implementation; source styles remain the implementation authority.

**Key Characteristics:**

- Warm mustard paper and dark, legible ink.
- Geometric editorial headings paired with expressive serif game titles.
- Flat surfaces, straight edges, and thin structural rules.
- Professional evidence and creative work expressed in one consistent voice.
- Responsive reflow, native disclosure controls, and visible keyboard focus.

## Colors

The palette pairs sun-warmed paper with earthy ink, brick accents, forest green, and muted wine. Normative values are in the frontmatter.

### Primary

- **Mustard Paper** (`paper`): the page surface and light text on ink-filled controls; the dominant identity color.
- **Brick Accent** (`accent`): professional proof, current-role text, public-source metadata, link hover, and disclosure markers.

### Secondary

- **Forest Cover** (`forest`, `forest-hover`): a dark green typographic game surface with a modest lighter hover state.
- **Wine Cover** (`wine`, `wine-hover`): the complementary dark red game surface and its hover state.

### Neutral

- **Studio Ink** (`ink`): headings, primary body text, control borders, selected filters, and high-contrast focus outlines.
- **Earthy Secondary Ink** (`secondary`): supporting descriptions, dates, captions, and metadata.
- **Ochre Rule** (`rule`): section dividers, repository rows, credential boundaries, and unselected-filter hover borders.
- **Forest Paper** (`forest-text`): readable copy on forest covers.
- **Wine Paper** (`wine-text`): readable copy on wine covers and selected page text.

**The Paired Surface Rule.** Keep forest and wine text on their matching dark cover surfaces; keep mustard and ink paired for page controls.

## Typography

**Display Font:** Space Grotesk, with sans-serif fallback.
**Body Font:** DM Sans, with sans-serif fallback.
**Game Display Font:** Fraunces, with Georgia and serif fallbacks.

The geometric display face makes confident editorial statements. Fraunces gives game titles their own imaginative voice while DM Sans keeps professional detail easy to read. All three families are bundled locally as WOFF2 files with their OFL licenses in `assets/fonts/`.

### Hierarchy

- **Display:** the frontmatter display role drives the primary statement. At the medium breakpoint it becomes `clamp(3rem, 6.6vw, 5rem)`; on small screens, `clamp(2.4rem, 9.4vw, 4.1rem)`.
- **Headline:** section headings use the headline role with balanced wrapping.
- **Title:** ordinary subsection and row titles use the title role. Current-role headings are enlarged to `1.45rem`.
- **Game title:** Fraunces titles use the game-title role; small screens use `clamp(2.75rem, 12vw, 3.6rem)`.
- **Body:** the body role has a general maximum line length of `70ch`. Intro copy is larger (`1.1rem`) and shorter (`34ch`); game descriptions are `.95rem` with a `1.55` line height.
- **Label:** compact filters and professional metadata use small, sentence-case text. Supporting text varies from `.75rem` to `.95rem` according to density.

**The Two Display Voices Rule.** Use Space Grotesk for the portfolio's editorial hierarchy and Fraunces for game-cover titles.

## Layout

The centered page is capped at `1180px`, with the page-inset spacing token on each side. At `1000px` the inset becomes page-inset-medium; at `700px` it becomes page-inset-small. Sections use the section spacing token vertically, reducing to section-small on small screens.

The desktop composition mixes open editorial columns and compact ruled lists. The hero uses a `1.8fr / .82fr` split, the two game covers use `1.35fr / 1fr`, and the portrait and biography use `.7fr / 1.7fr`. Repository rows align a title, description, and `160px` metadata column; that metadata column becomes `130px` at the medium breakpoint.

At `700px`, hero, covers, repository rows, biography, timeline, skills, credentials, education, and contact reflow into a single column. Navigation wraps visibly, filters wrap, and repository metadata aligns left. The small-screen portrait becomes a `110px` image beside its caption. Body descriptions remain bounded rather than stretching across every available column.

## Elevation & Depth

The system uses no box shadows. Depth comes from dark game-cover fields, typography scale, spacing, and thin rules. Hover feedback changes color or underline weight; it does not lift surfaces.

**The Flat Studio Rule.** Preserve flat surfaces and structural dividers instead of introducing ambient shadows.

## Shapes

Edges are square, including filters, contact controls, game covers, and the portrait. Borders are generally a single pixel; interactive keyboard outlines are two pixels with a five-pixel offset. Arrow icons use open strokes, round caps and joins, and an `18px` footprint. Rounded icon strokes do not imply rounded containers.

## Components

### Buttons and links

Controls are direct and typographic. Filters have the label role, square corners, a minimum `44px` height, and the frontmatter padding. The selected filter inverts ink and mustard and updates `aria-pressed`; an unselected hover gains an ochre border.

The outlined contact link has a minimum `52px` height. Hover fills it with ink and reverses its text to mustard. Plain text links retain clear underlines and often pair with a small arrow.

Keyboard focus uses a visible outline. Filters, contact links, and the skip link explicitly use ink outlines, including the selected filter whose text color is mustard. The skip link appears when focused.

### Game covers

Game covers are expressive typography on solid forest or wine fields. Desktop cards have a minimum `364px` height and card padding; medium and small layouts use the corresponding spacing tokens. Small cards have a minimum `322px` height.

Titles, descriptions, build status, and a play link create the cover hierarchy. Keep the visible early-build status. The footer wraps gracefully. Under `prefers-reduced-motion: no-preference`, cover hover changes background over `220ms ease-out`; reduced-motion users receive no animated cover transition. Links preserve their readable cover text color on hover.

### Repository rows

Projects form a ruled editorial list rather than separate raised cards. Each row separates title, concise description, and language/visibility metadata. Public titles link to source; private previews display plain titles. Filters expose the curated collection and update a polite live project count.

Project selection remains curated in `script.js`. Follow the local `AGENTS.md` exclusions without publishing those excluded names in tracked documentation.

### Navigation

The brand uses bold Space Grotesk; navigation uses compact DM Sans. Desktop navigation is a simple horizontal link group. At the small breakpoint, the header stacks and the links wrap visibly. Hover adds an underline; keyboard focus follows the shared outline treatment. A native skip link leads to the main content.

### Professional evidence and disclosures

The current job is visible in the introduction and expanded professional history. Salesforce Administrator and ISTQB CTFL are highlighted near the biography.

Qualifications display all six credential names as native `summary` controls. Opening each `details` reveals issue dates, identifiers, or skills without hiding the credential's name. Earlier roles use the same native disclosure model. Ochre rules and brick markers organize these controls; supporting detail uses secondary ink.

## Do's and Don'ts

### Do:

- **Do** keep mustard paper, studio ink, and their readable reversed control pairing.
- **Do** preserve the geometric heading and serif game-title distinction.
- **Do** use thin rules and spacing to organize dense professional information.
- **Do** preserve visible focus, wrapped mobile navigation, native disclosures, and reduced-motion behavior.
- **Do** keep project previews curated and follow the local AGENTS.md exclusions.

### Don't:

- **Don't** replace the flat studio surfaces with shadowed, rounded cards.
- **Don't** apply brick link-hover text to dark game covers; preserve their paired light text.
- **Don't** remove the ink focus outline from selected filters or outlined contact links.
- **Don't** turn private previews into source links or imply early game builds are finished.
