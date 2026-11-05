---
name: Brutalist Blueprint
colors:
  surface: '#fff8ef'
  surface-dim: '#e1d9c8'
  surface-bright: '#fff8ef'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf3e1'
  surface-container: '#f6eddb'
  surface-container-high: '#f0e7d6'
  surface-container-highest: '#eae2d0'
  on-surface: '#1f1b11'
  on-surface-variant: '#4d4632'
  inverse-surface: '#343024'
  inverse-on-surface: '#f8f0de'
  outline: '#7e7760'
  outline-variant: '#d0c6ab'
  surface-tint: '#705d00'
  primary: '#705d00'
  on-primary: '#ffffff'
  primary-container: '#f0c903'
  on-primary-container: '#675500'
  inverse-primary: '#eac400'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e2'
  on-secondary-container: '#646464'
  tertiary: '#00677d'
  on-tertiary: '#ffffff'
  tertiary-container: '#5edbff'
  on-tertiary-container: '#005e73'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe172'
  primary-fixed-dim: '#eac400'
  on-primary-fixed: '#221b00'
  on-primary-fixed-variant: '#554600'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1b1b1b'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#b3ebff'
  tertiary-fixed-dim: '#57d5f9'
  on-tertiary-fixed: '#001f27'
  on-tertiary-fixed-variant: '#004e5f'
  background: '#fff8ef'
  on-background: '#1f1b11'
  surface-variant: '#eae2d0'
  mac-yellow: '#F0C903'
  stark-black: '#000000'
  pure-white: '#FFFFFF'
  system-red: '#FF3B30'
  electric-cyan: '#00E5FF'
  system-blue: '#007AFF'
  blueprint-grid: '#D0C6AB'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 80px
    fontWeight: '900'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '800'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.5'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono-lg:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '700'
    lineHeight: '1.2'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
spacing:
  border-thick: 4px
  border-thin: 2px
  border-grid: 1px
  shadow-offset-lg: 8px
  shadow-offset: 6px
  shadow-offset-sm: 4px
  gutter: 24px
  margin-page: 32px
  stack-xs: 4px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 40px
  stack-xl: 64px
---

# Brutalist Blueprint: Master Design & Architecture System
**Organization:** The Marketing Club (MAC), Sri Venkateswara College, University of Delhi  
**Design Paradigm:** Architectural Zine / Tactical Digital Brutalism / CMS-Driven Modular Grid

---

## 1. Brand & Aesthetic Philosophy
The design system is rooted in **Digital Brutalism**, engineered specifically for **The Marketing Club (MAC)**. It completely rejects the sterile, rounded, gradient-heavy polish of standard AI-generated corporate SaaS templates in favor of a raw, tactile aesthetic that mirrors an **underground print zine**, an **architectural blueprint**, and a **tactical command terminal**.

* **Core Personality:** Bold, academic, industrial, and unapologetically loud (`"WE ARE THE NOISE."`).
* **Functional Honesty:** Show the "bones" of the website. Every container, image, text block, and button sits inside a visible structural frame with exposed borders and hard-edge offset shadows.
* **Strict Anti-AI Rules (Non-Negotiable):**
  1. **NO Rounded Corners:** Every element (`div`, `button`, `input`, `img`, `badge`) MUST have `border-radius: 0px`.
  2. **NO Gradients or Blurs:** Never use linear/radial gradients, glassmorphism (`backdrop-filter: blur`), or soft drop-shadows.
  3. **NO Opacity Fades:** All colors are 100% solid, opaque, flat fills.
  4. **NO Floating Text:** Every piece of content belongs inside a bordered box, a table row, or a stamped label.

---

## 2. Color System & Flat-Swap Logic

### 2.1 Structural Canvas Colors
* **Blueprint Paper (`#FFF8EF`):** The global page background. Warm, archival off-white that prevents eye strain while contrasting sharply with pure white cards.
* **Exposed Graph Grid (`#D0C6AB`):** A continuous `1px` vertical and horizontal background grid (`32px` by `32px` squares) drawn directly on top of the `#FFF8EF` canvas across the entire site.
* **Pure White (`#FFFFFF`):** Default fill for primary content cards, input fields, and reading containers.
* **Tactical Stone (`#EAE2D0`):** Secondary fill for neutral containers, inactive tabs, and structural framing blocks.
* **Stark Black (`#000000`):** Used for all `2px` and `4px` structural borders, hard offset shadows, primary typography, and the global footer.

