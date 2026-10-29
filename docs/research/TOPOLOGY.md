# Reference topology and implementation

Sources: https://operate.so/ and https://nutrimesh-xi.vercel.app/, captured 2026-10-29.

1. Fixed green mesh backdrop with repeating texture, vertical dot columns and animated decorative circles.
2. Framed identity strip: brand, preserved emblem, dashboard CTA at desktop width.
3. Paper hero: two outlined text regions, rounded corner arcs, binder holes/clips and animated application demo. Main heading and paragraph adapted; visual demo preserved as requested.
4. Process: four items, scroll-driven active circle at half viewport; desktop side gutter and ruled right column.
5. Household benefits: three preserved animated visual cards, adapted captions; inline terms link to the corresponding cards.
6. Manifesto: responsive newspaper columns, preserved animated trace emblem, caption strip.
7. Footer: guide links, dashboard CTA, original video trigger and hover loop.

Five main logical blocks combine identity, hero/process/benefits/manifesto/footer into the original composition. NutriMesh's seven source content sections live in a native dialog with an iframe, keeping the main page composition intact.

Implementation retains original document and compiled components rather than approximating their exact CSS, SVGs or timing. Editable narrative resides in src/content.json. Original CSS checksums remain unchanged. Build transforms text in HTML, RSC payload and compiled client strings; assets remain local. Original page analytics initializer disabled. Video stream stays on original Mux playback ID.

Source blueprint and computed style records: operate.html, desktop-styles.json, mobile-styles.json. Screenshots: ../design-references/. Source JS gives exact scroll thresholds and state transitions where browser inspection alone did not expose them.
