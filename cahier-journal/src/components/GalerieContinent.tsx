/**
 * Galerie à imprimer / afficher — « Autour du monde »
 * ---------------------------------------------------
 * Une grande page A4 paysage par pays du continent de la période : le MONUMENT,
 * la SPÉCIALITÉ gastronomique et une image de la VIE quotidienne, en vraies
 * photos libres de droit (Wikimedia Commons, via WikiImage), avec légendes.
 * À afficher au mur ou à distribuer.
 *
 * ⚠️ Les photos se chargent EN LIGNE (Wikimedia) : pour les avoir dans le PDF ou
 * à l'impression, être connectée au moins une fois (elles se mettent ensuite en
 * cache). Hors ligne, un cadre « Voir des images » s'affiche à la place.
 */
import { WikiImage } from "./WikiImage";
import { AUTOUR_DU_MONDE, THEMES, type Pays } from "../lib/projets";

const CURSIVE = "'Caveat','Comic Neue',cursive";
const LUDIQUE = "'Baloo 2','Fredoka','Lexend',system-ui,sans-serif";

/* Titre de la page Wikipédia (fr) pour la photo du plat, par pays. */
const PLAT_WIKI: Record<string, string> = {
  egypte: "Foul médamès",
  maroc: "Couscous",
  senegal: "Thiéboudieune",
  kenya: "Ugali",
  "afrique-du-sud": "Braai",
  algerie: "Couscous",
  madagascar: "Romazava",
  // Europe (période 1) — au cas où la galerie sert aussi ailleurs
  italie: "Pizza",
  allemagne: "Bretzel",
  grece: "Moussaka",
  "pays-bas": "Stroopwafel",
  portugal: "Pastel de nata",
};

function Carte({ titre, wiki, legende, accent }: { titre: string; wiki: string; legende: string; accent: string }) {
  return (
    <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", border: `2.5px solid ${accent}`, borderRadius: "3mm", overflow: "hidden", background: "#fff" }}>
      <div style={{ background: accent, color: "#fff", fontWeight: 800, fontSize: "14px", padding: "1.5mm 3mm", fontFamily: LUDIQUE }}>{titre}</div>
      <div style={{ flex: 1, padding: "2mm" }}>
        <WikiImage title={wiki} alt={legende} accent={accent} height="92mm" />
      </div>
      <div style={{ fontSize: "15px", fontWeight: 700, color: "#1f2937", textAlign: "center", padding: "0 2mm 2mm", fontFamily: CURSIVE }}>{legende}</div>
    </div>
  );
}

function PagePays({ pays, accent, soft }: { pays: Pays; accent: string; soft: string }) {
  const plat = PLAT_WIKI[pays.id] ?? pays.specialite;
  return (
    <div className="fiche-a4 fiche-a4-landscape" style={{ width: "297mm", background: "#fff", color: "#111", boxSizing: "border-box", padding: "9mm 10mm", display: "flex", flexDirection: "column", fontFamily: LUDIQUE }}>
      {/* En-tête */}
      <div style={{ display: "flex", alignItems: "center", gap: "4mm", background: soft, border: `2.5px solid ${accent}`, borderRadius: "3mm", padding: "2.5mm 4mm", marginBottom: "3mm" }}>
        <span style={{ fontSize: "40px" }}>{pays.drapeau}</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "30px", fontWeight: 900, color: accent, lineHeight: 1 }}>{pays.nom}</div>
          <div style={{ fontSize: "14px", fontWeight: 700, color: "#334155", fontFamily: CURSIVE }}>Capitale : {pays.capitale} · {pays.population}</div>
        </div>
      </div>

      {/* 3 cartes images */}
      <div style={{ flex: 1, display: "flex", gap: "4mm" }}>
        <Carte titre="🏛️ Le monument" wiki={pays.wikiMonument} legende={pays.monument} accent={accent} />
        <Carte titre="🍽️ La spécialité" wiki={plat} legende={pays.specialite} accent={accent} />
        <Carte titre="🌍 La vie là-bas" wiki={pays.wikiVie} legende={pays.wikiVie} accent={accent} />
      </div>

      {/* Le savais-tu */}
      <div style={{ marginTop: "3mm", border: `2px dashed ${accent}`, borderRadius: "3mm", padding: "2.5mm 4mm" }}>
        <span style={{ fontSize: "14px", fontWeight: 900, color: accent, fontFamily: LUDIQUE }}>💡 Le savais-tu ? </span>
        <span style={{ fontSize: "14px", fontWeight: 600, color: "#1f2937", fontFamily: CURSIVE }}>{pays.patrimoine}</span>
      </div>

      <div style={{ textAlign: "right", fontSize: "9px", color: "#94a3b8", marginTop: "1.5mm", fontFamily: "sans-serif" }}>Photos : Wikimedia Commons (licences libres)</div>
    </div>
  );
}

export function GalerieContinent({ periodNumber }: { periodNumber: number }) {
  const cont = AUTOUR_DU_MONDE.find((c) => c.periodNumber === periodNumber);
  const theme = THEMES[periodNumber];
  if (!cont) return null;
  return (
    <div>
      {cont.pays.map((p, i) => (
        <div key={p.id}>
          {i > 0 && <div className="fiche-pagebreak" style={{ height: 0 }} />}
          <PagePays pays={p} accent={theme.accent} soft={theme.soft} />
        </div>
      ))}
    </div>
  );
}
