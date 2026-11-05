---
name: Digital Brutalist Blueprint
colors:
  surface: '#fff8f0'
  surface-dim: '#E1D9C8'
  surface-bright: '#fff8f0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#FBF3E1'
  surface-container: '#F6EDDB'
  surface-container-high: '#F0E7D6'
  surface-container-highest: '#e8e2d9'
  on-surface: '#1F1B11'
  on-surface-variant: '#4D4632'
  inverse-surface: '#343024'
  inverse-on-surface: '#F8F0DE'
  outline: '#7E7760'
  outline-variant: '#d0c6ab'
  surface-tint: '#705d00'
  primary: '#705d00'
  on-primary: '#ffffff'
  primary-container: '#f0c903'
  on-primary-container: '#675500'
  inverse-primary: '#eac400'
  secondary: '#006875'
  on-secondary: '#ffffff'
  secondary-container: '#00e3fd'
  on-secondary-container: '#00616d'
  tertiary: '#c0000a'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffbcb3'
  on-tertiary-container: '#b10008'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe172'
  primary-fixed-dim: '#eac400'
  on-primary-fixed: '#221b00'
  on-primary-fixed-variant: '#554600'
  secondary-fixed: '#9cf0ff'
  secondary-fixed-dim: '#00daf3'
  on-secondary-fixed: '#001f24'
  on-secondary-fixed-variant: '#004f58'
  tertiary-fixed: '#ffdad5'
  tertiary-fixed-dim: '#ffb4aa'
  on-tertiary-fixed: '#410001'
  on-tertiary-fixed-variant: '#930005'
  background: '#fff8f0'
  on-background: '#1e1b16'
  surface-variant: '#e8e2d9'
  stark-black: '#000000'
  tactical-stone: '#EAE2D0'
  pure-white: '#FFFFFF'
  blueprint-grid: '#D0C6AB'
  system-blue: '#007AFF'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 80px
    fontWeight: '900'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '900'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '800'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 30px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  label-mono-lg:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.05em
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 12px
    letterSpacing: 0.05em
spacing:
  gutter: 1.5rem
  gutter-tablet: 1rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-tablet: 1.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 2.5rem
  space-xl: 4rem
---

## Brand & Style

This design system delivers a tactile, anti-aesthetic digital blueprint that fuses underground punk zine culture, architectural drafting schematics, and tactical command terminals. Engineered for high-urgency visibility and uncompromising institutional energy, the interface wholly rejects contemporary homogenized web tropes: soft gradients, frosted glass, rounded geometries, and diffuse ambient drops are strictly outlawed. 

The aesthetic is grounded, physical, and unyielding. The target audience—ambitious collegiate creatives, corporate sponsors, and student strategists—interacts with an interface modeled after raw archival paper, heavy ink, mechanical relays, and terminal consoles. Interfaces must evoke the tactile gravity of physical dossier folders, classified manifests, and arcade hardware. Every layout decision reinforces functional honesty, structural permanence, and raw graphic power.

## Colors

The foundational canvas is Archival Blueprint Paper (`#FFF8EF`), an unbleached drafting sheet patterned with an exposed 1px grid in Blueprint Grid (`#D0C6AB`). High-contrast containment is driven by Stark Black (`#000000`), used unsparingly across all structural outlines, primary type, and hard projection drop-shadows.

Chromatic signifiers operate with total functional hierarchy:
- **Primary (MAC Yellow - `#F0C903`):** Critical interactive triggers, active navigation indicators, marquee caution bands, and high-priority call-to-action surfaces.
- **Secondary (Electric Cyan - `#00E5FF`):** Metadata timestamps, verification stamps, secondary actionable links, and dossier tags.
- **Tertiary (System Red - `#FF3B30`):** Critical alerts, urgent deadlines, and tilted dynamic sticker accents.
- **Tactical Stone (`#EAE2D0`):** Secondary container fills, inactive tab backplates, and metadata callout panels.
- **Pure White (`#FFFFFF`):** High-legibility reading panes, dossier dossiers, and polarized card surfaces.

