/**
 * Utilitaires de dates
 * --------------------
 * Fonctions pures pour manipuler les dates au format ISO local (AAAA-MM-JJ),
 * calculer le numéro de semaine, formater en français, etc.
 * Aucune dépendance externe.
 */

const JOURS = [
  "dimanche",
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
];
const MOIS = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

/** Génère un identifiant unique simple (sans dépendance). */
export function uid(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
}

/** Convertit une Date en clé ISO locale "AAAA-MM-JJ" (sans décalage UTC). */
export function toISODate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Parse "AAAA-MM-JJ" en Date locale (midi pour éviter les soucis de fuseau). */
export function fromISODate(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d, 12, 0, 0, 0);
}

/** Date d'aujourd'hui en clé ISO. */
export function todayISO(): string {
  return toISODate(new Date());
}

/** Ajoute (ou retire) un nombre de jours à une date ISO. */
export function addDays(iso: string, n: number): string {
  const d = fromISODate(iso);
  d.setDate(d.getDate() + n);
  return toISODate(d);
}

/** Numéro de jour de la semaine (0=dimanche … 6=samedi). */
export function weekday(iso: string): number {
  return fromISODate(iso).getDay();
}

/** Nom du jour en français, ex "lundi". */
export function jourNom(iso: string): string {
  return JOURS[weekday(iso)];
}

/** Numéro de semaine ISO 8601 (les semaines commencent le lundi). */
export function isoWeek(iso: string): number {
  const date = fromISODate(iso);
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const dayNum = (d.getDay() + 6) % 7; // lundi=0 … dimanche=6
  d.setDate(d.getDate() - dayNum + 3); // jeudi de cette semaine
  const firstThursday = new Date(d.getFullYear(), 0, 4);
  const firstDayNum = (firstThursday.getDay() + 6) % 7;
  firstThursday.setDate(firstThursday.getDate() - firstDayNum + 3);
  const diff = d.getTime() - firstThursday.getTime();
  return 1 + Math.round(diff / (7 * 24 * 3600 * 1000));
}

/** Renvoie la date ISO du lundi de la semaine contenant `iso`. */
export function mondayOf(iso: string): string {
  const dayNum = (weekday(iso) + 6) % 7; // lundi=0
  return addDays(iso, -dayNum);
}

/** Les 7 dates ISO de la semaine (lundi → dimanche) contenant `iso`. */
export function weekDates(iso: string): string[] {
  const monday = mondayOf(iso);
  return Array.from({ length: 7 }, (_, i) => addDays(monday, i));
}

/** Formatage long, ex "lundi 31 août 2026". */
export function formatLong(iso: string): string {
  const d = fromISODate(iso);
  return `${JOURS[d.getDay()]} ${d.getDate()} ${MOIS[d.getMonth()]} ${d.getFullYear()}`;
}

/** Formatage court, ex "31 août". */
export function formatShort(iso: string): string {
  const d = fromISODate(iso);
  return `${d.getDate()} ${MOIS[d.getMonth()]}`;
}

/** Première lettre en capitale. */
export function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export const MONTH_NAMES = MOIS;
export const DAY_NAMES = JOURS;
