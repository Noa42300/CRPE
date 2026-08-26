/**
 * Barre latérale de navigation
 * ----------------------------
 * Sur mobile : se réduit en barre d'onglets en bas de l'écran.
 */
import { useStore } from "../lib/store";

export type ViewId =
  | "today"
  | "week"
  | "calendar"
  | "programmations"
  | "progressions"
  | "library"
  | "rituals"
  | "edt"
  | "tableau"
  | "search"
  | "settings"
  | "backup";

const ITEMS: { id: ViewId; label: string; icon: string }[] = [
  { id: "today", label: "Aujourd'hui", icon: "📅" },
  { id: "week", label: "Semaine", icon: "📆" },
  { id: "calendar", label: "Calendrier", icon: "🗓️" },
  { id: "edt", label: "EDT classe", icon: "🕐" },
  { id: "programmations", label: "Programmations", icon: "📚" },
  { id: "progressions", label: "Progressions", icon: "📈" },
  { id: "library", label: "Bibliothèque", icon: "📔" },
  { id: "rituals", label: "Rituels", icon: "🔔" },
  { id: "tableau", label: "Tableau", icon: "✏️" },
  { id: "search", label: "Recherche", icon: "🔍" },
  { id: "settings", label: "Paramètres", icon: "⚙️" },
  { id: "backup", label: "Sauvegarde", icon: "💾" },
];

export function Sidebar({
  view,
  onChange,
}: {
  view: ViewId;
  onChange: (v: ViewId) => void;
}) {
  const { settings } = useStore();
  const nom =
    [settings.profile.prenom, settings.profile.nom]
      .filter(Boolean)
      .join(" ") || "Mon cahier journal";

  return (
    <>
      {/* ---------- Bureau : colonne latérale ---------- */}
      <aside className="hidden w-60 shrink-0 flex-col border-r border-slate-200 bg-white/60 px-3 py-4 backdrop-blur dark:border-slate-800 dark:bg-slate-900/40 md:flex">
        <div className="mb-5 flex items-center gap-2 px-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink-600 text-white shadow-soft">
            <BookIcon />
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-slate-800 dark:text-slate-100">
              Cahier Journal
            </div>
            <div className="truncate text-xs text-slate-400">
              {settings.profile.classe || "Classe"} ·{" "}
              {settings.profile.annee || ""}
            </div>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-0.5">
          {ITEMS.map((it) => (
            <button
              key={it.id}
              onClick={() => onChange(it.id)}
              className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                view === it.id
                  ? "bg-ink-50 text-ink-700 dark:bg-ink-500/15 dark:text-ink-200"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              <span className="text-base leading-none">{it.icon}</span>
              {it.label}
            </button>
          ))}
        </nav>

        <div className="mt-3 border-t border-slate-200 px-2 pt-3 text-[11px] leading-relaxed text-slate-400 dark:border-slate-800">
          <div className="truncate font-medium text-slate-500 dark:text-slate-400">
            {nom}
          </div>
          🔒 100 % local — aucune donnée ne quitte cet appareil.
        </div>
      </aside>

      {/* ---------- Mobile : barre d'onglets en bas ---------- */}
      <nav className="fixed inset-x-0 bottom-0 z-40 flex overflow-x-auto border-t border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-900/95 md:hidden">
        {ITEMS.map((it) => (
          <button
            key={it.id}
            onClick={() => onChange(it.id)}
            className={`flex min-w-[68px] shrink-0 flex-1 flex-col items-center gap-0.5 py-2 text-[10px] font-medium ${
              view === it.id
                ? "text-ink-600 dark:text-ink-300"
                : "text-slate-500 dark:text-slate-400"
            }`}
          >
            <span className="text-lg leading-none">{it.icon}</span>
            <span className="whitespace-nowrap">{it.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}

function BookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}
