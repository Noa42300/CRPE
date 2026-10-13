/**
 * Productions d'écrit « après le film » (C'est pas sorcier)
 * ---------------------------------------------------------
 * Mardi 13/10 — on remplace les fiches de synthèse par : on regarde un extrait
 * de « C'est pas sorcier », puis les élèves écrivent.
 *   • Histoire : après « Les hommes préhistoriques » → raconter une journée.
 *   • Sciences : après « Dent pour dent » → expliquer comment prendre soin de
 *     ses dents.
 * Modèle fiche élève authentique : encre NOIRE (cadre, filets), pas d'orange ;
 * consignes en police type Aptos ; une AMORCE résolue en tête (exemple) ;
 * banque de mots ; lignes d'écriture. UNE seule A4 portrait.
 */
import { CONSIGNE_FONT } from "./FichePedagogiqueA4";
import { CURSIVE } from "./ficheLandscape";

function Lignes({ n }: { n: number }) {
  // Lignes d'écriture : une base pleine + un interligne clair (repère hauteur).
  return (
    <div style={{ marginTop: "1mm" }}>
      {Array.from({ length: n }).map((_, i) => (
        <div key={i} style={{ height: "8.5mm", borderBottom: "1.6px solid #111", position: "relative" }}>
          <div style={{ position: "absolute", left: 0, right: 0, bottom: "3.2mm", borderBottom: "1px dotted #cbd5e1" }} />
        </div>
      ))}
    </div>
  );
}

function Banque({ mots }: { mots: string[] }) {
  return (
    <div style={{ border: "1.5px solid #111", borderRadius: "2mm", padding: "2mm 3mm", margin: "2mm 0" }}>
      <div style={{ fontSize: "10px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.04em", fontFamily: CONSIGNE_FONT }}>Ma banque de mots</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5mm 4mm", fontFamily: CURSIVE, fontSize: "17px", marginTop: "1mm" }}>
        {mots.map((m, i) => <span key={i}>{m}{i < mots.length - 1 ? " ·" : ""}</span>)}
      </div>
    </div>
  );
}

function Amorce({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "2mm", width: "fit-content", maxWidth: "100%", background: "#eef6ee", border: "1px solid #cfe3cf", borderRadius: "6px", padding: "0.5mm 3mm", margin: "1mm 0 1.5mm" }}>
      <span style={{ fontSize: "9.5px", fontWeight: 800, color: "#2f6b34", textTransform: "uppercase", letterSpacing: "0.04em" }}>Pour commencer</span>
      <span style={{ fontFamily: CURSIVE, fontSize: "17px", color: "#1c4a20" }}>{children}</span>
    </div>
  );
}

function Rappel({ titre, puces }: { titre: string; puces: string[] }) {
  return (
    <div style={{ border: "1.5px dashed #111", borderRadius: "2mm", padding: "2mm 3mm", margin: "1mm 0 2mm" }}>
      <div style={{ fontSize: "10px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.04em", fontFamily: CONSIGNE_FONT }}>{titre}</div>
      <div style={{ fontSize: "11.5px", fontFamily: CONSIGNE_FONT, marginTop: "0.5mm", lineHeight: 1.3 }}>
        {puces.map((p, i) => <span key={i}>• {p}{i < puces.length - 1 ? "  " : ""}</span>)}
      </div>
    </div>
  );
}

function FicheEcrit({
  titre, rappelTitre, rappel, consigneCE1, consigneCE2, amorce, mots, nLignes,
}: {
  titre: string; rappelTitre: string; rappel: string[];
  consigneCE1: React.ReactNode; consigneCE2: React.ReactNode;
  amorce: React.ReactNode; mots: string[]; nLignes: number;
}) {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "2.5px solid #111", borderRadius: "2mm", padding: "4mm 5mm", minHeight: "265mm", boxSizing: "border-box" }}>
        {/* En-tête */}
        <div style={{ borderBottom: "2px solid #111", paddingBottom: "1.5mm", marginBottom: "2mm" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "4mm" }}>
            <h1 style={{ fontSize: "27px", margin: 0, fontWeight: 700, fontFamily: CURSIVE }}>{titre}</h1>
            <span style={{ fontSize: "9px", fontWeight: 700, color: "#444", textTransform: "uppercase", letterSpacing: "0.04em", fontFamily: CONSIGNE_FONT }}>Production d'écrit</span>
          </div>
          <div style={{ display: "flex", gap: "8mm", fontSize: "12px", fontWeight: 700, marginTop: "1mm", fontFamily: CONSIGNE_FONT }}>
            <span>Prénom : ..............................</span>
            <span>Date : ...................</span>
          </div>
        </div>

        <Rappel titre={rappelTitre} puces={rappel} />

        {/* Consigne */}
        <div style={{ fontSize: "13px", fontWeight: 700, fontFamily: CONSIGNE_FONT }}>
          <span style={{ fontWeight: 800 }}>1.</span>{" "}
          <span style={{ textDecoration: "underline", textUnderlineOffset: "2px" }}>{consigneCE1}</span>
        </div>
        <div style={{ fontSize: "12px", fontWeight: 700, fontFamily: CONSIGNE_FONT, marginTop: "1mm" }}>
          <span style={{ color: "#7c3aed", fontWeight: 800 }}>⭐ CE2 —</span>{" "}
          <span style={{ textDecoration: "underline", textUnderlineOffset: "2px" }}>{consigneCE2}</span>
        </div>

        <Amorce>{amorce}</Amorce>
        <Banque mots={mots} />
        <Lignes n={nLignes} />
      </div>
    </div>
  );
}

/* ===================== HISTOIRE — Les hommes préhistoriques ===================== */
export function EcritPrehistoire() {
  return (
    <FicheEcrit
      titre="La vie d'un homme préhistorique"
      rappelTitre="Dans le film, j'ai appris…"
      rappel={["où ils vivaient", "ce qu'ils mangeaient", "le feu", "les outils en silex", "la chasse", "les peintures des grottes"]}
      consigneCE1={<>Écris <b>3 phrases</b> pour raconter une journée d'un enfant à la Préhistoire.</>}
      consigneCE2={<>Écris un <b>petit paragraphe</b> (5 à 6 phrases) : le matin, la chasse, le repas, le soir.</>}
      amorce={<>Il y a très longtemps, je vivais dans une grotte. Le matin, …</>}
      mots={["la grotte", "le feu", "la chasse", "le mammouth", "le silex", "un outil", "la peinture", "la rivière", "cueillir", "se réchauffer", "le gibier"]}
      nLignes={16}
    />
  );
}

/* ===================== SCIENCES — Les dents (Dent pour dent) ===================== */
export function EcritLesDents() {
  return (
    <FicheEcrit
      titre="Je prends soin de mes dents"
      rappelTitre="Dans le film, j'ai appris…"
      rappel={["les dents de lait et les dents définitives", "la carie", "le sucre", "le brossage matin et soir", "le dentiste"]}
      consigneCE1={<>Écris <b>3 conseils</b> pour avoir de belles dents.</>}
      consigneCE2={<>Écris un <b>petit texte</b> pour expliquer à un plus petit comment prendre soin de ses dents (pourquoi et comment).</>}
      amorce={<>Pour avoir de belles dents, je dois d'abord …</>}
      mots={["une dent de lait", "une carie", "le dentifrice", "la brosse à dents", "le sucre", "se brosser", "le dentiste", "matin et soir", "le sourire", "croquer"]}
      nLignes={16}
    />
  );
}
