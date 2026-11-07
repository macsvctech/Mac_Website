# AGENTS.md — Directives for AI Coding Assistants & Developers

This document defines the core architecture, non-negotiable styling invariants, and commit protocol for any developer or AI assistant working in this repository.

---

## ⚡ MANDATORY RULE: Auto-Update `README.md` on Every Commit

Whenever you make any change to code, content, pages, or configuration:
1. **Always run the automated README synchronizer** before committing:
   ```bash
   node scripts/update-readme.cjs
   ```
2. Ensure `README.md` is staged with your changes:
   ```bash
   git add README.md
   ```
3. If you added a new route, component, or CMS field, update the corresponding documentation sections in `README.md`.

---

## 🏛️ Non-Negotiable Brutalist Design Invariants

1. **`border-radius: 0px !important` Across Everything:**
   - **Zero rounded corners.** No `rounded-md`, no `rounded-full`, no rounded pills.
   - Enforced globally in `src/styles/global.css`.
2. **Hard 45° Contrast Offset Shadows (Zero Soft Blurs):**
   - Standard: `shadow-[4px_4px_0px_#000000]`.
   - Modals/Hero: `shadow-[6px_6px_0px_#000000]` or `shadow-[8px_8px_0px_#000000]`.
   - Click/Active: `translate-x-[2px] translate-y-[2px] shadow-none`.
3. **Heavy Structural Borders:**
   - Standard boundary: `border-2 border-stark-black` (2px solid `#000000`).
   - Frame/Divider: `border-4 border-stark-black` (4px solid `#000000`).
4. **Color Palette Tokens:**
   - Primary: `mac-yellow` (`#F0C903`)
   - Accent/Research: `electric-cyan` (`#00E5FF`)
   - Accent/Urgent: `system-red` (`#FF3B30`)
   - Canvas: `surface-canvas` (`#FFF8EF`) with 32px blueprint grid
   - Borders/Shadows: `stark-black` (`#000000`)
5. **Decoupled Content Architecture:**
   - **Never hardcode user-facing copy or links in templates.** All copy must be imported from `src/content/`.
   - All collection cards and sections must respect the visibility toggle: `enabled !== false` leaving 0 empty space.
   - All images must use `BrutalMedia.astro` or `BrutalImage.astro` with aspect-ratio locking and failure fallback.

---

## 🧪 Build Verification Before Task Closure
Always run a production build to verify static compilation:
```bash
npm run build
```
Verify all 14 static HTML routes compile with 0 errors before closing any task.
