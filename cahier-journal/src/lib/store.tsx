/**
 * Store applicatif (contexte React)
 * ---------------------------------
 * Source unique de vérité côté interface. Charge les réglages et toutes les
 * journées depuis IndexedDB au démarrage (échelle personnelle : peu de
 * données → tout en mémoire, lecture instantanée), puis persiste chaque
 * modification automatiquement (autosave anti-rebond).
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { Day, Plan, Sequence, Settings, Template } from "./types";
import { SCHEMA_VERSION } from "./types";
import {
  daysDB,
  isStorageAvailable,
  plansDB,
  sequencesDB,
  settingsDB,
  templatesDB,
  wipeAll,
} from "./db";
import { defaultSettings } from "./defaults";
import { syncFromCloud, type SyncResult } from "./cloud";

export type SaveStatus = "idle" | "saving" | "saved" | "error";

interface StoreValue {
  ready: boolean;
  storageOK: boolean;
  settings: Settings;
  daysMap: Record<string, Day>;
  templates: Template[];
  plans: Plan[];
  sequences: Sequence[];
  saveStatus: SaveStatus;

  saveSettings: (next: Settings) => void;
  saveDay: (day: Day) => void;
  removeDay: (date: string) => Promise<void>;
  saveTemplate: (t: Template) => Promise<void>;
  removeTemplate: (id: string) => Promise<void>;
  savePlan: (p: Plan) => void;
  removePlan: (id: string) => Promise<void>;
  saveSequence: (s: Sequence) => void;
  removeSequence: (id: string) => Promise<void>;
  flush: () => Promise<void>;
  reloadAll: () => Promise<void>;
  resetEverything: () => Promise<void>;
  syncCloud: (overwrite?: boolean) => Promise<SyncResult>;
  lastCloudSync: number | null;
}

const StoreContext = createContext<StoreValue | null>(null);

export function useStore(): StoreValue {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore doit être utilisé dans <StoreProvider>.");
  return ctx;
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [storageOK] = useState(isStorageAvailable());
  const [settings, setSettings] = useState<Settings>(defaultSettings());
  const [daysMap, setDaysMap] = useState<Record<string, Day>>({});
  const [templates, setTemplates] = useState<Template[]>([]);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [sequences, setSequences] = useState<Sequence[]>([]);
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");
  const [lastCloudSync, setLastCloudSync] = useState<number | null>(null);
  const autoSyncDone = useRef(false);

  // --- File d'attente d'autosave (anti-rebond) ---
  const pendingDays = useRef<Map<string, Day>>(new Map());
  const pendingPlans = useRef<Map<string, Plan>>(new Map());
  const pendingSequences = useRef<Map<string, Sequence>>(new Map());
  const pendingSettings = useRef<Settings | null>(null);
  const timer = useRef<number | null>(null);

  const flush = useCallback(async () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    const days = Array.from(pendingDays.current.values());
    const plansList = Array.from(pendingPlans.current.values());
    const seqList = Array.from(pendingSequences.current.values());
    const s = pendingSettings.current;
    pendingDays.current.clear();
    pendingPlans.current.clear();
    pendingSequences.current.clear();
    pendingSettings.current = null;
    if (days.length === 0 && plansList.length === 0 && seqList.length === 0 && !s)
      return;
    try {
      for (const d of days) await daysDB.put(d);
      for (const p of plansList) await plansDB.put(p);
      for (const seq of seqList) await sequencesDB.put(seq);
      if (s) await settingsDB.put(s);
      setSaveStatus("saved");
    } catch {
      setSaveStatus("error");
    }
  }, []);

  const scheduleFlush = useCallback(() => {
    setSaveStatus("saving");
    if (timer.current) clearTimeout(timer.current);
    timer.current = window.setTimeout(() => void flush(), 500);
  }, [flush]);

  // Chargement initial
  const reloadAll = useCallback(async () => {
    if (!isStorageAvailable()) {
      setReady(true);
      return;
    }
    let s = await settingsDB.get();
    if (!s) {
      s = defaultSettings();
      await settingsDB.put(s);
    }
    // Migration légère : complète les champs manquants d'anciens schémas.
    s = { ...defaultSettings(), ...s, schemaVersion: SCHEMA_VERSION, key: "app" };
    const [allDays, allTemplates, allPlans, allSequences] = await Promise.all([
      daysDB.getAll(),
      templatesDB.getAll(),
      plansDB.getAll(),
      sequencesDB.getAll(),
    ]);
    const map: Record<string, Day> = {};
    for (const d of allDays) map[d.date] = d;
    setSettings(s);
    setDaysMap(map);
    setTemplates(allTemplates);
    setPlans(allPlans);
    setSequences(allSequences);
    setReady(true);
  }, []);

  useEffect(() => {
    void reloadAll();
  }, [reloadAll]);

  // Sauvegarde avant fermeture de l'onglet (sécurité anti-perte).
  useEffect(() => {
    const handler = () => {
      if (
        pendingDays.current.size > 0 ||
        pendingPlans.current.size > 0 ||
        pendingSequences.current.size > 0 ||
        pendingSettings.current
      ) {
        void flush();
      }
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [flush]);

  // Application du thème (clair / sombre / auto)
  useEffect(() => {
    const root = document.documentElement;
    const apply = () => {
      const isDark =
        settings.theme === "dark" ||
        (settings.theme === "auto" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      root.classList.toggle("dark", isDark);
    };
    apply();
    if (settings.theme === "auto") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", apply);
      return () => mq.removeEventListener("change", apply);
    }
  }, [settings.theme]);

  const saveSettings = useCallback(
    (next: Settings) => {
      setSettings(next);
      pendingSettings.current = next;
      scheduleFlush();
    },
    [scheduleFlush],
  );

  const saveDay = useCallback(
    (day: Day) => {
      const stamped = { ...day, updatedAt: Date.now() };
      setDaysMap((prev) => ({ ...prev, [stamped.date]: stamped }));
      pendingDays.current.set(stamped.date, stamped);
      scheduleFlush();
    },
    [scheduleFlush],
  );

  const removeDay = useCallback(async (date: string) => {
    await daysDB.delete(date);
    setDaysMap((prev) => {
      const next = { ...prev };
      delete next[date];
      return next;
    });
  }, []);

  const saveTemplate = useCallback(async (t: Template) => {
    await templatesDB.put(t);
    setTemplates((prev) => {
      const others = prev.filter((x) => x.id !== t.id);
      return [...others, t];
    });
  }, []);

  const removeTemplate = useCallback(async (id: string) => {
    await templatesDB.delete(id);
    setTemplates((prev) => prev.filter((x) => x.id !== id));
  }, []);

  const savePlan = useCallback(
    (p: Plan) => {
      const stamped = { ...p, updatedAt: Date.now() };
      setPlans((prev) => {
        const others = prev.filter((x) => x.id !== stamped.id);
        return [...others, stamped];
      });
      pendingPlans.current.set(stamped.id, stamped);
      scheduleFlush();
    },
    [scheduleFlush],
  );

  const removePlan = useCallback(async (id: string) => {
    pendingPlans.current.delete(id);
    await plansDB.delete(id);
    setPlans((prev) => prev.filter((x) => x.id !== id));
  }, []);

  const saveSequence = useCallback(
    (seq: Sequence) => {
      const stamped = { ...seq, updatedAt: Date.now() };
      setSequences((prev) => {
        const others = prev.filter((x) => x.id !== stamped.id);
        return [...others, stamped];
      });
      pendingSequences.current.set(stamped.id, stamped);
      scheduleFlush();
    },
    [scheduleFlush],
  );

  const removeSequence = useCallback(async (id: string) => {
    pendingSequences.current.delete(id);
    await sequencesDB.delete(id);
    setSequences((prev) => prev.filter((x) => x.id !== id));
  }, []);

  const resetEverything = useCallback(async () => {
    await wipeAll();
    const s = defaultSettings();
    await settingsDB.put(s);
    setSettings(s);
    setDaysMap({});
    setTemplates([]);
    setPlans([]);
    setSequences([]);
  }, []);

  const syncCloud = useCallback(
    async (overwrite = false): Promise<SyncResult> => {
      const result = await syncFromCloud(overwrite);
      setLastCloudSync(Date.now());
      if (result.added > 0 || result.updated > 0) {
        await reloadAll();
      }
      return result;
    },
    [reloadAll],
  );

  // Synchronisation automatique (silencieuse) au démarrage : récupère les
  // nouvelles journées publiées, sans écraser les modifications locales.
  useEffect(() => {
    if (!ready || autoSyncDone.current) return;
    autoSyncDone.current = true;
    void syncFromCloud(false)
      .then((r) => {
        setLastCloudSync(Date.now());
        if (r.added > 0 || r.updated > 0) void reloadAll();
      })
      .catch(() => {
        /* hors ligne ou pas de fichier : on ignore silencieusement */
      });
  }, [ready, reloadAll]);

  const value = useMemo<StoreValue>(
    () => ({
      ready,
      storageOK,
      settings,
      daysMap,
      templates,
      plans,
      sequences,
      saveStatus,
      saveSettings,
      saveDay,
      removeDay,
      saveTemplate,
      removeTemplate,
      savePlan,
      removePlan,
      saveSequence,
      removeSequence,
      flush,
      reloadAll,
      resetEverything,
      syncCloud,
      lastCloudSync,
    }),
    [
      ready,
      storageOK,
      settings,
      daysMap,
      templates,
      plans,
      sequences,
      saveStatus,
      saveSettings,
      saveDay,
      removeDay,
      saveTemplate,
      removeTemplate,
      savePlan,
      removePlan,
      saveSequence,
      removeSequence,
      flush,
      reloadAll,
      resetEverything,
      syncCloud,
      lastCloudSync,
    ],
  );

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}
