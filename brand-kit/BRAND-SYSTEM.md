# Danilarious Brand System

> Version 1.0 — April 2026  
> Reference sites: danilarious.art · danilarious-agents.netlify.app

---

## What This Is

This is the canonical design system for all Danilarious-branded projects. It lives here as a `brand-kit/` folder within the GitStars repo as a **Phase 1 seed**. When a second repo needs it, it should be extracted into a standalone `danilarious-brand` npm package (see Architecture section below).

---

## Architecture Recommendation

### Chosen Path: Brand-kit folder → Shared Package (Hybrid)

**Phase 1 (now):** `brand-kit/` inside this repo — tokens, CSS variables, docs  
**Phase 2 (next repo):** Extract to a standalone `@danilarious/brand` npm package  
**Phase 3 (scale):** Storybook-powered component library with published design tokens

#### Why This Path

| Criterion | Standalone Repo | Package | Brand-kit Folder | Hybrid ✓ |
|---|---|---|---|---|
| Reuse across repos | ✓ | ✓✓ | ✗ | ✓✓ |
| Ease of maintenance | Medium | Medium | High | High → Med |
| AI-developer friendly | Low | Medium | High | High |
| Scalability | High | High | Low | High |
| Design consistency | High | High | Medium | High |
| Fast content creation | Low | Medium | High | High |

The hybrid path lets you start immediately without over-engineering, while creating a clear extraction point for the future.

---

## Design Philosophy

The Danilarious visual language is built on five principles:

1. **Signal over noise** — Deep blacks with sharp white contrast. Content surfaces cleanly.
2. **Personality at every scale** — Character illustrations, whimsical naming, absurdist precision.
3. **Editorial density** — Information presented with typographic confidence, not padding.
4. **Structured rebellion** — Grid-based layouts with deliberate interruptions (rotations, crop bleeds, character intrusions).
5. **Deep-dark + warm accents** — Near-black backgrounds, not pure black. Warmth is earned through accent, not everywhere.

---

## Color System

### Core Palette

| Token | Value | Usage |
|---|---|---|
| `--dani-bg` | `#0a0808` | Page background — warm near-black |
| `--dani-bg-soft` | `#130f0f` | Elevated surfaces, cards |
| `--dani-bg-raised` | `#1a1515` | Modals, controls |
| `--dani-panel` | `rgba(20, 16, 16, 0.92)` | Frosted panels |
| `--dani-panel-strong` | `rgba(10, 8, 8, 0.97)` | Deep panels |
| `--dani-border` | `rgba(255, 255, 255, 0.09)` | Default borders |
| `--dani-border-mid` | `rgba(255, 255, 255, 0.15)` | Hover/active borders |
| `--dani-border-strong` | `rgba(255, 255, 255, 0.22)` | Selected/focus borders |
| `--dani-text` | `#f0eeee` | Body text — warm white |
| `--dani-text-muted` | `#9a9090` | Secondary text — warm grey |
| `--dani-text-faint` | `#5e5858` | Tertiary / disabled |

### Accent Palette

| Token | Value | Usage |
|---|---|---|
| `--dani-accent-warm` | `#e8c97e` | Star/highlight accent — warm gold |
| `--dani-accent-warm-dim` | `rgba(232, 201, 126, 0.12)` | Accent backgrounds |
| `--dani-accent-hot` | `#e87e7e` | Alert/danger accent |
| `--dani-accent-cool` | `#7eb8e8` | Link/info accent |
| `--dani-accent-green` | `#7ee87e` | Success/active accent |

### Signature Treatments

- **Primary glow:** `radial-gradient(circle, rgba(232,201,126,0.08), transparent 65%)` — warm gold bloom
- **Panel shimmer:** `linear-gradient(135deg, rgba(255,255,255,0.04), transparent)` — subtle surface depth
- **Background texture:** Crosshatch grid at 28px — `rgba(255,255,255,0.018)` — barely visible but present
- **Section accent line:** 2px warm-gold left border on featured sections
- **Eyebrow accent:** `■` square prefix — signature Danilarious marker

---

## Typography

### Type Scale

| Role | Font | Weight | Size |
|---|---|---|---|
| Display / H1 | Space Grotesk | 700 | clamp(2.8rem, 7vw, 5.5rem) |
| Heading / H2 | Space Grotesk | 700 | clamp(1.5rem, 2.5vw, 2.2rem) |
| Sub-heading / H3 | Space Grotesk | 500 | clamp(1.15rem, 1.8vw, 1.55rem) |
| Body | DM Sans | 400 | 1rem / 1.6 |
| Body strong | DM Sans | 600 | 1rem |
| Eyebrow / Label | DM Mono | 500 | 0.72rem / letter-spacing: 0.14em |
| Code / Meta | DM Mono | 400 | 0.85rem |
| UI / Button | Space Grotesk | 600 | 0.9rem |

### Font Loading

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

### Tone of Voice

- **Confident, not arrogant.** Direct sentences. No filler.
- **Technically precise, humanly warm.** Numbers are given context, not just shown.
- **Uses ■ prefix for section markers.** It's a signature element — apply to eyebrows/section labels.
- **Short punchy headlines**, longer explanatory subtext. Headline is a hook, not a description.
- **First person is fine.** "My starred repositories" not "Starred repositories by @Danilarious".
- **Humor is quiet.** It emerges from precision and specificity, not jokes.

