# ⚡ THE MARKETING CLUB (MAC) — SRI VENKATESWARA COLLEGE
### Official Web Platform & Digital Command Center
> **Classification:** UNRESTRICTED // TECHNICAL & ARCHITECTURAL MASTER MANUAL  
> **Repository:** `https://github.com/macsvctech/Mac_Website.git`  
> **Main Branch:** `main` • **Hosting:** Vercel Edge Network • **Headless CMS:** Pages CMS  
> **Aesthetic Standard:** Anti-AI Industrial Neo-Brutalist (Strict 0px Border Radius)

---

## 📡 Live Telemetry & System Status

<!-- TELEMETRY_START -->
| Metric / Parameter | Live Telemetry Specification |
| :--- | :--- |
| **System Status** | `OPERATIONAL // 100% STATIC ZERO-JS CORE` |
| **Last Synchronized** | `2026-11-08 01:00:01 IST` |
| **Git Snapshot / Commit** | `1ae7e5d` (`main` branch, commit #32) |
| **Last Commit Directive** | `feat(intel): add legacy publications callout strip below header with full design tokens` |
| **Engine Framework** | `Astro v5.4.2` (Islands Static Architecture) |
| **Styling Tokens** | `Tailwind CSS v3.4.19` (Anti-AI Brutalist 0px Radius) |
| **Headless CMS Engine** | `Pages CMS` via `.pages.yml` (13 Content Sections, 3 Media Vaults) |
| **Static Build Routes** | **14 Compiled HTML Pages** (9 Core Topologies + 5 Dynamic Slugs) |
| **Decoupled Data Store** | **3** Flagship Events • **6** Intel Dossiers • **6** Exit Dossiers • **6** Evidence Specimens |
| **Form Relay Architecture**| `Formspree AJAX` (Serverless Endpoint Relay + Honeypot + Fallback) |
<!-- TELEMETRY_END -->

### 📜 Rolling Directives & Change Ledger
<!-- LOG_START -->
| Commit | Timestamp (IST) | Directive / Message | Committer |
| :--- | :--- | :--- | :--- |
| `1ae7e5d` | `2026-11-08 01:00:01 IST` | feat(intel): add legacy publications callout strip below header with full design tokens | `MAC SVC` |
| `c3d9ba8` | `2026-11-07 21:49:40 IST` | feat(contact): wire Formspree endpoint xaeezddr via AJAX with progressive fallback | `MAC SVC` |
| `539005f` | `2026-11-07 21:35:02 IST` | chore: cleanup duplicate root files and add _stitch_reference/ to .gitignore | `MAC SVC` |
| `7998215` | `2026-11-07 21:14:02 IST` | chore: remove legacy _stitch_reference sketchbook weight (10+ MB) | `MAC SVC` |
| `58ce543` | `2026-11-07 21:05:57 IST` | update: site content and assets (07-11-2026 20:42:46.89) | `MAC SVC` |
| `0e3a527` | `2026-11-07 20:42:47 IST` | chore(docs): sync telemetry snapshot with commit 4ce8502 | `MAC SVC` |
| `4ce8502` | `2026-11-07 20:17:11 IST` | docs: add ultra-detailed README, pre-commit synchronizer, and auto-update rules | `MAC SVC` |
| `1adb7eb` | `2026-11-07 20:16:43 IST` | feat(cms): add comprehensive operator guardrails, tooltips, select constraints, and non-technical operator manual | `MAC SVC` |
<!-- LOG_END -->

---

## 🏛️ 1. Executive Overview & Society Mandate

**The Marketing Club (MAC)** is the premier student-run marketing organization of **Sri Venkateswara College, University of Delhi**, established in **2016**. 

MAC functions not as a generic collegiate society, but as a simulated strategic marketing agency and training proving-ground. It executes high-stakes corporate conclaves (**MarkoPolis**), nationwide recruitment drives, flagship marketing challenges (**ZEAL**, **RotoMAC**), annual publications (**MACzine**), and deep-dive industry research reports.

This web platform serves as:
1. **The Public Showcase:** An immersive, high-contrast, brutalist dossier documenting society history, verified telemetry metrics, and alumni placements.
2. **The Operations Proving Ground:** An interactive live competition radar with digital countdown timers, live rulebooks, and registration portals.
3. **The Knowledge Vault (Intel):** A publication repository for research whitepapers, marketing teardowns, and digital magazine editions.
4. **The Cadre Roster:** The declassified official directory of the Core Command, Department Coordinators, and Recruitment Clearances.

---

## 🎨 2. Architectural Philosophy: The Brutalist Code

The MAC website is built with an **Anti-AI Industrial Neo-Brutalist** design language. It is intentionally engineered to contrast sharply against cookie-cutter corporate SaaS templates, AI-generated generic gradients, and soft pastel designs.

```
       +--------------------------------------------------------+
       | [!] ARCHITECTURAL INVARIANT: 0px BORDER-RADIUS GLOBALLY |
       +--------------------------------------------------------+
       |  • ZERO rounded corners on ANY element                 |
       |  • ZERO soft blurs or diffused box-shadows              |
       |  • ONLY 45° offset contrast drop-shadows               |
       |  • 32px graph-paper technical blueprint grid           |
       |  • Heavy 2px / 4px stark-black structural borders      |
       +--------------------------------------------------------+
```

### Absolute Non-Negotiable Styling Rules:

1. **`border-radius: 0px !important` Across Everything:**
   - **Zero rounded corners.** No `rounded-md`, no `rounded-full`, no rounded pills, no pill badges.
   - Enforced globally in `src/styles/global.css`:
     ```css
     *, *::before, *::after {
       border-radius: 0px !important;
     }
     ```

2. **Hard 45° Offset Drop Shadows (No Blurs):**
   - Soft shadows (`shadow-lg`, `shadow-xl`) and ambient blurs (`backdrop-blur-md`) are forbidden.
   - Use only solid offset contrast shadows:
     - Micro elements & tags: `shadow-[2px_2px_0px_#000000]`
     - Standard cards & interactive buttons: `shadow-[4px_4px_0px_#000000]`
     - Heavy hero modules & command terminals: `shadow-[6px_6px_0px_#000000]` or `shadow-[8px_8px_0px_#000000]`
     - Active / Click state: `translate-x-[2px] translate-y-[2px] shadow-none`

3. **Heavy Structural Borders:**
   - Standard boundary: `border-2 border-stark-black` (2px solid `#000000`).
   - Major section dividers & terminal framing: `border-4 border-stark-black` (4px solid `#000000`).

4. **Official Design Token Palette:**
   | Token Name | Hex Code | Semantic Role |
   | :--- | :--- | :--- |
   | **`mac-yellow`** | `#F0C903` | Primary society industrial yellow, active badges, caution tape, ticker |
   | **`stark-black`** | `#000000` | Universal structural border, primary typography, offset contrast shadows |
   | **`pure-white`** | `#FFFFFF` | Card interior canvases, high-contrast text |
   | **`surface-canvas`** | `#FFF8EF` | Tactical blueprint page background with 32px grid |
   | **`tactical-stone`** | `#EAE2D0` | Secondary container fill, neutral panels |
   | **`electric-cyan`** | `#00E5FF` | Technical/Research accent, Growth wing, active filters |
   | **`system-red`** | `#FF3B30` | High-urgency alerts, live broadcast tags, Events wing |

5. **Typography & Iconography Pairing:**
   - **Headings & Display:** `Inter` (Font weight: `800` Extrabold / `900` Black, uppercase, tight tracking `-0.04em`).
   - **Meta, Data, Terminals & Code:** `JetBrains Mono` (Font weight: `500` / `700`, monospace, uppercase labels).
   - **Iconography:** Google `Material Symbols Outlined` rendered as sharp, unstyled vector glyphs.

6. **Tactical Blueprint Grid & ASCII Textures:**
   - Body canvas uses a `32px × 32px` technical grid pattern (`#D0C6AB`).
   - Use structural ASCII annotations in UI copy: `///`, `[+]`, `[-]`, `[x]`, `▷`, `->`, `//`.

---

## 🏗️ 3. Technology Stack & Technical Core

```
┌─────────────────────────────────────────────────────────────┐
│                      VERCEL EDGE NETWORK                    │
│             Global CDN Distribution • Edge Routing          │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│                    ASTRO 5.4 STATIC ENGINE                  │
│       Zero-JS Static HTML Core • Content Collections v2     │
└──────────────┬──────────────────────────────┬───────────────┘
               │                              │
┌──────────────▼──────────────┐┌──────────────▼───────────────┐
│     TAILWIND CSS 3.4        ││       PAGES CMS ENGINE       │
│ Industrial Brutalist Tokens ││  Git-Backed Headless Schema  │
│ 32px Graph Grid • 0px Radius││  YAML Mapped to JSON/MD Store│
└─────────────────────────────┘└──────────────────────────────┘
```

* **Framework:** [Astro v5.4.2](https://astro.build/) — Static Site Generation (SSG) with islands architecture. Generates 100% pure static HTML and CSS by default, providing near-instant page load times and zero runtime database vulnerability.
* **Styling:** [Tailwind CSS v3.4.19](https://tailwindcss.com/) with `@astrojs/tailwind`. Configured with custom brutalist tokens and strict zero-radius constraints.
* **Content Collections:** Astro's built-in `astro:content` with Zod schema validation (`src/content.config.ts`).
* **Headless CMS:** [Pages CMS](https://pagescms.org/) backed by GitHub repository commits via `.pages.yml`. Allows non-technical operators to edit all content with zero coding.
* **Form Handling:** Serverless AJAX relay via [Formspree](https://formspree.io/) (`https://formspree.io/f/xaeezddr`) with hidden honeypot spam protection and automatic mailto fallback.
* **Hosting & CI/CD:** [Vercel](https://vercel.com/) with automated GitHub webhook deployments (live in ~45 seconds) and 2-second instant rollback.
* **Local Git Tooling:** MinGit portable git engine with 1-click sync automation via `push-to-github.bat`.

---

## 📁 4. Complete Codebase & Directory Map

```
MAC_1/
├── .agents/                          # AI Assistant & Antigravity project rules
│   └── rules/
│       └── readme-sync.md            # Rule enforcing automatic README updates
├── .git/                             # Git VCS repository
│   └── hooks/
│       └── pre-commit                # Git hook executing scripts/update-readme.cjs
├── .pages.yml                        # Universal Pages CMS headless schema (13 sections)
├── AGENTS.md                         # Workspace instructions for coding AI agents
├── GEMINI.md                         # Project directives for Gemini / AGY
├── astro.config.mjs                  # Astro 5 configuration & Tailwind integration
├── tailwind.config.mjs               # Custom brutalist color tokens & font stacks
├── package.json                      # NPM dependencies & build automation scripts
├── package-lock.json                 # Dependency lockfile
├── push-to-github.bat                # 1-Click Windows synchronizer to origin/main
├── OPERATOR_MANUAL.md                # 1-Page non-technical guide for student operators
├── CMS_AND_DEVELOPER_GUIDE.md        # Comprehensive expansion & architectural guide
├── DESIGN.md                         # Visual design tokens & color specifications
├── README.md                         # THIS FILE (Master technical documentation)
│
├── public/                           # Static public web assets
│   ├── logo.svg                      # Official society vector logo
│   ├── robots.txt                    # Search engine crawling rules
│   └── uploads/                      # Dedicated Multimodal Upload Vaults
│       ├── images/                   # All photos, portraits, logos, map graphics
│       │   ├── home/                 # Hero photos & background loops
│       │   ├── arena/                # Event key artwork & posters
│       │   ├── intel/                # Article covers & magazine thumbnails
│       │   ├── roster/               # Council portraits & coordinator headshots
│       │   ├── testimonials/         # Alumni president exit portraits
│       │   └── screens/              # OpenGraph & social preview screenshots
│       ├── videos/                   # Uploaded .mp4, .webm event aftermovies
│       └── documents/                # Uploaded .pdf rulebooks, magazines, decks
│
├── scripts/                          # Engineering & Maintenance Automation
│   └── update-readme.cjs             # Automated telemetry & README synchronizer
│
└── src/
    ├── components/
    │   └── ui/                       # Junior-proof reusable brutalist components
    │       ├── AccordionDrawer.astro    # Accessible expandable simulation drawer
    │       ├── BlueprintDivider.astro   # Industrial hazard warning stripe separator
    │       ├── BrutalFileDownload.astro # Download badge with file-size and type tag
    │       ├── BrutalImage.astro        # Aspect-ratio locked image with fallback
    │       ├── BrutalMedia.astro        # Multimodal renderer (img/video/embed)
    │       ├── TerminalCard.astro       # 4px border terminal window container
    │       └── ZineSticker.astro        # Rotated punk callout sticker
    │
    ├── content/                      # Decoupled CMS Data Store (Zero Hardcoding)
    │   ├── events/                   # Flagship operations JSON files
    │   │   ├── 01-markopolis.json    # MarkoPolis annual corporate simulation
    │   │   ├── 02-zeal.json          # ZEAL marketing challenge
    │   │   └── 03-rotomac.json       # RotoMAC collaborative marketing conclave
    │   ├── gallery/                  # Evidence wall media JSON files
    │   │   ├── 01-bts-night-ops.json # Archival photo specimen 01
    │   │   └── ...                   # Additional gallery specimens
    │   ├── intel/                    # Research dossiers & reports (Markdown)
    │   │   ├── 10-minute-dopamine-quick-commerce.md
    │   │   ├── ai-driven-search-seo-evolution.md
    │   │   ├── guerrilla-marketing-under-5000.md
    │   │   ├── liquid-death-canned-water-cult.md
    │   │   ├── neuromarketing-in-gen-z-apparel.md
    │   │   └── the-rise-of-challenger-brands.md
    │   ├── pages/                    # Page-specific structured JSON models
    │   │   ├── arena.json            # Radar countdown and Evidence Wall settings
    │   │   ├── blueprint.json        # Manifesto, 4 pillars, vision & mission
    │   │   ├── contact.json          # Coordinates, map, form fields, sponsorship
    │   │   ├── home.json             # Hero, metrics receipts, machinery, sponsors
    │   │   ├── intel.json            # MACzine spotlight and archives
    │   │   └── testimonials.json     # Alumni vault telemetry metrics & settings
    │   ├── roster/                   # Team and recruitment results JSON files
    │   │   ├── results.json          # Clearance roll-call board data
    │   │   └── team.json             # Core command & departmental operators
    │   ├── settings/                 # Global website settings
    │   │   └── global.json           # Global brand info, social URLs, caution ticker
    │   └── testimonials/             # Alumni president exit dossier JSON files
    │       ├── 01-devanshu-gupta.json# Founder / President [2016-17]
    │       ├── 02-govind-kumar.json  # President [2017-18]
    │       ├── 03-ananya-sharma.json # President [2021-22]
    │       ├── 04-raghav-mehra.json  # President [2022-23]
    │       ├── 05-tanya-kapoor.json  # President [2023-24]
    │       └── 06-vikram-singh.json  # President [2024-25]
    │
    ├── content.config.ts             # Astro content collections schema definition
    ├── layouts/
    │   └── BaseLayout.astro          # Master layout: ticker, navbar, drawer, footer
    ├── pages/                        # Astro static file routes (14 compiled pages)
    │   ├── 404.astro                 # Custom brutalist error terminal
    │   ├── arena.astro               # Page: Live Competition Radar & Evidence Wall
    │   ├── blueprint.astro           # Page: Manifesto, Pillars, Vision & Wings
    │   ├── contact.astro             # Page: System Terminal, Coordinates & Map
    │   ├── index.astro               # Page: Home Hero, Receipts, Machinery & Sponsors
    │   ├── intel/
    │   │   ├── index.astro           # Page: Intel Publication Feed & MACzine Spotlight
    │   │   └── [slug].astro          # Page: Dynamic Dossier Reader & PDF Downloader
    │   ├── roster.astro              # Page: Command Hierarchy & Recruitment Roll
    │   └── testimonials.astro        # Page: Alumni Presidents & Exit Logs Vault
    ├── scripts/
    │   └── sfx.js                    # Native Web Audio synthesizer & tactile controller
    ├── styles/
    │   └── global.css                # Global brutalist resets & font imports
    └── utils/
        └── colorCycle.ts             # Dynamic brutalist color loop helpers
```

---

## 🗄️ 5. Content Management Architecture (Pages CMS)

All website content is **strictly decoupled** from template markup. Zero content is hardcoded into `.astro` files.

Non-technical student operators edit everything via **Pages CMS** ([app.pagescms.org](https://app.pagescms.org)), configured via `.pages.yml`.

### The 13 Managed Content Sections:
1. **📢 Global Brand & Navigation (`global_settings`):** Logo, favicon, society brochure, caution-tape recruitment ticker, navigation links, and footer telemetry.
2. **🏠 Home Page (`home_page`):** Hero split unit (photo/video), verified metrics counters, 4 department cards, and corporate sponsor logo belt.
3. **📐 Blueprint Page (`blueprint_page`):** Founding manifesto, 4 interactive pillars, vision & mission 2030, and operational wings syllabi.
4. **🎙️ Testimonials: Exit Dossiers (`testimonials`):** Individual alumni president exit logs with quotes, portraits, and tenures.
5. **🏛️ Testimonials Page Settings (`testimonials_page`):** Top statistics telemetry banner for the alumni vault.
6. **🚨 Arena: Countdown Radar (`arena_radar`):** Live event countdown clock, event status badge, key art poster, and downloadable simulation rulebook.
7. **🎪 Arena: Flagship Operations (`events`):** MarkoPolis, ZEAL, and RotoMAC dossiers, stages, footfall statistics, and aftermovies.
8. **📸 Arena: Evidence Wall (`gallery`):** Event photograph and video specimens with category filters (`ALL`, `MARKOPOLIS`, `ZEAL`, `SPEAKERS`, `BTS`).
9. **📕 Intel: MACzine Spotlight (`intel_spotlight`):** Annual anthology magazine cover, complete digital PDF issue, and historic volume archives.
10. **📰 Intel: Research Reports & Blogs (`intel_articles`):** Market research dossiers and blogs authored in Markdown with PDF attachments.
11. **🪪 Roster: Team Directory (`roster_team`):** Core Command officer lanyards, Department Coordinator cards, and full operative directory table.
12. **✅ Roster: Recruitment Results (`recruitment_results`):** Live selection announcement board and sealed PDF shortlist download.
13. **📡 Contact: Terminal & Map (`contact_page`):** Physical campus coordinates, blueprint campus map graphic, and corporate partnership deck PDF.

### The 3 Media Storage Vaults:
* **`public/uploads/images/`**: Photos, portraits, sponsor logos, tactical map graphics (`.jpg`, `.png`, `.webp`, `.svg`).
* **`public/uploads/videos/`**: Aftermovie video files and background loops (`.mp4`, `.webm`, `.mov`).
* **`public/uploads/documents/`**: Downloadable rulebooks, magazines, syllabi, and decks (`.pdf`, `.pptx`, `.docx`, `.xlsx`, `.zip`).

### The Visibility Toggle Mechanism ("Switch, Don't Delete"):
Every collection item and major page section includes a boolean toggle:
```yaml
- name: enabled
  label: "Visible on Website? (Toggle ON/OFF)"
  type: boolean
  default: true
```
In Astro page templates, items and sections are filtered using strict conditional checks:
```typescript
// Filter collection items
const activeEvents = allEvents.filter(e => e.data.enabled !== false);

// Conditional section rendering (zero empty space left)
{hero.enabled !== false && (
  <section class="hero-container">...</section>
)}
```
When an operator toggles an item OFF, it is immediately removed from the DOM and leaves **zero empty gap or blank space**.

---

## 🧩 6. Reusable Brutalist UI Component Kit

All shared UI components reside in `src/components/ui/`. Future developers must use these components rather than writing custom ad-hoc HTML:

### 1. `BrutalMedia.astro` (Universal Multimodal Media Renderer)
Renders images, `.mp4` video loops, or YouTube video embeds with built-in aspect-ratio locking and automatic fallback shielding.
```astro
---
import BrutalMedia from '../components/ui/BrutalMedia.astro';
---

<BrutalMedia
  src="/uploads/images/arena/markopolis.jpg"
  videoUrl="/uploads/videos/markopolis-aftermovie.mp4"
  poster="/uploads/images/arena/markopolis.jpg"
  alt="MarkoPolis Corporate Conclave"
  aspectRatio="16/9"
  tag="SPECIMEN // ARENA_01"
  caption="FIG_01 // CORPORATE CONCLAVE AUDITORIUM"
  border="border-2 border-stark-black"
  shadow="shadow-[4px_4px_0px_#000000]"
/>
```
* **Fallback Behavior:** If `src` is missing or fails to load, `BrutalMedia.astro` automatically hides the broken icon and displays a `#F0C903` brutalist placeholder box stamped:
  ```
  [!] /// VISUAL_ASSET_PENDING ///
  ```

### 2. `TerminalCard.astro` (Command Terminal Container)
Renders a 4px black-bordered terminal card with top title bar and status indicator.
```astro
---
import TerminalCard from '../components/ui/TerminalCard.astro';
---

<TerminalCard
  promptTitle="> CLASSIFIED_INTEL // DOSSIER_42"
  statusBadge="[STATUS: VERIFIED]"
  headerColor="#000000"
  textColor="#F0C903"
>
  <div class="p-6 font-mono text-sm text-stark-black">
    Terminal content here...
  </div>
</TerminalCard>
```

### 3. `ZineSticker.astro` (Rotated Punk Callout Badge)
Renders an offset punk-zine sticker with dynamic background color and rotation.
```astro
---
import ZineSticker from '../components/ui/ZineSticker.astro';
---

<ZineSticker
  text="50+ CAMPAIGNS EXECUTED"
  color="yellow"   <!-- 'yellow' | 'red' | 'cyan' | 'white' | 'stone' -->
  rotation="-rotate-2"
  size="md"        <!-- 'sm' | 'md' | 'lg' -->
/>
```

### 4. `AccordionDrawer.astro` (Accessible Expandable Drawer)
Provides zero-dependency accessible drawers for event rounds, rules, and syllabi.
```astro
---
import AccordionDrawer from '../components/ui/AccordionDrawer.astro';
---

<AccordionDrawer
  id="stage-01"
  title="STAGE 01: PRELIMINARY STRATEGY APTITUDE"
  badge="[FILTER ROUND]"
  defaultOpen={false}
>
  <div class="p-4 font-mono text-xs text-stark-black">
    Simulation instructions and scoring parameters go here...
  </div>
</AccordionDrawer>
```

### 5. `BrutalFileDownload.astro` (Standardized Document Download Badge)
Standardized download pill for PDFs, slide decks, and rulebooks.
```astro
---
import BrutalFileDownload from '../components/ui/BrutalFileDownload.astro';
---

<BrutalFileDownload
  href="/uploads/documents/markopolis-27-rulebook.pdf"
  title="MARKOPOLIS_RULEBOOK_2027.PDF"
  fileSize="3.8 MB"
  badgeText="OFFICIAL PDF"
  theme="yellow" <!-- 'yellow' | 'cyan' | 'red' | 'white' | 'stone' -->
/>
```

### 6. `BlueprintDivider.astro` (Industrial Hazard Warning Stripe)
Industrial striped border dividing major page segments.
```astro
---
import BlueprintDivider from '../components/ui/BlueprintDivider.astro';
---

<BlueprintDivider 
  label="SECTION 02 // INTEL PROVING GROUND" 
  color="yellow" 
/>
```

---

## 🛠️ 7. Developer Standard Operating Procedures (SOP)

### Local Development Setup:
1. **Prerequisites:** Node.js version `18.0.0` or higher installed.
2. **Install Dependencies:**
   ```powershell
   npm install
   ```
3. **Start Local Development Server:**
   ```powershell
   npm run dev
   ```
   Open `http://localhost:4321` in your browser.
4. **Compile Production Build:**
   ```powershell
   npm run build
   ```
   Astro will validate all content collections and compile static HTML files into `/dist`.

---

### Step-by-Step SOP: Building a New Page (e.g. `/workshops`)

Whenever future developers are tasked with adding a new page, follow this exact 6-step checklist:

#### Step 1: Create the Content JSON
Create `src/content/pages/workshops.json`:
```json
{
  "breadcrumb": "/// DIRECTORY: ROOT / 07_WORKSHOPS",
  "securityTier": "CLASSIFIED TIER 02",
  "header": {
    "title": "TACTICAL MARKETING WORKSHOPS",
    "subtitle": "Masterclasses conducted by industry leaders and alumni.",
    "ctaText": "[APPLY FOR NEXT LAB ->]",
    "ctaLink": "#register"
  },
  "modules": [
    {
      "code": "LAB_01",
      "name": "Performance Marketing & Unit Economics",
      "instructor": "Pooja Sharma",
      "duration": "4 WEEKS",
      "curriculumPdf": "/uploads/documents/lab-01-curriculum.pdf"
    }
  ]
}
```

#### Step 2: Register in `src/content.config.ts`
Add the collection to Astro's content schema so TypeScript types are automatically generated:
```typescript
const workshopsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/pages' }),
});

export const collections = {
  // ... existing collections ...
  workshops: workshopsCollection,
};
```

#### Step 3: Register in `.pages.yml`
Add the collection to `.pages.yml` under `content:` so CMS operators can edit it:
```yaml
  - name: workshops_page
    label: "🛠️ Workshops: Training Labs & Masterclass Curricula"
    type: file
    path: src/content/pages/workshops.json
    format: json
    fields:
      - name: breadcrumb
        type: string
      - name: header
        type: object
        fields:
          - name: title
            type: string
          - name: subtitle
            type: text
      - name: modules
        type: object
        list: true
        fields:
          - name: code
            type: string
          - name: name
            type: string
          - name: curriculumPdf
            type: file
            options:
              media: documents
```

#### Step 4: Build the Page Component (`src/pages/workshops.astro`)
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import BrutalFileDownload from '../components/ui/BrutalFileDownload.astro';
import data from '../content/pages/workshops.json';
---

<BaseLayout 
  title={`${data.header.title} /// THE MARKETING CLUB (MAC)`}
  description={data.header.subtitle}
>
  <main class="w-full min-h-screen bg-surface-canvas text-stark-black max-w-[1280px] mx-auto px-4 py-12">
    <h1 class="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter">
      {data.header.title}
    </h1>
    <p class="font-sans text-base text-on-surface-variant max-w-2xl mt-4">
      {data.header.subtitle}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
      {data.modules.map((mod) => (
        <div class="bg-pure-white border-4 border-stark-black p-6 shadow-[4px_4px_0px_#000000]">
          <span class="font-mono text-xs font-bold bg-stark-black text-mac-yellow px-2 py-1">
            {mod.code}
          </span>
          <h2 class="font-display font-bold text-xl uppercase mt-4">{mod.name}</h2>
          {mod.curriculumPdf && (
            <div class="mt-4">
              <BrutalFileDownload href={mod.curriculumPdf} title="CURRICULUM.PDF" fileSize="1.2 MB" badgeText="SYLLABUS" theme="yellow" />
            </div>
          )}
        </div>
      ))}
    </div>
  </main>
</BaseLayout>
```

#### Step 5: Update Main Navigation
Update `settings.navigation` in `src/content/settings/global.json` so the new page appears in the desktop navigation and mobile drawer.

#### Step 6: Verify Static Build
Execute `npm run build` and ensure all static routes compile cleanly with zero errors.

---


## 🔊 6. Brutalist Tactile & Sound Effects (SFX) Architecture

The website features an immersive, zero-dependency **Brutalist Tactile & Sound Effects (SFX)** system. It operates purely on the browser's native **Web Audio API** and **Navigator Vibration API** with **zero external audio files (`.mp3` / `.wav`)** and **zero third-party embeds**.

```
       +--------------------------------------------------------+
       |   NATIVE WEB AUDIO TACTILE SYNTHESIZER (sfx.js)        |
       +--------------------------------------------------------+
       |  • ZERO external audio files or network requests       |
       |  • Master gain locked to ~15% (dry, subtle, mechanical)|
       |  • Micro 8ms haptic vibration on supported devices     |
       |  • Auto-unlocks on first user pointerdown/click/keydown|
       |  • LocalStorage persistence (`mac_sfx_enabled`)        |
       |  • Header & drawer toggle chip (`SFX ON` / `SFX OFF`)  |
       +--------------------------------------------------------+
```

### 1. Synthesized Acoustic Signatures (Master Gain ~15%):
1. **`tick`:** Whisper-quiet 5ms micro-tick (2400Hz → 1400Hz sine burst with 5ms exponential decay). Triggered on hover over navigation links, buttons, conveyor belt sponsor stamps, and industrial archive timetable rows.
2. **`scaleTick(index)`:** 5-step ascending pitch tick (`300Hz`, `340Hz`, `380Hz`, `420Hz`, `460Hz`). Triggered on mouseenter across the 5 Impact Stat "Receipts" cells on the Home page.
3. **`thock`:** Crisp, low-mid 25ms mechanical keycap thock (sine/triangle pitch drop from `180Hz` to `60Hz` + 8ms haptic). Triggered on clicking primary/secondary brutalist buttons, MACzine download buttons, and tilted Hero stickers.
4. **`snap`:** Crisp 20ms cardstock folder snap / slide-projector clack (dual component: 860Hz snap impulse + 150Hz→45Hz wooden thud + 8ms haptic). Triggered on switching the 4 Blueprint Filing Cabinet tabs, Roster department tabs, Arena Evidence Wall filter chips, and clicking `[READ FULL DOSSIER +]`.
5. **`scan`:** Super-subtle 30ms terminal blip (880Hz sine at 10% volume). Triggered on hovering over Core ID card mock barcode strips and focusing into `> SYSTEM_COMMUNICATION` input fields.
6. **`transmit`:** Clean, subtle 3-pulse tactical radar / walkie-talkie confirmation beep (620Hz, 760Hz, 940Hz pulses + 10ms haptic). Triggered on submitting the Contact terminal form, clicking the Recruitment Caution-Tape banner, and filtering Roster clearance candidate wings.

### 2. Header & Mobile Drawer SFX Toggle Chip:
* **Position:** Located directly beside the Primary CTA button in the master header and inside the mobile navigation drawer.
* **Brutalist Specification:** JetBrains Mono uppercase, 0px border-radius, 2px solid `#000000` border, tight padding.
* **State `SFX ON` (Default):** Solid `#F0C903` (MAC Yellow) indicator square, `bg-pure-white text-stark-black`, hard `2px` contrast shadow (`shadow-[2px_2px_0px_#000000]`).
* **State `SFX OFF`:** Hollow indicator square, `bg-tactical-stone text-[#777060]`, no shadow (`shadow-none`).
* **Persistence:** Stored in `localStorage` under `mac_sfx_enabled` (defaults to `"true"`).
* **Feedback:** Instant UI synchronization across all open viewports, playing a confirmation `thock` when turned ON.

### 3. CMS Safety & Zero Hardcoding:
* The tactile SFX engine runs entirely in the layout frame (`src/scripts/sfx.js` and `src/layouts/BaseLayout.astro`) using automatic event delegation and clean `data-sfx` attributes.
* **Zero changes to `.pages.yml`** and **zero alterations to Markdown/JSON content files**, ensuring total compatibility with Pages CMS operators.

---

## ⚡ 8. Automated README Synchronizer & Maintenance Rules

This repository enforces an **Automated Telemetry & README Synchronization Rule**.

```
              ┌────────────────────────────────────────┐
              │           GIT COMMIT DIRECTIVE         │
              └───────────────────┬────────────────────┘
                                  │
                                  ▼
              ┌────────────────────────────────────────┐
              │   EXECUTE: scripts/update-readme.cjs   │
              │  • Scans Git Hash & Commit Message     │
              │  • Inspects Content Counts & Routes    │
              │  • Updates README.md Telemetry & Log   │
              └───────────────────┬────────────────────┘
                                  │
                                  ▼
              ┌────────────────────────────────────────┐
              │   STAGE README: git add README.md      │
              │   Commit snapshot finalized cleanly!   │
              └────────────────────────────────────────┘
```

### How the Rule Works:
1. **The Script (`scripts/update-readme.cjs`):** Reads the current Git commit hash, latest message, timestamp, package versions, and content collection counts, dynamically updating the telemetry table and rolling change log in `README.md`.
2. **The Git Pre-Commit Hook (`.git/hooks/pre-commit`):** Runs automatically whenever `git commit` is called in any terminal, keeping documentation synchronized with zero developer overhead.
3. **The 1-Click Batch Tool (`push-to-github.bat`):** Runs `scripts/update-readme.cjs` on Step 1 before staging and pushing to GitHub.
4. **NPM Build Integration:** `npm run build` executes `node scripts/update-readme.cjs` via the `prebuild` hook.
5. **AI Pair Programming Mandate:** Antigravity and Gemini assistants are bound by project rules (`.agents/rules/readme-sync.md` and `AGENTS.md`) requiring README synchronization before closing any task.

To run the synchronizer manually at any time:
```powershell
npm run readme:update
```

---

## 🚀 9. Deployment, CI/CD & Disaster Recovery

### GitHub Synchronization (1-Click Batch Tool)
Windows developers can double-click [`push-to-github.bat`](file:///c:/Users/Anshuman/Desktop/MAC_1/push-to-github.bat) in the project root:
1. Runs the README telemetry synchronizer.
2. Stages all modified files (`git add -A`).
3. Commits changes with a timestamped snapshot.
4. Pushes cleanly to `origin/main`.

### Continuous Deployment via Vercel:
* Every push to `main` triggers a production build on Vercel.
* Build Command: `npm run build` (or `astro build`).
* Output Directory: `dist`.
* Install Command: `npm install`.
* Build Time: ~35-45 seconds.

### Disaster Recovery: 2-Second Instant Rollback:
If an operator uploads a broken file or makes a critical error:
1. Open the [Vercel Dashboard](https://vercel.com/).
2. Navigate to the **Deployments** tab.
3. Locate the previous working deployment.
4. Click the options menu (`...`) and select **"Promote to Production"**.
5. The live site reverts to the previous working state in **2 seconds** without touching git or rewriting code.

---

## 🔒 10. Serverless Form Relay Architecture

The inquiry terminal on `/contact` is engineered to be **100% serverless** with zero backend database costs:
* **Endpoint:** `https://formspree.io/f/xaeezddr` (Decoupled in `src/content/pages/contact.json` & `.pages.yml`)
* **Spam Protection:** Hidden honeypot field (`<input type="text" name="_honey" style="display:none" />`). Automated bots that fill this field are silently dropped.
* **AJAX Feedback:** Dynamic UI state updates from `[ TRANSMITTING... ]` to `[ ✓ TRANSMISSION RECEIVED ]`.
* **Offline / Error Fallback:** Automatic `mailto:` mail client launcher fallback if the user is offline or the endpoint fails, ensuring no prospective lead or sponsor communication is ever lost.

---

## 📞 11. Maintenance, Support & Escalation Contacts

* **Organization:** The Marketing Club (MAC), Sri Venkateswara College, University of Delhi
* **Official Society Email:** `mac.svc2016@gmail.com`
* **Campus Address:** Dhaula Kuan, Benito Juarez Marg, South Campus, New Delhi, Delhi 110021
* **Technical Repository:** `https://github.com/macsvctech/Mac_Website.git`
* **Content Management Portal:** `https://app.pagescms.org`

---
*Manual compiled and maintained by the MAC Technical Division. All rights reserved © 2026-27.*
