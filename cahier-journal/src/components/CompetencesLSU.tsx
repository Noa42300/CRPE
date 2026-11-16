/**
 * Suivi des compétences (grille LSU) — 100 % LOCAL.
 * ------------------------------------------------
 * Un grand tableau élèves × compétences : je tape sur une case pour cocher le
 * niveau de maîtrise (les 4 niveaux du LSU). Ça me sert de RELEVÉ COURANT : je
 * note au fur et à mesure des évaluations, et je recopie la synthèse dans le
 * LSU officiel en fin de période (avec mon propre accès).
 *
 * DONNÉE SENSIBLE (mineurs) : stockée dans `studentNotes.competences`, donc
 * strictement locale — jamais synchronisée ni publiée (sanitizeForPublic la vide).
 */
import { useMemo, useState } from "react";
import type { Student, StudentNote } from "../lib/types";

/** Les 4 niveaux de maîtrise du LSU (mêmes couleurs que les grilles d'éval). */
export const NIVEAUX_LSU = [
  { id: "tb", court: "TB", label: "Très bonne maîtrise", bg: "#dcfce7", c: "#15803d" },
  { id: "s", court: "S", label: "Maîtrise satisfaisante", bg: "#ecfccb", c: "#4d7c0f" },
  { id: "f", court: "F", label: "Maîtrise fragile", bg: "#fef3c7", c: "#b45309" },
  { id: "i", court: "I", label: "Maîtrise insuffisante", bg: "#fee2e2", c: "#b91c1c" },
] as const;
const CYCLE = ["", "tb", "s", "f", "i"]; // clic → niveau suivant (puis vide)
const niv = (id: string) => NIVEAUX_LSU.find((n) => n.id === id);

type Comp = { id: string; label: string };
type Matiere = { matiere: string; couleur: string; comps: Comp[] };

/** Catalogue de compétences (cycle 2, programmes 2025 FR/maths). Modifiable :
 *  dis-moi d'ajouter / renommer une ligne et je l'ajoute. */
export const CATALOGUE: Matiere[] = [
  {
    matiere: "Français", couleur: "#1d4ed8", comps: [
      { id: "fr-lire-haute", label: "Lire à voix haute un texte court" },
      { id: "fr-comprendre", label: "Comprendre un texte lu" },
      { id: "fr-copie", label: "Copier, soigner son écriture" },
      { id: "fr-majuscules", label: "Écrire les lettres majuscules (cursive)" },
      { id: "fr-ecrit", label: "Produire un écrit court" },
      { id: "fr-oral", label: "Prendre la parole, écouter" },
      { id: "fr-types", label: "Reconnaître les types de phrases" },
      { id: "fr-formes", label: "Reconnaître les formes (affirmative / négative)" },
      { id: "fr-nom", label: "Le nom : genre et nombre" },
      { id: "fr-verbe-det", label: "Identifier le verbe et le déterminant" },
      { id: "fr-ortho-dictee", label: "Orthographier les mots appris (dictée)" },
      { id: "fr-alpha", label: "Ranger dans l'ordre alphabétique" },
      { id: "fr-voc", label: "Enrichir son vocabulaire (contraires…)" },
    ],
  },
  {
    matiere: "Mathématiques", couleur: "#0e7490", comps: [
      { id: "ma-ecrire-nb", label: "Lire, écrire, décomposer les nombres" },
      { id: "ma-denombrer", label: "Dénombrer une collection (c/d/u, m/c/d/u)" },
      { id: "ma-comparer", label: "Comparer et ranger les nombres" },
      { id: "ma-suite", label: "Connaître la suite des nombres" },
      { id: "ma-addition", label: "Calculer des additions" },
      { id: "ma-soustraction", label: "Calculer des soustractions" },
      { id: "ma-tables", label: "Connaître les tables de multiplication" },
      { id: "ma-sens-mult", label: "Comprendre le sens de la multiplication" },
      { id: "ma-problemes", label: "Résoudre un problème (+ / −)" },
      { id: "ma-heure", label: "Lire l'heure" },
      { id: "ma-monnaie", label: "Utiliser la monnaie" },
      { id: "ma-geometrie", label: "Reconnaître et tracer des figures" },
      { id: "ma-reperer", label: "Se repérer, points cardinaux" },
    ],
  },
  {
    matiere: "Questionner le monde", couleur: "#b45309", comps: [
      { id: "qlm-temps", label: "Se repérer dans le temps (histoire)" },
      { id: "qlm-espace", label: "Se repérer dans l'espace (géographie)" },
      { id: "qlm-vivant", label: "Le vivant, la matière, les objets" },
    ],
  },
  {
    matiere: "Anglais", couleur: "#7c3aed", comps: [
      { id: "ang-comprendre", label: "Comprendre des mots et consignes simples" },
      { id: "ang-dire", label: "Répéter, dire des mots et expressions" },
    ],
  },
  {
    matiere: "EMC", couleur: "#be185d", comps: [
      { id: "emc-regles", label: "Respecter les règles de vie de la classe" },
    ],
  },
];

