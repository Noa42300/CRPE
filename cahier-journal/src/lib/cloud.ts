/**
 * Synchronisation « cloud » via GitHub
 * ------------------------------------
 * Le cahier « maître » est un fichier `journal.json` publié avec le site
 * (même origine → aucune requête externe, aucun CORS). Claude édite ce
 * fichier dans le dépôt GitHub et le pousse ; l'application le récupère et
 * fusionne les nouvelles journées **sans écraser** ce que tu as déjà saisi.
 *
 * Sens de synchro : GitHub → application (lecture seule côté appli). Tes
 * modifications locales restent locales et ne sont jamais envoyées en ligne.
 */
import { parseBackup } from "./backup";
import { daysDB, plansDB, ritualsDB, sequencesDB, settingsDB } from "./db";
import { defaultSettings } from "./defaults";

/** Fichier servi à côté de l'application (même origine). */
export const CLOUD_FILE = "journal.json";

export interface SyncResult {
  added: number;
  updated: number;
  skipped: number;
}

/**
 * Récupère le fichier cloud et fusionne son contenu dans la base locale.
 * @param overwrite  true = remplace aussi les journées déjà présentes.
 *                   false (défaut) = n'ajoute que les journées absentes
 *                   (protège tes bilans et modifications locales).
 */
export async function syncFromCloud(overwrite = false): Promise<SyncResult> {
  const res = await fetch(`${CLOUD_FILE}?t=${Date.now()}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Aucun fichier de synchronisation trouvé (journal.json).");
  }
  const parsed = parseBackup(await res.text());

  // Fusion des disciplines / niveaux manquants dans les réglages actuels.
  const current = (await settingsDB.get()) ?? defaultSettings();
  const discIds = new Set(current.disciplines.map((d) => d.id));
  const nivIds = new Set(current.niveaux.map((n) => n.id));
  await settingsDB.put({
    ...current,
    key: "app",
    disciplines: [
      ...current.disciplines,
      ...parsed.settings.disciplines.filter((d) => !discIds.has(d.id)),
    ],
    niveaux: [
      ...current.niveaux,
      ...parsed.settings.niveaux.filter((n) => !nivIds.has(n.id)),
    ],
  });

  let added = 0;
  let updated = 0;
  let skipped = 0;
  for (const day of parsed.days) {
    const existing = await daysDB.get(day.date);
    if (existing && !overwrite) {
      skipped++;
      continue;
    }
    await daysDB.put(day);
    if (existing) updated++;
    else added++;
  }

  // Programmations / progressions (pédagogie, sans donnée élève).
  // Mise à jour si la version cloud est plus récente (par updatedAt), afin
  // que le contenu publié te parvienne, sans écraser tes retouches locales
  // plus récentes.
  const existingPlans = new Map(
    (await plansDB.getAll()).map((p) => [p.id, p]),
  );
  for (const plan of parsed.plans) {
    const existing = existingPlans.get(plan.id);
    const cloudNewer =
      !existing || (plan.updatedAt ?? 0) > (existing.updatedAt ?? 0);
    if (existing && !overwrite && !cloudNewer) continue;
    await plansDB.put(plan);
  }

  // Séquences (Bibliothèque) — même règle de mise à jour par updatedAt.
  const existingSeq = new Map(
    (await sequencesDB.getAll()).map((s) => [s.id, s]),
  );
  for (const seq of parsed.sequences) {
    const existing = existingSeq.get(seq.id);
    const cloudNewer =
      !existing || (seq.updatedAt ?? 0) > (existing.updatedAt ?? 0);
    if (existing && !overwrite && !cloudNewer) continue;
    await sequencesDB.put(seq);
  }

  // Rituels — même règle de mise à jour par updatedAt.
  const existingRit = new Map((await ritualsDB.getAll()).map((r) => [r.id, r]));
  for (const rit of parsed.rituals) {
    const existing = existingRit.get(rit.id);
    const cloudNewer =
      !existing || (rit.updatedAt ?? 0) > (existing.updatedAt ?? 0);
    if (existing && !overwrite && !cloudNewer) continue;
    await ritualsDB.put(rit);
  }

  return { added, updated, skipped };
}
