/**
 * Lieu de service de récréation — classe CE1-CE2
 * ----------------------------------------------
 * L'école tourne les services de surveillance de cour par zone (Basket, City,
 * Préau). Ce tableau dit, pour NOTRE classe (CE1-CE2), où l'on surveille selon
 * le jour de la semaine et le moment (matin / après-midi). Il s'affiche à côté
 * de « Récréation » dans l'emploi du temps projeté.
 *
 * Rotation de la Période 1 (« SERVICES RÉCRÉATION P1 »). Le mercredi n'est pas
 * travaillé. Une case vide = pas de service ce moment-là.
 */
import type { Settings } from "./types";
import { periodForDate } from "./lookup";

export type RecreLieu = "Basket" | "City" | "Préau";

/** clé = jour de la semaine (1 = lundi … 5 = vendredi). */
const DUTY_P1: Record<number, { am?: RecreLieu; pm?: RecreLieu }> = {
  1: { am: "Basket" }, // Lundi
  2: { am: "City", pm: "Préau" }, // Mardi
  4: { am: "Préau", pm: "Basket" }, // Jeudi
  5: { am: "Basket" }, // Vendredi
};

/** Jour de la semaine (1=lundi..7=dimanche) pour une date ISO, sans fuseau. */
function isoWeekday(iso: string): number {
  const [y, m, d] = iso.split("-").map(Number);
  const wd = new Date(Date.UTC(y, m - 1, d)).getUTCDay(); // 0=dimanche
  return wd === 0 ? 7 : wd;
}

/**
 * Lieu de service de récré pour NOTRE classe, à une date + une heure de début
 * de créneau. Ne renvoie un lieu que pendant la Période 1 (le tableau connu) ;
 * `undefined` sinon (autre période, jour sans service…).
 */
export function recreLieu(
  settings: Settings,
  date: string,
  start?: string,
): RecreLieu | undefined {
  const period = periodForDate(settings, date);
  if (!period || period.number !== 1) return undefined;
  const duty = DUTY_P1[isoWeekday(date)];
  if (!duty) return undefined;
  const isMorning = !start || start < "12:00";
  return isMorning ? duty.am : duty.pm;
}
