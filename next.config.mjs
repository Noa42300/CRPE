/**
 * Configuration Next.js
 * ----------------------
 * Fichier de configuration principal du projet.
 * Pour la plupart des cas, tu n'as PAS besoin de modifier ce fichier.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Autorise l'affichage d'images distantes (ex : miniatures YouTube).
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
