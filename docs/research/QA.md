# Validation record

- npm run build: pass.
- npm test: four tests pass; includes parsing every bundled runtime JS file and verifying all original non-JS files against SHA-256 manifest.
- Desktop 1440 x 1000: reference and local viewport captures/full-page screenshots saved. Same original fonts, 48px/56px heading, CSS, rail geometry, demo and media. Content wraps vary with changed copy.
- Tablet 768 x 1024: reference/local screenshots saved; 48px heading, no horizontal overflow.
- Mobile 390 x 844: reference/local screenshots saved; 36px/42px heading, stacked hero, original mobile demo and binding details, no horizontal overflow.
- Catalogue Rajma search -> 1 result; South filter -> 2 records.
- Portion Rohan 2 ->2.5 verified in browser; calories1008 ->1120. State constraints and gram totals verified by Node test.
- FAQ expansion verified at390px; guide no overflow.
- Five chapter buttons exercised; original automatic sequencing and animated state progression observed.
- Video lightbox opens; original stream visible advancing through frames. Mux HLS manifest responds. Local footer MP4 checksum matches capture.
- Initial process hydration mismatch identified and repaired by replacing matching client string array entries. No subsequent app errors observed; prior log entries and unrelated Chrome extension warning are not current build failures.

Limitations: long video still streams from original Mux host. Compiled original UI retained as vendor runtime, not rewritten into source React components. Added source information resides in footer-accessible guide rather than extra landing sections, preserving the reference composition. Changed words prevent a claim of literal pixel identity.
