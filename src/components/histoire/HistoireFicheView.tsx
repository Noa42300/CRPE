/**
 * Affichage complet d'une FICHE D'HISTOIRE
 * ----------------------------------------
 * Ordre imposé : Contexte 🟦 · Causes 🟩 · Événements 🟥 · Conséquences 🟨
 * · À retenir 🟪. Frises, tableaux et schémas causes→conséquences en bonus.
 */
import { RichText } from "@/components/RichText";
import { Bullets, DataTable, RetenirList, SectionCard } from "@/components/maths/boxes";
import { Frise, FluxCauseEffet } from "./schemas";
import { HISTOIRE_BLOCS, type Groupe, type HistoireFiche } from "@/lib/histoire-fiches/types";

/** Rend une liste de groupes (sous-titre facultatif + points). */
function Groupes({ groupes, marker }: { groupes: Groupe[]; marker?: "sky" | "navy" }) {
  return (
    <div className="flex flex-col gap-4">
      {groupes.map((g, i) => (
        <div key={i}>
          {g.titre && (
            <p className="mb-1.5 text-sm font-bold text-navy-800">
              <RichText text={g.titre} />
            </p>
          )}
          <Bullets items={g.points} marker={marker} />
        </div>
      ))}
    </div>
  );
}

export function HistoireFicheView({ fiche }: { fiche: HistoireFiche }) {
  const bloc = HISTOIRE_BLOCS[fiche.bloc];

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

      {/* Acteurs principaux */}
      {fiche.acteurs && fiche.acteurs.length > 0 && (
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-navy-400">
            Acteurs
          </span>
          {fiche.acteurs.map((a) => (
            <span key={a} className="badge bg-navy-50 text-navy-700">{a}</span>
          ))}
        </div>
      )}

      <div className="mt-6 flex flex-col gap-5">
        {/* 🟦 Contexte */}
        <SectionCard theme="blue" icon="🟦" title="Contexte historique">
          <Bullets items={fiche.contexte} marker="navy" />
        </SectionCard>

        {/* 🟩 Causes */}
        <SectionCard theme="green" icon="🟩" title="Causes">
          <Groupes groupes={fiche.causes} />
        </SectionCard>

        {/* 🟥 Événements clés */}
        <SectionCard theme="red" icon="🟥" title="Événements clés">
          <Groupes groupes={fiche.evenements} />
        </SectionCard>

        {/* 🟨 Conséquences */}
        <SectionCard theme="yellow" icon="🟨" title="Conséquences">
          <Groupes groupes={fiche.consequences} />
        </SectionCard>

        {/* Schéma causes → événements → conséquences */}
        {fiche.flux && (
          <SectionCard theme="slate" icon="🔗" title="Causes → Événements → Conséquences">
            <FluxCauseEffet flux={fiche.flux} />
          </SectionCard>
        )}

        {/* Tableau comparatif */}
        {fiche.tableau && (
          <SectionCard theme="slate" icon="📊" title={fiche.tableau.titre ?? "Tableau comparatif"}>
            <DataTable tableau={{ ...fiche.tableau, titre: undefined }} />
          </SectionCard>
        )}

        {/* Frise chronologique */}
        {fiche.frise && fiche.frise.length > 0 && (
          <SectionCard theme="slate" icon="📅" title="Frise chronologique">
            <Frise reperes={fiche.frise} />
          </SectionCard>
        )}

        {/* 🟪 À retenir */}
        <SectionCard theme="violet" icon="🟪" title="À retenir">
          <RetenirList items={fiche.retenir} />
        </SectionCard>
      </div>
    </article>
  );
}
