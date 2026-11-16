/**
 * Problème du jour — BANDES À COLLER (énoncé seul).
 * -------------------------------------------------
 * Pour gagner du temps le matin : les élèves ne recopient plus l'énoncé, ils
 * COLLENT une petite bande dans le cahier du jour, puis écrivent eux-mêmes
 * « Problème », le soulignent, posent le calcul et la phrase réponse.
 * → Une A4 = 3-4 fois LE MÊME énoncé (à découper). Une feuille CE1, une CE2.
 * Énoncé en police « Word » (CONSIGNE_FONT, type Aptos), grand et lisible.
 */
import { CONSIGNE_FONT } from "./FichePedagogiqueA4";

const MA = "#0e7490";

function Bande({ niveau, enonce }: { niveau: string; enonce: React.ReactNode }) {
  return (
    <div style={{ border: "2px solid #111", borderRadius: "2mm", padding: "3mm 5mm", boxSizing: "border-box" }}>
      <div style={{ fontSize: "10px", fontWeight: 800, color: MA, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: CONSIGNE_FONT }}>
        Problème du jour · {niveau}
      </div>
      <div style={{ fontSize: "16px", fontWeight: 700, lineHeight: 1.3, marginTop: "1mm", fontFamily: CONSIGNE_FONT }}>{enonce}</div>
    </div>
  );
}

function Ciseaux() {
  return (
    <div style={{ position: "relative", borderTop: "2px dashed #94a3b8", margin: "3mm 0" }}>
      <span style={{ position: "absolute", left: "8mm", top: "-2.4mm", background: "#fff", padding: "0 2mm", fontSize: "11px", color: "#64748b" }}>✂ à découper</span>
    </div>
  );
}

/** Une A4 avec n fois le même énoncé (bandes à découper). */
export function PlancheBandes({ niveau, enonce, n = 4 }: { niveau: string; enonce: React.ReactNode; n?: number }) {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", padding: "9mm 11mm", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      {Array.from({ length: n }).map((_, i) => (
        <div key={i}>
          <Bande niveau={niveau} enonce={enonce} />
          {i < n - 1 && <Ciseaux />}
        </div>
      ))}
    </div>
  );
}

/* ---- Lundi : groupes égaux (sens de la multiplication) ---- */
export function ProblemeBandesLundiCE1() {
  return <PlancheBandes niveau="CE1" n={4} enonce={<>Dans la classe, il y a <b>6 tables</b>. À chaque table, <b>4 élèves</b> sont assis. Combien y a-t-il d'élèves en tout&nbsp;?</>} />;
}
export function ProblemeBandesLundiCE2() {
  return <PlancheBandes niveau="CE2" n={4} enonce={<>Dans la bibliothèque, il y a <b>5 étagères</b>. Sur chaque étagère, il y a <b>30 livres</b>. Combien y a-t-il de livres en tout&nbsp;?</>} />;
}

/* ---- Mardi : groupes égaux ---- */
export function ProblemeBandesMardiCE1() {
  return <PlancheBandes niveau="CE1" n={4} enonce={<>Pour le goûter, j'ai <b>5 paquets</b> de gâteaux. Dans chaque paquet, il y a <b>4 gâteaux</b>. Combien ai-je de gâteaux en tout&nbsp;?</>} />;
}
export function ProblemeBandesMardiCE2() {
  return <PlancheBandes niveau="CE2" n={4} enonce={<>Un jardinier plante <b>6 rangées</b> de <b>20 fleurs</b>. Combien de fleurs plante-t-il en tout&nbsp;?</>} />;
}
