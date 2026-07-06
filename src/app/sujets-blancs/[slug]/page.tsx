/**
 * PAGE — Un sujet blanc (dynamique)
 * Route : /sujets-blancs/[slug]
 * Breadcrumb : Accueil > Sujets blancs > [matière] > [titre]
 *
 * La page est générée automatiquement pour CHAQUE sujet présent dans
 * lib/sujets-blancs. Aucune page à créer à la main.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SujetView } from "@/components/sujets-blancs/SujetView";
import { ALL_SUJETS, getSujet, SUJET_MATIERES } from "@/lib/sujets-blancs";

export function generateStaticParams() {
  return ALL_SUJETS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sujet = getSujet(slug);
  if (!sujet) return { title: "Sujet introuvable" };
  return {
    title: `${sujet.titre} — Sujet blanc CRPE`,
    description: sujet.description,
  };
}

export default async function SujetBlancPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sujet = getSujet(slug);
  if (!sujet) notFound();

  const meta = SUJET_MATIERES[sujet.matiere];

  return (
    <div className="container-page py-10 sm:py-14">
      {/* Fil d'Ariane */}
      <nav className="mb-6 text-sm text-navy-400">
        <Link href="/" className="hover:text-navy-700">
          Accueil
        </Link>
        <span className="mx-2">/</span>
        <Link href="/sujets-blancs" className="hover:text-navy-700">
          Sujets blancs
        </Link>
        <span className="mx-2">/</span>
        <span className="text-navy-600">{meta.label}</span>
      </nav>

      <SujetView sujet={sujet} />

      <div className="mx-auto mt-12 max-w-4xl border-t border-navy-100 pt-6">
        <Link href="/sujets-blancs" className="btn-secondary">
          ← Tous les sujets blancs
        </Link>
      </div>
    </div>
  );
}
