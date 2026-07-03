/**
 * Génération automatique du robots.txt
 * ------------------------------------
 * Indique aux moteurs de recherche ce qu'ils peuvent explorer.
 * Accessible à l'adresse : /robots.txt
 */
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // On n'indexe pas les pages personnelles ni les routes techniques.
      disallow: ["/profil", "/api/"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
