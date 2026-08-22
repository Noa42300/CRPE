/**
 * Sauvegarde & restauration
 * -------------------------
 * Export/import de TOUTES les données sous forme d'un fichier .json local.
 * L'export déclenche un téléchargement ; l'import lit un fichier choisi par
 * l'utilisateur. Rien ne transite par le réseau.
 */
import type { BackupFile, Day, Settings, Template } from "./types";
import { SCHEMA_VERSION } from "./types";
import { daysDB, settingsDB, templatesDB } from "./db";
import { todayISO } from "./dates";

/** Construit l'objet de sauvegarde à partir de la base. */
export async function buildBackup(settings: Settings): Promise<BackupFile> {
  const [days, templates] = await Promise.all([
    daysDB.getAll(),
    templatesDB.getAll(),
  ]);
  return {
    app: "cahier-journal",
    schemaVersion: SCHEMA_VERSION,
    exportedAt: new Date().toISOString(),
    settings,
    days,
    templates,
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
  };
}

/**
 * Écrit une sauvegarde importée dans la base.
 * mode "replace" : remplace tout. mode "merge" : fusionne les journées.
 */
export async function restoreBackup(
  parsed: ParsedBackup,
  mode: "replace" | "merge",
): Promise<void> {
  if (mode === "replace") {
    await daysDB.clear();
    await templatesDB.clear();
  }
  await settingsDB.put({ ...parsed.settings, key: "app" });
  for (const day of parsed.days) await daysDB.put(day);
  for (const t of parsed.templates) await templatesDB.put(t);
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
