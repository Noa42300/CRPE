/**
 * Layout racine de l'application
 * ------------------------------
 * Enveloppe TOUTES les pages. Contient la barre de navigation, le pied de
 * page et les balises SEO (meta) communes à tout le site.
 */
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getCurrentProfile } from "@/lib/auth";

// Adresse publique du site (utilisée pour le SEO).
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

// ------------------- Balises SEO globales -------------------
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CRPE avec Noa — Révise efficacement le concours",
    template: "%s · CRPE avec Noa",
  },
  description:
    "Révise efficacement le CRPE grâce à des fiches, vidéos et méthodes issues de mon expérience personnelle (admis avec 16/20). Épreuves écrites, orales, méthodologie et sujets blancs.",
  keywords: [
    "CRPE",
    "concours professeur des écoles",
    "révision CRPE",
    "fiches CRPE",
    "sujets blancs CRPE",
    "méthodologie CRPE",
  ],
  authors: [{ name: "Noa" }],
  openGraph: {
    title: "CRPE avec Noa — Révise efficacement le concours",
    description:
      "Fiches, vidéos et méthodes pour réussir le CRPE, par Noa (admis avec 16/20).",
    url: siteUrl,
    siteName: "CRPE avec Noa",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRPE avec Noa",
    description:
      "Fiches, vidéos et méthodes pour réussir le CRPE, par Noa (admis avec 16/20).",
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // On récupère le profil pour afficher le bon menu (connecté ou non).
  const profile = await getCurrentProfile();

  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col">
        <Navbar profile={profile} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
