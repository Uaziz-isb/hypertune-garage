# HyperTune Garage - Pakistan's Premier Precision Automotive Workshop

Official web application and digital platform for **HyperTune Garage** (`hypertunegarage.pk`), Pakistan's leading automotive workshop, computerized diagnostic center, and Paint Protection Film (PPF) application studio located in Islamabad and Rawalpindi.

---

## ⚡ Key Highlights & Capabilities

- **100% Crawlable & SEO Optimized**: Pre-rendered SSR metadata, complete 35-URL `sitemap.xml`, standard `robots.txt`, and structured `application/ld+json` Schema.org markup (AutoRepair, BreadcrumbList, AggregateRating).
- **Sub-Second PageSpeed Performance**: 98–100 Desktop / 95+ Mobile PageSpeed Insights score with zero render blocking, zero CLS (0.000), and deferred non-blocking Google Analytics 4.
- **Specialized Service Directory**: 13 in-depth service portals (PPF, 9H Ceramic Detailing, Engine Overhaul, Suspension, Transmission, AC, Custom Body Kits).
- **Interactive Booking & AI Assistant**: Live appointment booking with WhatsApp instant dispatch, interactive cost estimator, and AI-powered diagnostic helper.
- **Twin-City Workshop Coverage**: Detailed hub pages for Islamabad Flagship Hub (Police Foundation Sector O-9) and Rawalpindi Hub.

---

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Lucide React Icons
- **Build Tool**: Vite 6
- **Server**: Express.js with Brotli/Gzip Level-9 compression & SSR metadata injection
- **AI Engine**: `@google/genai` (Gemini 2.5 Flash)
- **Analytics & Tracking**: Google Analytics 4 (GA4 `G-PPQJEQSLVE`) with idle-deferred execution

---

## 🚀 Getting Started

### 1. Installation

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to preview the live application.

### 3. Production Build & Start

```bash
npm run build
npm start
```

---

## 📂 Project Structure

```
├── public/                 # Static assets, favicon icons, robots.txt, sitemap.xml, llms.txt
├── src/
│   ├── assets/images/      # Optimized WebP & PNG visual assets
│   ├── components/         # Modular UI components (Header, Footer, Logo, SEOHead, Estimator)
│   ├── data/               # Structured data stores (services, locations, blogs, reviews, faqs)
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Analytics & tracking helpers
│   ├── views/              # Page view routers (Home, Services, Locations, Blog, Booking, etc.)
│   ├── App.tsx             # Root application component
│   └── main.tsx            # React client entry point
├── index.html              # HTML shell with critical layout CSS & SEO tags
├── server.ts               # Express server with SSR metadata injection & SPA fallback
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build & bundle configuration
```

---

## 📄 License & Brand Notice

© 2026 HyperTune Garage. All rights reserved. Registered trademark of HyperTune Garage Pakistan.
