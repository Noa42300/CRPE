/**
 * Couche de stockage IndexedDB
 * ----------------------------
 * Petit wrapper promisifié autour d'IndexedDB — AUCUNE dépendance externe,
 * AUCUN réseau. Toutes les données restent dans le navigateur de l'appareil.
 *
 * 3 magasins d'objets :
 *   - "days"       : les journées, clé = date ISO
 *   - "settings"   : réglages, clé fixe "app"
 *   - "templates"  : modèles réutilisables, clé = id
 */
import type {
  Attachment,
  AttachmentMeta,
  Day,
  Plan,
  Ritual,
  Sequence,
  Settings,
  Template,
} from "./types";

const DB_NAME = "cahier-journal";
const DB_VERSION = 5;

type StoreName =
  | "days"
  | "settings"
  | "templates"
  | "plans"
  | "sequences"
  | "rituals"
  | "attachments";

let dbPromise: Promise<IDBDatabase> | null = null;

/** Ouvre (et crée si besoin) la base IndexedDB. */
function openDB(): Promise<IDBDatabase> {
  if (typeof indexedDB === "undefined") {
    return Promise.reject(
      new Error("IndexedDB indisponible dans cet environnement."),
    );
  }
  if (dbPromise) return dbPromise;

  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains("days")) {
        db.createObjectStore("days", { keyPath: "date" });
      }
      if (!db.objectStoreNames.contains("settings")) {
        db.createObjectStore("settings", { keyPath: "key" });
      }
      if (!db.objectStoreNames.contains("templates")) {
        db.createObjectStore("templates", { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains("plans")) {
        db.createObjectStore("plans", { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains("sequences")) {
        db.createObjectStore("sequences", { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains("rituals")) {
        db.createObjectStore("rituals", { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains("attachments")) {
        const st = db.createObjectStore("attachments", { keyPath: "id" });
        st.createIndex("refId", "refId", { unique: false });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return dbPromise;
}

/** Exécute une opération sur un magasin et renvoie une promesse. */
function tx<T>(
  store: StoreName,
  mode: IDBTransactionMode,
  fn: (s: IDBObjectStore) => IDBRequest,
): Promise<T> {
  return openDB().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const transaction = db.transaction(store, mode);
        const req = fn(transaction.objectStore(store));
        req.onsuccess = () => resolve(req.result as T);
        req.onerror = () => reject(req.error);
      }),
  );
}

// ---------------------------------------------------------------- Journées
export const daysDB = {
  get: (date: string) =>
    tx<Day | undefined>("days", "readonly", (s) => s.get(date)),
  getAll: () => tx<Day[]>("days", "readonly", (s) => s.getAll()),
  put: (day: Day) => tx<IDBValidKey>("days", "readwrite", (s) => s.put(day)),
  delete: (date: string) =>
    tx<undefined>("days", "readwrite", (s) => s.delete(date)),
  clear: () => tx<undefined>("days", "readwrite", (s) => s.clear()),
};

// ---------------------------------------------------------------- Réglages
export const settingsDB = {
  get: () =>
    tx<Settings | undefined>("settings", "readonly", (s) => s.get("app")),
  put: (settings: Settings) =>
    tx<IDBValidKey>("settings", "readwrite", (s) => s.put(settings)),
};

// ---------------------------------------------------------------- Modèles
export const templatesDB = {
  getAll: () => tx<Template[]>("templates", "readonly", (s) => s.getAll()),
  put: (t: Template) =>
    tx<IDBValidKey>("templates", "readwrite", (s) => s.put(t)),
  delete: (id: string) =>
    tx<undefined>("templates", "readwrite", (s) => s.delete(id)),
  clear: () => tx<undefined>("templates", "readwrite", (s) => s.clear()),
};

// ---------------------------------------------------------------- Plans
export const plansDB = {
  getAll: () => tx<Plan[]>("plans", "readonly", (s) => s.getAll()),
  put: (p: Plan) => tx<IDBValidKey>("plans", "readwrite", (s) => s.put(p)),
  delete: (id: string) =>
    tx<undefined>("plans", "readwrite", (s) => s.delete(id)),
  clear: () => tx<undefined>("plans", "readwrite", (s) => s.clear()),
};

// ------------------------------------------------------------ Séquences
export const sequencesDB = {
  getAll: () => tx<Sequence[]>("sequences", "readonly", (s) => s.getAll()),
  put: (seq: Sequence) =>
    tx<IDBValidKey>("sequences", "readwrite", (s) => s.put(seq)),
  delete: (id: string) =>
    tx<undefined>("sequences", "readwrite", (s) => s.delete(id)),
  clear: () => tx<undefined>("sequences", "readwrite", (s) => s.clear()),
};

// ------------------------------------------------------------ Rituels
export const ritualsDB = {
  getAll: () => tx<Ritual[]>("rituals", "readonly", (s) => s.getAll()),
  put: (r: Ritual) => tx<IDBValidKey>("rituals", "readwrite", (s) => s.put(r)),
  delete: (id: string) =>
    tx<undefined>("rituals", "readwrite", (s) => s.delete(id)),
  clear: () => tx<undefined>("rituals", "readwrite", (s) => s.clear()),
};

// ------------------------------------------------------------ Documents joints
/**
 * Documents (PDF, images) rattachés à une séance ou à une journée, à imprimer.
 * Stockés en base64 dans IndexedDB — 100 % locaux, jamais synchronisés ni
 * publiés (ils peuvent contenir des supports d'élèves).
 * `refId` : "activity:<id>" ou "day:<AAAA-MM-JJ>".
 */
function txIndex<T>(fn: (idx: IDBIndex) => IDBRequest): Promise<T> {
  return openDB().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const transaction = db.transaction("attachments", "readonly");
        const req = fn(transaction.objectStore("attachments").index("refId"));
        req.onsuccess = () => resolve(req.result as T);
        req.onerror = () => reject(req.error);
      }),
  );
}

export const attachmentsDB = {
  /** Métadonnées (sans les données lourdes) pour une référence donnée. */
  listMeta: (refId: string) =>
    txIndex<Attachment[]>((idx) => idx.getAll(refId)).then((recs) =>
      recs.map(({ data: _data, ...meta }) => meta as AttachmentMeta),
    ),
  get: (id: string) =>
    tx<Attachment | undefined>("attachments", "readonly", (s) => s.get(id)),
  put: (a: Attachment) =>
    tx<IDBValidKey>("attachments", "readwrite", (s) => s.put(a)),
  delete: (id: string) =>
    tx<undefined>("attachments", "readwrite", (s) => s.delete(id)),
  clear: () => tx<undefined>("attachments", "readwrite", (s) => s.clear()),
};

/** Supprime journées, modèles, plans, séquences, rituels et documents joints. */
export async function wipeAll(): Promise<void> {
  await daysDB.clear();
  await templatesDB.clear();
  await plansDB.clear();
  await sequencesDB.clear();
  await ritualsDB.clear();
  await attachmentsDB.clear();
}

/** Indique si IndexedDB est disponible (utile pour un message d'alerte). */
export function isStorageAvailable(): boolean {
  return typeof indexedDB !== "undefined";
}
