# Content adaptation contract
Sources: ../operate-text.json and ../nutrimesh.html, ../nutrimesh-text.json.
Retain Operate DOM, exact CSS and all original illustrative media, demo chapters, videos and animation markup.
Replace marketing narrative with NutriMesh content: One Shared Pot. Individual Nourishment.; shared household cooking, portion weighted macros, 450+ Indian dishes, ICMR-NIN 2024, voice/photo/text logging, LP micro swaps, fasting, pantry budgeting.
Four operational steps cover Log / Share / Balance / Nourish; three leader captions cover household targets, regional meals and one-katori changes.
Replace manifesto with Indian shared kitchen story of similar length; no invented metrics or claims. Preserve the inline split heading structure by mapping its exact constituent fragments.
Get started -> Launch NutriMesh; Talk to us -> Open dashboard; /sign-up -> https://nutri-mesh-flow.base44.app/.
Footer Privacy / Terms / LinkedIn / X become Shared pot / Catalogue / Families / FAQ, pointing to #nutrimesh-details with data-detail sections handled by enhancement code.
All source NutriMesh content will also be available in a separate interactive details drawer, preserving catalogue, simulator, FAQ and testimonials without altering the reference landing page composition.
Output src/content.json: plain JSON object of exact source string -> replacement. Never map short generic terms like 1, Call or Demo; leave all illustrative demo content alone. Include titles, descriptions, marketing sentences and distinctive labels. Source strings must match decoded HTML text. Avoid strings that would affect JS identifiers (Operate -> NutriMesh only where a full sentence/brand node, handled separately).
No guessing CSS: unchanged original classes / CSS supply exact geometry and responsive rules (768px,1024px).
