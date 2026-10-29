/**
 * Affiches « pays » à mettre au mur de la classe.
 * -----------------------------------------------
 * Pour CHAQUE pays : 4 affiches A4, UNE grande image par affiche (monuments et
 * spécialités), chacune téléchargeable séparément en PDF. Les photos sont de
 * vraies images libres de droit (Wikimedia Commons, via WikiImage), chargées
 * EN LIGNE — à exporter / imprimer depuis l'appli connectée (elles se mettent
 * ensuite en cache pour l'impression).
 */
import { createPortal } from "react-dom";
import { WikiImage } from "./WikiImage";
import { PrintPortal } from "./PrintPortal";
import { downloadElementPdf, safeFileName } from "../lib/pdf";
import { printArea } from "../lib/print";
import { THEMES, type Pays } from "../lib/projets";

const MANU = "'Caveat','Comic Neue',cursive";

type Item = { wiki: string; legende: string; type: "Monument" | "Spécialité" };

/** 4 affiches par pays : 2 monuments/lieux + 2 spécialités (titres de pages fr.wikipedia). */
const AFFICHES: Record<string, Item[]> = {
  egypte: [
    { wiki: "Pyramides de Gizeh", legende: "Les pyramides de Gizeh", type: "Monument" },
    { wiki: "Temple de Karnak", legende: "Le temple de Karnak", type: "Monument" },
    { wiki: "Koshari", legende: "Le koshari (riz, pâtes et lentilles)", type: "Spécialité" },
    { wiki: "Foul médamès", legende: "Le foul médamès (purée de fèves)", type: "Spécialité" },
  ],
  maroc: [
    { wiki: "Place Jemaa el-Fna", legende: "La place Jemaa el-Fna (Marrakech)", type: "Monument" },
    { wiki: "Mosquée Koutoubia", legende: "La mosquée Koutoubia", type: "Monument" },
    { wiki: "Tajine", legende: "Le tajine", type: "Spécialité" },
    { wiki: "Couscous", legende: "Le couscous", type: "Spécialité" },
  ],
  senegal: [
    { wiki: "Île de Gorée", legende: "L'île de Gorée", type: "Monument" },
    { wiki: "Lac Rose", legende: "Le lac Rose", type: "Monument" },
    { wiki: "Thiéboudieune", legende: "Le thiéboudieune (riz au poisson)", type: "Spécialité" },
    { wiki: "Yassa", legende: "Le yassa (poulet mariné au citron)", type: "Spécialité" },
  ],
  kenya: [
    { wiki: "Masai Mara", legende: "La réserve du Masai Mara", type: "Monument" },
    { wiki: "Mont Kenya", legende: "Le mont Kenya", type: "Monument" },
    { wiki: "Ugali", legende: "L'ugali (galette de maïs)", type: "Spécialité" },
    { wiki: "Nyama choma", legende: "Le nyama choma (viande grillée)", type: "Spécialité" },
  ],
  "afrique-du-sud": [
    { wiki: "Montagne de la Table", legende: "La montagne de la Table (Le Cap)", type: "Monument" },
    { wiki: "Le Cap", legende: "La ville du Cap", type: "Monument" },
    { wiki: "Braai", legende: "Le braai (barbecue sud-africain)", type: "Spécialité" },
    { wiki: "Bobotie", legende: "Le bobotie (gratin de viande épicé)", type: "Spécialité" },
  ],
  algerie: [
    { wiki: "Casbah d'Alger", legende: "La Casbah d'Alger", type: "Monument" },
    { wiki: "Tassili n'Ajjer", legende: "Le Tassili n'Ajjer (Sahara)", type: "Monument" },
    { wiki: "Couscous", legende: "Le couscous", type: "Spécialité" },
    { wiki: "Chorba", legende: "La chorba (soupe)", type: "Spécialité" },
  ],
  madagascar: [
    { wiki: "Allée des Baobabs", legende: "L'allée des Baobabs", type: "Monument" },
    { wiki: "Tsingy de Bemaraha", legende: "Les Tsingy de Bemaraha", type: "Monument" },
    { wiki: "Romazava", legende: "Le romazava (ragoût et brèdes)", type: "Spécialité" },
    { wiki: "Ravitoto", legende: "Le ravitoto (feuilles de manioc)", type: "Spécialité" },
  ],
};

export function hasAffiches(paysId: string): boolean {
  return !!AFFICHES[paysId];
}

