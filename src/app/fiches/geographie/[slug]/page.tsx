/**
 * PAGE — Une fiche de Géographie (dynamique)
 * Route : /fiches/geographie/[slug]
 * Breadcrumb : Accueil > Fiches > Géographie > [chapitre]
 */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CiviqueFicheView } from "@/components/civique/CiviqueFicheView";
import { FichePdfButton } from "@/components/FichePdfButton";
import { GEO_FICHES, getGeoFiche, getGeoFichesByTheme } from "@/lib/geographie-fiches";
import { GEO_THEMES } from "@/lib/geographie-fiches/types";

export function generateStaticParams() {
  return GEO_FICHES.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const fiche = getGeoFiche(slug);
  if (!fiche) return { title: "Fiche introuvable" };
  return { title: `${fiche.titre} — Géographie`, description: fiche.intro };
}

export default async function FicheGeoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const fiche = getGeoFiche(slug);
  if (!fiche) notFound();

  const themeFiches = getGeoFichesByTheme(fiche.theme);
  const idx = themeFiches.findIndex((f) => f.slug === fiche.slug);
  const prev = idx > 0 ? themeFiches[idx - 1] : null;
  const next = idx < themeFiches.length - 1 ? themeFiches[idx + 1] : null;

  return (
    <div className="container-page py-10 sm:py-14">
      {/* Fil d'Ariane : Accueil > Fiches > Géographie > [chapitre] */}
      <nav className="mb-6 text-sm text-navy-400">
        <Link href="/" className="hover:text-navy-700">Accueil</Link>
        <span className="mx-2">/</span>
        <Link href="/fiches" className="hover:text-navy-700">Fiches</Link>
        <span className="mx-2">/</span>
        <Link href="/fiches?matiere=geographie" className="hover:text-navy-700">Géographie</Link>
        <span className="mx-2">/</span>
        <span className="text-navy-600">{fiche.titre}</span>
      </nav>

      <div className="mb-6 flex justify-end">
        <FichePdfButton data={{ matiere: "geographie", fiche }} />
      </div>

      <CiviqueFicheView fiche={fiche} meta={GEO_THEMES[fiche.theme]} />

      {/* Navigation entre fiches */}
      <div className="mx-auto mt-12 max-w-3xl">
        <div className="flex flex-col gap-3 border-t border-navy-100 pt-6 sm:flex-row sm:justify-between">
          {prev ? (
            <Link href={`/fiches/geographie/${prev.slug}`} className="btn-secondary">
              ← {prev.titre}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/fiches/geographie/${next.slug}`} className="btn-secondary">
              {next.titre} →
            </Link>
          ) : (
            <Link href="/fiches?matiere=geographie" className="btn-secondary">
              Toutes les fiches de Géographie
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
