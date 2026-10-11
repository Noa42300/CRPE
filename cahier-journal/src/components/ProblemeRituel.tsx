/**
 * Problème du jour (rituel) — petit encadré à DÉCOUPER et COLLER dans le cahier
 * d'exercices. 4 exemplaires identiques par feuille A4 (on découpe → un chacun).
 * Objectif : remédiation « addition vs multiplication » (ils font 6+4 au lieu de
 * 6×4). Chaque encadré : énoncé très lisible, zone « je schématise », « mon
 * calcul », « phrase réponse ». Écriture grande et claire.
 */
import { CONSIGNE_FONT } from "./FichePedagogiqueA4";

function Boite({ titre, enonce }: { titre: string; enonce: React.ReactNode }) {
  return (
    <div style={{ flex: 1, border: "2px solid #111", borderRadius: "2mm", margin: "0 0 3mm", padding: "2.5mm 4mm", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div>
        <div style={{ fontSize: "10px", fontWeight: 800, color: "#374151", textTransform: "uppercase", letterSpacing: "0.04em", fontFamily: CONSIGNE_FONT }}>{titre}</div>
        <div style={{ fontSize: "14px", fontWeight: 700, lineHeight: 1.25, margin: "1mm 0", fontFamily: CONSIGNE_FONT }}>{enonce}</div>
      </div>
      <div style={{ display: "flex", gap: "4mm" }}>
        <div style={{ flex: 1.1, border: "1.5px dashed #94a3b8", borderRadius: "2mm", minHeight: "20mm", position: "relative" }}>
          <span style={{ position: "absolute", top: "0.5mm", left: "1.5mm", fontSize: "9px", fontWeight: 700, color: "#64748b", fontFamily: CONSIGNE_FONT }}>Je schématise (je dessine les groupes) :</span>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <span style={{ fontSize: "10px", fontWeight: 800, fontFamily: CONSIGNE_FONT }}>Mon calcul :</span>
            <div style={{ borderBottom: "1.6px dotted #64748b", height: "7mm" }} />
          </div>
          <div>
            <span style={{ fontSize: "10px", fontWeight: 800, fontFamily: CONSIGNE_FONT }}>Phrase réponse :</span>
            <div style={{ borderBottom: "1.6px dotted #64748b", height: "7mm" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Planche({ titre, enonce }: { titre: string; enonce: React.ReactNode }) {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", padding: "7mm 9mm", height: "297mm", display: "flex", flexDirection: "column", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      {Array.from({ length: 4 }).map((_, i) => <Boite key={i} titre={titre} enonce={enonce} />)}
    </div>
  );
}

/* Lundi 12 — groupes égaux (tables / élèves) : 6 × 4 */
export function ProblemeRituelLundi() {
  return (
    <Planche
      titre="Problème du jour — lundi"
      enonce={<>Dans la classe, il y a <b>6 tables</b>. À chaque table sont assis <b>4 élèves</b>. Combien y a-t-il d'élèves en tout&nbsp;?</>}
    />
  );
}

/* Mardi 13 — groupes égaux (paquets / gâteaux) : 5 × 4 */
export function ProblemeRituelMardi() {
  return (
    <Planche
      titre="Problème du jour — mardi"
      enonce={<>Pour le goûter, j'ai <b>5 paquets</b> de gâteaux. Dans chaque paquet, il y a <b>4 gâteaux</b>. Combien ai-je de gâteaux en tout&nbsp;?</>}
    />
  );
}
