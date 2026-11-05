# THE MARKETING CLUB (MAC) — SRI VENKATESWARA COLLEGE
## Universal Architecture, CMS Rules & Web Expansion Manual

> **Document Version:** 1.0.0 (Master Release)  
> **Classification:** SYSTEM_DIRECTIVE // CODEBASE_STANDARD  
> **Applies to:** Core Engineering, UI/UX Design, Content Architects & Future Developers  
> **Scope:** Architecture, CMS decoupled models, design token enforcement, and SOP for adding new pages.

---

## 1. Architectural Philosophy & The Brutalist Design Code

The Marketing Club (MAC) website is strictly engineered under an **Anti-AI Industrial Neo-Brutalist** aesthetic. It takes inspiration from 1980s street-punk zines, technical blueprints, military command terminals, and risograph print ephemera.

### Absolute Design Invariants (Non-Negotiable)

1. **`border-radius: 0px !important` Across Everything:**
   - **Zero rounded corners.** No `rounded-md`, no `rounded-full`, no rounded pills, no pill badges.
   - Every card, button, container, input, modal, badge, and image frame MUST have razor-sharp 90° right angles.
   - Enforced globally in `src/styles/global.css`.

2. **Zero Gradients, Blurs, or Ambient Shadows:**
   - Soft drop shadows (e.g. `shadow-lg`, `shadow-xl`) and ambient blurs (`backdrop-blur-md`) are forbidden.
   - Use only **hard, 45° offset contrast drop shadows**:
     - Sub-elements & badges: `shadow-[2px_2px_0px_#000000]`
     - Standard cards & interactive buttons: `shadow-[4px_4px_0px_#000000]`
     - Heavy modal windows, lanyards & hero terminals: `shadow-[6px_6px_0px_#000000]` or `shadow-[8px_8px_0px_#000000]`
     - Active / Click state: `translate-x-[2px] translate-y-[2px] shadow-none`

3. **Heavy Structural Borders:**
   - Standard boundary: `border-2 border-stark-black` (2px solid `#000000`).
   - Major section dividers & terminal framing: `border-4 border-stark-black` (4px solid `#000000`).

4. **Official Color Palette Tokens:**
   | Token Name | Hex Code | Purpose |
   | :--- | :--- | :--- |
   | **`mac-yellow` / `primary-container`** | `#F0C903` | Primary society industrial yellow, active badges, warning tape, ticker |
   | **`stark-black`** | `#000000` | Universal border color, typography, contrast offset shadows |
   | **`tactical-white` / `pure-white`** | `#FFFFFF` | Card canvases, high-contrast text |
   | **`surface-canvas` / `off-white`** | `#F5F5ED` | Tactical blueprint page background |
   | **`tactical-stone`** | `#E5E5E5` / `#1A1A1A` | Secondary neutral containers, dark terminal interiors |
   | **`electric-cyan`** | `#00F0FF` | Technical/Research accent, Growth wing, data visualization |
   | **`warning-red`** | `#FF003C` | High-urgency stamps, Events wing, clearance alerts |

5. **Typography & Iconography Pairing:**
   - **Headings & Display:** `Inter` (Font weight: `800` Extrabold / `900` Black, uppercase, tight tracking `-0.04em`).
   - **Meta, Data, Terminals & Code:** `JetBrains Mono` (Font weight: `500` / `700`, monospace, uppercase labels).
   - **Iconography:** Google `Material Symbols Outlined` rendered as sharp, unstyled vector glyphs.

6. **Tactical Blueprint Grid & ASCII Textures:**
   - Body canvas uses a `32px` technical grid pattern (`blueprint-grid`).
   - Use structural ASCII annotations in UI copy: `///`, `[+]`, `[-]`, `[x]`, `▷`, `->`, `//`.

---

## 2. Directory Structure & File Organization

The workspace is organized into modular directories. Code and content are strictly segregated:

