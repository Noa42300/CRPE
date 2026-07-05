/**
 * Blocs visuels réutilisables des fiches maths
 * --------------------------------------------
 * Ces composants donnent l'identité visuelle commune à TOUTES les fiches.
 * Code couleur (imposé) :
 *   🟦 Bleu = définition · 🟩 Vert = méthode · 🟨 Jaune = astuce
 *   🟥 Rouge = erreur · 🟪 Violet = à retenir
 */
import { RichText } from "@/components/RichText";
import type { Formule, LigneExemple, Piege, Tableau } from "@/lib/maths-fiches/types";

// Thèmes de couleur (classes Tailwind figées pour ne pas être purgées).
const THEMES = {
  blue: { box: "border-sky-200 bg-sky-50/70", title: "text-sky-700" },
  green: { box: "border-emerald-200 bg-emerald-50/70", title: "text-emerald-700" },
  yellow: { box: "border-amber-200 bg-amber-50/70", title: "text-amber-700" },
  red: { box: "border-rose-200 bg-rose-50/70", title: "text-rose-700" },
  violet: { box: "border-violet-200 bg-violet-50/70", title: "text-violet-700" },
  indigo: { box: "border-indigo-200 bg-indigo-50/70", title: "text-indigo-700" },
  slate: { box: "border-navy-100 bg-navy-50/60", title: "text-navy-700" },
} as const;

export type Theme = keyof typeof THEMES;

/** Encadré de section générique (titre + icône + contenu). */
export function SectionCard({
  theme,
  icon,
  title,
  children,
}: {
  theme: Theme;
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  const t = THEMES[theme];
  return (
    <section className={`rounded-2xl border ${t.box} p-5 sm:p-6`}>
      <h2 className={`mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide ${t.title}`}>
        <span className="text-base" aria-hidden>{icon}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

/** Formules mises en évidence (fond foncé, faciles à recopier). */
export function Formulas({ items }: { items: Formule[] }) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((f, i) => (
        <div key={i} className="overflow-x-auto rounded-xl bg-navy-900 px-4 py-3 text-white">
          {f.label && (
            <span className="mr-3 text-xs font-medium uppercase tracking-wide text-sky-300">
              {f.label}
            </span>
          )}
          <code className="font-mono text-[15px] font-semibold tracking-wide">{f.expr}</code>
        </div>
      ))}
    </div>
  );
}

/** Liste à puces simple, avec **gras** géré. */
export function Bullets({ items, marker = "sky" }: { items: string[]; marker?: "sky" | "navy" }) {
  const dot = marker === "sky" ? "bg-sky-500" : "bg-navy-400";
  return (
    <ul className="flex flex-col gap-2">
      {items.map((it, i) => (
        <li key={i} className="relative pl-5 text-[15px] leading-relaxed text-navy-700">
          <span className={`absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full ${dot}`} />
          <RichText text={it} />
        </li>
      ))}
    </ul>
  );
}

/** Étapes de méthode numérotées (vert). */
export function Steps({ items }: { items: string[] }) {
  return (
    <ol className="flex flex-col gap-3">
      {items.map((step, i) => (
        <li key={i} className="flex gap-3">
          <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
            {i + 1}
          </span>
          <span className="pt-0.5 text-[15px] leading-relaxed text-navy-700">
            <RichText text={step} />
          </span>
        </li>
      ))}
    </ol>
  );
}

/** Exemple corrigé ligne par ligne (calcul + explication). */
export function WorkedExample({
  enonce,
  lignes,
}: {
  enonce?: string;
  lignes: LigneExemple[];
}) {
  return (
    <div>
      {enonce && (
        <p className="mb-3 rounded-lg bg-white/70 px-3 py-2 text-[15px] font-medium text-navy-800">
          <span className="mr-1 font-bold text-indigo-600">Énoncé :</span>
          <RichText text={enonce} />
        </p>
      )}
      <div className="flex flex-col gap-1.5">
        {lignes.map((l, i) => (
          <div
            key={i}
            className="flex flex-col gap-0.5 rounded-lg bg-white/70 px-3 py-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
          >
            <code className="font-mono text-[15px] font-semibold text-navy-900">{l.calcul}</code>
            {l.note && (
              <span className="text-[13px] italic text-navy-500">
                <RichText text={l.note} />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Liste des pièges fréquents (rouge). */
export function PiegesList({ items }: { items: Piege[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((p, i) => (
        <li key={i} className="rounded-lg bg-white/60 p-3">
          <p className="flex items-start gap-2 text-[15px] font-semibold text-rose-700">
            <span aria-hidden>❌</span>
            <RichText text={p.erreur} />
          </p>
          <p className="mt-1 pl-6 text-[14px] leading-relaxed text-navy-600">
            <span className="font-medium text-navy-800">Pourquoi ? </span>
            <RichText text={p.pourquoi} />
          </p>
        </li>
      ))}
    </ul>
  );
}

/** Tableau simple et lisible. */
export function DataTable({ tableau }: { tableau: Tableau }) {
  return (
    <div className="overflow-x-auto">
      {tableau.titre && (
        <p className="mb-2 text-sm font-medium text-navy-600">{tableau.titre}</p>
      )}
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {tableau.entetes.map((h, i) => (
              <th
                key={i}
                className="border border-navy-100 bg-navy-900 px-3 py-2 font-semibold text-white"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableau.lignes.map((row, r) => (
            <tr key={r} className={r % 2 ? "bg-white" : "bg-navy-50/50"}>
              {row.map((cell, c) => (
                <td key={c} className="border border-navy-100 px-3 py-2 text-center text-navy-700">
                  <RichText text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Synthèse "À retenir" (violet). */
export function RetenirList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-2 text-[15px] font-medium text-navy-800">
          <span className="text-violet-500" aria-hidden>◆</span>
          <RichText text={it} />
        </li>
      ))}
    </ul>
  );
}
