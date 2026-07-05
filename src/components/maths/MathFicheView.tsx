/**
 * Affichage complet d'une FICHE MATHS
 * -----------------------------------
 * Assemble toutes les sections dans l'ordre imposé, avec le code couleur.
 * Sert de "gabarit" unique pour garantir une identité visuelle cohérente.
 */
import { RichText } from "@/components/RichText";
import {
  Bullets,
  DataTable,
  Formulas,
  PiegesList,
  RetenirList,
  SectionCard,
  Steps,
  WorkedExample,
} from "./boxes";
import { MiniQuiz } from "./MiniQuiz";
import { Schema } from "./schemas";
import { MATH_BLOCS, type MathFiche } from "@/lib/maths-fiches/types";

export function MathFicheView({ fiche }: { fiche: MathFiche }) {
  const bloc = MATH_BLOCS[fiche.bloc];

  return (
    <article className="mx-auto max-w-3xl">
      {/* En-tête */}
      <span className={`badge border ${bloc.pill}`}>
        {bloc.emoji} {bloc.label}
      </span>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
        {fiche.titre}
      </h1>
      <p className="mt-3 text-lg leading-relaxed text-navy-500">{fiche.intro}</p>

      {/* Schéma (si la notion s'y prête) */}
      {fiche.schema && (
        <div className="mt-6 rounded-2xl border border-navy-100 bg-white p-4">
          <Schema id={fiche.schema} />
        </div>
      )}

      <div className="mt-6 flex flex-col gap-5">
        {/* 📘 Définition (bleu) */}
        <SectionCard theme="blue" icon="📘" title="Définition">
          <p className="text-[15px] leading-relaxed text-navy-700">
            <RichText text={fiche.definition} />
          </p>
        </SectionCard>

        {/* 🧠 Ce qu'il faut comprendre */}
        <SectionCard theme="slate" icon="🧠" title="Ce qu'il faut comprendre">
          <Bullets items={fiche.comprendre} marker="navy" />
        </SectionCard>

        {/* 📋 Points essentiels */}
        {fiche.points && fiche.points.length > 0 && (
          <SectionCard theme="indigo" icon="📋" title="Les points essentiels">
            <Bullets items={fiche.points} />
          </SectionCard>
        )}

        {/* Formules mises en évidence */}
        {fiche.formules && fiche.formules.length > 0 && (
          <SectionCard theme="slate" icon="🧮" title="Formules à connaître">
            <Formulas items={fiche.formules} />
          </SectionCard>
        )}

        {/* Tableau optionnel */}
        {fiche.tableau && (
          <SectionCard theme="slate" icon="📊" title={fiche.tableau.titre ?? "Tableau"}>
            <DataTable tableau={{ ...fiche.tableau, titre: undefined }} />
          </SectionCard>
        )}

        {/* ⚙️ Méthode (vert) */}
        <SectionCard theme="green" icon="⚙️" title="Méthode">
          <Steps items={fiche.methode} />
        </SectionCard>

        {/* ✏️ Exemple corrigé */}
        <SectionCard theme="indigo" icon="✏️" title="Exemple entièrement corrigé">
          <WorkedExample enonce={fiche.exemple.enonce} lignes={fiche.exemple.lignes} />
        </SectionCard>

        {/* ⚠️ Pièges fréquents (rouge) */}
        <SectionCard theme="red" icon="⚠️" title="Pièges fréquents">
          <PiegesList items={fiche.pieges} />
        </SectionCard>

        {/* 💡 Astuce CRPE (jaune) */}
        <SectionCard theme="yellow" icon="💡" title="Astuce CRPE">
          <p className="text-[15px] leading-relaxed text-navy-700">
            <RichText text={fiche.astuce} />
          </p>
        </SectionCard>

        {/* 📌 À retenir (violet) */}
        <SectionCard theme="violet" icon="📌" title="À retenir">
          <RetenirList items={fiche.retenir} />
        </SectionCard>

        {/* 🎯 Mini entraînement */}
        <SectionCard theme="blue" icon="🎯" title="Mini entraînement">
          <MiniQuiz questions={fiche.quiz} />
        </SectionCard>
      </div>
    </article>
  );
}
