/**
 * Affichage complet d'une FICHE DE SVT
 * ------------------------------------
 * Réutilise les blocs visuels communs (identité du site conservée) :
 * 📘 Définition · 🧠 Explication · 📋 Points · ⚙️ Fonctionnement ·
 * ✏️ Exemple · ⚠️ Pièges · 💡 Astuce · 📌 À retenir · 🎯 Mini quiz.
 */
import { RichText } from "@/components/RichText";
import {
  Bullets,
  PiegesList,
  RetenirList,
  SectionCard,
  Steps,
} from "@/components/maths/boxes";
import { MiniQuiz } from "@/components/maths/MiniQuiz";
import { SvtSchema } from "./schemas";
import { SVT_THEMES, type GroupeSvt, type SvtFiche } from "@/lib/svt-fiches/types";

function Groupes({ groupes }: { groupes: GroupeSvt[] }) {
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

export function SvtFicheView({ fiche }: { fiche: SvtFiche }) {
  const theme = SVT_THEMES[fiche.theme];

  return (
    <article className="mx-auto max-w-3xl">
      {/* En-tête */}
      <span className={`badge border ${theme.pill}`}>
        {theme.emoji} {theme.label}
      </span>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
        {fiche.titre}
      </h1>
      <p className="mt-3 text-lg leading-relaxed text-navy-500">{fiche.intro}</p>

      {/* Schéma (si pertinent) */}
      {fiche.schema && (
        <div className="mt-6 rounded-2xl border border-navy-100 bg-white p-4">
          <SvtSchema id={fiche.schema} />
        </div>
      )}

      <div className="mt-6 flex flex-col gap-5">
        {/* 📘 Définition */}
        <SectionCard theme="blue" icon="📘" title="Définition">
          <p className="text-[15px] leading-relaxed text-navy-700">
            <RichText text={fiche.definition} />
          </p>
        </SectionCard>

        {/* 🧠 Explication simple */}
        <SectionCard theme="slate" icon="🧠" title="Explication simple">
          <Bullets items={fiche.explication} marker="navy" />
        </SectionCard>

        {/* 📋 Points essentiels */}
        <SectionCard theme="indigo" icon="📋" title="Les points essentiels">
          <Groupes groupes={fiche.points} />
        </SectionCard>

        {/* ⚙️ Fonctionnement (facultatif) */}
        {fiche.fonctionnement && fiche.fonctionnement.length > 0 && (
          <SectionCard theme="green" icon="⚙️" title="Fonctionnement">
            <Steps items={fiche.fonctionnement} />
          </SectionCard>
        )}

        {/* ✏️ Exemple */}
        <SectionCard theme="indigo" icon="✏️" title="Exemple">
          <p className="text-[15px] leading-relaxed text-navy-700">
            <RichText text={fiche.exemple} />
          </p>
        </SectionCard>

        {/* ⚠️ Pièges fréquents */}
        <SectionCard theme="red" icon="⚠️" title="Pièges fréquents">
          <PiegesList items={fiche.pieges} />
        </SectionCard>

        {/* 💡 Astuce CRPE */}
        <SectionCard theme="yellow" icon="💡" title="Astuce CRPE">
          <p className="text-[15px] leading-relaxed text-navy-700">
            <RichText text={fiche.astuce} />
          </p>
        </SectionCard>

        {/* 📌 À retenir */}
        <SectionCard theme="violet" icon="📌" title="À retenir">
          <RetenirList items={fiche.retenir} />
        </SectionCard>

        {/* 🎯 Mini quiz */}
        <SectionCard theme="blue" icon="🎯" title="Mini quiz">
          <MiniQuiz questions={fiche.quiz} />
        </SectionCard>
      </div>
    </article>
  );
}
