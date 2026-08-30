import express from "express";
import path from "path";
import fs from "fs";
import compression from "compression";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import { getRouteMetadataAndSchema, renderSSRBody, injectSSRHtml } from "./src/utils/ssrRenderer";
import { getSiteRoutes } from "./src/utils/routes";
import { googleBusinessData } from "./src/data/reviewsData";

const app = express();
const PORT = parseInt(process.env.PORT || "3000", 10);

// High-Performance Compression for 98+ PageSpeed
app.use(
  ((compression as any)({
    level: 9,
    threshold: 512,
    filter: (req: any, res: any) => {
      if (req.headers && req.headers["x-no-compression"]) return false;
      return (compression as any).filter ? (compression as any).filter(req, res) : true;
    },
  }) as unknown) as express.RequestHandler
);

// Performance & Security Headers
app.use((_req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "geolocation=(self), camera=(), microphone=()");
  next();
});

app.use(express.json({ limit: "2mb" }));

// Lazy Gemini AI Client Initialization
let aiClient: GoogleGenAI | null = null;
function getAIClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
      aiClient = new GoogleGenAI({ apiKey });
    }
  }
  return aiClient;
}

// API Health Check
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    workshop: "HyperTune Garage Pakistan - Islamabad Flagship Hub (Rawalpindi Hub Coming Soon)",
    timestamp: new Date().toISOString(),
  });
});

// API AI Diagnostic Assistant
app.post("/api/ai-diagnostic", async (req, res) => {
  try {
    const { vehicleMake, vehicleModel, year, symptoms, errorCodes } = req.body;

    if (!symptoms && !errorCodes) {
      return res.status(400).json({ error: "Please describe vehicle symptoms or OBD error codes." });
    }

    const client = getAIClient();

    if (client) {
      const prompt = `You are the Lead Technical Specialist at HyperTune Garage (hypertunegarage.pk), Pakistan's top car detailing, PPF, engine overhaul, and diagnostic workshop in Islamabad & Rawalpindi.
Analyze the following vehicle issue and provide a structured professional diagnosis:
- Vehicle: ${year || "N/A"} ${vehicleMake || "Car"} ${vehicleModel || ""}
- Reported Symptoms: ${symptoms || "None provided"}
- OBD Error Codes: ${errorCodes || "None provided"}

Return a helpful JSON object with the following fields:
{
  "likelyIssues": ["issue 1", "issue 2"],
  "urgencyLevel": "High" | "Medium" | "Low",
  "estimatedTimeHours": "1 - 3 hours",
  "recommendedServices": ["service 1", "service 2"],
  "diagnosticAdvice": "Professional summary paragraph explaining the problem, potential causes in Pakistani driving conditions (heat, fuel, dust), and why visiting HyperTune Garage for specialized scanning/maintenance is recommended.",
  "safetyWarning": "Optional safety note if driving is unsafe"
}`;

      const response = await client.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        },
      });

      const responseText = response.text;
      if (responseText) {
        try {
          const parsed = JSON.parse(responseText);
          return res.json({ success: true, diagnosis: parsed, source: "gemini" });
        } catch (e) {
          // fallback
        }
      }
    }

    // Expert rule-based fallback if API Key is not configured
    const isGerman = ["BMW", "Mercedes-Benz", "Audi", "Porsche"].includes(vehicleMake);
    const isHybrid = ["Toyota", "Honda"].includes(vehicleMake) && (vehicleModel?.toLowerCase().includes("prius") || vehicleModel?.toLowerCase().includes("aqua") || vehicleModel?.toLowerCase().includes("vezel"));

    return res.json({
      success: true,
      diagnosis: {
        likelyIssues: [
          errorCodes ? `OBD Code ${errorCodes} Fault Detection` : "Ignition or Fuel Injection System Misbehave",
          isGerman ? "Cooling System Pressure Leak / Electronic Sensor Drift" : "Suspension Bushing & Strut Fatigue (Pakistani Road Wear)",
          isHybrid ? "High Voltage Hybrid Battery Cell Imbalance" : "Throttle Body / Intake Air Flow Carbon Fouling",
        ],
        urgencyLevel: errorCodes?.includes("P0300") || symptoms?.toLowerCase().includes("overheat") ? "High" : "Medium",
        estimatedTimeHours: "1 - 3 hours",
        recommendedServices: [
          "Computerized OBD-II Diagnostic Scan & Live Data Stream",
          isGerman ? "German Vehicle Systems Health Check" : "3D Laser Wheel Alignment & Fitment Inspection",
          "Comprehensive Multi-Point Safety Audit",
        ],
        diagnosticAdvice: `Based on your ${year || ""} ${vehicleMake || "vehicle"} report, our certified master technicians recommend a computer diagnostic scan at HyperTune Garage. Extreme ambient heat and road conditions in Islamabad & Rawalpindi can strain vehicle electronics and cooling circuits. We verify live sensor telemetry before initiating any mechanical repair.`,
        safetyWarning: symptoms?.toLowerCase().includes("brake") || symptoms?.toLowerCase().includes("smoke") ? "Warning: For your safety, do not drive long distances before inspection." : undefined,
      },
      source: "rule-engine",
    });
  } catch (error: any) {
    console.error("AI Diagnostic Error:", error);
    return res.status(500).json({
      error: "Unable to process diagnostic request. Please contact HyperTune Garage directly at 0333-0177717.",
    });
  }
});

