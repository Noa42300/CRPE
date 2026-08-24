/**
 * Sauvegarde & restauration
 * -------------------------
 * Export/import de TOUTES les données sous forme d'un fichier .json local.
 * L'export déclenche un téléchargement ; l'import lit un fichier choisi par
 * l'utilisateur. Rien ne transite par le réseau.
 */
import type {
  BackupFile,
  Day,
  Plan,
  Sequence,
  Settings,
  Template,
} from "./types";
import { SCHEMA_VERSION } from "./types";
import { daysDB, plansDB, sequencesDB, settingsDB, templatesDB } from "./db";
import { todayISO } from "./dates";

/** Construit l'objet de sauvegarde à partir de la base. */
export async function buildBackup(settings: Settings): Promise<BackupFile> {
  const [days, templates, plans, sequences] = await Promise.all([
    daysDB.getAll(),
    templatesDB.getAll(),
    plansDB.getAll(),
    sequencesDB.getAll(),
  ]);
  return {
    app: "cahier-journal",
    schemaVersion: SCHEMA_VERSION,
    exportedAt: new Date().toISOString(),
    settings,
    days,
    templates,
    plans,
    sequences,
  };
}

/**
 * GARDE-FOU DE CONFIDENTIALITÉ
 * ---------------------------
 * Produit une version « publiable » d'une sauvegarde : retire TOUTE donnée
 * pouvant identifier un élève (liste d'élèves, noms d'absents, bilans
 * nominatifs). À utiliser avant de publier quoi que ce soit en ligne
 * (fichier cloud public). Ne modifie jamais tes données locales.
 */
export function sanitizeForPublic(backup: BackupFile): BackupFile {
  return {
    ...backup,
    settings: {
      ...backup.settings,
      classe: { ...backup.settings.classe, eleves: [] },
    },
    days: backup.days.map((d) => ({
      ...d,
      info: { ...d.info, absentsNames: "" },
      slots: d.slots.map((s) => ({
        ...s,
        activities: s.activities.map((a) => ({
          ...a,
          // On garde la préparation, on vide les champs de suivi nominatif.
          bilan: "",
          aReprendre: "",
          notesProchaine: "",
        })),
      })),
    })),
  };
}

/** Déclenche le téléchargement du fichier de sauvegarde. */
export async function exportBackup(settings: Settings): Promise<void> {
  const backup = await buildBackup(settings);
  const blob = new Blob([JSON.stringify(backup, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `cahier-journal-sauvegarde-${todayISO()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/** Résultat d'une lecture de fichier de sauvegarde. */
export interface ParsedBackup {
  settings: Settings;
  days: Day[];
  templates: Template[];
  plans: Plan[];
  sequences: Sequence[];
}

/** Analyse et valide le contenu d'un fichier de sauvegarde. */
export function parseBackup(text: string): ParsedBackup {
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error("Fichier illisible : ce n'est pas un JSON valide.");
  }
  const b = data as Partial<BackupFile>;
  if (!b || b.app !== "cahier-journal") {
    throw new Error("Ce fichier n'est pas une sauvegarde de Cahier Journal.");
  }
  if (!b.settings || !Array.isArray(b.days)) {
    throw new Error("Sauvegarde incomplète ou corrompue.");
  }
  return {
    settings: b.settings,
    days: b.days,
    templates: Array.isArray(b.templates) ? b.templates : [],
    plans: Array.isArray(b.plans) ? b.plans : [],
    sequences: Array.isArray(b.sequences) ? b.sequences : [],
  };
}

/**
 * Écrit une sauvegarde importée dans la base.
 *
 * mode "replace" : efface tout et restaure intégralement (réglages compris).
 * mode "merge"   : NON destructif — conserve tes réglages actuels (profil,
 *                  classe, thème, périodes) et ajoute seulement les journées
 *                  importées ainsi que les disciplines/niveaux manquants dont
 *                  ces journées ont besoin. Idéal pour recevoir des séances.
 */
export async function restoreBackup(
  parsed: ParsedBackup,
  mode: "replace" | "merge",
): Promise<void> {
  if (mode === "replace") {
    await daysDB.clear();
    await templatesDB.clear();
    await plansDB.clear();
    await sequencesDB.clear();
    await settingsDB.put({ ...parsed.settings, key: "app" });
  } else {
    const current = (await settingsDB.get()) ?? parsed.settings;
    const discIds = new Set(current.disciplines.map((d) => d.id));
    const nivIds = new Set(current.niveaux.map((n) => n.id));
    const mergedDisciplines = [
      ...current.disciplines,
      ...parsed.settings.disciplines.filter((d) => !discIds.has(d.id)),
    ];
    const mergedNiveaux = [
      ...current.niveaux,
      ...parsed.settings.niveaux.filter((n) => !nivIds.has(n.id)),
    ];
    await settingsDB.put({
      ...current,
      key: "app",
      disciplines: mergedDisciplines,
      niveaux: mergedNiveaux,
    });
  }
  for (const day of parsed.days) await daysDB.put(day);
  for (const t of parsed.templates) await templatesDB.put(t);
  for (const p of parsed.plans) await plansDB.put(p);
  for (const seq of parsed.sequences) await sequencesDB.put(seq);
}

/** Lit un File (input type=file) en texte. */
export function readFileText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
}
