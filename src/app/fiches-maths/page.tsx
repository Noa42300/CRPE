/**
 * PAGE — FICHES MATHS (index)
 * Liste toutes les fiches de maths, regroupées par bloc.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { getMathFichesByBloc } from "@/lib/maths-fiches";
import { MATH_BLOCS, type MathBloc } from "@/lib/maths-fiches/types";

export const metadata: Metadata = {
  title: "Fiches Maths",
  description:
    "Fiches de révision Maths pour le CRPE : nombres, calculs, algèbre, géométrie, grandeurs et mesures. Définitions, méthodes, exemples corrigés et mini-quiz.",
};

const ORDER: MathBloc[] = ["nombres", "algebre", "geometrie", "grandeurs"];

export default function FichesMathsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Fiches Maths"
        title="Les maths, enfin claires"
        subtitle="Chaque notion en une fiche complète : définition, méthode pas à pas, exemple corrigé, schémas, pièges à éviter et mini-entraînement corrigé."
      />

      <section className="container-page space-y-12 py-12">
        {/* Lien vers les fiches de Français */}
        <div className="rounded-2xl border border-navy-100 bg-navy-50/50 p-4 text-sm text-navy-600">
          Tu cherches le Français ?{" "}
          <Link href="/fiches" className="font-semibold text-sky-600 hover:text-sky-700">
            Voir les fiches de Français →
          </Link>
        </div>

        {ORDER.map((bloc) => {
          const fiches = getMathFichesByBloc(bloc);
          if (fiches.length === 0) return null;
          const meta = MATH_BLOCS[bloc];
          return (
            <div key={bloc}>
              <h2 className="mb-5 flex items-center gap-2 text-2xl font-bold tracking-tight text-navy-900">
                <span aria-hidden>{meta.emoji}</span> {meta.label}
                <span className="ml-1 rounded-full bg-navy-100 px-2.5 py-0.5 text-sm font-semibold text-navy-500">
                  {fiches.length}
                </span>
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {fiches.map((f) => (
                  <Link
                    key={f.slug}
                    href={`/fiches-maths/${f.slug}`}
                    className="card card-hover group flex items-start justify-between gap-3"
                  >
                    <div>
                      <span className={`badge border ${meta.pill}`}>Fiche {f.numero}</span>
                      <h3 className="mt-2 text-lg font-semibold text-navy-900">{f.titre}</h3>
                      <p className="mt-1 line-clamp-2 text-sm text-navy-500">{f.intro}</p>
                    </div>
                    <span className="mt-1 flex-none text-navy-300 transition group-hover:translate-x-1 group-hover:text-sky-500">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
