/**
 * Affichage complet d'une FICHE DE PHYSIQUE-CHIMIE
 * ------------------------------------------------
 * Réutilise les blocs visuels communs (identité du site conservée).
 */
import { RichText } from "@/components/RichText";
import {
  Bullets,
  Formulas,
  PiegesList,
  RetenirList,
  SectionCard,
  Steps,
} from "@/components/maths/boxes";
import { MiniQuiz } from "@/components/maths/MiniQuiz";
import { PhysSchema } from "./schemas";
import { PHYS_BLOCS, type GroupePhys, type PhysFiche } from "@/lib/physique-fiches/types";

function Groupes({ groupes }: { groupes: GroupePhys[] }) {
  return (
    <div className="flex flex-col gap-4">
      {groupes.map((g, i) => (
        <div key={i}>
          {g.titre && (
            <p className="mb-1.5 text-sm font-bold text-navy-800">
              <RichText text={g.titre} />
            </p>
          )}
          <Bullets items={g.points} />
        </div>
      ))}
    </div>
  );
}

export function PhysFicheView({ fiche }: { fiche: PhysFiche }) {
  const bloc = PHYS_BLOCS[fiche.bloc];

  return (
    <article className="mx-auto max-w-3xl">
      <span className={`badge border ${bloc.pill}`}>
        {bloc.emoji} {bloc.label}
      </span>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
        {fiche.titre}
      </h1>
      <p className="mt-3 text-lg leading-relaxed text-navy-500">{fiche.intro}</p>

      {fiche.schema && (
        <div className="mt-6 rounded-2xl border border-navy-100 bg-white p-4">
          <PhysSchema id={fiche.schema} />
        </div>
      )}

      <div className="mt-6 flex flex-col gap-5">
        <SectionCard theme="blue" icon="📘" title="Définition">
          <p className="text-[15px] leading-relaxed text-navy-700">
            <RichText text={fiche.definition} />
          </p>
        </SectionCard>

        <SectionCard theme="slate" icon="🧠" title="Explication simple">
          <Bullets items={fiche.explication} marker="navy" />
        </SectionCard>

        <SectionCard theme="indigo" icon="📋" title="Les points essentiels">
          <Groupes groupes={fiche.points} />
        </SectionCard>

        {fiche.formules && fiche.formules.length > 0 && (
          <SectionCard theme="slate" icon="🧮" title="Formule à connaître">
            <Formulas items={fiche.formules} />
          </SectionCard>
        )}

        {fiche.fonctionnement && fiche.fonctionnement.length > 0 && (
          <SectionCard theme="green" icon="⚙️" title="Fonctionnement / méthode">
            <Steps items={fiche.fonctionnement} />
          </SectionCard>
        )}

        <SectionCard theme="indigo" icon="✏️" title="Exemple">
          <p className="text-[15px] leading-relaxed text-navy-700">
            <RichText text={fiche.exemple} />
          </p>
        </SectionCard>

        <SectionCard theme="red" icon="⚠️" title="Pièges fréquents">
          <PiegesList items={fiche.pieges} />
        </SectionCard>

        <SectionCard theme="yellow" icon="💡" title="Astuce CRPE">
          <p className="text-[15px] leading-relaxed text-navy-700">
            <RichText text={fiche.astuce} />
          </p>
        </SectionCard>

        <SectionCard theme="violet" icon="📌" title="À retenir">
          <RetenirList items={fiche.retenir} />
        </SectionCard>

        <SectionCard theme="blue" icon="🎯" title="Mini quiz">
          <MiniQuiz questions={fiche.quiz} />
        </SectionCard>
      </div>
    </article>
  );
}
