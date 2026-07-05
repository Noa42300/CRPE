/**
 * PAGE — Une fiche de Maths (dynamique)
 * Route : /fiches/maths/[slug]
 * Breadcrumb : Accueil > Fiches > Maths > [chapitre]
 */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MathFicheView } from "@/components/maths/MathFicheView";
import { MATH_FICHES, getMathFiche, getMathFichesByBloc } from "@/lib/maths-fiches";
import { MATH_BLOCS } from "@/lib/maths-fiches/types";

export function generateStaticParams() {
  return MATH_FICHES.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const fiche = getMathFiche(slug);
  if (!fiche) return { title: "Fiche introuvable" };
  return { title: `${fiche.titre} — Maths`, description: fiche.intro };
}

export default async function FicheMathPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const fiche = getMathFiche(slug);
  if (!fiche) notFound();

  const blocFiches = getMathFichesByBloc(fiche.bloc);
  const idx = blocFiches.findIndex((f) => f.slug === fiche.slug);
  const prev = idx > 0 ? blocFiches[idx - 1] : null;
  const next = idx < blocFiches.length - 1 ? blocFiches[idx + 1] : null;

  return (
    <div className="container-page py-10 sm:py-14">
      {/* Fil d'Ariane : Accueil > Fiches > Maths > [chapitre] */}
      <nav className="mb-6 text-sm text-navy-400">
        <Link href="/" className="hover:text-navy-700">Accueil</Link>
        <span className="mx-2">/</span>
        <Link href="/fiches" className="hover:text-navy-700">Fiches</Link>
        <span className="mx-2">/</span>
        <Link href="/fiches?matiere=maths" className="hover:text-navy-700">Maths</Link>
        <span className="mx-2">/</span>
        <span className="text-navy-600">{fiche.titre}</span>
      </nav>

      <MathFicheView fiche={fiche} />

      {/* Navigation entre fiches */}
      <div className="mx-auto mt-12 max-w-3xl">
        <div className="flex flex-col gap-3 border-t border-navy-100 pt-6 sm:flex-row sm:justify-between">
          {prev ? (
            <Link href={`/fiches/maths/${prev.slug}`} className="btn-secondary">
              ← {prev.titre}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/fiches/maths/${next.slug}`} className="btn-secondary">
              {next.titre} →
            </Link>
          ) : (
            <Link href="/fiches?matiere=maths" className="btn-secondary">
              Toutes les fiches Maths
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