export function CompetencesGrid({
  roster, noteFor, onSave,
}: {
  roster: Student[];
  noteFor: (studentId: string) => StudentNote;
  onSave: (n: StudentNote) => Promise<void>;
}) {
  const [mi, setMi] = useState(0);
  const [copied, setCopied] = useState(false);
  const mat = CATALOGUE[mi];

  const cycle = (student: Student, compId: string) => {
    const note = noteFor(student.id);
    const cur = note.competences?.[compId] ?? "";
    const next = CYCLE[(CYCLE.indexOf(cur) + 1) % CYCLE.length];
    const competences = { ...(note.competences ?? {}) };
    if (next) competences[compId] = next; else delete competences[compId];
    void onSave({ ...note, competences });
  };

  const copier = async () => {
    const lines: string[] = [`Grille LSU — ${mat.matiere}`];
    for (const s of roster) {
      const c = noteFor(s.id).competences ?? {};
      const got = mat.comps.filter((k) => c[k.id]).map((k) => `${k.label} = ${niv(c[k.id])?.label}`);
      if (got.length) lines.push(`• ${s.prenom} (${s.niveau}) : ${got.join(" ; ")}`);
    }
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopied(true); setTimeout(() => setCopied(false), 1600);
    } catch { /* presse-papiers indisponible */ }
  };

  const counts = useMemo(() => {
    // Combien de cases remplies pour la matière courante (toute la classe).
    let filled = 0;
    for (const s of roster) { const c = noteFor(s.id).competences ?? {}; filled += mat.comps.filter((k) => c[k.id]).length; }
    return filled;
  }, [roster, mat, noteFor]);

  return (
    <div>
      {/* Filtre matière */}
      <div className="mb-2 flex flex-wrap items-center gap-1.5">
        {CATALOGUE.map((m, i) => (
          <button key={m.matiere} onClick={() => setMi(i)}
            className="rounded-full px-3 py-1 text-xs font-bold transition"
            style={i === mi ? { background: m.couleur, color: "#fff" } : { background: "#f1f5f9", color: m.couleur }}>
            {m.matiere}
          </button>
        ))}
        <button onClick={copier} className="btn-outline ml-auto py-1 text-xs">
          {copied ? "✓ Copié" : "📋 Copier pour le LSU"}
        </button>
      </div>

      {/* Légende */}
      <div className="mb-2 flex flex-wrap items-center gap-2 text-[11px]">
        <span className="text-slate-500 dark:text-slate-400">Je tape sur une case pour changer le niveau :</span>
        {NIVEAUX_LSU.map((n) => (
          <span key={n.id} className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-bold" style={{ background: n.bg, color: n.c }}>
            {n.court} · {n.label}
          </span>
        ))}
        <span className="text-slate-400">(vide = non évalué)</span>
      </div>

      {/* Tableau élèves × compétences */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
        <table className="border-collapse text-xs" style={{ minWidth: "100%" }}>
          <thead>
            <tr>
              <th className="sticky left-0 z-10 bg-slate-50 px-3 py-2 text-left align-bottom dark:bg-slate-900" style={{ minWidth: "118px" }}>
                <span className="text-slate-500 dark:text-slate-400">Élève ({roster.length}) · {counts} cochées</span>
              </th>
              {mat.comps.map((k) => (
                <th key={k.id} className="px-1 py-2 align-bottom" style={{ background: "#f8fafc", minWidth: "58px", maxWidth: "58px" }}>
                  <div className="mx-auto text-[10px] font-semibold leading-tight text-slate-600 dark:text-slate-300" style={{ width: "54px" }}>{k.label}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {roster.map((s) => {
              const c = noteFor(s.id).competences ?? {};
              return (
                <tr key={s.id} className="border-t border-slate-100 dark:border-slate-800">
                  <td className="sticky left-0 z-10 bg-white px-3 py-1.5 dark:bg-slate-900">
                    <span className="font-semibold text-slate-800 dark:text-slate-100">{s.prenom}</span>
                    <span className="ml-1 text-[10px] font-bold text-slate-400">{s.niveau}</span>
                  </td>
                  {mat.comps.map((k) => {
                    const n = niv(c[k.id] ?? "");
                    return (
                      <td key={k.id} className="p-0.5 text-center">
                        <button onClick={() => cycle(s, k.id)} title={k.label}
                          className="mx-auto flex h-7 w-11 items-center justify-center rounded-md border text-[11px] font-extrabold transition"
                          style={n ? { background: n.bg, color: n.c, borderColor: n.c } : { background: "#fff", color: "#cbd5e1", borderColor: "#e2e8f0" }}>
                          {n ? n.court : "·"}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-[11px] text-slate-400">
        🔒 100 % local (jamais publié). Ce relevé te sert à <b>synthétiser</b> en fin de période dans le LSU officiel.
      </p>
    </div>
  );
}
