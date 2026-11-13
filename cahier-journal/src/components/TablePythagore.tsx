/**
 * Maths — Table de multiplication (table de Pythagore) jusqu'à 10.
 * Affiche / fiche à coller : toutes les tables de 1 à 10 dans un seul tableau,
 * en-têtes colorés, diagonale des carrés surlignée, + aide à la lecture.
 */
const MA = "#0e7490";
const CONSIGNE_FONT = "'Aptos','Inter','Segoe UI',system-ui,sans-serif";
const CURSIVE = "'Caveat','Comic Neue',cursive";
const N = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function TablePythagoreFiche() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <h1 style={{ fontSize: "30px", margin: "0 0 1mm", textAlign: "center", fontWeight: 800, color: MA, fontFamily: CURSIVE }}>Ma table de multiplication</h1>
      <div style={{ textAlign: "center", fontFamily: CONSIGNE_FONT, fontSize: "12px", fontWeight: 700, color: "#0e7490", marginBottom: "3mm" }}>La table de Pythagore — toutes les tables de 1 à 10</div>

      <table style={{ borderCollapse: "collapse", margin: "0 auto", width: "182mm", tableLayout: "fixed", fontFamily: CONSIGNE_FONT }}>
        <thead>
          <tr>
            <th style={{ border: "2px solid #0f172a", background: MA, color: "#fff", height: "15mm", fontSize: "20px" }}>×</th>
            {N.map((c) => <th key={c} style={{ border: "1.5px solid #0f172a", background: "#cffafe", color: "#0e7490", fontSize: "18px", fontWeight: 800 }}>{c}</th>)}
          </tr>
        </thead>
        <tbody>
          {N.map((r) => (
            <tr key={r}>
              <th style={{ border: "1.5px solid #0f172a", background: "#cffafe", color: "#0e7490", fontSize: "18px", fontWeight: 800, height: "14mm" }}>{r}</th>
              {N.map((c) => {
                const diag = r === c;
                return (
                  <td key={c} style={{ border: "1.5px solid #94a3b8", textAlign: "center", fontSize: "17px", fontWeight: diag ? 800 : 600, background: diag ? "#fde68a" : (r % 2 === c % 2 ? "#f8fafc" : "#fff"), color: "#0f172a" }}>{r * c}</td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "4mm", display: "flex", gap: "4mm" }}>
        <div style={{ flex: 1, border: `2px solid ${MA}`, borderRadius: "3mm", padding: "2.5mm 4mm", background: "#ecfeff" }}>
          <div style={{ fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "13px", color: MA }}>Comment je lis une multiplication</div>
          <div style={{ fontFamily: CURSIVE, fontSize: "17px", lineHeight: 1.4, marginTop: "1mm" }}>Pour <b>6 × 4</b> : je descends la colonne <b>6</b> et je vais sur la ligne <b>4</b> (ou l'inverse). Je lis le résultat à l'intersection : <b>24</b>.</div>
          <div style={{ fontFamily: CURSIVE, fontSize: "16px", marginTop: "1mm", color: "#475569" }}>Astuce : <b>6 × 4 = 4 × 6</b> (le résultat est le même dans les deux sens).</div>
        </div>
        <div style={{ flex: "0 0 52mm", border: `2px solid #d97706`, borderRadius: "3mm", padding: "2.5mm 3mm", background: "#fffbeb", textAlign: "center" }}>
          <div style={{ fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "12px", color: "#b45309" }}>La diagonale jaune</div>
          <div style={{ fontFamily: CURSIVE, fontSize: "15px", lineHeight: 1.35, marginTop: "1mm" }}>Ce sont les <b>carrés</b> : 1, 4, 9, 16, 25, 36, 49, 64, 81, 100.</div>
        </div>
      </div>
    </div>
  );
}
