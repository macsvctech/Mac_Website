# GEMINI.md — Directives for Gemini CLI and Antigravity

- **Auto-Update README Rule:** Every commit must run `node scripts/update-readme.cjs` and include `README.md`.
- **Aesthetic:** Strict Anti-AI Neo-Brutalist (0px border radius, 45° offset drop shadows, 32px grid).
- **CMS Decoupling:** All content lives in `src/content/` and is configured via `.pages.yml`. Zero hardcoded copy in `.astro` files.
- **Verification:** Always execute `npm run build` to confirm 14 static routes compile cleanly.
