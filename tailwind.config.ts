import type { Config } from "tailwindcss";

/**
 * Configuration Tailwind CSS
 * --------------------------
 * C'est ici que sont définies les COULEURS et le STYLE global du site.
 * Tu peux changer les couleurs de la marque ici, elles seront appliquées
 * partout automatiquement.
 *
 * Palette (inspirée d'Apple / Notion / Stripe) :
 *  - Fond           : blanc
 *  - Bleu foncé     : "navy"   (titres, boutons principaux)
 *  - Bleu clair     : "sky"    (accents, liens, dégradés)
 */
const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bleu foncé — couleur principale de la marque
        navy: {
          50: "#eef2f9",
          100: "#d5def0",
          200: "#adbce0",
          300: "#7f95cd",
          400: "#5470b8",
          500: "#3a559f",
          600: "#2c4283",
          700: "#22336a",
          800: "#16244d",
          900: "#0b1730", // Bleu nuit profond
          950: "#060e1f",
        },
        // Bleu clair — accents et dégradés
        sky: {
          50: "#eff8ff",
          100: "#dbeefe",
          200: "#bfe2fe",
          300: "#93d0fd",
          400: "#60b5fa",
          500: "#3b97f5",
          600: "#2478ea",
          700: "#1c60d7",
          800: "#1d4faf",
          900: "#1d448a",
        },
      },
      fontFamily: {
        // Police système moderne (style Apple), aucune dépendance externe.
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        // Ombre douce style "carte moderne"
        card: "0 1px 3px rgba(11,23,48,0.06), 0 10px 30px -10px rgba(11,23,48,0.12)",
        "card-hover": "0 4px 12px rgba(11,23,48,0.08), 0 20px 40px -12px rgba(11,23,48,0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.8s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
