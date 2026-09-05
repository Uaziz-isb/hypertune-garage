# HyperTune Garage — Performance Lock & Regression Protection Policy

## 🏆 Current Verified Production Baseline
- **Desktop**: Performance: **100** | Accessibility: **91** | Best Practices: **96** | SEO: **100** | Agentic Browsing: **3/3**
- **Mobile**: Performance: **97** | Accessibility: **91** | Best Practices: **96** | SEO: **100** | Agentic Browsing: **3/3**

---

## 🛑 Primary Directive: DO NOT Refactor or "Improve"
The website has achieved maximum production benchmarks and is in **PERFORMANCE LOCK**. 
- **DO NOT** redesign, refactor, restructure, or "improve" the website unless a change is specifically required to prevent a performance, SEO, accessibility, security, or functionality regression.
- The website must remain visually and functionally identical.
- Priority hierarchy:
  **STABILITY > EXPERIMENTATION**
  **PRESERVE > REFACTOR**
  **MEASURE > GUESS**
  **PROVE > ASSUME**

---

## 📊 Hard Performance Budgets

### Desktop Targets
- **Performance Score**: ≥ 95 (Preferred: ≥ 98, Baseline: 100)
- **First Contentful Paint (FCP)**: ≤ 1.0s
- **Largest Contentful Paint (LCP)**: ≤ 1.2s
- **Total Blocking Time (TBT)**: ≤ 200ms (Preferred: ≤ 150ms)
- **Cumulative Layout Shift (CLS)**: ≤ 0.10 (Preferred: ≤ 0.05)
- **Speed Index**: ≤ 1.5s
- **SEO**: 100
- **Agentic Browsing**: 3/3

### Mobile Targets
- **Performance Score**: ≥ 95 (Preferred: ≥ 97, Baseline: 97)
- **First Contentful Paint (FCP)**: ≤ 1.5s
- **Largest Contentful Paint (LCP)**: ≤ 2.0s
- **Total Blocking Time (TBT)**: ≤ 200ms
- **Cumulative Layout Shift (CLS)**: ≤ 0.10 (Preferred: ≤ 0.05)
- **SEO**: 100
- **Agentic Browsing**: 3/3
- **Best Practices**: ≥ 95

---

## 🔒 Zero-Regression Architecture Rules

### 1. CLS & Hydration Parity Protection (Target: CLS ≤ 0.05)
- **Static Hydration Alignment**: `HomeView` is statically loaded on initial entry, never behind a dynamic Suspense spinner that causes content popping.
- **SSR Structural Mirroring**: The static pre-rendered HTML in `src/utils/ssrRenderer.ts` must exactly mirror the hydrated React components (matching grid columns, responsive margins, explicit image dimensions `width="640" height="430"`, container aspect ratios `h-[290px] sm:h-[380px] md:h-[430px]`, top navigation, and the full footer CTA banner).
- The footer must **NEVER** move during initial page load.

### 2. LCP Hero Image Protection (Target: Desktop LCP ≤ 1.2s)
- The LCP hero asset (`hero_porsche_studio_1787240154464_800w.webp`) must be preloaded in `<head>` of `index.html` via `<link rel="preload" as="image" ...>` with:
  - `fetchpriority="high"`
  - `imagesrcset="/images/hero_porsche_studio_1787240154464_800w.webp 800w, /images/hero_porsche_studio_1787240154464.webp 1280w"`
  - `imagesizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"`
- **NEVER** lazy-load the LCP hero image.
- **NEVER** remove or delay the preload tag.

### 3. JavaScript & TBT Protection (Target: TBT ≤ 150ms)
- Third-party tracking scripts (GTM, GA4) must remain strictly deferred via `requestIdleCallback` (with 6000ms fallback) or first actual user interaction (`click`, `touchstart`, `keydown`).
- **NEVER** re-introduce `mousemove` or `scroll` listeners for script injection — automated Lighthouse runs trigger these events, causing immediate execution of analytics and catastrophic TBT penalties.
- All Google Ads conversion tags, GA4 events, and appointment tracking are preserved and fire when loaded.

### 4. Agentic Browsing (3/3 Score Protection)
- Maintain `public/llms.txt` and `public/llms-full.txt` with up-to-date links, structured documentation, canonical URLs, and full service specifications.
- Maintain accessible semantic HTML (all form controls have explicit IDs, labels, aria-labels, and roles).
- Maintain `public/robots.txt` allowing AI agents and web crawlers, linking directly to `sitemap.xml`.

### 5. SEO & Route Protection (Target: SEO 100)
- All **70 pre-rendered static routes** must compile cleanly during build.
- Maintain 70 unique `<title>` tags, meta descriptions, and canonical URLs (`https://hypertunegarage.pk/...`).
- Maintain valid JSON-LD schemas (`AutoRepair`, `AutomotiveBusiness`, `Service`, `FAQPage`, `BreadcrumbList`).
- Programmatically generate `sitemap.xml` with all 70 canonical URLs.

### 6. Image Integrity & Format Rules
- All images must use modern formats (`.webp` or `.svg`). Legacy `.png` and `.jpg` are prohibited in production assets.
- Explicit `width` and `height` attributes on all images.
- Every referenced image must exist on disk at that exact path with matching case.
- Zero corrupt binary byte sequences (`EF BF BD`) or truncated files.

---

## 🛠️ Automated Verification Workflow

Every build automatically enforces the performance guard:
```bash
npm run build
```
Pipeline executed:
1. `vite build` (Production bundling with vendor code-splitting)
2. `scripts/prerender.ts` (Static HTML generation for 70 routes)
3. `scripts/generate-sitemap.ts` (Dynamic sitemap with 70 canonical URLs)
4. `scripts/verify-all-image-integrity.ts` (Header validation & corruption check)
5. `scripts/seo-audit.ts` (Deep SEO, metadata, canonical, and schema audit)
6. `scripts/performance-guard.ts` (Hard budget checks, anti-CLS check, LCP check, idle GTM check, Agentic browsing check)
7. `esbuild server.ts` (Standalone Node server bundle)

---

## 🚨 Failure Policy
If any change causes:
- Desktop Performance < 95
- Mobile Performance < 95
- CLS > 0.10
- TBT > 200ms
- LCP > 1.2s Desktop
- Agentic Browsing < 3/3
- SEO < 100

**STOP AND REVERT.** Do not compensate with unrelated tweaks. Locate and eliminate the exact regression cause.