### 2.2 High-Voltage Accent Palette
* **MAC Yellow (`#F0C903`):** Primary brand signifier. Used for primary CTA buttons, active tabs, highlighted text blocks, caution-tape tickers, and table-row hover states.
* **Electric Cyan (`#00E5FF`):** Secondary high-contrast accent. Used for timestamp tags (`EST. 2017`), secondary action buttons (`OUR WORK ->`), and department highlight blocks.
* **System Red (`#FF3B30`):** High-urgency accent. Used for tilted sticker callouts (`50+ CAMPAIGNS`), live event alerts, and department blocks.

### 2.3 Color Interaction Rules
Hover and active states NEVER lighten or dim a color using opacity. Instead, they trigger an instant **Flat Color Swap**:
* **Yellow Button Hover:** Fill swaps to Stark Black (`#000000`), Text swaps to MAC Yellow (`#F0C903`), Border remains Stark Black (`#000000`).
* **White Card/Row Hover:** Fill snaps to MAC Yellow (`#F0C903`) or Electric Cyan (`#00E5FF`), Text remains Stark Black (`#000000`).

---

## 3. Typography & Micro-Copy Conventions

### 3.1 Font Pairing
1. **Inter (Display & Body):**
   * **Display Headlines (`80px` Desktop / `48px` Mobile, Weight `900`, Line-Height `1.0`, Tracking `-0.04em`):** Set in ALL CAPS. Used for hero statements. Key words can be highlighted in `#F0C903` with a `2px` solid `#000000` text-stroke/outline and a `4px` hard black text-shadow.
   * **Section Headers (`48px` XL / `32px` LG, Weight `800`, Line-Height `1.1`):** Set in ALL CAPS, aligned flush-left to the grid.
   * **Body Copy (`20px` Lead / `16px` Standard, Weight `400`–`500`, Line-Height `1.6`):** High-legibility sentence case, constrained to `60ch–70ch` max width inside reading containers.
2. **JetBrains Mono (Technical Metadata & UI Controls):**
   * Used exclusively for navigation links, button labels, form field headers, date stamps, category tags, figure captions, and caution-tape tickers.
   * Always set in **ALL CAPS** with `letter-spacing: 0.05em`.

### 3.2 Brutalist Micro-Copy Syntax
To maintain the "Tactical Blueprint" personality across all pages, labels and headers must follow strict prefix patterns:
* **Triple-Slash Prefix (`///`):** Used before form labels, ticker segments, and section metadata (e.g., `/// IDENTIFIER [NAME]`, `/// THE MARKETING CLUB /// BUILD. MARKET. DISRUPT.`).
* **Terminal Prompt Prefix (`>`):** Used for dark header bars inside interactive modules (e.g., `> SYSTEM_COMMUNICATION`, `> NEXT_OPERATION_RADAR`).
* **Bracketed Parameters (`[ ]`):** Used for filter tabs, category chips, and action buttons (e.g., `[ALL INTEL]`, `[READ FULL DOSSIER +]`).
* **Figure & Spec Numbering:** Gallery items, departments, and alumni logs use indexed serial codes (`FIG_01 //`, `SPEC_02 //`, `ID // MAC-CORE-01`).

---

## 4. Layout, Grid & Spacing Architecture

### 4.1 Fixed Grid System
Content is housed inside a rigid container (`max-width: 1280px`, centered) over the infinite graph-paper background:
* **Desktop (`>= 1024px`):** 12 columns, `24px` gutters, `32px` outer page margin.
* **Tablet (`768px - 1023px`):** 8 columns, `16px` gutters, `24px` outer page margin.
* **Mobile (`< 768px`):** 4 columns, `12px` gutters, `16px` outer safe margin. Multi-column Bento blocks stack vertically into full-width `100%` blocks with `16px` vertical spacing.

