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
export type RecreLieu = "Basket" | "City" | "Préau" | "Ballon prisonnier";

/**
 * Planning des lieux de récré de NOTRE classe (CE1-CE2).
 * clé = jour de la semaine (1 = lundi … 5 = vendredi).
 * Règle donnée : lundi après-midi Basket, mardi après-midi Ballon prisonnier,
 * jeudi matin City — tout le reste au Préau.
 */
const DEFAUT: RecreLieu = "Préau";
const DUTY: Record<number, { am?: RecreLieu; pm?: RecreLieu }> = {
  1: { am: "Préau", pm: "Basket" }, // Lundi
  2: { am: "Préau", pm: "Ballon prisonnier" }, // Mardi
  3: { am: "Préau", pm: "Préau" }, // Mercredi
  4: { am: "City", pm: "Préau" }, // Jeudi
  5: { am: "Préau", pm: "Préau" }, // Vendredi
};

/** Jour de la semaine (1=lundi..7=dimanche) pour une date ISO, sans fuseau. */
function isoWeekday(iso: string): number {
  const [y, m, d] = iso.split("-").map(Number);
  const wd = new Date(Date.UTC(y, m - 1, d)).getUTCDay(); // 0=dimanche
  return wd === 0 ? 7 : wd;
}

/**
 * Lieu de service de récré pour NOTRE classe, à une date + une heure de début
 * de créneau. Renvoie toujours un lieu pour un jour d'école (« le reste » =
 * Préau) ; `undefined` seulement le week-end.
 */
export function recreLieu(date: string, start?: string): RecreLieu | undefined {
  const wd = isoWeekday(date);
  if (wd > 5) return undefined; // week-end
  const duty = DUTY[wd] ?? {};
  const isMorning = !start || start < "12:00";
  return (isMorning ? duty.am : duty.pm) ?? DEFAUT;
}