```
MAC_1/
├── .pages.yml                   # Universal headless CMS configuration (Pages CMS)
├── astro.config.mjs             # Astro 5 static site engine configuration
├── tailwind.config.mjs          # Tailwind design tokens, typography, and colors
├── package.json                 # Dependencies and build scripts
├── HANDOVER_GUIDE.md            # CMS operational handover guide for society leads
├── CMS_AND_DEVELOPER_GUIDE.md   # THIS DOCUMENT (Universal architecture & expansion SOP)
├── DESIGN.md                    # Core visual design guidelines and color specs
│
├── public/                      # Static web assets
│   ├── logo.svg                 # Vector speech-bubble brand logo
│   └── uploads/                 # Multimodal upload vaults
│       ├── images/              # All photos, portraits, logos, map graphics
│       ├── videos/              # Uploaded .mp4, .webm event aftermovies
│       └── documents/           # Uploaded .pdf rulebooks, magazines, decks
│
├── src/
│   ├── components/
│   │   └── ui/                  # Junior-proof reusable brutalist components
│   │       ├── BrutalImage.astro       # Aspect-ratio locked image with fallback
│   │       ├── BrutalMedia.astro       # Universal multimodal renderer (img/video/embed)
│   │       ├── BrutalFileDownload.astro # Download badge with file-size and type
│   │       ├── TerminalCard.astro      # 4px border terminal window container
│   │       ├── ZineSticker.astro       # Rotated punk callout sticker
│   │       └── AccordionDrawer.astro   # Accessible expandable drawer
│   │
│   ├── content/                 # Decoupled CMS Data Store (Zero Hardcoding)
│   │   ├── events/              # Flagship operations JSON files
│   │   ├── gallery/             # Evidence wall media JSON files
│   │   ├── intel/               # Research dossiers & reports (Markdown + Frontmatter)
│   │   ├── pages/               # Page-specific JSON data files
│   │   │   ├── arena.json       # Radar countdown and Evidence Wall settings
│   │   │   ├── blueprint.json   # Manifesto, 4 pillars, vision & mission
│   │   │   ├── contact.json     # Coordinates, map, form fields, sponsorship
│   │   │   ├── home.json        # Hero, metrics receipts, machinery, sponsors
│   │   │   └── intel.json       # MACzine spotlight and archives
│   │   ├── roster/              # Team and recruitment results JSON files
│   │   │   ├── results.json     # Clearance roll-call board data
│   │   │   └── team.json        # Core command & departmental operators
│   │   ├── settings/
│   │   │   └── global.json      # Global brand info, social URLs, caution ticker
│   │   └── testimonials/        # Alumni president exit dossier JSON files
│   │
│   ├── content.config.ts        # Astro content collections schema definition
│   ├── layouts/
│   │   └── BaseLayout.astro     # Master layout: ticker, navbar, drawer, footer
│   ├── pages/                   # Astro static file routes
│   │   ├── index.astro          # Page 1: Home
│   │   ├── blueprint.astro      # Page 2: Blueprint
│   │   ├── arena.astro          # Page 3: Arena
│   │   ├── intel/
│   │   │   ├── index.astro      # Page 4A: Intel Index
│   │   │   └── [slug].astro     # Page 4B: Intel Dossier Reader
│   │   ├── roster.astro         # Page 5: The Operators & Clearance Board
│   │   └── contact.astro        # Page 6: System Communication & Coordinates
│   ├── styles/
│   │   └── global.css           # Global brutalist resets & font imports
│   └── utils/
│       └── colorCycle.ts        # Dynamic brutalist color loop helpers
```

---

## 3. The 4 Golden CMS Decoupling Rules

When writing or modifying any page or component, adhere to these rules without exception:

### Rule 1: Zero Hardcoded Text in Templates
Never write strings like `"THE MARKETING CLUB"`, `"REGISTER NOW"`, or contact phone numbers inside `.astro` files.
- **Global strings:** Store in `src/content/settings/global.json`.
- **Page-specific strings:** Store in `src/content/pages/<page-name>.json`.
- **Repeatable items:** Store in dedicated collections (`src/content/<collection-name>/`).

### Rule 2: Junior-Proof Image Aspect-Ratio Shields
Uncropped phone photos uploaded by future students must never break or distort grid rows.
- **Always use `BrutalMedia.astro` or `BrutalImage.astro`.**
- Never write bare `<img src="..." />` tags in pages without aspect ratio protection.
- Required props: `src`, `alt`, and `aspectRatio` (`"1/1"` for headshots, `"16/9"` for banners/events, `"3/4"` for posters).
- Built-in error handling: If `src` is missing or fails to load, `BrutalMedia.astro` automatically hides the broken icon and renders a `#F0C903` brutalist placeholder box stamped:
  ```
  [!] /// VISUAL_ASSET_PENDING ///
  ```

### Rule 3: Uniform Media Routing
Media assets must reside exclusively in designated `public/uploads/` subdirectories:
- **`public/uploads/images/`**: `.jpg`, `.png`, `.webp`, `.svg`, `.avif`.
- **`public/uploads/videos/`**: `.mp4`, `.webm`, `.mov`.
- **`public/uploads/documents/`**: `.pdf`, `.pptx`, `.docx`, `.xlsx`, `.zip`.

In CMS files, reference them with absolute root-relative paths:
- Correct: `"/uploads/images/roster/aarav.jpg"`
- Correct: `"/uploads/documents/markopolis-27-rulebook.pdf"`
- Incorrect: `"../../public/images/photo.jpg"`

