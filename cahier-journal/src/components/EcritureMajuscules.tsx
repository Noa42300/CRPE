/**
 * Atelier d'écriture — les lettres MAJUSCULES (en attaché / cursive).
 * Feuille élève : alphabet des capitales cursives en modèle + lignes Seyès pour
 * s'entraîner, lettre par lettre. Prévu par groupes (plusieurs feuilles pour
 * couvrir A→Z). Le maître montre le tracé au tableau, l'élève repasse et répète.
 */
const FR = "#1d4ed8";
const DANCING = "'Dancing Script', cursive";
const CONSIGNE_FONT = "'Aptos','Inter','Segoe UI',system-ui,sans-serif";
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export function EcritureMajusculesFiche({ lettres = ["A", "B", "C", "D", "E", "F", "G", "H"] }: { lettres?: string[] }) {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "2.5px solid #111", borderRadius: "2mm", padding: "5mm 6mm", minHeight: "255mm", boxSizing: "border-box" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "2px solid #111", paddingBottom: "1.5mm", marginBottom: "3mm" }}>
          <h1 style={{ fontSize: "24px", margin: 0, fontWeight: 700, fontFamily: DANCING, color: FR }}>J'écris les lettres majuscules</h1>
          <span style={{ fontSize: "12px", fontWeight: 700, fontFamily: CONSIGNE_FONT }}>Prénom : .................. &nbsp; Date : ............</span>
        </div>

        {/* Alphabet de référence (capitales cursives) */}
        <div style={{ fontSize: "12px", fontWeight: 800, fontFamily: CONSIGNE_FONT, color: FR }}>Je regarde le modèle (l'alphabet en attaché)</div>
        <div style={{ border: `2px solid ${FR}`, borderRadius: "3mm", background: "#eff6ff", padding: "1.5mm 3mm", margin: "1mm 0 2.5mm", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5mm 3.5mm", fontFamily: DANCING, fontSize: "24px", color: "#1e3a8a", lineHeight: 1.1 }}>
          {ALPHABET.map((l) => <span key={l}>{l}</span>)}
        </div>

        {/* Entraînement lettre par lettre */}
        <div style={{ fontSize: "12px", fontWeight: 800, fontFamily: CONSIGNE_FONT, color: FR, marginBottom: "1mm" }}>Je m'entraîne : je repasse le modèle, puis je continue tout seul</div>
        {lettres.map((l) => (
          <div key={l} style={{ display: "flex", alignItems: "stretch", gap: "3mm", marginBottom: "2mm" }}>
            <div style={{ width: "18mm", flex: "0 0 auto", display: "flex", alignItems: "center", justifyContent: "center", border: `1.5px solid ${FR}`, borderRadius: "2mm", background: "#f8fbff" }}>
              <span style={{ fontFamily: DANCING, fontSize: "38px", color: FR, lineHeight: 1 }}>{l}</span>
            </div>
            <div className="seyes" style={{ flex: 1, height: "72px", borderRadius: "1.5mm", border: "1px solid #cbd5e1" }}>
              <span style={{ fontFamily: DANCING, fontSize: "34px", color: "#c7d7ec", paddingLeft: "3mm", lineHeight: "66px", display: "inline-block" }}>{l}&nbsp;&nbsp;&nbsp;{l}&nbsp;&nbsp;&nbsp;{l}</span>
            </div>
          </div>
        ))}

        {/* Mon prénom */}
        <div style={{ fontSize: "12px", fontWeight: 800, fontFamily: CONSIGNE_FONT, color: FR, margin: "2.5mm 0 1mm" }}>J'écris mon prénom avec une belle majuscule</div>
        <div className="seyes" style={{ height: "72px", borderRadius: "1.5mm", border: "1px solid #cbd5e1" }} />
      </div>
    </div>
  );
}
