# Composition Laws

**Version:** 1.0 (April 2026)

These laws dictate how individual shapes, colors, and type treatments combine to form a layout that feels distinctly Danilarious without devolving into chaos.

## 1. The 5px Mathematical Baseline
The underlying structure of all layouts must adhere to a strict math logic. We do not use arbitrary padding values.
- **Base Unit:** 5px.
- **Half-Step:** 2.5px (Reserved exclusively for borders and very tight layout logic).
- **Scale Applications:** Padding, margins, and gaps must run on a 5px multiplier (e.g., 5px, 10px, 15px, 20px, 40px, 80px).
- **Why:** This ensures modularity and aligns structurally with the hard, vector-driven art style.

## 2. Grid Discipline vs. Visual Interruption (80/20 Rule)
A Danilarious composition relies on structure first, surprise second.
- **80% Grid Discipline:** The vast majority of elements on a page must align perfectly to columns, rows, and the overarching 5px spatial scale.
- **20% Interruption:** Introduce a visual interruption (a tilted tab, an overlapping character, an offset motif) to break the grid. 

## 3. Density and Over-Decoration Restrictions
Never fill a page with color simply because you can.
- **Accent Limit:** Do not use more than two high-vibrancy accent colors (e.g., Orange + Purple, or Coral + Green) battling for attention in a single viewport. 
- **Character Limit:** Use a single, large character illustration as a focal anchor per section. Do not dump six characters into the same container.
- **White Space:** Heavy typography and bold structural borders require massive amounts of negative space (Cream background) to "breathe". Never cramp elements.

## 4. Layering Sequence
When multiple elements intersect, follow this Z-index and border logic hierarchy:
1. `Base:` Grid Background
2. `Mid:` Container Element (White/Yellow/Cream-3 Fill)
3. `Object:` Character Illustration or Secondary Card overlapping the edge of the Mid container.
4. `Top:` Overlapping text (dani-h1/h2) cutting across the boundary line.

*Every layer overlap must maintain the 2.5px Ink separator.*