/** Une affiche A4 portrait = une grande image + bandeau titre + légende. */
export function AfficheImage({ pays, item, accent, soft }: { pays: Pays; item: Item; accent: string; soft: string }) {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: MANU }}>
      {/* bandeau titre */}
      <div style={{ display: "flex", alignItems: "center", gap: "4mm", background: soft, border: `3px solid ${accent}`, borderRadius: "3mm", padding: "3mm 5mm" }}>
        <span style={{ fontSize: "46px" }}>{pays.drapeau}</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "40px", fontWeight: 700, color: accent, lineHeight: 1, fontFamily: MANU }}>{pays.nom}</div>
          <div style={{ fontSize: "16px", fontWeight: 700, color: "#334155", fontFamily: MANU }}>{item.type} · Capitale : {pays.capitale}</div>
        </div>
      </div>
      {/* grande image */}
      <div style={{ height: "202mm", margin: "5mm 0", border: `3px solid ${accent}`, borderRadius: "3mm", overflow: "hidden" }}>
        <WikiImage title={item.wiki} alt={item.legende} accent={accent} height="202mm" />
      </div>
      {/* légende */}
      <div style={{ background: accent, color: "#fff", borderRadius: "3mm", padding: "3mm 5mm", textAlign: "center" }}>
        <div style={{ fontSize: "34px", fontWeight: 700, fontFamily: MANU, lineHeight: 1.05 }}>{item.legende}</div>
      </div>
      <div style={{ textAlign: "right", fontSize: "9px", color: "#94a3b8", marginTop: "1.5mm", fontFamily: "sans-serif" }}>Photo : Wikimedia Commons (licence libre)</div>
    </div>
  );
}

function cid(paysId: string, i: number) {
  return `print-affiche-${paysId}-${i}`;
}

async function dl(paysId: string, i: number, name: string) {
  const el = document.getElementById(cid(paysId, i)) as HTMLElement | null;
  const fiche = (el?.querySelector(".fiche-a4") as HTMLElement | null) ?? el;
  if (!fiche) return;
  try {
    await downloadElementPdf(fiche, `${safeFileName(name)}.pdf`, { singlePage: true });
  } catch {
    printArea(cid(paysId, i));
  }
}

export function AffichesPaysOverlay({ pays, periodNumber, onClose }: { pays: Pays; periodNumber: number; onClose: () => void }) {
  const theme = THEMES[periodNumber];
  const items = AFFICHES[pays.id] ?? [];
  return createPortal(
    <div className="fixed inset-0 z-[100] flex flex-col bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div className="flex flex-wrap items-center gap-2 px-4 py-3 text-white">
        <span className="mr-auto text-sm font-semibold">🖼️ Affiches — {pays.drapeau} {pays.nom}</span>
        <button type="button" onClick={onClose} className="rounded-lg bg-white/15 px-3 py-1.5 text-xs font-semibold hover:bg-white/25">✕ Fermer</button>
      </div>
      <div className="flex-1 overflow-auto px-3 pb-8 sm:px-6" onClick={(e) => e.stopPropagation()}>
        <p className="mx-auto mb-3 max-w-3xl rounded-lg bg-amber-50 px-4 py-2 text-center text-xs font-medium text-amber-800">
          Astuce : les photos se chargent en ligne. Clique sur ⬇️ PDF pour chaque affiche (être connectée au moins une fois).
        </p>
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <div key={i} className="rounded-xl bg-white p-3 shadow-xl">
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="min-w-0 flex-1 truncate text-sm font-semibold text-stone-800">{item.type} — {item.legende}</span>
                <button type="button" onClick={() => void dl(pays.id, i, `Affiche ${pays.nom} - ${item.legende}`)} className="rounded-lg px-3 py-1 text-xs font-bold text-white" style={{ background: theme.accent }}>⬇️ PDF</button>
                <button type="button" onClick={() => printArea(cid(pays.id, i))} className="rounded-lg border-2 px-3 py-1 text-xs font-bold" style={{ borderColor: theme.accent, color: theme.accent }}>🖨️</button>
              </div>
              {/* aperçu réduit */}
              <div style={{ height: "360px", overflow: "hidden", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
                <div style={{ transform: "scale(0.45)", transformOrigin: "top left", width: "210mm" }}>
                  <AfficheImage pays={pays} item={item} accent={theme.accent} soft={theme.soft} />
                </div>
              </div>
              {/* zone d'impression plein format (hors écran) */}
              <PrintPortal id={cid(pays.id, i)}>
                <AfficheImage pays={pays} item={item} accent={theme.accent} soft={theme.soft} />
              </PrintPortal>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
}
