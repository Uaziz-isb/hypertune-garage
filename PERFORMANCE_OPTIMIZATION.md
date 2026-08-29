# HyperTune Garage Performance Optimization

This version uses a single authoritative image directory: `public/images/`. Source-side duplicate image assets were removed. The photographic JPG library was converted to optimized WebP while preserving source dimensions.

Key changes:
- Removed duplicate `src/assets/images` image library.
- Converted 64 photographic JPG assets to optimized WebP.
- Removed the stale/nonexistent hero Open Graph preload target.
- Preloads the actual first homepage hero image.
- Removed remote logo fallbacks to avoid extra third-party image requests.
- Added Apache/cPanel compression and long-lived caching rules via `public/.htaccess`.
- Kept below-fold images lazy and asynchronously decoded where appropriate.
- Kept SSR, canonical URLs, sitemap, robots.txt, analytics, forms, routes, and tracking intact.
- Stabilized the LocalBusiness schema entity as `https://hypertunegarage.pk/#business`.

Important: PageSpeed scores cannot be guaranteed from source code alone; live hosting, server configuration, third-party scripts, network conditions, and Lighthouse variance also affect the score.
