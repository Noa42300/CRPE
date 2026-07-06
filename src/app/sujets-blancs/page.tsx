/**
 * PAGE — SUJETS BLANCS (liste)
 * Sujets d'entraînement originaux pour toutes les épreuves écrites
 * d'admissibilité, avec correction type CRPE, barème et export PDF.
 *
 * La liste se remplit automatiquement à partir de lib/sujets-blancs :
 * ajouter un sujet suffit à le faire apparaître ici, dans sa matière.
 */
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SujetsExplorer } from "@/components/sujets-blancs/SujetsExplorer";
import { ALL_SUJETS, getMatieresPresentes, SUJET_MATIERES } from "@/lib/sujets-blancs";

export const metadata: Metadata = {
  title: "Sujets blancs",
  description:
    "Entraîne-toi avec des sujets blancs originaux du CRPE : Français, Mathématiques, Sciences, Histoire-Géo EMC, Arts plastiques, Musique et Langues. Sujet, correction type et export PDF.",
};

export default function SujetsBlancsPage() {
  const matieres = getMatieresPresentes();

  return (
    <div>
      <PageHeader
        eyebrow="Sujets blancs"
        title="Entraîne-toi comme au concours"
        subtitle="Des sujets blancs entièrement originaux, calqués sur les attentes des deux épreuves écrites d'admissibilité. Chaque sujet propose un énoncé, une correction type détaillée et un barème indicatif — le tout téléchargeable en PDF."
      />

      <section className="container-page py-12">
        {/* Bandeau récapitulatif des matières couvertes */}
        <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {matieres.map((m) => {
            const count = ALL_SUJETS.filter((s) => s.matiere === m).length;
            const meta = SUJET_MATIERES[m];
            return (
              <div
                key={m}
                className={`rounded-2xl border p-3 text-center ${meta.pill}`}
              >
                <div className="text-2xl">{meta.emoji}</div>
                <div className="mt-1 text-xs font-semibold leading-tight text-navy-900">
                  {meta.label}
                </div>
                <div className="mt-0.5 text-xs text-navy-500">
                  {count} sujet{count > 1 ? "s" : ""}
                </div>
              </div>
            );
          })}
        </div>

        <SujetsExplorer sujets={ALL_SUJETS} />
      </section>
    </div>
  );
}
