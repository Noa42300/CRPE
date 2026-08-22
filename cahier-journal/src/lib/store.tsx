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
import type { Day, Settings, Template } from "./types";
import { SCHEMA_VERSION } from "./types";
import {
  daysDB,
  isStorageAvailable,
  settingsDB,
  templatesDB,
  wipeAll,
} from "./db";
import { defaultSettings } from "./defaults";

export type SaveStatus = "idle" | "saving" | "saved" | "error";

interface StoreValue {
  ready: boolean;
  storageOK: boolean;
  settings: Settings;
  daysMap: Record<string, Day>;
  templates: Template[];
  saveStatus: SaveStatus;

  saveSettings: (next: Settings) => void;
  saveDay: (day: Day) => void;
  removeDay: (date: string) => Promise<void>;
  saveTemplate: (t: Template) => Promise<void>;
  removeTemplate: (id: string) => Promise<void>;
  flush: () => Promise<void>;
  reloadAll: () => Promise<void>;
  resetEverything: () => Promise<void>;
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
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");

  // --- File d'attente d'autosave (anti-rebond) ---
  const pendingDays = useRef<Map<string, Day>>(new Map());
  const pendingSettings = useRef<Settings | null>(null);
  const timer = useRef<number | null>(null);

  const flush = useCallback(async () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    const days = Array.from(pendingDays.current.values());
    const s = pendingSettings.current;
    pendingDays.current.clear();
    pendingSettings.current = null;
    if (days.length === 0 && !s) return;
    try {
      for (const d of days) await daysDB.put(d);
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
    const [allDays, allTemplates] = await Promise.all([
      daysDB.getAll(),
      templatesDB.getAll(),
    ]);
    const map: Record<string, Day> = {};
    for (const d of allDays) map[d.date] = d;
    setSettings(s);
    setDaysMap(map);
    setTemplates(allTemplates);
    setReady(true);
  }, []);

  useEffect(() => {
    void reloadAll();
  }, [reloadAll]);

  // Sauvegarde avant fermeture de l'onglet (sécurité anti-perte).
  useEffect(() => {
    const handler = () => {
      if (pendingDays.current.size > 0 || pendingSettings.current) {
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

  const resetEverything = useCallback(async () => {
    await wipeAll();
    const s = defaultSettings();
    await settingsDB.put(s);
    setSettings(s);
    setDaysMap({});
    setTemplates([]);
  }, []);

  const value = useMemo<StoreValue>(
    () => ({
      ready,
      storageOK,
      settings,
      daysMap,
      templates,
      saveStatus,
      saveSettings,
      saveDay,
      removeDay,
      saveTemplate,
      removeTemplate,
      flush,
      reloadAll,
      resetEverything,
    }),
    [
      ready,
      storageOK,
      settings,
      daysMap,
      templates,
      saveStatus,
      saveSettings,
      saveDay,
      removeDay,
      saveTemplate,
      removeTemplate,
      flush,
      reloadAll,
      resetEverything,
    ],
  );

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}