### Rule 4: Every Field Must Exist in `.pages.yml`
Whenever you add a field to a JSON or Markdown file, you **must** register that field in `.pages.yml`. Otherwise, CMS editors will not be able to see or edit it in the dashboard.

---

## 4. Reusable Brutalist UI Component Kit

All components reside in [`src/components/ui/`](file:///c:/Users/Anshuman/Desktop/MAC_1/src/components/ui/):

### 1. `BrutalMedia.astro` (Universal Media Renderer)
Renders images, `.mp4` video clips, or YouTube embeds with automatic aspect-ratio locking and failure shielding.
```astro
---
import BrutalMedia from '../components/ui/BrutalMedia.astro';
---

<BrutalMedia
  src="/uploads/images/arena/markopolis.jpg"
  videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  poster="/uploads/images/arena/markopolis.jpg"
  alt="MarkoPolis 2027 Simulation"
  aspectRatio="16/9"
  tag="SPECIMEN // ARENA_01"
  caption="FIG_01 // CORPORATE SIMULATION AUDITORIUM"
  border="border-2 border-stark-black"
  shadow="shadow-[4px_4px_0px_#000000]"
/>
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
  <div class="p-6">
    <p class="font-sans text-sm text-stark-black">Terminal content here...</p>
  </div>
</TerminalCard>
```

### 3. `ZineSticker.astro` (Rotated Callout Badge)
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

### 4. `AccordionDrawer.astro` (Declassified Expandable Drawer)
Provides zero-dependency accessible drawers for event rules, archives, and dossiers.
```astro
---
import AccordionDrawer from '../components/ui/AccordionDrawer.astro';
---

<AccordionDrawer
  id="drawer-round-01"
  title="STAGE 01: PRELIMINARY STRATEGY APTITUDE"
  badge="[FILTER ROUND]"
  defaultOpen={false}
>
  <div class="p-4 font-mono text-xs text-stark-black">
    Detailed simulation rules go here...
  </div>
</AccordionDrawer>
```

### 5. `BrutalFileDownload.astro` (Download Badge)
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

---

## 5. Standard Operating Procedure (SOP): Building a New Page

When the user asks you to build a new page (e.g. `/sponsorship`, `/alumni`, `/workshops`, or `/case-studies`), follow this exact 6-step checklist:

### Step 1: Create the CMS Data File
Decide whether the page is a **Single Page** or a **Collection**.

**For a single page:** Create `src/content/pages/<name>.json`:
```json
{
  "breadcrumb": "/// DIRECTORY: ROOT / 07_WORKSHOPS // TRAINING LABS",
  "securityTier": "CLASSIFIED TIER 02",
  "header": {
    "title": "TACTICAL MARKETING WORKSHOPS",
    "subtitle": "Hands-on masterclasses conducted by industry leaders and alumni.",
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

### Step 2: Register in `src/content.config.ts`
Add the collection to Astro's content schema so TypeScript types are automatically generated:
```typescript
import { defineCollection, z } from 'astro:content';

const workshopsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    breadcrumb: z.string(),
    securityTier: z.string(),
    header: z.object({
      title: z.string(),
      subtitle: z.string(),
      ctaText: z.string(),
      ctaLink: z.string(),
    }),
    modules: z.array(
      z.object({
        code: z.string(),
        name: z.string(),
        instructor: z.string(),
        duration: z.string(),
        curriculumPdf: z.string().nullable().optional(),
      })
    ),
  }),
});

export const collections = {
  // ... existing collections ...
  workshops: workshopsCollection,
};
```

### Step 3: Register in `.pages.yml`
Add the collection to `.pages.yml` under `content:` with explicit image and file pickers:
```yaml
  - name: workshops_page
    label: "🛠️ Workshops: Training Labs & Masterclass Curricula"
    type: file
    path: src/content/pages/workshops.json
    format: json
    fields:
      - name: breadcrumb
        type: string
      - name: securityTier
        type: string
      - name: header
        type: object
        fields:
          - name: title
            type: string
          - name: subtitle
            type: text
          - name: ctaText
            type: string
          - name: ctaLink
            type: string
      - name: modules
        label: Workshop Modules
        type: object
        list: true
        fields:
          - name: code
            type: string
          - name: name
            type: string
          - name: instructor
            type: string
          - name: duration
            type: string
          - name: curriculumPdf
            label: Curriculum PDF
            type: file
            options:
              media: documents
