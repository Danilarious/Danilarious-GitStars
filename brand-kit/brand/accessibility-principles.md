# Accessibility Principles

**Version:** 1.0 (April 2026)

Accessibility is natively integrated into the Danilarious design system, ensuring that high contrast and vibrant color choices remain highly legible and inclusive.

## 1. Color Contrast Protections

### The Yellow/Cream Hazard
- **Risk:** Standard Yellow (`#F5C800`) fails WCAG AA contrast ratio when placed on the Cream Background (`#F7F3E9`) as text.
- **Rule:** Never use Yellow as a standalone text color for body copy or small text.
- **Mitigation:** Yellow must be used as a substantial fill background (with Ink text on top of it) or as an extra-thick structural block (e.g., large buttons, badges).

### Border Defense
- The 2.5px Ink border acts as an instant high-contrast separator. When placing colored buttons on alternating backgrounds, the Ink border ensures separation and visibility for color-vision impaired users.

## 2. Focus Indicators
Because hover states heavily utilize the signature "hard offset shadow" (e.g., moving a card 5px up and applying a 5px offset shadow), we require a distinct keyboard focus state that does not rely solely on animation.
- **Rule:** `::focus-visible` elements MUST receive a high-contrast `2.5px` offset ring (often Coral or Blue, 2px offset gap) rather than a native, low-contrast browser outline.

## 3. Reduced Motion
The Danilarious system relies on floating, pulsing, and springy animations for its characters and interactions.
- **Rule:** All animations must sit behind `prefers-reduced-motion: reduce` CSS media queries.
- **Mitigation Strategy:** 
  - Stop continuous infinite loops (e.g., swaying characters must become completely static).
  - Convert layout layout transitions (e.g., sliding off-canvas panels) into simple opacity fades (Opacity 0 -> 1 over 100ms) or 0ms instant display.

## 4. Grid Legibility
- The 32x32 background pattern (`#EDE8D8` lines on `#F7F3E9`) is designed to fail contrast gently so that it remains a subtle watermark texture and never interferes with text legibility. 
- **Rule:** Do not darken the grid lines, as it will cause a moiré legibility clash with Space Mono labels.