// API Google Reviews Endpoint
app.get("/api/google-reviews", async (req, res) => {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID || "ChIJgy296uXt3zgRaWvyhpPZsvM";

  if (apiKey && apiKey !== "MY_GOOGLE_PLACES_API_KEY") {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews,url&key=${apiKey}`
      );
      const data = await response.json();

      if (data.status === "OK" && data.result) {
        return res.json({
          success: true,
          source: "google-places-live",
          placeName: data.result.name,
          rating: data.result.rating || 4.9,
          totalReviews: data.result.user_ratings_total || 348,
          googleMapsUrl: data.result.url || `https://www.google.com/maps/search/?api=1&query=HyperTune+Garage&query_place_id=${placeId}`,
          writeReviewUrl: `https://search.google.com/local/writereview?placeid=${placeId}`,
          lastSyncedAt: new Date().toISOString(),
          reviews: (data.result.reviews || []).map((r: any, idx: number) => ({
            id: `g-live-${idx}`,
            authorName: r.author_name,
            authorPhoto: r.profile_photo_url,
            rating: r.rating,
            relativeTimeText: r.relative_time_description,
            text: r.text,
            time: r.time,
            verified: true,
          })),
        });
      }
    } catch (err) {
      console.error("Error fetching Google Places API:", err);
    }
  }

  // Real verified Google Business Profile representation for HyperTune Garage
  return res.json(googleBusinessData);
});