### 4.2 Modular Cell Construction
Instead of floating elements in open whitespace, sections are constructed like **shipping containers or architectural tables**:
* Major page sections are framed by a `4px solid #000000` outer border.
* Internal subdivisions share `2px solid #000000` dividing walls (collapsed borders so adjacent cells do not double up to `4px` or `8px`).

---

## 5. Elevation, Borders & "Arcade Button" Physics

Depth is strictly binary and mechanical—created using solid black 45-degree offset shadows (`box-shadow: Xpx Ypx 0px #000000`):

* **Level 0 (Recessed / Background):** Flat against the `#FFF8EF` graph paper. `2px` border, `0px` shadow.
* **Level 1 (Structural Container):** Large section frames and static cards. `4px` border, `6px 6px 0px #000000` static shadow.
* **Level 2 (Interactive Button / Clickable Card):**
  * **Default State:** `4px` (or `2px`) solid `#000000` border + `6px 6px 0px #000000` shadow.
  * **Hover State:** Shadow expands to `8px 8px 0px #000000` while element translates `(-2px, -2px)` up-left (snappy `100ms` linear transition).
  * **Active / Click State ("Arcade Push"):** Element translates `(6px, 6px)` down-right so it completely covers its own shadow (`box-shadow: 0px 0px 0px #000000`), creating the physical sensation of pressing a mechanical switch into the page.

---

## 6. Universal Component Library

### 6.1 Global Top Bar & "Caution Tape" Recruitment Ticker
1. **CMS Toggle Ticker (Topmost Ceiling Strip):**
   * Full-width horizontal bar (`height: 36px`), background `#F0C903`, bottom border `2px solid #000000`, `JetBrains Mono` `13px` bold text.
   * Can be toggled `ON/OFF` in the CMS. When `ON`, displays scrolling or centered text: `/// RECRUITMENT RESULTS 2026-27 ARE LIVE — CLICK TO CHECK CLEARANCE ///`.
2. **Primary Navigation Header:**
   * Sticky full-width bar, background `#FFF8EF`, bottom border `4px solid #000000`, height `80px`.
   * **Left:** Club TV-Speech-Bubble Logo + `THE MARKETING CLUB` (`Inter` `22px` Black `900`, tight tracking).
   * **Center:** 5 clean links in `JetBrains Mono` `14px` (`HOME`, `BLUEPRINT`, `ARENA`, `INTEL`, `ROSTER`). Active page link gets a solid `#F0C903` rectangular background highlight with a `2px` black border.
   * **Right:** Primary CTA Button (`JOIN US` / `CONTACT`) with `#F0C903` fill, `2px` black border, and `4px 4px 0px #000000` shadow.

### 6.2 Tilted "Zine Sticker" Badges
* Rectangular callout boxes (`border: 2px solid #000000`, `box-shadow: 4px 4px 0px #000000`) rotated at a slight angle (`transform: rotate(-3deg)` or `rotate(2deg)`).
* Used sparingly on hero images and flagship event cards (e.g., `EST. 2017` in Cyan, `50+ CAMPAIGNS` in System Red, `"Creative chaos executed perfectly."` in Pure White).

### 6.3 Terminal Header Cards (`> MODULE_WINDOW`)
* Structural cards (`background: #FFFFFF`, `border: 4px solid #000000`, `box-shadow: 8px 8px 0px #000000`) topped with a `48px`-tall solid `#000000` title bar.
* Title bar text is set in `JetBrains Mono` `16px` bold `#F0C903` on the left (`> SYSTEM_COMMUNICATION`) with a small yellow terminal icon on the right.

