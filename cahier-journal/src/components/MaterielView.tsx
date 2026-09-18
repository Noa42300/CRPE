/**
 * Vue « Matériel » — la boîte à outils de la classe.
 * Chaque aide s'aperçoit (loupe) et se télécharge en PDF (A4) pour être
 * imprimée puis plastifiée. Contenu 100 % pédagogique. Code couleur par domaine.
 */
import { useMemo, useState, type ReactNode } from "react";
import { MATERIEL, DOMAINES } from "./materiel";
import { PrintPortal } from "./PrintPortal";
import { PreviewModal } from "./PreviewModal";
import { downloadElementPdf, safeFileName } from "../lib/pdf";
import { Search } from "./ui";

export function MaterielView() {
  const [filter, setFilter] = useState<string>("all");
  const [preview, setPreview] = useState<{ id: string; titre: string; node: ReactNode } | null>(null);

  const domains = useMemo(() => Object.entries(DOMAINES), []);
  const list = MATERIEL.filter((a) => filter === "all" || a.domaine === filter);

  const downloadPdf = async (id: string, titre: string) => {
    const container = document.getElementById(`mat-${id}`);
    const el = (container?.querySelector(".fiche-a4") as HTMLElement | null) ?? container;
    if (!el) return;
    await downloadElementPdf(el, `${safeFileName("Aide - " + titre)}.pdf`);
  };

  return (
    <div>
      {/* Chaque aide est montée hors écran pour l'aperçu et le PDF. */}
      {MATERIEL.map((a) => (
        <PrintPortal key={a.id} id={`mat-${a.id}`}>{a.node}</PrintPortal>
      ))}

      <div className="mb-3">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Matériel — la boîte à outils</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Des aides à <b>imprimer et plastifier</b> pour les élèves (français + maths). L'élève bloque →
          il prend son aide → il essaie seul avant d'appeler le maître. Aperçu 🔍, puis « 📄 PDF ».
        </p>
      </div>

      {/* Filtre domaine (code couleur) */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        <button onClick={() => setFilter("all")} className={`toggle-chip ${filter === "all" ? "toggle-chip-on" : "toggle-chip-off"}`}>
          Tout
        </button>
        {domains.map(([id, d]) => (
          <button key={id} onClick={() => setFilter(id)} className={`toggle-chip ${filter === id ? "toggle-chip-on" : "toggle-chip-off"}`}>
            <span className="mr-1 inline-block h-2.5 w-2.5 rounded-full align-middle" style={{ background: d.color }} />
            {d.label}
          </button>
        ))}
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2">
        {list.map((a) => {
          const d = DOMAINES[a.domaine];
          return (
            <div key={a.id} className="flex items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-3 py-2.5 dark:border-slate-700 dark:bg-slate-900/40">
              <span className="h-8 w-1.5 shrink-0 rounded-full" style={{ background: d.color }} />
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold text-slate-800 dark:text-slate-100">{a.titre}</div>
                <div className="text-[11px] text-slate-400">{d.emoji} {d.label}</div>
              </div>
              <button onClick={() => setPreview({ id: a.id, titre: a.titre, node: a.node })} className="btn-outline py-1 text-xs" title="Aperçu">
                <Search className="h-3.5 w-3.5" /> Aperçu
              </button>
              <button onClick={() => void downloadPdf(a.id, a.titre)} className="btn-outline py-1 text-xs" title="Télécharger en PDF">
                📄 PDF
              </button>
            </div>
          );
        })}
      </div>

      {preview && (
        <PreviewModal
          title={preview.titre}
          onClose={() => setPreview(null)}
          onDownload={() => void downloadPdf(preview.id, preview.titre)}
        >
          {preview.node}
        </PreviewModal>
      )}
    </div>
  );
}