// XML Sitemap Endpoint for Google Search Console & Webmasters
app.get(["/sitemap.xml", "/sitemap.xml/"], (req, res) => {
  const host = req.headers.host || "hypertunegarage.pk";
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const baseUrl = `${protocol}://${host}`;
  const today = new Date().toISOString().split("T")[0];
  const routes = getSiteRoutes();

  let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

  routes.forEach((route) => {
    const loc = route.path === "/" ? `${baseUrl}/` : `${baseUrl}${route.path}`;
    xmlContent += `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
  });

  xmlContent += `</urlset>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600, must-revalidate");
  res.status(200).send(xmlContent);
});

// LLMs.txt Endpoint for Agentic Browsing & AI Crawlers
app.get(["/llms.txt", "/.well-known/llms.txt"], (req, res) => {
  const host = req.headers.host || "hypertunegarage.pk";
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const baseUrl = `${protocol}://${host}`;

  const llmsContent = `# HyperTune Garage - Automotive Detailing, PPF, Tuning & Maintenance

> HyperTune Garage is Pakistan's premier specialized automotive workshop, computerized diagnostics studio, Paint Protection Film (PPF) application center, and European/Japanese luxury car care facility located in Islamabad (with our new Rawalpindi branch currently under development).

## Primary Pages

- [Home Page](${baseUrl}/): Overview of HyperTune Garage workshops, specialized services, instant cost estimator, Google customer reviews, and booking system.
- [About Us](${baseUrl}/about/): Learn about HyperTune Garage, certified master technicians, state-of-the-art dust-free PPF bays, and laser diagnostic equipment.
- [Services Directory](${baseUrl}/services/): Comprehensive catalog of automotive services for German, European, Japanese, and hybrid vehicles.
- [Workshop Locations](${baseUrl}/locations/): Physical studio address, GPS directions, operational hours, and contact details for Islamabad Flagship Hub and upcoming Rawalpindi branch.
- [Customer Reviews & Testimonials](${baseUrl}/testimonials/): Real verified customer reviews, Google Business ratings (4.9/5 from 348+ reviews), and client case studies.
- [Transformation Gallery](${baseUrl}/gallery/): Before & after showcase of full-body PPF installations, 9H Ceramic coatings, engine overhauls, and body kit modifications.
- [Frequently Asked Questions (FAQ)](${baseUrl}/faq/): Answers to questions regarding PPF lifespan, warranty coverage, engine rebuild turnaround times, and pricing.
- [Contact & Booking](${baseUrl}/contact/): Inquire, request personalized price quotes, or book workshop appointments via phone, WhatsApp, or instant online form.
- [Warranty & Specifications](${baseUrl}/warranty-specs/): Official warranty terms for TPU PPF, Ceramic coating packages, OEM spare parts, and engine work.
- [XML Sitemap](${baseUrl}/sitemap.xml): Complete machine-readable XML sitemap for web crawlers.

## Specialized Automotive Services

- [Paint Protection Film (PPF)](${baseUrl}/services/paint-protection-film-ppf/): 100% self-healing, anti-yellowing optical TPU paint protection film with computerized blade-free CAD plotter cut precision.
- [Detailing & 9H Ceramic Coating](${baseUrl}/services/detailing-ceramic-coating/): 3-step paint correction, deep hydrophobic graphene/ceramic coating, and interior steam deep cleaning.
- [PPS Paint Protection System](${baseUrl}/services/pps-paint-protection-system/): Multi-stage ceramic shield and polymer armor.
- [Engine Overhaul & Mechanical Services](${baseUrl}/services/engine-services/): Precision engine rebuilding, cylinder head resurfacing, and performance tuning.
- [Periodic Maintenance & Lube Service](${baseUrl}/services/periodic-maintenance/): Factory-scheduled oil changes with genuine synthetic oils and 45-point inspection.
- [Brakes, Suspension & 3D Alignment](${baseUrl}/services/brakes-suspension-alignment/): Ceramic brake pads, suspension bushing overhaul, and computerized 3D laser wheel alignment.
- [Transmission & Automatic Gearbox Services](${baseUrl}/services/transmission-gearbox-services/): Automatic, CVT, and Dual-Clutch (DCT) gearbox overhaul and fluid flush.
- [Computerized Diagnostics & OBD Scanning](${baseUrl}/services/computer-diagnostics-scanning/): OEM-grade diagnostic tools (BMW ISTA, Mercedes Xentry, VAG ODIS, Toyota Techstream).
- [Denting, Painting & Body Repair](${baseUrl}/services/denting-painting-body-repair/): Computerized paint booth, OEM color matching, and paintless dent repair.
- [Custom Body Kits & Aerodynamics](${baseUrl}/services/body-kit-custom-modification/): Premium body kit fabrication, diffuser installation, and aerodynamic styling.
- [AC Repair & Electrical Specialist](${baseUrl}/services/car-ac-repair/): Compressor repairs, condenser service, leak detection, R134a/R1234yf refrigerant recharge, and wiring diagnostics.

## Workshop Branches & Contact Info

- [Islamabad Flagship Hub](${baseUrl}/locations/islamabad-workshop/): Shop 1-G, Ground Floor, Central Ave, Block E Police Foundation, Sector O-9, Islamabad, 44000, Pakistan. Phone: +92 333 0177717 (Fully Operational).
- [Rawalpindi Branch (Coming Soon)](${baseUrl}/locations/rawalpindi-workshop/): Expansion facility currently under development. All current inquiries and appointments are serviced at Islamabad Flagship Hub.
`;

  res.setHeader("Content-Type", "text/markdown; charset=utf-8");
  res.status(200).send(llmsContent);
});

// LLMs-full.txt Endpoint
app.get(["/llms-full.txt", "/.well-known/llms-full.txt"], (req, res) => {
  const host = req.headers.host || "hypertunegarage.pk";
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const baseUrl = `${protocol}://${host}`;

  const llmsFullContent = `# HyperTune Garage - Full Automotive Technical Knowledge Base & Service Specifications

> HyperTune Garage is Pakistan's premier specialized automotive workshop, computerized diagnostics studio, Paint Protection Film (PPF) application center, and European/Japanese luxury car care facility located in Islamabad (with our new Rawalpindi branch currently under development).

## Business Profile & Metadata

- **Name:** HyperTune Garage
- **Industry:** Automotive Repair, Car Detailing, Paint Protection Film (PPF), German Vehicle Diagnostics, Body Modification
- **Hotline / Phone:** +92 333 0177717 (WhatsApp & Call)
- **Email:** info@hypertunegarage.pk
- **Operating Hours:** Saturday - Thursday: 10:00 AM - 10:00 PM (Friday Closed - applies to Islamabad Flagship Hub)
- **Locations:**
  - **Islamabad Flagship Hub (Fully Operational):** Shop 1-G, Ground Floor, Central Ave, Block E Police Foundation, Sector O-9, Islamabad, 44000, Pakistan
  - **Rawalpindi Branch (Coming Soon):** Expansion facility currently under development. All current appointments are handled at Islamabad Flagship Hub.
- **Primary Website:** ${baseUrl}/
- **Google Rating:** 4.9 / 5.0 Stars (348+ Verified Reviews)
`;

  res.setHeader("Content-Type", "text/markdown; charset=utf-8");
  res.status(200).send(llmsFullContent);
});

// Robots.txt Endpoint
app.get(["/robots.txt", "/robots.txt/"], (req, res) => {
  const host = req.headers.host || "hypertunegarage.pk";
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const baseUrl = `${protocol}://${host}`;

  const robotsContent = `User-agent: *
Allow: /

# Allow all major search engine crawlers
User-agent: Googlebot
Allow: /

User-agent: Googlebot-Mobile
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

# XML Sitemap declaration
Sitemap: ${baseUrl}/sitemap.xml

# LLMs specification available at /llms.txt and /llms-full.txt
`;

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=86400, must-revalidate");
  res.status(200).send(robotsContent);
});

// Helper function to inject rich SSR metadata & pre-rendered HTML into response for Googlebot & Crawlers
function injectSSRMeta(htmlTemplate: string, reqUrl: string, host: string, protocol: string): string {
  const baseUrl = `${protocol}://${host}`;
  return injectSSRHtml(htmlTemplate, reqUrl, baseUrl);
}

async function startServer() {
  // Vite middleware in dev mode
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });

    app.use(vite.middlewares);

    // Custom HTML routing with SSR meta injection for all non-asset paths
    app.use("*", async (req, res, next) => {
      if (req.method !== "GET") return next();

      const url = req.originalUrl;
      const host = req.headers.host || "hypertunegarage.pk";
      const protocol = req.headers["x-forwarded-proto"] || "https";
      const baseUrl = `${protocol}://${host}`;

      // Trailing-slash redirect for clean SEO URLs (excluding files with extensions)
      const parsedPath = url.split("?")[0];
      if (parsedPath !== "/" && !parsedPath.endsWith("/") && !parsedPath.includes(".")) {
        const query = url.includes("?") ? `?${url.split("?")[1]}` : "";
        return res.redirect(301, `${parsedPath}/${query}`);
      }

      try {
        let template = fs.readFileSync(path.resolve(process.cwd(), "index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
        const meta = getRouteMetadataAndSchema(url, baseUrl);
        const finalHtml = injectSSRMeta(template, url, host, protocol as string);
        const statusCode = meta.isNotFound ? 404 : 200;
        res.status(statusCode).set({ "Content-Type": "text/html; charset=utf-8" }).end(finalHtml);
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), "dist");
    
    // Serve Static Assets with High-Performance Cache-Control
    app.use(
      express.static(distPath, {
        index: false,
        maxAge: "1y",
        immutable: true,
        etag: true,
        lastModified: true,
        setHeaders: (res, filePath) => {
          if (filePath.endsWith("index.html") || filePath.endsWith(".txt") || filePath.endsWith(".xml")) {
            res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
          } else if (filePath.match(/\.(webp|jpg|jpeg|png|svg|ico|webmanifest)$/)) {
            res.setHeader("Cache-Control", "public, max-age=2592000, stale-while-revalidate=86400");
          } else if (filePath.match(/\.(js|css|woff2|woff)$/)) {
            res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
          }
        },
      })
    );

    // Production SPA handler with SSR Meta Injection for Googlebot & SEO Crawlers
    app.get("*", (req, res) => {
      const url = req.originalUrl;
      const host = req.headers.host || "hypertunegarage.pk";
      const protocol = req.headers["x-forwarded-proto"] || "https";
      const baseUrl = `${protocol}://${host}`;

      // Trailing-slash redirect for clean SEO URLs (excluding files with extensions)
      const parsedPath = url.split("?")[0];
      if (parsedPath !== "/" && !parsedPath.endsWith("/") && !parsedPath.includes(".")) {
        const query = url.includes("?") ? `?${url.split("?")[1]}` : "";
        return res.redirect(301, `${parsedPath}/${query}`);
      }

      const indexPath = path.join(distPath, "index.html");

      try {
        const rawHtml = fs.readFileSync(indexPath, "utf-8");
        const meta = getRouteMetadataAndSchema(url, baseUrl);
        const finalHtml = injectSSRMeta(rawHtml, url, host, protocol as string);
        const statusCode = meta.isNotFound ? 404 : 200;
        res.status(statusCode).set({ "Content-Type": "text/html; charset=utf-8" }).end(finalHtml);
      } catch (e) {
        res.sendFile(indexPath);
      }
    });
  }

  if (!process.env.VERCEL) {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`HyperTune Garage server running on http://0.0.0.0:${PORT}`);
    });
  }
}

startServer();

export default app;
