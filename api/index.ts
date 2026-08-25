// Vercel serverless entry point.
//
// Vercel auto-detects any file under /api as a serverless function. This
// file re-exports the same Express app used for local/VPS hosting
// (server.ts), so the SSR meta-injection, /robots.txt, /sitemap.xml, and
// all page routes behave identically in production on Vercel.
//
// vercel.json rewrites every request that doesn't match a real static
// file (JS/CSS/images in dist) to this function.
import app from '../server';

export default app;
