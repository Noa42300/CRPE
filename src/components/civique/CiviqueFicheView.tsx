/**
 * Affichage complet d'une fiche de GÉOGRAPHIE ou d'EMC
 * ----------------------------------------------------
 * Vue partagée par les deux matières « sciences humaines ». Réutilise les
 * encadrés visuels communs (SectionCard, Bullets, DataTable, RetenirList).
 * Ordre : Définition 🟦 · Sections thématiques · Exemples 🗺️ · Vocabulaire 📖
 * · Tableau 📊 · Pièges ⚠️ · À retenir 🟪.
 */
import { RichText } from "@/components/RichText";
import {
  Bullets,
  DataTable,
  PiegesList,
  RetenirList,
  SectionCard,
  type Theme,
} from "@/components/maths/boxes";
import type {
  CiviqueFiche,
  GroupeCivique,
  ThemeMeta,
} from "@/lib/civique-fiches/types";

/** Couleurs successives des sections thématiques. */
const SECTION_THEMES: { theme: Theme; icon: string }[] = [
  { theme: "green", icon: "🧩" },
  { theme: "indigo", icon: "📌" },
  { theme: "blue", icon: "🔎" },
];

/** Rend une liste de groupes (sous-titre facultatif + points). */
function Groupes({ groupes }: { groupes: GroupeCivique[] }) {
  return (
    <div className="flex flex-col gap-4">
      {groupes.map((g, i) => (
        <div key={i}>
          {g.titre && (
            <p className="mb-1.5 text-sm font-bold text-navy-800">
              <RichText text={g.titre} />
            </p>
          )}
          <Bullets items={g.points} marker="navy" />
        </div>
      ))}
    </div>
  );
}

export function CiviqueFicheView({
  fiche,
  meta,
  exemplesTitle = "Exemples concrets",
  exemplesIcon = "🗺️",
}: {
  fiche: CiviqueFiche;
  meta: ThemeMeta;
  exemplesTitle?: string;
  exemplesIcon?: string;
}) {
  return (
    <article className="mx-auto max-w-3xl">
      {/* En-tête */}
      <span className={`badge border ${meta.pill}`}>
        {meta.emoji} {meta.label}
      </span>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
        {fiche.titre}
      </h1>
      <p className="mt-3 text-lg leading-relaxed text-navy-500">{fiche.intro}</p>

      <div className="mt-6 flex flex-col gap-5">
        {/* 🟦 Définition */}
        <SectionCard theme="blue" icon="🟦" title="La notion">
          <p className="text-[15px] leading-relaxed text-navy-700">
            <RichText text={fiche.definition} />
          </p>
        </SectionCard>

        {/* Sections thématiques */}
        {fiche.sections.map((s, i) => {
          const st = SECTION_THEMES[i % SECTION_THEMES.length];
          return (
            <SectionCard key={i} theme={st.theme} icon={st.icon} title={s.titre}>
              <Groupes groupes={s.groupes} />
            </SectionCard>
          );
        })}

        {/* 🗺️ Exemples concrets */}
        {fiche.exemples && fiche.exemples.length > 0 && (
          <SectionCard theme="yellow" icon={exemplesIcon} title={exemplesTitle}>
            <Bullets items={fiche.exemples} marker="navy" />
          </SectionCard>
        )}

        {/* 📖 Vocabulaire clé */}
        {fiche.vocabulaire && fiche.vocabulaire.length > 0 && (
          <SectionCard theme="slate" icon="📖" title="Vocabulaire clé">
            <DataTable
              tableau={{
                entetes: ["Terme", "Définition"],
                lignes: fiche.vocabulaire.map((v) => [v.terme, v.sens]),
              }}
            />
          </SectionCard>
        )}

        {/* 📊 Tableau */}
        {fiche.tableau && (
          <SectionCard
            theme="slate"
            icon="📊"
            title={fiche.tableau.titre ?? "Tableau"}
          >
            <DataTable tableau={{ ...fiche.tableau, titre: undefined }} />
          </SectionCard>
        )}

        {/* ⚠️ Pièges fréquents */}
        {fiche.pieges && fiche.pieges.length > 0 && (
          <SectionCard theme="red" icon="⚠️" title="Pièges fréquents">
            <PiegesList items={fiche.pieges} />
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
