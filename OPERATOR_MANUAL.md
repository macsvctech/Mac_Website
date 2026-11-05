# 📋 MAC WEBSITE // NON-TECHNICAL OPERATOR MANUAL
**The Complete Guide to Updating the Official MAC Website via Pages CMS**

Welcome to the MAC Website Operations Console. You **do not need any coding or programming experience** to update content, add events, upload photos/videos, or publish recruitment results.

Everything is managed via **Pages CMS** ([app.pagescms.org](https://app.pagescms.org)).

---

## ⚡ Quick Start: How to Log In (1 Minute)

1. Open **[https://app.pagescms.org](https://app.pagescms.org)** in your web browser.
2. Click **"Sign in with GitHub"**.
3. Authorize the connection.
4. Select the repository: **`macsvctech/Mac_Website`** (Branch: `main`).
5. You are in! The left sidebar displays all 13 editable sections of the website.

> 💡 **How changes go live:**  
> Whenever you click **"Save"** in Pages CMS, our cloud hosting (Vercel) automatically detects the change, rebuilds the site, and makes it live globally within **~45 seconds**. No command line or terminal needed!

---

## 🗂️ What Each Section in the Sidebar Controls

| Icon & Label in Pages CMS | What it Controls on the Website |
| :--- | :--- |
| **📢 Global Brand & Header/Footer** | Society logo, top recruitment alert ticker, social links, footer status badge. |
| **🏠 Home Page** | Hero image/video loop, verified metrics counters, department cards, past sponsors carousel. |
| **📐 Blueprint Page** | Official founding manifesto, 4 core pillars, department wings & curriculum overview. |
| **🏛️ Testimonials Page** | Top alumni statistics banner & telemetry metrics. |
| **🎙️ Testimonials: Exit Dossiers** | Alumni President profiles, quotes, and archival exit logs. |
| **🚨 Arena: Countdown Radar** | Live countdown banner for the next upcoming event, with event poster and rulebook download. |
| **🎪 Arena: Flagship Operations** | MarkoPolis, ZEAL, and RotoMAC dossiers, past editions, and competition rules. |
| **📸 Arena: Evidence Wall** | Photo and video gallery grid with interactive category filters. |
| **📕 Intel: MACzine Spotlight** | Front cover visual and downloadable PDF edition of the annual society magazine. |
| **📰 Intel: Research Reports & Blogs** | Articles, case studies, blogs, and marketing whitepapers with markdown text and PDF downloads. |
| **🪪 Roster: Team Directory** | Core council badges, department coordinator cards, and the complete operative roll table. |
| **✅ Roster: Recruitment Results** | Live recruitment announcement card, shortlisted candidate rolls, and official PDF download. |
| **📡 Contact: Terminal & Map** | Physical campus coordinates, blueprint campus map graphic, and corporate partnership deck PDF. |

---

## 🛡️ The 3 Golden Rules for Operators

### Rule 1: "Toggle OFF, Don't Delete"
Every card, event, officer, and section has a switch labeled **"Visible on Website? (Toggle ON/OFF)"**.
* If an event has passed or a member has stepped down, **simply toggle the switch to OFF**.
* The website will instantly hide that item and **leave zero empty space**.
* **Why this matters:** Next year, when that event or role happens again, you don't need to retype everything from scratch—just turn the toggle back **ON**!

### Rule 2: Image Sizing & Format
Uploading huge, uncompressed photos from phone cameras (15MB+) slows down page load times.
* **Aspect Ratios:**
  * **Square (1:1):** Profiles, council portraits, coordinator avatars *(e.g. 600 × 600 px)*.
  * **Landscape (16:9):** Hero banners, article covers, evidence wall photos *(e.g. 1920 × 1080 px)*.
  * **Vertical (3:4 or A3):** Event posters and magazine covers *(e.g. 1200 × 1600 px)*.
* **File Types:** Use `.webp`, `.jpg`, or `.png`. Keep all image files **under 2.5 MB**.
* 💡 *Free tool to shrink images:* Drag your photos into [squoosh.app](https://squoosh.app) or [tinypng.com](https://tinypng.com) before uploading.

### Rule 3: Use Dropdown Menus
When picking badge colors (`yellow`, `cyan`, `red`) or statuses (`REGISTRATIONS OPEN`, `ACTIVE`, `CONCLUDED`), always select from the dropdown options. Do not type custom values so your badges match the brutalist site design.

---

## 📝 How-To Guides

### How to Add a New Flagship Event
1. Click **"🎪 Arena: Flagship Operations"** in the sidebar.
2. Click **"+ New Entry"** (top right).
3. Fill in:
   * **Operation Slug:** (e.g. `summit-2027` — lowercase, hyphens only).
   * **Display Order:** (e.g. `4`).
   * **Title & Subtitle:** (e.g. `MARKOPOLIS // NATIONAL CONCLAVE`).
   * **Status:** Select `ACTIVE / REGISTRATIONS OPEN`.
   * **Cover Image:** Upload your 16:9 banner visual.
4. Click **"Save"**. The event will appear live on `/arena` in 45 seconds!

### How to Add a New Gallery Photo
1. Click **"📸 Arena: Evidence Wall Photo & Video Gallery"**.
2. Click **"+ New Entry"**.
3. Set **Figure Code** (e.g. `FIG_07`), **Title**, and upload the photo.
4. Pick the **Category** (`MARKOPOLIS`, `ZEAL`, `SPEAKERS`, or `BTS`) so the filter button works.
5. Click **"Save"**.

### How to Publish an Article or Case Study
1. Click **"📰 Intel: Research Reports, Blogs, Case Studies & PDFs"**.
2. Click **"+ New Entry"**.
3. Choose classification (`Research Report`, `Blog`, or `Case Study`).
4. Enter the headline, author, date, and upload a cover visual.
5. In the main text area, write your content (supports bold, italics, headings, bullet points).
6. Optional: Attach a full whitepaper PDF for visitor download.
7. Click **"Save"**.

---

## 🆘 Emergency: "I Made a Mistake / The Site Looks Wrong!"

Don't panic! Everything is version-controlled and can be restored in seconds:

1. **Option A (In Pages CMS):** Re-open the entry you just edited, fix the text or toggle it OFF, and click **"Save"**.
2. **Option B (Instant Vercel Rollback):**
   * Ask the society webmaster / tech lead to log into [vercel.com](https://vercel.com).
   * Go to the **Deployments** tab.
   * Find the last known good deployment, click the three dots (`...`), and select **"Promote to Production"**.
   * The live website reverts to that exact point in time in **2 seconds**.

---

*Manual maintained by MAC Technical Division. For technical support or bug reports, contact the Webmaster.*
