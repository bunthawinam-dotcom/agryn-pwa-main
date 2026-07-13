import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

// Agryn — agri data platform PWA (durian + papaya, more crops via config).
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      // Icons generated from public/pwa-icon.svg via pwa-assets.config.ts.
      pwaAssets: { config: true, overrideManifestIcons: true },
      manifest: {
        name: 'Agryn — Agri Data',
        short_name: 'Agryn',
        description:
          'Smart data for durian & papaya farming — track crop health, stages and market timing.',
        lang: 'th',
        dir: 'ltr',
        theme_color: '#15803d',
        background_color: '#f0fdf4',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        categories: ['business', 'productivity', 'utilities'],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,woff,woff2,svg,png,ico,webp}'],
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/api/],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === 'https://fonts.googleapis.com',
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'google-fonts-stylesheets' },
          },
          {
            urlPattern: ({ url }) => url.origin === 'https://fonts.gstatic.com',
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
      devOptions: { enabled: false },
    }),
  ],
  resolve: {
    alias: [{ find: '@app', replacement: path.resolve(rootDir, './src') }],
  },
  server: {
    port: 5180,
    host: '0.0.0.0',
    proxy: {
      // Agryn FastAPI backend (see agryn-mb: :8000/api/v1).
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: { recharts: ['recharts'] },
      },
    },
  },
});
