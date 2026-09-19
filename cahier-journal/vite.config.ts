import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "node:path";

/**
 * Configuration Vite
 * ------------------
 * - base "./"  → l'app fonctionne aussi bien servie depuis un dossier local
 *   qu'en ligne (chemins relatifs).
 * - VitePWA    → génère un service worker (offline) + manifeste installable.
 *   Aucune donnée n'est envoyée : le SW ne fait que mettre en cache les
 *   fichiers de l'application elle-même.
 */
export default defineConfig({
  base: "./",
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "Cahier Journal",
        short_name: "Cahier",
        description:
          "Cahier journal personnel d'enseignant — local, privé et hors ligne.",
        lang: "fr",
        theme_color: "#c9481f",
        background_color: "#faf4ec",
        display: "standalone",
        start_url: "./",
        scope: "./",
        icons: [
          {
            src: "icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,woff2}"],
        navigateFallback: "index.html",
        // Les mises à jour de l'appli (nouvelles séances, diapo, leçons) doivent
        // arriver de façon fiable : on nettoie les anciens caches et le nouveau
        // service worker prend la main tout de suite (rechargement auto).
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,
        // journal.json (les données) : toujours réseau d'abord, avec repli cache
        // hors ligne — ainsi tes corrections publiées arrivent sans délai.
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.endsWith("journal.json"),
            handler: "NetworkFirst",
            options: {
              cacheName: "journal-data",
              networkTimeoutSeconds: 5,
              expiration: { maxEntries: 4, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
      },
    }),
  ],
});