### Interaction Rule: Flat-Color Swap Logic
Gradients, blurs, and fractional opacity transitions are prohibited. State transitions execute through binary color swaps:
- **Yellow Button Hover:** Fill snaps to `#000000`, label text snaps to `#F0C903`, border remains `2px solid #000000`.
- **Card / Row Hover:** Surface fill snaps instantly from `#FFFFFF` to `#F0C903` (or `#00E5FF`); text remains `#000000`.
- **Monochrome Asset Hover:** Grayscale images snap to full-saturation color over a `#F0C903` offset backing.

## Typography

The typographic system pairs the muscular, hyper-condensed grotesque weight of Inter with the monospace technical precision of JetBrains Mono. All headlines, module titles, and label strings must be rendered in full uppercase (`text-transform: uppercase`).

### Micro-Copy Syntax Tokens
To uphold the technical drafting motif, labels and technical lines must follow strict micro-copy syntactical rules:
- **Triple-Slash Prefix (`///`):** Applied to form identifiers, field titles, and caution text (e.g., `/// IDENTIFIER [NAME]`, `/// DISPATCH_LOG`).
- **Terminal Prompt (`>`):** Reserved for system bars and module titles (e.g., `> MODULE_WINDOW_01`).
- **Mechanical Brackets (`[ ]`):** Encapsulates button actions, toggles, and metadata filters (e.g., `[FILTER: ACTIVE]`, `[EXPAND INTEL +]`).
- **Technical Serials:** Prefix all image captions, diagrams, and section footnotes with classification coordinates (e.g., `FIG_01 //`, `SPEC_04 //`, `ID // MAC-CORE-01`).

## Layout & Spacing

Layouts are anchored to a visible Cartesian framework. The page canvas displays a continuous 32px × 32px background graph grid rendered in 1px `#D0C6AB` lines over the paper ground (`#FFF8EF`). The maximum layout width is constrained to `1280px` and centered on the viewport.

Grid structures must share internal seam dividers:
- Adjacent card modules and table cells adhere to a collapsed border standard (`border-collapse: collapse` behavior), sharing a single `2px solid #000000` seam without doubling line widths.
- Structural bounding wrappers and master page frames use `4px solid #000000`.

### Adaptive Breakpoints
- **Desktop (≥ 1024px):** 12 columns | 24px (`1.5rem`) gutters | 32px (`2rem`) page margins.
- **Tablet (768px – 1023px):** 8 columns | 16px (`1rem`) gutters | 24px (`1.5rem`) page margins.
- **Mobile (< 768px):** 4 columns | 12px (`0.75rem`) gutters | 16px (`1rem`) page margins. Multi-column component grids fold to 100% width and stack with a uniform 16px vertical gap.

## Elevation & Depth

Visual hierarchy is communicated via hard, directional projection shadows rendered strictly at 45 degrees in opaque Stark Black (`#000000`). Ambient blurs, alpha gradients, and fuzzy drop-shadows are forbidden. 

The elevation scale defines physical mechanics:
- **Level 0 (Recessed / Inset / Pressed):** `box-shadow: 0px 0px 0px #000000;` (used for inactive canvases, embedded wells, or depressed button states).
- **Level 1 (Subordinate / Stickers / Badges):** `box-shadow: 4px 4px 0px #000000;` (stamps, small interactive chips, polaroid frames).
- **Level 2 (Standard Structural / Interactive Triggers):** `box-shadow: 6px 6px 0px #000000;` (default state for cards, primary CTA buttons, and Bento modules).
- **Level 3 (Major Vessels / Terminal Windows):** `box-shadow: 8px 8px 0px #000000;` (hero dossier wrappers and active modal consoles).

### Arcade Button Interaction Physics
Interactive elements do not elevate toward the user on click; they depress into the canvas like physical arcade relays:
1. **Rest State:** Elevated with `box-shadow: 6px 6px 0px #000000;`.
2. **Hover State:** Shifts slightly by `transform: translate(-2px, -2px);` with shadow expanding to `8px 8px 0px #000000` via a fast `100ms linear` transition.
3. **Active (Click) State:** Snaps instantly (`0ms`) along the 45-degree axis with `transform: translate(6px, 6px);` and `box-shadow: 0px 0px 0px #000000;`, collapsing flush into its own structural footprint.

