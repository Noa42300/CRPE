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
        // Accent principal — terracotta chaud (crème & terracotta).
        ink: {
          50: "#fdf4ef",
          100: "#fbe6da",
          200: "#f6c9b3",
          300: "#efa484",
          400: "#e67d55",
          500: "#dd5c32",
          600: "#c9481f",
          700: "#a5391a",
          800: "#84301b",
          900: "#6c2b1a",
          950: "#3a140b",
        },
        // Fonds crème / ivoire chauds.
        paper: {
          light: "#faf4ec",
          card: "#fffdf8",
          dark: "#181410",
          "dark-card": "#221d16",
        },
      },
      fontFamily: {
        sans: [
          "Nunito",
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
