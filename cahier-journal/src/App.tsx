/**
 * Coquille de l'application
 * -------------------------
 * Barre latérale + zone principale. Gère la vue active, la date courante,
 * les raccourcis clavier et l'écran de chargement.
 */
import { useCallback, useEffect, useState } from "react";
import { useStore } from "./lib/store";
import { todayISO, addDays } from "./lib/dates";
import { Sidebar, type ViewId } from "./components/Sidebar";
import { SaveIndicator } from "./components/SaveIndicator";
import { DayView } from "./components/DayView";
import { WeekView } from "./components/WeekView";
import { CalendarView } from "./components/CalendarView";
import { SearchView } from "./components/SearchView";
import { SettingsView } from "./components/SettingsView";
import { BackupView } from "./components/BackupView";
import { PlansView } from "./components/PlansView";
import { LockScreen } from "./components/LockScreen";
import { hasPin } from "./lib/lock";

export function App() {
  const { ready, storageOK, flush } = useStore();
  const [view, setView] = useState<ViewId>("today");
  const [date, setDate] = useState<string>(todayISO());
  const [locked, setLocked] = useState<boolean>(() => hasPin());

  // Ouvre une date précise dans la vue Jour (depuis calendrier/semaine/recherche).
  const openDate = useCallback((iso: string) => {
    setDate(iso);
    setView("today");
  }, []);

  // --- Raccourcis clavier ---
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const typing =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      // Ctrl/Cmd + S : forcer la sauvegarde
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
        void flush();
        return;
      }
      // Ctrl/Cmd + K : recherche
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setView("search");
        return;
      }
      if (typing || e.metaKey || e.ctrlKey || e.altKey) return;

      // Navigation jour avec les flèches (hors saisie)
      if (e.key === "ArrowLeft" && view === "today") {
        setDate((d) => addDays(d, -1));
      } else if (e.key === "ArrowRight" && view === "today") {
        setDate((d) => addDays(d, 1));
      } else if (e.key.toLowerCase() === "t" && view === "today") {
        setDate(todayISO());
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [flush, view]);

  if (locked) {
    return <LockScreen onUnlock={() => setLocked(false)} />;
  }

  if (!ready) {
    return (
      <div className="flex h-screen items-center justify-center text-slate-400">
        <div className="animate-pulse text-sm">Chargement du cahier journal…</div>
      </div>
    );
  }

  return (
    <div className="app-shell flex h-screen overflow-hidden">
      <Sidebar view={view} onChange={setView} />

      <div className="flex min-w-0 flex-1 flex-col">
        {!storageOK && (
          <div className="bg-amber-100 px-4 py-2 text-center text-sm text-amber-800">
            ⚠️ Le stockage local (IndexedDB) est indisponible dans ce
            navigateur. Vos données ne pourront pas être enregistrées. Vérifiez
            que vous n'êtes pas en navigation privée stricte.
          </div>
        )}

        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
            {view === "today" && (
              <DayView date={date} onChangeDate={setDate} />
            )}
            {view === "week" && (
              <WeekView date={date} onOpenDate={openDate} onChangeDate={setDate} />
            )}
            {view === "calendar" && (
              <CalendarView date={date} onOpenDate={openDate} />
            )}
            {view === "programmations" && <PlansView kind="programmation" />}
            {view === "progressions" && <PlansView kind="progression" />}
            {view === "search" && <SearchView onOpenDate={openDate} />}
            {view === "settings" && <SettingsView />}
            {view === "backup" && <BackupView />}
          </div>
        </div>
      </div>

      <SaveIndicator />
    </div>
  );
}