### 6.4 Caution-Tape Slash Ribbon & Global Footer
* **Diagonal Caution Ribbon:** Directly above the footer on every page sits a full-width `#F0C903` banner (`border-top: 2px solid #000000`, `border-bottom: 2px solid #000000`, tilted `-0.5deg` or flush horizontal) repeating: `/// THE MARKETING CLUB /// SRI VENKATESWARA COLLEGE /// BUILD. MARKET. DISRUPT. /// EST. 2017 ///`.
* **Stark Black Footer:** Solid `#000000` block (`padding: 48px 32px`). Left shows `MAC` in `32px` `#F0C903` `Inter Black`. Middle holds `JetBrains Mono` white links (`INSTAGRAM`, `LINKEDIN`, `EMAIL`, `ARCHIVES`). Right holds copyright notice in `#E1D9C8`.

---

## 7. Page-by-Page Blueprint Specifications

### PAGE 1: `HOME` ("The Megaphone")
* **Section 1.1 — Hero Split Container:** Outer `#EAE2D0` frame (`4px` black border, `6px` hard shadow). Left white overlapping card holds `EST. 2017` cyan sticker, `WE ARE THE NOISE.` (`80px` Black + Yellow outlined display text), 2-line intro copy, and Cyan `OUR WORK ->` button. Right frame holds halftone yellow/black team photo with tilted red `50+ CAMPAIGNS` badge and white quote sticker.
* **Section 1.2 — "The Receipts" (5-Cell Impact Strip):** A full-width 5-column horizontal table (`4px` outer border, `2px` vertical dividers between cells, `#FFFFFF` background). Displays: `50,000+ MONTHLY REACH`, `50+ SPEAKER SESSIONS`, `1,700+ IG FOLLOWERS`, `1,100+ LINKEDIN FOLLOWERS`, `50+ BLOGS PUBLISHED`. Hovering any cell snaps its background to `#F0C903`.
* **Section 1.3 — "The Machinery" (Departments Bento Grid):** Header `THE MACHINERY` on the left with a black tag `OUR DEPARTMENTS` on the right. Asymmetric 2-row Bento grid of sharp cards (`2px` border, `6px` hard shadow) in Cyan, System Red, MAC Yellow, Pure White, and Tactical Stone showcasing the club's core functional wings (`Events & Logistics`, `Growth & Outreach`, `Social Media & PR`, `Technical & Research`).
* **Section 1.4 — "Backed By Giants" (Sponsor Conveyor Belt):** Full-width `#FFFFFF` strip with `4px` top/bottom borders. Continuous horizontal marquee of square `160px x 100px` sponsor cells (`Red Bull`, `Cornitos`, `The Belgian Waffle Co.`, `Balaji Wafers`) separated by `2px` vertical lines. Logos render in high-contrast monochrome by default and snap to full color with a `#F0C903` background on hover.
* **Section 1.5 — "Fresh Off The Press" (2-Column Teaser):** Left cell previews the next Flagship Event poster; Right cell lists the 2 latest `INTEL` articles as stacked newspaper-clipping rows.

### PAGE 2: `BLUEPRINT` ("How We Work" — About & Alumni Logs)
* **Section 2.1 — The Club Manifesto:** 2-column split frame. Left column features oversized brutalist typography summarizing MAC's 10-year legacy bridging classroom theory and real-world marketing execution; Right column features a framed documentary team photograph with a `FIG_00 // THE_COLLECTIVE` caption bar.
* **Section 2.2 — Interactive Filing Cabinet ("What Defines Us"):** A single wide structural container with 4 physical folder-tab buttons along the top edge: `[01_IDENTITY]`, `[02_WORK]`, `[03_APPROACH]`, `[04_PHILOSOPHY]`. Clicking a tab changes the container's header bar color (Yellow, Cyan, Red, White) and swaps the content inside—eliminating repetitive vertical scrolling.
* **Section 2.3 — Vision & Mission Blueprint Plaques:** Two side-by-side equal-height cards with `#000000` terminal header bars (`/// SPEC_01: OUR VISION` and `/// SPEC_02: OUR MISSION`) over `#FFF8EF` blueprint-tinted interiors.
* **Section 2.4 — Department Spec Sheet:** 4 stacked full-width horizontal rows (`2px` borders). Each row contains: Index Number (`01`–`04`), Department Title (`headline-lg`), a concise 3-line operational description, and rectangular `JetBrains Mono` skill chips (`[SPONSORSHIP PITCHING]`, `[MARKET RESEARCH]`, `[BRAND STRATEGY]`).
* **Section 2.5 — "Exit Interviews" (Collapsible President Dossiers):** Cards for past leadership (`Devanshu Gupta — President 2025-26`, `Govind Kumar — Vice-President 2025-26`). Each card displays a square `1:1` high-contrast portrait on the left, a bold 2-line pull-quote on the right, and an interactive `[READ FULL DOSSIER +]` button that expands an accordion drawer containing their full farewell letter.

