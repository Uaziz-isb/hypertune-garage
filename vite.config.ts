import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: '/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      target: 'es2022',
      cssCodeSplit: true,
      cssMinify: true,
      minify: 'esbuild' as const,
      modulePreload: {
        // Vite auto-preloads dependencies of React.lazy() chunks reachable from eager modules
        // (HomeView/Footer), which defeats the point of code-splitting the large /data files.
        // Only preload what's genuinely needed for first paint; the rest loads on demand.
        resolveDependencies: (_filename, deps) =>
          deps.filter((dep) => !/\/(data-services|data-faq|data-gallery|data-blog|data-reviews)-/.test(dep)),
      },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('lucide-react')) {
                return 'icons';
              }
              if (id.includes('/react/') || id.includes('/react-dom/') || id.includes('/scheduler/')) {
                return 'vendor-react';
              }
              return 'vendor';
            }
            if (id.includes('/data/servicesData')) {
              return 'data-services';
            }
            if (id.includes('/data/faqData')) {
              return 'data-faq';
            }
            if (id.includes('/data/reviewsData')) {
              return 'data-reviews';
            }
            if (id.includes('/data/galleryData')) {
              return 'data-gallery';
            }
            if (id.includes('/data/blogData')) {
              return 'data-blog';
            }
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
