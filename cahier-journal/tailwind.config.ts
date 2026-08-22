import type { Config } from "tailwindcss";

/**
 * Configuration Tailwind
 * ----------------------
 * darkMode: "class"  → le mode sombre est piloté par la classe `dark` posée
 * sur <html> (choix Clair / Sombre / Auto géré dans l'app).
 *
 * Palette : fond blanc cassé / gris chaud, accent bleu doux « encre ».
 * Les couleurs vives sont réservées aux badges de disciplines.
 */
const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Accent principal — bleu encre, sobre et professionnel.
        ink: {
          50: "#eef1fb",
          100: "#dbe1f7",
          200: "#bcc7ef",
          300: "#93a4e3",
          400: "#6b80d4",
          500: "#4c62c4",
          600: "#3b5bdb",
          700: "#32409e",
          800: "#2b3780",
          900: "#283264",
          950: "#1a1f3d",
        },
        // Gris chauds pour les fonds et textes.
        paper: {
          light: "#f7f7f5",
          card: "#ffffff",
          dark: "#14151a",
          "dark-card": "#1c1e26",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20,21,26,0.04), 0 6px 20px -8px rgba(20,21,26,0.12)",
        "soft-lg":
          "0 2px 6px rgba(20,21,26,0.06), 0 16px 40px -12px rgba(20,21,26,0.20)",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.125rem",
      },
    },
  },
  plugins: [],
};

export default config;