## Shapes

Every element across the design system possesses a strict `0px` border-radius (`roundedness: 0`). Rounded corners, pill buttons, circular avatars, and smooth fillets are structurally forbidden. 

Images, containers, form inputs, dialogs, and tags must have sharp right angles. Avatars and headshots must be cropped into precise squares (`1:1`) or rectangles framed with `2px solid #000000` borders.

### Angular Rotation Accents
To maintain the raw zine and physical paper dossier feel, discrete items may utilize mechanical rotation:
- **Alert Stickers & Tapes:** Rotated at `transform: rotate(-3deg);` or `rotate(2deg);`.
- **Caution / Marquee Strips:** Oriented flat (`0deg`) or offset slightly at `rotate(-0.5deg);` across sectional borders.

## Components

### Buttons
- **Primary CTA:** Surface fill is `#F0C903`; border is `2px solid #000000`; typography is `label-mono` (JetBrains Mono bold uppercase); shadow is `6px 6px 0px #000000`. Labels use bracket wrappers (e.g., `[EXECUTE BRIEF ->]`).
- **Primary CTA Hover:** Surface fill snaps instantly to `#000000`; text snaps to `#F0C903`; `transform: translate(-2px, -2px)`; shadow expands to `8px 8px 0px #000000`.
- **Primary CTA Active:** `transform: translate(6px, 6px)`; shadow collapses to `0px 0px 0px #000000`.
- **Secondary CTA:** Surface fill is `#00E5FF` or `#FFFFFF`; border is `2px solid #000000`; shadow is `4px 4px 0px #000000`. On hover, fills swap to `#000000` with text inverted.

### Input Fields & Textareas
- **Base Style:** Background `#FFFFFF`; border `2px solid #000000`; padding `12px 16px`; `0px` radius; typography is `label-mono`.
- **Labeling:** Inputs must feature a monospace label above using the triple-slash syntax: `/// FIELD_NAME [REQUIRED]`.
- **Focus State:** Outline is disabled; border snaps to `3px solid #000000`; background shifts to `#FFF8EF`; shadow applies `4px 4px 0px #000000`.

### Cards & Dossier Modules
- **Base Style:** Surface is `#FFFFFF` or `#EAE2D0`; border is `2px solid #000000` (outer module bounds use `4px solid #000000`); shadow is `6px 6px 0px #000000`.
- **Module Header Bar:** A solid top strip (fill `#000000`, text `#FFFFFF`, or fill `#F0C903`, text `#000000`) showing `> MODULE_NAME` in `label-mono-lg`, separated by a `2px solid #000000` horizontal rule.
- **Card Hover:** Background fill snaps instantly to `#F0C903` or `#00E5FF`.

### Chips & Badges
- **Base Style:** Border `2px solid #000000`; background `#FFFFFF`; typography `label-mono-sm`; padding `4px 8px`; shadow `4px 4px 0px #000000`.
- **Alert Variant:** Background `#FF3B30`; text `#FFFFFF`; angled at `rotate(-3deg)`.
- **Classification Variant:** Background `#00E5FF`; text `#000000`.

### Checkboxes & Radio Controls
- **Geometry:** Strict `0px` square boxes (radios remain square to honor brutalist principles). Dimensions `20px × 20px`; border `2px solid #000000`; background `#FFFFFF`.
- **Checked State:** Fill turns `#F0C903` with a solid `#000000` inset square or a heavy `X` mark.

### Data Lists & Filing Cabinets
- **Tables / Registers:** Structured with shared `2px solid #000000` dividers. Header row fill is `#000000` with white monospace labels. Alternate rows use `#FFFFFF` and `#F6EDDB`.
- **Hover:** Active row fill swaps to `#F0C903` across the entire row width.

### Visual Asset Fallback
- If an image asset is absent or pending, render a solid `#F0C903` rectangular container framed with `2px solid #000000`, containing centered monospace text: `/// VISUAL_ASSET_PENDING ///`.