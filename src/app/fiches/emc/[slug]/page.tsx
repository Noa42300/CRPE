/**
 * PAGE — Une fiche d'EMC (dynamique)
 * Route : /fiches/emc/[slug]
 * Breadcrumb : Accueil > Fiches > EMC > [chapitre]
 */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CiviqueFicheView } from "@/components/civique/CiviqueFicheView";
import { FichePdfButton } from "@/components/FichePdfButton";
import { EMC_FICHES, getEmcFiche, getEmcFichesByTheme } from "@/lib/emc-fiches";
import { EMC_THEMES } from "@/lib/emc-fiches/types";

export function generateStaticParams() {
  return EMC_FICHES.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const fiche = getEmcFiche(slug);
  if (!fiche) return { title: "Fiche introuvable" };
  return { title: `${fiche.titre} — EMC`, description: fiche.intro };
}

export default async function FicheEmcPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const fiche = getEmcFiche(slug);
  if (!fiche) notFound();

  const themeFiches = getEmcFichesByTheme(fiche.theme);
  const idx = themeFiches.findIndex((f) => f.slug === fiche.slug);
  const prev = idx > 0 ? themeFiches[idx - 1] : null;
  const next = idx < themeFiches.length - 1 ? themeFiches[idx + 1] : null;

  return (
    <div className="container-page py-10 sm:py-14">
      {/* Fil d'Ariane : Accueil > Fiches > EMC > [chapitre] */}
      <nav className="mb-6 text-sm text-navy-400">
        <Link href="/" className="hover:text-navy-700">Accueil</Link>
        <span className="mx-2">/</span>
        <Link href="/fiches" className="hover:text-navy-700">Fiches</Link>
        <span className="mx-2">/</span>
        <Link href="/fiches?matiere=emc" className="hover:text-navy-700">EMC</Link>
        <span className="mx-2">/</span>
        <span className="text-navy-600">{fiche.titre}</span>
      </nav>

      <div className="mb-6 flex justify-end">
        <FichePdfButton data={{ matiere: "emc", fiche }} />
      </div>

      <CiviqueFicheView
        fiche={fiche}
        meta={EMC_THEMES[fiche.theme]}
        exemplesTitle="Exemples & mise en œuvre"
        exemplesIcon="🏫"
      />

      {/* Navigation entre fiches */}
      <div className="mx-auto mt-12 max-w-3xl">
        <div className="flex flex-col gap-3 border-t border-navy-100 pt-6 sm:flex-row sm:justify-between">
          {prev ? (
            <Link href={`/fiches/emc/${prev.slug}`} className="btn-secondary">
              ← {prev.titre}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/fiches/emc/${next.slug}`} className="btn-secondary">
              {next.titre} →
            </Link>
          ) : (
            <Link href="/fiches?matiere=emc" className="btn-secondary">
              Toutes les fiches d'EMC
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
