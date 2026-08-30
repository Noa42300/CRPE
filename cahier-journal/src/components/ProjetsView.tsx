/**
 * Vue « Projets » → projet annuel « Autour du monde CE1-CE2 »
 * ----------------------------------------------------------
 * Un continent par période, un pays par lundi. Chaque pays propose :
 *  • un diaporama projetable (4 slides) ;
 *  • une carte d'identité à remplir (mode Correction + impression) ;
 *  • une dictée différenciée CE1 / CE2 ;
 *  • une référence vidéo courte.
 * Contenu pédagogique, aucune donnée élève.
 */
import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import { cap, formatLong, weeksOfPeriod } from "../lib/dates";
import { AUTOUR_DU_MONDE, paysForIndex, type Pays } from "../lib/projets";
import { printArea } from "../lib/print";
import { Diaporama } from "./Diaporama";

type Modal =
  | { kind: "diapo"; pays: Pays }
  | { kind: "carte"; pays: Pays }
  | { kind: "dictee"; pays: Pays }
  | { kind: "video"; pays: Pays }
  | null;

export function ProjetsView() {
  const { settings } = useStore();
  const [periodNum, setPeriodNum] = useState(1);
  const [modal, setModal] = useState<Modal>(null);
  const [printPays, setPrintPays] = useState<Pays | null>(null);

  const cont = AUTOUR_DU_MONDE.find((c) => c.periodNumber === periodNum)!;
  const period = settings.periods.find((p) => p.number === periodNum);

  const lundis = useMemo(() => {
    if (!period) return [];
    return weeksOfPeriod(period.start, period.end).map((w, k) => ({
      mondayISO: w.mondayISO,
      pays: paysForIndex(cont, k),
    }));
  }, [period, cont]);

  const doPrint = (pays: Pays) => {
    setPrintPays(pays);
    // laisse le DOM se peindre avant d'imprimer
    setTimeout(() => printArea("print-carte"), 50);
  };

  return (
    <div>
      <div className="mb-1 flex items-center gap-2">
        <h1 className="text-xl font-bold text-stone-900 dark:text-white">Projets</h1>
      </div>
      <p className="mb-5 text-sm text-stone-500 dark:text-stone-400">
        Le projet annuel de la classe, prêt à projeter au tableau.
      </p>

      {/* Projet sélectionné */}
      <div className="card mb-5 flex items-center gap-4 p-4">
        <div className="text-4xl">🌍</div>
        <div className="min-w-0">
          <div className="text-lg font-bold text-stone-800 dark:text-stone-100">
            Autour du monde — CE1/CE2
          </div>
          <div className="text-sm text-stone-500 dark:text-stone-400">
            Un continent par période, un pays par lundi. Diaporama, carte
            d'identité, dictée et vidéo pour chaque escale.
          </div>
        </div>
      </div>

      {/* Périodes = continents */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {AUTOUR_DU_MONDE.map((c) => (
          <button
            key={c.periodNumber}
            onClick={() => setPeriodNum(c.periodNumber)}
            className={`toggle-chip ${periodNum === c.periodNumber ? "toggle-chip-on" : "toggle-chip-off"}`}
          >
            {c.emoji} P{c.periodNumber} · {c.continent}
          </button>
        ))}
      </div>

      <div className="card mb-5 flex items-start gap-3 border-l-4 border-l-ink-500 p-4">
        <div className="text-2xl">{cont.emoji}</div>
        <div>
          <div className="font-bold text-stone-800 dark:text-stone-100">
            Période {cont.periodNumber} · {cont.continent}
          </div>
          <p className="text-sm text-stone-500 dark:text-stone-400">{cont.intro}</p>
        </div>
      </div>

      {/* Lundis de la période */}
      {lundis.length === 0 ? (
        <div className="card px-6 py-8 text-center text-sm text-stone-500 dark:text-stone-400">
          Aucun lundi trouvé pour cette période (vérifie les dates des périodes
          dans les Paramètres).
        </div>
      ) : (
        <div className="space-y-3">
          {lundis.map(({ mondayISO, pays }, k) => (
            <div key={mondayISO} className="card p-4">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-semibold text-stone-500 dark:bg-stone-800 dark:text-stone-300">
                  Lundi {k + 1}
                </span>
                <span className="text-sm capitalize text-stone-500 dark:text-stone-400">
                  {cap(formatLong(mondayISO))}
                </span>
              </div>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{pays.drapeau}</span>
                  <div>
                    <div className="text-lg font-bold text-stone-800 dark:text-stone-100">{pays.nom}</div>
                    <div className="text-xs text-stone-500 dark:text-stone-400">
                      {pays.capitale} · {pays.monument}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => setModal({ kind: "diapo", pays })} className="btn-primary py-1 text-xs">🖥️ Diaporama</button>
                  <button onClick={() => setModal({ kind: "carte", pays })} className="btn-outline py-1 text-xs">🪪 Carte d'identité</button>
                  <button onClick={() => setModal({ kind: "dictee", pays })} className="btn-outline py-1 text-xs">✍️ Dictée</button>
                  <button onClick={() => setModal({ kind: "video", pays })} className="btn-outline py-1 text-xs">🎬 Vidéo</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Overlays */}
      {modal?.kind === "diapo" && (
        <Diaporama pays={modal.pays} onClose={() => setModal(null)} />
      )}
      {modal?.kind === "carte" && (
        <CarteOverlay pays={modal.pays} onClose={() => setModal(null)} onPrint={() => doPrint(modal.pays)} />
      )}
      {modal?.kind === "dictee" && (
        <DicteeOverlay pays={modal.pays} onClose={() => setModal(null)} />
      )}
      {modal?.kind === "video" && (
        <VideoModal pays={modal.pays} onClose={() => setModal(null)} />
      )}

      {/* Zone d'impression (carte d'identité élève, vierge) */}
      <div className="print-area" id="print-carte">
        {printPays && <CartePrintable pays={printPays} />}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ carte d'identité */
function CarteOverlay({ pays, onClose, onPrint }: { pays: Pays; onClose: () => void; onPrint: () => void }) {
  const [correction, setCorrection] = useState(false);
  return (
    <div className="board-overlay flex flex-col bg-paper-light dark:bg-paper-dark">
      <div className="flex shrink-0 flex-wrap items-center gap-3 border-b border-stone-200 bg-paper-light/95 px-4 py-2 dark:border-stone-700 dark:bg-paper-dark/95">
        <span className="text-sm font-bold uppercase tracking-wide text-ink-700 dark:text-ink-300">
          🪪 Carte d'identité du pays
        </span>
        <button
          onClick={() => setCorrection((c) => !c)}
          className={`btn-outline py-1 text-xs ${correction ? "!border-emerald-500 !bg-emerald-50 !text-emerald-700 dark:!bg-emerald-500/15 dark:!text-emerald-200" : ""}`}
        >
          {correction ? "✓ Correction affichée" : "Afficher la correction"}
        </button>
        <button onClick={onPrint} className="btn-outline py-1 text-xs">🖨️ Imprimer (élève)</button>
        <button onClick={onClose} className="btn-primary ml-auto py-1 text-xs">✕ Fermer</button>
      </div>

      <div className="grid flex-1 place-items-center overflow-auto p-6">
        <div className="w-full max-w-2xl rounded-2xl border-2 border-stone-300 bg-white p-6 dark:border-stone-600 dark:bg-stone-900/40">
          <h2 className="mb-4 text-center text-2xl font-bold text-stone-800 dark:text-stone-100">
            Carte d'identité {correction ? `— ${pays.nom}` : "du pays"}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Champ label="Nom du pays" value={correction ? pays.nom : ""} />
            <Champ label="Capitale" value={correction ? pays.capitale : ""} />
            <Champ label="Continent" value={correction ? continentDe(pays) : ""} />
            <Champ label="Spécialité culinaire" value={correction ? pays.specialite : ""} />
            <Champ label="Monument" value={correction ? pays.monument : ""} className="sm:col-span-2" />
          </div>
          <div className="mt-4">
            <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-stone-500">Drapeau à dessiner</div>
            <div className="grid h-32 place-items-center rounded-lg border-2 border-dashed border-stone-300 dark:border-stone-600">
              {correction ? <span className="text-7xl">{pays.drapeau}</span> : <span className="text-stone-300">✎</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Champ({ label, value, className = "" }: { label: string; value: string; className?: string }) {
  return (
    <div className={className}>
      <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-stone-500">{label}</div>
      <div className="min-h-[2.2rem] rounded-lg border-b-2 border-stone-300 px-2 py-1.5 text-lg text-emerald-700 dark:border-stone-600 dark:text-emerald-300">
        {value}
      </div>
    </div>
  );
}

function continentDe(pays: Pays): string {
  return AUTOUR_DU_MONDE.find((c) => c.pays.some((p) => p.id === pays.id))?.continent ?? "";
}

/** Version imprimable (vierge) pour les élèves. */
function CartePrintable({ pays }: { pays: Pays }) {
  const ligne = (label: string) => (
    <div style={{ marginBottom: "10mm" }}>
      <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.06em", color: "#555" }}>{label}</div>
      <div style={{ borderBottom: "2px solid #333", height: "10mm" }} />
    </div>
  );
  return (
    <div style={{ color: "#111", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ textAlign: "center", fontSize: "22px", marginBottom: "2mm" }}>Carte d'identité du pays</h1>
      <p style={{ textAlign: "center", color: "#666", marginBottom: "8mm" }}>Continent : ……………………………  ·  Prénom : ……………………………</p>
      {ligne("Nom du pays")}
      {ligne("Capitale")}
      {ligne("Spécialité culinaire")}
      {ligne("Monument")}
      <div style={{ marginTop: "6mm" }}>
        <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.06em", color: "#555", marginBottom: "3mm" }}>Drapeau à dessiner et colorier</div>
        <div style={{ border: "2px dashed #333", height: "55mm", borderRadius: "6px" }} />
      </div>
      <p style={{ marginTop: "6mm", fontSize: "12px", color: "#888" }}>Note : {pays.nom} — à remplir pendant la séance « Autour du monde ».</p>
    </div>
  );
}

/* ------------------------------------------------------------ dictée */
function DicteeOverlay({ pays, onClose }: { pays: Pays; onClose: () => void }) {
  return (
    <div className="board-overlay flex flex-col bg-paper-light dark:bg-paper-dark">
      <div className="flex shrink-0 flex-wrap items-center gap-3 border-b border-stone-200 bg-paper-light/95 px-4 py-2 dark:border-stone-700 dark:bg-paper-dark/95">
        <span className="text-sm font-bold uppercase tracking-wide text-ink-700 dark:text-ink-300">
          ✍️ Dictée — {pays.drapeau} {pays.nom}
        </span>
        <span className="text-xs text-stone-400">À faire le mardi (ou plus tard dans la semaine)</span>
        <button onClick={onClose} className="btn-primary ml-auto py-1 text-xs">✕ Fermer</button>
      </div>
      <div className="grid flex-1 place-items-center overflow-auto p-6">
        <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border-2 bg-white/70 p-6 dark:bg-stone-900/40" style={{ borderTopColor: "#e0920a", borderTopWidth: 6 }}>
            <div className="mb-3 inline-block rounded-md px-2 py-0.5 text-xs font-bold uppercase tracking-wider" style={{ background: "#e0920a", color: "#2b2000" }}>CE1</div>
            <p className="text-2xl leading-relaxed text-stone-800 dark:text-stone-100">« {pays.dictee.ce1} »</p>
          </div>
          <div className="rounded-2xl border-2 bg-white/70 p-6 dark:bg-stone-900/40" style={{ borderTopColor: "#2C6FB5", borderTopWidth: 6 }}>
            <div className="mb-3 inline-block rounded-md px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-white" style={{ background: "#2C6FB5" }}>CE2</div>
            <p className="text-2xl leading-relaxed text-stone-800 dark:text-stone-100">« {pays.dictee.ce2} »</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ vidéo */
function VideoModal({ pays, onClose }: { pays: Pays; onClose: () => void }) {
  const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(pays.video.recherche)}`;
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/50 p-4" onClick={onClose}>
      <div className="w-full max-w-lg rounded-2xl bg-paper-light p-6 dark:bg-paper-dark-card" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center gap-2">
          <span className="text-2xl">🎬</span>
          <h2 className="text-lg font-bold text-stone-800 dark:text-stone-100">Vidéo — {pays.nom}</h2>
        </div>
        <p className="text-sm text-stone-600 dark:text-stone-300"><strong>{pays.video.titre}</strong></p>
        <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">Source suggérée : {pays.video.source} (2 à 3 min).</p>
        <div className="mt-3 rounded-lg bg-stone-100 px-3 py-2 text-sm dark:bg-stone-800">
          🔎 Recherche : <em>{pays.video.recherche}</em>
        </div>
        <p className="mt-3 text-xs text-stone-400">
          ⚠️ À prévisualiser avant la classe : les liens exacts changent souvent, vérifie que la vidéo est adaptée.
        </p>
        <div className="mt-4 flex justify-end gap-2">
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs">Ouvrir la recherche ↗</a>
          <button onClick={onClose} className="btn-primary text-xs">Fermer</button>
        </div>
      </div>
    </div>
  );
}
