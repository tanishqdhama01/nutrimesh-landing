# Observed and retained behavior

- Background: fixed, repeating green texture/dot field with animated circles. Original renderer retained.
- Header: part of the scrolling paper assembly; desktop CTA hidden below desktop breakpoint.
- Hero: two columns from 768px; 36px/42px Denim semibold h1 at 390px, 48px/56px from 768px; original class rules preserved. At 1024px margins/padding, outer rails and binding details switch to wide layout.
- Demo: time-driven chapter sequence with manual Quota/Meeting/Draft/Slack/Next step buttons and pause/play. All original client code and visuals retained; buttons exercised in local build. No substitute screenshots or rebuilt mockups.
- Process: scroll-driven active step. Source component checks item top <= 0.5 * window.innerHeight and updates active index; resize/requestAnimationFrame also recalculate. Same component retained.
- Benefits: inline anchor terms, pointer/hover affordances and original visual animations remain unchanged. Main captions use NutriMesh copy.
- Manifesto: one column at mobile, two at 768px, three at 1280px; original fitter and trace SVG preserved. Reduced-motion still image retained.
- Video: original lightbox including close, backdrop, transition, same Mux playback ID and poster. Playback frame advancement observed in browser; stream manifest fetched successfully. Footer loop copied unchanged; preload none, muted/loop/playsinline, desktop hover behavior retained.
- Guide: four footer links open native dialog. Close button/Escape return focus to opener, background scroll locked. iframe contains all NutriMesh sections. At 390px guide stacks cards and nav wraps.
- Catalogue: case-insensitive search and region/category filters, 12 exposed source records. Rajma search returns 1; South filter returns 2. Empty state escapes input.
- Simulator: preset selection, +/- 0.5 katori, 0.5–3.5 clamp. Original nutrient data retained. Total grams now scale with selected portions (fixes source's stale displayed weight). Unit check: Rohan 2 -> 2.5, total 1008 ->1120 kcal; 55 ->61g protein;720 ->800g.
- FAQ: one expanded item at a time; accessible aria-expanded synchronized. Mobile browser click verified.

No horizontal page overflow at 390, 768 or 1440px. Guide iframe width equals scroll width at mobile and desktop. Original stylesheet checksums unchanged. Content lengths produce intentional differences in wraps and section height. No numerical pixel-difference score asserted.
