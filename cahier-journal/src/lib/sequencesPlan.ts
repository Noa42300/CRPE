/**
 * Plan de séquences — vue d'ensemble alignée sur la programmation annuelle.
 * ------------------------------------------------------------------------
 * Assemble, par matière, les SÉQUENCES et leurs SÉANCES (noms + période/jour),
 * à partir des programmations intégrées (anglais, QLM histoire/géo/sciences,
 * EMC, français, maths) + la séquence EPS déjà posée. C'est un SQUELETTE
 * (noms et enchaînement), sans contenu détaillé : la préparation fine se fait
 * dans la Bibliothèque / le cahier journal. 100 % pédagogique.
 */
import { PERIODES, REPART_FRANCAIS, GRAPHEMO, PROG_MATHS } from "./programmations";
import { PROG_ANGLAIS, PROG_QLM, PROG_EMC } from "./progDisciplines";

export interface PlanSeance {
  n: number;
  titre: string;
  quand?: string; // jour/date (si connu) — sinon la période fait foi
}
export interface PlanSequence {
  titre: string;
  periode?: string;
  objectif?: string;
  note?: string;
  seances: PlanSeance[];
}
export interface DisciplinePlan {
  disciplineId: string;
  label: string;
  sequences: PlanSequence[];
}

const num = (arr: string[]): PlanSeance[] => arr.map((t, i) => ({ n: i + 1, titre: t }));
const domToSeances = (dom: Record<string, string[]>): string[] => {
  const out: string[] = [];
  for (const [d, items] of Object.entries(dom)) for (const it of items) out.push(`${it}  ·  ${d}`);
  return out;
};

/* --------------------------- Anglais (18 séquences) --------------------------- */
const anglais: PlanSequence[] = PROG_ANGLAIS.map((s) => ({
  titre: s.titre,
  periode: s.periode,
  seances: num(s.seances),
}));

/* ------------------ Questionner le monde (Histoire, Géo, Sciences) ------------------ */
const qlm: PlanSequence[] = PROG_QLM.flatMap((sub) => {
  const dom = sub.label.split(" ")[0]; // Histoire / Géographie / Sciences
  return sub.sequences.map((s) => ({ titre: `${dom} — ${s.titre}`, seances: num(s.seances) }));
});

/* --------------------------- EMC (par période) --------------------------- */
const emc: PlanSequence[] = PROG_EMC.map((p) => ({
  titre: `EMC — ${p.periode}`,
  periode: p.periode,
  seances: num(p.themes),
}));

/* --------------------------- Français (par période) --------------------------- */
const francais: PlanSequence[] = PERIODES.map((per) => ({
  titre: `Français — ${per}`,
  periode: per,
  note: `Dictées Graphémo (Thème 1) : ${GRAPHEMO[per].join(" · ")}`,
  seances: num(domToSeances(REPART_FRANCAIS[per])),
}));

/* --------------------------- Maths (par période, Tandem) --------------------------- */
const maths: PlanSequence[] = PERIODES.map((per) => ({
  titre: `Maths — ${per} (Tandem)`,
  periode: per,
  note: "Réf. CE1 ; les CE2 vont plus loin (voir Programmations).",
  seances: num(domToSeances(PROG_MATHS.CE1[per])),
}));

/* --------------------------- EPS (P1, dates posées) --------------------------- */
const eps: PlanSequence[] = [
  {
    titre: "Athlétisme — Période 1 (courir & lancer)",
    periode: "P1",
    objectif: "Découverte → consolidation → évaluation. Cour en béton : pas de saut avec réception.",
    seances: [
      { n: 1, titre: "Découverte : courir longtemps (jeu du contrat)", quand: "lun 7/09" },
      { n: 2, titre: "Consolidation : courir longtemps (allure régulière)", quand: "mar 8/09" },
      { n: 3, titre: "Découverte : courir vite (réagir & sprinter)", quand: "lun 14/09" },
      { n: 4, titre: "Consolidation : relais (vitesse & coopération)", quand: "mar 15/09" },
      { n: 5, titre: "Découverte : lancer loin (engins variés)", quand: "lun 21/09" },
      { n: 6, titre: "Consolidation : lancer loin (geste bras cassé)", quand: "mar 22/09" },
      { n: 7, titre: "Évaluation : rencontre athlétique (3 ateliers)", quand: "lun 28/09" },
    ],
  },
];

/* --------------------------- Poésie (exemple à préciser) --------------------------- */
const poesie: PlanSequence[] = [
  {
    titre: "Poésie — Période 1 (exemple, à préciser)",
    periode: "P1",
    seances: num([
      "Découvrir et choisir un poème",
      "Comprendre et illustrer le poème",
      "S'entraîner à réciter (mise en voix)",
      "Récitation évaluée",
    ]),
  },
];

export const SEQUENCES_PLAN: DisciplinePlan[] = [
  { disciplineId: "francais", label: "Français", sequences: [...francais, ...poesie] },
  { disciplineId: "maths", label: "Mathématiques", sequences: maths },
  { disciplineId: "qlm", label: "Questionner le monde", sequences: qlm },
  { disciplineId: "emc", label: "EMC", sequences: emc },
  { disciplineId: "anglais", label: "Anglais", sequences: anglais },
  { disciplineId: "eps", label: "EPS", sequences: eps },
];