### PAGE 3: `ARENA` ("Events & Visual Proof" — Events & Gallery)
* **Section 3.1 — `> NEXT_OPERATION_RADAR` (Live Event Banner):** Terminal-framed alert box at the top of the page. Supports two CMS modes:
  * **Active Mode:** Shows upcoming event title, date/venue metadata, countdown timer, and a large `#F0C903` `REGISTER NOW ->` button linking to Google Forms/Unstop.
  * **Standby Mode:** Displays `/// STATUS: COOKING OUR NEXT FLAGSHIP OPERATION — STAY TUNED ///`.
* **Section 3.2 — The Big Three Flagship Dossiers:** 3 massive full-width horizontal showcase cards (`MARKOPOLIS // BI-ANNUAL EVENT`, `ZEAL // ANNUAL EVENT`, `ROTOMAC // INTRA-SOC BATTLEGROUND`). Each card pairs a `16:9` framed poster/photo on one side with event lore, participant metrics, and an expandable photo/winner highlight drawer on the other.
* **Section 3.3 — "The Evidence Wall" (Filterable Polaroid Gallery):** Top filter bar with square toggle buttons (`[ALL EVIDENCE]`, `[MARKOPOLIS]`, `[ZEAL]`, `[BTS & CAMP]`). Below is a 3-column grid of square polaroid frames (`background: #FFFFFF`, `border: 2px solid #000000`, `padding: 12px 12px 36px 12px`, `box-shadow: 4px 4px 0px #000000`) with a `JetBrains Mono` caption stamped along the bottom white strip (`FIG_04 // MARKOPOLIS_FINALS`).

### PAGE 4: `INTEL` ("The Zine & Research Stand" — Publications)
* **Section 4.1 — `MACzine` Annual Issue Spotlight:** Full-width hero container (`background: #F0C903`, `border: 4px solid #000000`, `box-shadow: 8px 8px 0px #000000`). Left side displays a tilted 3D/flat cover preview of the latest `MACzine` issue; Right side displays issue number, release date, editor's note, and a stark black button `[DOWNLOAD / READ PDF ↗]`.
* **Section 4.2 — Filterable Editorial Feed:** Category filter buttons (`[ALL INTEL]`, `[RESEARCH REPORTS]`, `[BLOGS]`, `[CASE STUDIES]`).
* **Section 4.3 — Featured Zine Clippings (Top 3 Grid) + Archive Timetable:**
  * **Top 3 Posts:** Displayed as 3 vertical brutalist cards (`16:9` thumbnail with `2px` bottom border, category tag in Cyan/Yellow, bold title capped at 2 lines, date + reading time in `JetBrains Mono`).
  * **Older Archive List:** Styled as a full-width industrial timetable below the grid. Each article is a single table row (`DATE` | `CATEGORY TAG` | `ARTICLE TITLE` | `AUTHOR` | `READ ->`) separated by `2px` black horizontal lines. Hovering a row turns the entire bar `#F0C903`.

### PAGE 5: `ROSTER` ("The Operators" — Team & Results)
* **Section 5.1 — Core Command ID Badges (Presidential Trio):** 3-column grid for `President`, `Vice-President`, and `General Secretary`. Styled like vertical backstage security passes (`background: #FFFFFF`, `border: 4px solid #000000`, `box-shadow: 6px 6px 0px #000000`):
  * Top black strip with `ID // MAC-CORE-01` and decorative barcode graphic.
  * Square `1:1` portrait with a `2px` black border (no circular crops).
  * `#F0C903` name banner (`Inter` `24px` ExtraBold) + role subtitle in `JetBrains Mono`.
  * Bottom split bar with two equal-width square buttons: `[CONTACT ✉]` and `[LINKEDIN ↗]`.
