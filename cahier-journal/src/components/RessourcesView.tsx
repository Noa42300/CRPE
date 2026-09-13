/**
 * Ressources — annuaire de séances / fiches / vidéos toutes faites.
 * Je tape un mot-clé (une notion), je choisis éventuellement une matière, et
 * chaque source de confiance ouvre ses ressources sur ce mot-clé.
 */
import { useMemo, useState } from "react";
import { RESSOURCES, MATIERES_RESSOURCE, ressourceUrl } from "../lib/ressources";

const TYPE_LABEL: Record<string, string> = {
  séances: "Séances", vidéos: "Vidéos", fiches: "Fiches", officiel: "Officiel", outil: "Outil",
};

export function RessourcesView() {
  const [mot, setMot] = useState("");
  const [matiere, setMatiere] = useState("transversal");

  const liste = useMemo(
    () => RESSOURCES.filter((r) => matiere === "transversal" || r.matieres.includes(matiere)),
    [matiere],
  );

  const open = (url: string) => window.open(url, "_blank", "noopener,noreferrer");
  const rechercheGlobale = () => {
    const q = [mot.trim(), "CE1 CE2 séance cycle 2"].filter(Boolean).join(" ");
    open(`https://duckduckgo.com/?q=${encodeURIComponent(q)}`);
  };

  return (
    <div>
      <div className="mb-3">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Ressources</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Tape une notion, choisis une matière : chaque source ouvre ses <b>séances / fiches / vidéos</b> toutes faites.
        </p>
      </div>

      {/* Barre de recherche */}
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <input
          className="input max-w-md"
          value={mot}
          onChange={(e) => setMot(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") rechercheGlobale(); }}
          placeholder="Mot-clé : ex. « les déterminants », « comparer les nombres », « le squelette »…"
        />
        <button onClick={rechercheGlobale} className="btn-primary">🔎 Rechercher sur le web</button>
      </div>

      {/* Filtre matière */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {MATIERES_RESSOURCE.map((m) => (
          <button
            key={m.id}
            onClick={() => setMatiere(m.id)}
            className={`toggle-chip ${matiere === m.id ? "toggle-chip-on" : "toggle-chip-off"}`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Cartes de sources */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {liste.map((r) => (
          <button
            key={r.nom}
            onClick={() => open(ressourceUrl(r, mot))}
            className="card group flex flex-col items-start p-4 text-left transition hover:border-ink-400 hover:shadow-md"
          >
            <div className="mb-1 flex w-full items-center gap-2">
              <span className="text-sm font-bold text-slate-900 dark:text-white">{r.nom}</span>
              <span className="ml-auto rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                {TYPE_LABEL[r.type]}
              </span>
            </div>
            <p className="text-[13px] leading-snug text-slate-600 dark:text-slate-300">{r.description}</p>
            <span className="mt-2 text-[12px] font-semibold text-ink-600 group-hover:underline dark:text-ink-300">
              {mot.trim() ? `Chercher « ${mot.trim()} » →` : "Ouvrir →"}
            </span>
          </button>
        ))}
      </div>

      <p className="mt-4 text-[12px] text-slate-400 dark:text-slate-500">
        Les liens ouvrent une recherche ciblée sur chaque site (nouvel onglet). Dis-moi les sources que tu utilises le plus, je les ajoute.
      </p>
    </div>
  );
}