```

### Step 4: Build the Page Component (`src/pages/<name>.astro`)
Wrap the page in `BaseLayout.astro` and render the decoupled data:
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
  <main class="w-full min-h-screen bg-surface-canvas text-stark-black">
    <!-- Breadcrumb Header -->
    <div class="border-b-4 border-stark-black bg-mac-yellow py-3 px-4 md:px-8">
      <div class="max-w-[1280px] mx-auto flex items-center justify-between font-mono text-xs font-bold uppercase">
        <span>{data.breadcrumb}</span>
        <span class="hidden sm:inline-block bg-stark-black text-mac-yellow px-2 py-0.5">
          {data.securityTier}
        </span>
      </div>
    </div>

    <!-- Page Content Section -->
    <section class="max-w-[1280px] mx-auto px-4 md:px-8 py-12 md:py-16">
      <h1 class="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter text-stark-black">
        {data.header.title}
      </h1>
      <p class="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl mt-4">
        {data.header.subtitle}
      </p>

      <!-- Modules Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {data.modules.map((mod) => (
          <div class="bg-pure-white border-4 border-stark-black p-6 shadow-[4px_4px_0px_#000000]">
            <span class="font-mono text-xs font-bold bg-stark-black text-mac-yellow px-2 py-1">
              {mod.code}
            </span>
            <h2 class="font-display font-bold text-xl uppercase mt-4 text-stark-black">
              {mod.name}
            </h2>
            <p class="font-mono text-xs text-on-surface-variant mt-2">
              INSTRUCTOR: {mod.instructor} // DURATION: {mod.duration}
            </p>
            {mod.curriculumPdf && (
              <div class="mt-6">
                <BrutalFileDownload
                  href={mod.curriculumPdf}
                  title={`${mod.code}_CURRICULUM.PDF`}
                  fileSize="1.4 MB"
                  badgeText="SYLLABUS"
                  theme="yellow"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  </main>
</BaseLayout>
```

### Step 5: Update Navigation (If Applicable)
If the new page belongs in the main navbar or mobile drawer, update `navLinks` in [`src/layouts/BaseLayout.astro`](file:///c:/Users/Anshuman/Desktop/MAC_1/src/layouts/BaseLayout.astro):
```typescript
const navLinks = [
  { name: "HOME", href: "/", active: pathname === "/" },
  { name: "BLUEPRINT", href: "/blueprint", active: pathname === "/blueprint" },
  { name: "ARENA", href: "/arena", active: pathname === "/arena" },
  { name: "INTEL", href: "/intel", active: pathname === "/intel" },
  { name: "ROSTER", href: "/roster", active: pathname === "/roster" },
  { name: "WORKSHOPS", href: "/workshops", active: pathname === "/workshops" }, // Added
];
```

### Step 6: Verify Static Build
Always execute a production build before closing the task:
```powershell
npm.cmd run build
```
Verify that the output displays:
```
▶ src/pages/workshops.astro
  └─ /workshops/index.html
Complete!
```

---

## 6. Zero-Backend Serverless Form Relay Architecture

The contact form on `/contact` is engineered to be **100% serverless** with zero hosting database costs:

1. **Endpoint:** `https://formsubmit.co/ajax/mac.svc2016@gmail.com`.
2. **Honeypot Protection:**
   ```html
   <input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off" />
   ```
   Bots that crawl the form fill this field; the relay silently drops their payload.
3. **AJAX Submission with Status Feedback:**
   - On transmit: Button displays `/// TRANSMITTING PAYLOAD... ///`.
   - On `200 OK`: Green/cyan terminal badge flashes `[✓] PAYLOAD TRANSMITTED TO COMMAND CELL. STATUS 200 OK.`.
   - On failure / offline: Renders an immediate `mailto:` client fallback link so lead communications are never lost.

---

## 7. Quality Assurance & Pre-Flight Checklist

Before completing any task, check off every item on this list:

- [ ] **No Rounded Corners:** Inspect rendered elements for `rounded` classes. Verify zero radius.
- [ ] **No Hardcoded Strings:** Ensure all page text is imported from `src/content/`.
- [ ] **Images Protected:** Are all images wrapped with aspect-ratio containers (`BrutalMedia` or `BrutalImage`)?
- [ ] **Fallbacks Tested:** Does a missing or broken image path cleanly render `/// VISUAL_ASSET_PENDING ///`?
- [ ] **Mobile Responsiveness:** Tested on viewport widths:
  - Mobile: `375px` / `414px`
  - Tablet: `768px`
  - Desktop: `1280px`
- [ ] **CMS Registration:** Is the page/collection registered in `.pages.yml` with correct `media` types?
- [ ] **Clean Compilation:** Run `npm.cmd run build` and ensure all static routes generate with zero errors.