* **Section 5.2 — Department Operator Switchboard:** 4 clickable department tabs that filter the coordinator photo cards and junior member directory table so the page stays fast and compact.
* **Section 5.3 — "Clearance Granted" (`RESULTS 2026-27` Terminal Board):** A dedicated terminal box at the bottom of the page (linked directly from the top Caution Tape banner) that lists newly inducted society members organized by department in `JetBrains Mono` columns.

### PAGE 6: `CONTACT` ("System Communication")
* **2-Column Asymmetric Split (`1280px` container):**
  * **Left Column (6 Cols) — `> SYSTEM_COMMUNICATION` Terminal Card:** White card with `4px` border, `8px` offset shadow, and black terminal header bar. Contains 4 stacked input groups (`/// IDENTIFIER [NAME]`, `/// NETWORK [EMAIL]`, `/// PROTOCOL [SUBJECT]`, `/// PAYLOAD [MESSAGE]`) with `2px` black borders and `JetBrains Mono` placeholders (`ENTER_NAME`, `TRANSMIT_DATA...`). Ends with a full-width `#F0C903` `TRANSMIT >` arcade button (`4px` border, `6px` shadow).
  * **Right Column (6 Cols) — `COORDINATES` Dossier Card:** Top `#F0C903` header block with location pin icon, `COORDINATES` (`48px` ExtraBold), and a white inset box displaying the address in `JetBrains Mono` (`SRI VENKATESWARA COLLEGE, BENITO JUAREZ ROAD, DHAULA KUAN, NEW DELHI, 110021` + phone `+91 9813774500`). Middle section displays a high-contrast yellow/black tactical street map with a `[VIEW MAP]` button. Bottom section (`EXTERNAL LINKS`) stacks 3 full-width interactive table rows (`INSTAGRAM ↗`, `LINKEDIN ↗`, `EMAIL ↗`) that light up in `#F0C903` on hover.

---

## 8. CMS-First "Junior-Proof" Guardrails
Because this website will be maintained by future non-technical college students via **Pages CMS**, all page templates must enforce these 5 structural safety rules in code:

1. **Strict Image Aspect-Ratio Locks:** Juniors will upload photos of random dimensions (vertical phone screenshots, horizontal DSLR photos, square posters). Every image container MUST enforce `object-fit: cover` with fixed aspect ratios:
   * Team Portraits & Evidence Wall Photos: `aspect-ratio: 1 / 1` (Square)
   * Blog Thumbnails & Flagship Event Banners: `aspect-ratio: 16 / 9` (Widescreen)
   * `MACzine` Covers: `aspect-ratio: 3 / 4` (Vertical Magazine)
2. **Headline & Excerpt Line-Clamping:** Long blog titles or event descriptions in grid cards must never stretch one card taller than its neighbors. Use CSS `line-clamp: 2` for card titles and `line-clamp: 3` for card summaries, while CSS Grid `align-items: stretch` keeps all sibling boxes in a row locked to the exact same height.
3. **Accordion Drawers for Long Text:** Long-form content on overview pages (like 400-word President farewell letters on `BLUEPRINT` or full event rules on `ARENA`) must be tucked inside an expandable `[READ FULL DOSSIER +]` drawer so the visual grid never turns into a wall of text.
4. **Automatic Fallback Placeholders:** If a future editor forgets to upload a blog cover image or team headshot in the CMS, the card must automatically display a styled brutalist fallback graphic (`#F0C903` background with a centered `JetBrains Mono` stamp: `/// VISUAL_ASSET_PENDING ///`) so broken image icons never appear.
5. **Zero-Config Color Cycling:** When juniors add new items to repeating lists (like new departments, new events, or new tags), the template should automatically cycle through the approved accent tokens (`#F0C903` -> `#00E5FF` -> `#FF3B30` -> `#FFFFFF`) so editors never have to pick hex codes manually.