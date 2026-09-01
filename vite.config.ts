import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(({ command }) => {
  return {
    base: '/',
    define: {
      'process.env.NODE_ENV': JSON.stringify(command === 'build' ? 'production' : (process.env.NODE_ENV || 'development')),
    },
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
              if (id.includes('motion')) {
                return 'vendor-motion';
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