---

## Spacing System

Based on an 8px base unit:

| Token | Value |
|---|---|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 24px |
| `--space-6` | 32px |
| `--space-7` | 48px |
| `--space-8` | 64px |
| `--space-9` | 96px |

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 10px | Inline chips, tags |
| `--radius-md` | 16px | Cards, inputs |
| `--radius-lg` | 24px | Panels, modals |
| `--radius-xl` | 32px | Hero cards |
| `--radius-pill` | 999px | Buttons, pills |

---

## Shadow System

| Token | Value | Usage |
|---|---|---|
| `--shadow-sm` | `0 4px 16px rgba(0,0,0,0.3)` | Cards |
| `--shadow-md` | `0 12px 40px rgba(0,0,0,0.4)` | Panels |
| `--shadow-lg` | `0 24px 80px rgba(0,0,0,0.5)` | Modals, dropdowns |
| `--shadow-glow` | `0 0 40px rgba(232,201,126,0.08)` | Accent glow |

---

## Component Patterns

### Surface Panel
```css
.dani-panel {
  background: var(--dani-panel);
  border: 1px solid var(--dani-border);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(20px);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  position: relative;
}
/* Shimmer overlay */
.dani-panel::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.03), transparent 60%);
  pointer-events: none;
}
```

### Eyebrow
```html
<p class="dani-eyebrow">■ Category label</p>
```
```css
.dani-eyebrow {
  font-family: 'DM Mono', monospace;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--dani-accent-warm);
  margin: 0 0 0.5rem;
}
```

### Primary Button
```css
.dani-btn {
  background: linear-gradient(135deg, #f0eeee, #d4d0d0);
  color: #0a0808;
  border: none;
  border-radius: var(--radius-pill);
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  padding: 0.85rem 1.4rem;
  transition: filter 180ms ease, transform 120ms ease;
}
.dani-btn:hover {
  filter: brightness(1.06);
  transform: translateY(-1px);
}
```

### Accent Button (warm outline)
```css
.dani-btn-outline {
  background: var(--dani-accent-warm-dim);
  border: 1px solid rgba(232,201,126,0.3);
  color: var(--dani-accent-warm);
  border-radius: var(--radius-pill);
  padding: 0.85rem 1.4rem;
}
```

### Category Pill
```css
.dani-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  border: 1px solid var(--dani-border);
  border-radius: var(--radius-pill);
  background: rgba(255,255,255,0.03);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 180ms, border-color 180ms;
}
.dani-pill.active {
  background: var(--dani-accent-warm-dim);
  border-color: rgba(232,201,126,0.3);
  color: var(--dani-accent-warm);
}
```

### Repo Card
```css
.dani-card {
  background: rgba(255,255,255,0.022);
  border: 1px solid var(--dani-border);
  border-radius: var(--radius-md);
  padding: 1rem 1.1rem;
  transition: border-color 180ms, background 180ms, transform 120ms;
}
.dani-card:hover {
  border-color: var(--dani-border-mid);
  background: rgba(255,255,255,0.042);
  transform: translateY(-2px);
}
```

---

## Signature Treatments

### ■ Square Prefix
Used on all section eyebrows, labels, and metadata markers. Signals "this is a Danilarious property."

### Warm Gold Accent
`#e8c97e` is the primary accent for stars, highlights, active states, and key data points.

### Background Texture
A subtle crosshatch grid (28×28px) gives depth without distraction. Fades out toward the bottom via mask.

### Character Illustrations
The Danilarious brand features named character illustrations (Codemaster, Guitaralarious, Otis the Scout, etc.). These are a signature asset — when used in UI, they float freely, often cropped or at an angle. They signal personality and world-building.

### Section Reveal Animation
```css
@keyframes dani-fade-up {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### Star Count Treatment
Star counts use the warm gold accent color. Large numbers get a distinctive treatment.

---

## Page Templates

### Standard Page Structure
```
[Site Header / Nav — minimal, dark]
[Hero Section — eyebrow + display headline + description + metrics + CTA]
[Controls Section — search, filters]
[Category Nav — pill row]
[Results Grid — category sections with cards]
[Footer — minimal]
```

### GitStars Specific
The star count on each repo card should use `--dani-accent-warm` to visually echo the star metaphor and the brand's warm accent.

---

## Implementation Notes

### CSS Custom Properties File
The canonical token file is `brand-kit/tokens.css`. Import it first in any project:
```css
@import url('./brand-kit/tokens.css');
```

### Use in Future Repos
When creating a new Danilarious project:
1. Copy `brand-kit/tokens.css` and `brand-kit/typography.css` into the new repo
2. Reference this `BRAND-SYSTEM.md` for component patterns
3. Use `■` prefix for all section eyebrows
4. Always use `Space Grotesk` for display/headings and `DM Sans` for body
5. Warm gold (`#e8c97e`) as the primary accent — not white, not blue
6. Deep warm-black backgrounds, not pure black

---

## What Lives in This Folder

```
brand-kit/
├── BRAND-SYSTEM.md       ← This file: canonical brand documentation
├── tokens.css            ← CSS custom properties for all tokens
├── typography.css        ← Font import + type scale utilities
└── components.css        ← Reusable component primitives
```
