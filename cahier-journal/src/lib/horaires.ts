/**
 * Volumes horaires hebdomadaires à respecter (service à mi-temps : lundi + mardi)
 * ------------------------------------------------------------------------------
 * Référence pour préparer les séances : les totaux ci-dessous s'entendent SUR
 * LES DEUX JOURS (pas par jour). Français et Mathématiques sont IMPÉRATIFS ;
 * le reste peut être réduit (« gratté ») si la journée est trop chargée.
 *
 * Donnée purement pédagogique (aucune donnée élève).
 */
import type { Day } from "./types";

export interface VolumeHebdo {
  disciplineId: string;
  label: string;
  /** Minutes à atteindre sur les 2 jours (lundi + mardi). */
  cibleMin: number;
  /** true = doit absolument être atteint ; false = ajustable. */
  imperatif: boolean;
  /** Plancher acceptable si on doit réduire (minutes). */
  plancherMin?: number;
  note?: string;
}

/** Cibles hebdomadaires (Période 1, mi-temps lundi + mardi). */
export const VOLUMES_HEBDO: VolumeHebdo[] = [
  { disciplineId: "francais", label: "Français", cibleMin: 300, imperatif: true, note: "5 h sur les 2 jours (~2 h 30/jour). Non négociable." },
  { disciplineId: "maths", label: "Mathématiques", cibleMin: 135, imperatif: true, note: "2 h 15 sur les 2 jours (~1 h 07/jour). Non négociable." },
  { disciplineId: "anglais", label: "Langue vivante (anglais)", cibleMin: 90, imperatif: false, plancherMin: 45, note: "1 h 30 idéal ; 45 min acceptable si besoin." },
  { disciplineId: "eps", label: "EPS", cibleMin: 90, imperatif: false, note: "1 h 30 ; ajustable." },
  { disciplineId: "qlm", label: "Questionner le monde", cibleMin: 45, imperatif: false, note: "45 min (histoire en P1) ; ajustable." },
  // Musique : ~1 h en principe, MAIS conservatoire dès début octobre → ne pas programmer.
];

/** Durée d'un créneau en minutes. */
function dureeMin(start: string, end: string): number {
  const [h1, m1] = start.split(":").map(Number);
  const [h2, m2] = end.split(":").map(Number);
  return Math.max(0, h2 * 60 + m2 - (h1 * 60 + m1));
}

/** Total de minutes d'une discipline sur un ensemble de journées (ex. lun+mar). */
export function minutesDiscipline(days: Day[], disciplineId: string): number {
  let total = 0;
  for (const d of days) {
    for (const s of d.slots) {
      if (s.disciplineId === disciplineId) total += dureeMin(s.start, s.end);
    }
  }
  return total;
}
