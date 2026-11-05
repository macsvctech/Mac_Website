# THE MARKETING CLUB (MAC) — SRI VENKATESWARA COLLEGE
## Visual CMS Handover & Operations Guide for Incoming Teams

> **Classification:** UNRESTRICTED // OPERATIONAL MANUAL  
> **Target Audience:** Future Society Presidents, Vice-Presidents, Coordinators & Junior Operatives  
> **Engine:** Astro 5.0 + Tailwind CSS + Pages CMS (`https://app.pagescms.org`)  
> **Zero Code Required:** You do **not** need to touch terminal commands, HTML, or CSS to update this website.

---

### Table of Contents
1. [Executive Overview](#1-executive-overview)
2. [Connecting to the CMS (Pages CMS)](#2-connecting-to-the-cms-pages-cms)
3. [The 3 Media Storage Hubs](#3-the-3-media-storage-hubs)
4. [Master Guide to the 12 CMS Collections](#4-master-guide-to-the-12-cms-collections)
5. [Junior-Proof Guardrails & Fail-Safes](#5-junior-proof-guardrails--fail-safes)
6. [Form Submissions & Lead Ingestion](#6-form-submissions--lead-ingestion)
7. [Local Testing Cheat-Sheet (Optional)](#7-local-testing-cheat-sheet-optional)

---

### 1. Executive Overview

This web platform is built with an industrial, high-contrast brutalist design inspired by 1980s street-punk zines, technical blueprints, and military terminal displays. 

Every single piece of text, metric counter, team portrait, countdown timer, event rulebook, research article, and sponsorship deck is completely decoupled from the code. It all lives in human-readable JSON files and Markdown documents managed directly through **Pages CMS**.

Whenever you make an edit in Pages CMS and click **Save**, your changes are committed to the GitHub repository, and your hosting platform (Vercel, Netlify, or Cloudflare) automatically rebuilds and publishes the live site in under 60 seconds.

---

### 2. Connecting to the CMS (Pages CMS)

1. Open your web browser and navigate to **[https://app.pagescms.org](https://app.pagescms.org)**.
2. Click **Sign in with GitHub**. (Ensure your GitHub account has admin or collaborator access to the website repository).
3. Select the repository (e.g. `your-society/mac-website`) and branch (`main`).
4. You will immediately see the custom dashboard with our **12 content collections** and **3 media storage hubs** pre-configured in `.pages.yml`.

---

### 3. The 3 Media Storage Hubs

In the Pages CMS navigation bar, click on **Media** to view the separated asset categories:

| Storage Hub | Local Directory | Allowed File Types | Intended Usage |
| :--- | :--- | :--- | :--- |
| **`Images & Visual Assets`** | `public/uploads/images/` | `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`, `.svg`, `.gif` | Council portraits, event photos, sponsor logos, tactical maps, evidence wall shots. |
| **`Video Clips & Teasers`** | `public/uploads/videos/` | `.mp4`, `.webm`, `.mov` | Event aftermovies, hero video background loops, campaign teasers. *(Note: You can also paste direct YouTube/Vimeo URLs into video fields!)* |
| **`PDFs, Decks & Documents`** | `public/uploads/documents/` | `.pdf`, `.pptx`, `.docx`, `.xlsx`, `.zip` | Annual MACzine editions, MarkoPolis rulebooks, recruitment clearance rolls, sponsorship decks, department syllabi. |

---

### 4. Master Guide to the 12 CMS Collections

Here is how to manage each section of the website:

#### 01. 📢 Global Brand, Logo, Caution Ticker & Footer (`src/content/settings/global.json`)
- **Top Caution-Tape Marquee Ticker:** Set `enabled` to `true` or `false` to turn on/off the high-voltage recruitment ticker at the very top of every page. Change `text` to announce new events, results, or deadlines.
- **Brand Info:** Update official contact email (`mac.svc2016@gmail.com`), phone number, campus address, and official brochure PDF download.
- **Logos:** Replace `logoUrl` or `faviconUrl` with a new vector `.svg` or `.png`.

#### 02. 🏠 Home Page (`src/content/pages/home.json`)
- **Hero Unit:** Change the main headline, mission statement, primary and secondary button labels, and swap the hero image/video loop.
- **The Receipts (Metrics):** Update live numbers like `50,000+ MONTHLY DIGITAL REACH`, `50+ SPEAKER SESSIONS`, or `1,700+ INSTAGRAM FOLLOWERS`.
- **The Machinery (Departments):** Tweak department descriptions, colors (`cyan`, `red`, `yellow`, `white`, `stone`), or attach specific department intro videos/PDFs.
- **Past Sponsors:** Add or remove partner logos (Red Bull, Cornitos, Belgian Waffle, Unstop, etc.) and toggle whether they are highlighted in bright yellow.
- **Fresh Off The Press:** Feature the upcoming flagship event spotlight and link directly to its registration portal.

#### 03. 📐 Blueprint Page (`src/content/pages/blueprint.json`)
- **Manifesto:** Edit the founding declaration, historical milestone badge, and the collective team photo.
- **4 Declassified Pillars:** Edit the four interactive tabs (`01. OUR IDENTITY`, `02. OUR WORK`, `03. OUR REACH`, `04. OUR ALUMNI`).
- **Vision & Mission:** Refine the 2030 target vision and operational mandate.
- **Operational Wings:** Update the four department summaries, key skill badges, and upload downloadable department overview decks.

#### 04. 🎙️ Blueprint: Alumni President Exit Dossiers (`src/content/testimonials/`)
- Each alumni president gets their own individual JSON file in this collection.
- To add a new outgoing president: Click **New**, fill in their name, tenure (e.g., `PRESIDENT [2026-27]`), pull quote, full declassified exit letter, and upload their 1:1 square portrait.

#### 05. 🚨 Arena: Live Next-Operation Countdown, Poster & Rulebook (`src/content/pages/arena.json`)
- **Live Radar Switch:** Set `isLive` to `true` when a major competition is active, or `false` to put the radar on standby.
- **Countdown Target Clock:** Enter the exact ISO timestamp in `targetDate` (e.g. `2027-03-15T09:00:00`). The website's live digital flip-clock will automatically compute Days, Hours, Minutes, and Seconds remaining.
- **Rulebook & Registrations:** Upload the event's `.pdf` rulebook and provide the Unstop or Google Form registration link.

#### 06. 🎪 Arena: Flagship Operations (`src/content/events/`)
- Manages MarkoPolis, ZEAL, and RotoMAC.
- Edit competition stages/rounds, footfall stats, key highlights, aftermovie video links, and case rulebook PDFs.
- Expandable accordion drawers allow delegates to inspect each round's format without leaving the page.

#### 07. 📸 Arena: Evidence Wall Photo & Video Gallery (`src/content/gallery/`)
- Upload event photos and aftermovie video clips from campus conclaves.
- Assign a filter category: `ALL`, `MARKOPOLIS`, `ZEAL`, `SPEAKERS`, or `BTS`.
- Enter figure numbers (e.g. `FIG_01`, `FIG_02`) to maintain the military evidence log aesthetic.

#### 08. 📕 Intel: Annual MACzine Spotlight (`src/content/pages/intel.json`)
- **Cover Artwork:** Upload the new magazine cover image (`/uploads/images/intel/maczine-cover.jpg`).
- **Digital PDF:** Upload the complete magazine PDF (`/uploads/documents/maczine-issue-XX.pdf`).
- **Volume Archives:** Add links and metadata for past magazine editions so visitors can read the historic archives.

#### 09. 📰 Intel: Research Reports, Blogs, Case Studies & PDFs (`src/content/intel/`)
- Write and publish new market research reports and blogs using Markdown.
- Frontmatter fields include: Title, Category (`Research Report`, `Blog`, `Case Study`, `Podcast / Video`), Read Time, Author, Dossier ID, Cover Image, and an optional downloadable PDF/slide deck.
- The built-in rich text editor allows inline images, code snippets, blockquotes, and headings.

#### 10. 🪪 Roster: Core Council & Department Directory (`src/content/roster/team.json`)
- **Core Command Council:** Update the 3 Presidential lanyard badges (President, Vice-President, General Secretary) with names, courses, mandates, and 1:1 square portraits.
- **Departments Switchboard:** Select from Events, Growth, PR, or Technical to update department coordinators (with photos and LinkedIn links) and junior operators.
- **Official Roster PDF:** Upload the signed council list for administrative verification.

#### 11. ✅ Roster: Recruitment Results 2026-27 & Clearance Board (`src/content/roster/results.json`)
- **Publish Toggle:** Set `isPublished: true` to broadcast clearance results on the website, or `false` to hide the board during evaluation.
- **Clearance Search Board:** Prospective recruits can type their name or roll number into the live terminal to see their clearance status in real-time.
- **Candidate Lists:** Group selected students by department wing with interview scores and rank indices.
- **Official Sealed PDF:** Upload the verified notification document for students to download.

#### 12. 📡 Contact: Coordinates & Sponsorship Pitch Deck (`src/content/pages/contact.json`)
- **Headquarters Coordinates:** Campus address, metro station, operational hours, and Google Maps pin.
- **Tactical Map:** Custom vector blueprint map of SVC South Campus precinct.
- **Sponsorship Pitch Deck:** Upload the latest corporate pitch deck (`.pdf`) with file size for brand managers to download.
- **Recipient Email:** The destination address that receives submissions from the website contact terminal.

---

### 5. Junior-Proof Guardrails & Fail-Safes

To ensure that future juniors cannot accidentally break the layout, the website includes built-in protective engineering:

1. **Aspect-Ratio Shields (`BrutalMedia.astro`):**
   - Headshots are hard-locked to `1/1` square aspect ratio.
   - Event banners and hero units are locked to `16/9`.
   - Even if someone uploads an uncropped 4000×3000 vertical photo from their phone, the system automatically centers and crops it with `object-fit: cover` and a `2px solid #000000` border without distorting adjacent grid items.
2. **Missing-Photo Safety Net:**
   - If a photo path is empty, broken, or fails to load, the site hides the broken image icon and displays an industrial yellow fallback box stamped:
     ```
     [!] /// VISUAL_ASSET_PENDING ///
     ```
3. **No Code Spoilage:**
   - Because content is kept in JSON and Markdown, juniors do not need to edit layout templates or Tailwind utility classes.

---

### 6. Form Submissions & Lead Ingestion

The contact terminal on `/contact` uses **FormSubmit AJAX** relay to forward inbound sponsorship, speaker, and student inquiries directly to:
```
mac.svc2016@gmail.com
```

- **Zero Server Costs:** Runs completely serverless without requiring a paid backend or database.
- **Honeypot Anti-Spam:** An invisible field catches automated web scrapers and drops bot submissions.
- **Status 200 Feedback:** When a message transmits successfully, the terminal flashes:
  ```
  [✓] PAYLOAD TRANSMITTED TO COMMAND CELL. STATUS 200 OK.
  ```
- **Fallback Redundancy:** If the visitor's internet connection blocks API calls, the terminal automatically generates a pre-filled direct `mailto:` button so no sponsor lead is ever lost.

---

### 7. Local Testing Cheat-Sheet (Optional)

If a technical coordinator wants to test the website locally on their laptop:

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```
2. Start the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:4321` in your browser.

3. Verify production compilation before pushing changes:
   ```bash
   npm run build
   ```
   All 12 static HTML routes will be compiled into the `dist/` folder.

---

**COMMAND DIRECTIVE:** Keep this manual in the project repository root. Pass this guide to incoming President & Secretarial teams during annual leadership transitions.
