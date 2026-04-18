# Visual Grammar

**Version:** 1.0 (April 2026)

This document formalizes the aesthetic concept ("Memphis Milano meets kidcore inventionism") into enforceable, actionable design rules. This replaces subjective aesthetic arguments with objective technical parameters.

## 1. The Ink Logic (Stroke & Border Rule)
Danilarious relies on a hand-drafted, precise "print" aesthetic. 
- **Rule:** Almost all structural elements and interactive surfaces MUST be bounded by a solid `2.5px` border in the Ink color (`#1A1A1A`).
- **Forbidden:** No soft blurs, no "glassmorphism", no light gray hairline borders. Contrast must be absolute.

## 2. Elevation & Depth (The Shadow Rule)
Objects in the Danilarious universe sit on top of the grid with physical, cut-out volume.
- **Rule:** Shadows are hard vector offsets (e.g., `5px 5px 0px #1A1A1A`), not Gaussian blurs.
- **Coloring:** Shadows on primary structures are Ink. Shadows on accent elements (or active states) can borrow accent colors (Yellow or Coral) as long as contrast is maintained.

## 3. The Grid Anchor (Background Logic)
The world does not exist in an empty white void. It exists on drafting paper.
- **Rule:** The canonical root surface is Cream (`#F7F3E9`) with a 32x32 pixel Ink/Cream-2 (`#EDE8D8`) geometric grid.
- **Function:** This enforces "system-aware visual discipline." Playful characters and shapes exist *on top* of the rigid grid, providing the tension between math and whimsy.

## 4. Typographic Dominance 
Typography is treated as a structural block, not just content.
- **Rule:** Display text (`Space Grotesk 800`) should be large, tight, and capable of dominating visual hierarchy. It can overlap or bump against container walls.
- **Sub-Rule:** Eyebrows and systemic labels must use the monospace font (`Space Mono`) with wide tracking, often prefixed with the brand sequence block marker (`■`).

## 5. Color Distribution Patterns
We balance a vibrant palette with restraint to avoid "clown" aesthetics.
- **Background Layer (80%):** Cream, Cream-2, Grid lines.
- **Structural Layer (15%):** Ink borders, Ink text, White inner backgrounds for clear reading.
- **Accent Layer (5%):** Highly intentional punches of Yellow (nav/action), Coral (urgent), or Purple/Green.
- **Rule:** Do not fill massive structural areas with raw Yellow or Purple. Those remain functional punches against the cream/ink architecture.
