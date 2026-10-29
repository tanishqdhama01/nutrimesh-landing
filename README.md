# NutriMesh landing page

Operate's captured layout, fonts, textures, illustrations, responsive CSS, demo animation and video, adapted to NutriMesh's product copy. Primary buttons open the existing NutriMesh Flow dashboard.

## Run

```sh
npm run dev
```

Open http://localhost:3000. No dependency installation required (Node 20+).

```sh
npm run build
npm test
```

`dist/` is a static deployable site. `vercel.json` configures the build/output directory. Local development builds once on startup; after editing run `npm run build` and reload the browser.

## Editing

- `src/content.json`: original phrase → replacement. Covers narrative, metadata and labels. Build applies replacements to both captured HTML/hydration payloads and relevant client bundles.
- `src/template.html`: captured reference document, including its React server component payload.
- `public/_next/` and `public/home/`: captured reference assets and compiled runtime. These preserve the original design and interactions; this is a static adaptation, not a reconstruction into editable React component source.
- `src/details.html`, `public/details.css`, `public/details.js`: original NutriMesh information restyled as a household guide, portion simulator, catalogue, testimonials and FAQ. Open these through the four footer links.
- `public/enhancements.*`: accessible native dialog that hosts the guide without changing the main landing page composition.
- `scripts/build.mjs`: reproducible content transformations, static image loading, external dashboard routing and removal of Operate analytics initialization.

Main page retains the reference's five sections: identity strip, hero/demo, process, household benefits, manifesto/footer. The guide contains seven content sections. Original sales visuals and video remain intentionally unchanged as requested. Text differences naturally change line wrapping; no claim of pixel identity for changed content.

49 reference files are recorded with original checksums in `docs/research/assets.json`; NutriMesh source hero image and logo are also captured. The long video uses the same public Mux stream as the reference, so it requires internet access and continued availability of that stream. The footer video loop is local and byte-identical.

The source landing page advertises 450+ dishes, but exposes 12 preview records. All 12 are retained; the guide labels this scope and links to the live application for the full catalogue. Original marketing and testimonial text is preserved in the guide.

## Evidence

`docs/design-references/` contains desktop, tablet and mobile captures of both sites and the local build. `docs/research/` retains source documents, computed typography, assets, interaction notes and component contracts. `scripts/capture.py` is an optional one-time network capture utility; builds and tests run offline from captured files.

Validation: build; four Node tests (text transformation, image URLs, asset integrity/runtime syntax, simulator calculations/limits); browser review at 1440, 768 and 390 pixels; catalogue search/region filter, portions, FAQ, demo chapters and video modal.
