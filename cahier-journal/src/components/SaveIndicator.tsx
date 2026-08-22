/**
 * Indicateur d'enregistrement
 * ---------------------------
 * Petit badge discret en bas à droite : « Enregistrement… » / « Enregistré ».
 */
import { useEffect, useState } from "react";
import { useStore } from "../lib/store";

export function SaveIndicator() {
  const { saveStatus } = useStore();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (saveStatus === "saving" || saveStatus === "error") {
      setVisible(true);
      return;
    }
    if (saveStatus === "saved") {
      setVisible(true);
      const t = setTimeout(() => setVisible(false), 1600);
      return () => clearTimeout(t);
    }
  }, [saveStatus]);

  if (!visible || saveStatus === "idle") return null;

  const config = {
    saving: { text: "Enregistrement…", cls: "text-slate-500", dot: "bg-amber-400 animate-pulse" },
    saved: { text: "Enregistré", cls: "text-emerald-600 dark:text-emerald-400", dot: "bg-emerald-500" },
    error: { text: "Erreur d'enregistrement", cls: "text-rose-600", dot: "bg-rose-500" },
    idle: { text: "", cls: "", dot: "" },
  }[saveStatus];

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 hidden md:block">
      <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-3 py-1.5 text-xs font-medium shadow-soft backdrop-blur dark:border-slate-700 dark:bg-slate-900/95">
        <span className={`h-2 w-2 rounded-full ${config.dot}`} />
        <span className={config.cls}>{config.text}</span>
      </div>
    </div>
  );
}
