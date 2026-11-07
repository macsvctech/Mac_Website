---
title: "Auto-Update README on Every Commit"
trigger: "always_on"
description: "MANDATORY RULE: Automatically synchronize and update README.md telemetry, routes, and changelog whenever modifying code, content, or making commits."
---

# MANDATORY INVARIANT: Keep README.md Synchronized on Every Commit

Whenever you add, modify, or remove code, content, collections, or configurations in this codebase:

1. **Never Commit Outdated Documentation:**
   Before staging files or committing changes, you **MUST** run the automated synchronizer:
   ```bash
   node scripts/update-readme.cjs
   ```
2. **Review `README.md` Changes:**
   Ensure the live telemetry table and rolling change ledger in `README.md` reflect the current git commit, accurate collection counts, and operational status.
3. **Stage `README.md` with the Commit:**
   Include `README.md` in every git commit:
   ```bash
   git add README.md
   ```
4. **Adhere to the Brutalist Design Code:**
   - Strict `0px` border radius across all elements (`border-radius: 0px !important`).
   - Hard 45° offset contrast drop-shadows only (`shadow-[4px_4px_0px_#000000]`).
   - Heavy 2px / 4px stark-black structural borders.
   - Zero hardcoded text in templates (all content decoupled into `src/content/`).
   - All uploaded images and media must be protected with `BrutalMedia.astro` or `BrutalImage.astro`.
