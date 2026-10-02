/**
 * Fiches d'exercices « Construire 100 / 1 000 » — format PAYSAGE, mise en page
 * façon manuel de primaire (exercices numérotés dans des cartes, numéros en
 * pastille, base 10 illustrée). A4 paysage (.fiche-a4 .fiche-a4-landscape).
 * Deux niveaux : ConstruireCE1 (100) et ConstruireCE2 (1 000).
 */
import type { ReactNode } from "react";

const MATHS = "#0d9488"; // teal (pastilles, filets)

/* ---- mini matériel base 10 (illustration dans les exercices) ---- */
function MiniBase10({ centaines = 0, dizaines = 0, unites = 0 }: { centaines?: number; dizaines?: number; unites?: number }) {
  const u = "2.6mm";
  const cb = (bg: string, bd = "0.3mm solid #fff"): React.CSSProperties => ({ width: u, height: u, background: bg, border: bd, boxSizing: "border-box" });
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: "2.5mm", flexWrap: "wrap", margin: "1mm 0" }}>
      {Array.from({ length: centaines }).map((_, i) => (
        <div key={`c${i}`} style={{ display: "grid", gridTemplateColumns: `repeat(10, ${u})`, gridAutoRows: u, border: "0.4mm solid #2563eb" }}>
          {Array.from({ length: 100 }).map((_, k) => <div key={k} style={cb("#93c5fd")} />)}
        </div>
      ))}
      {Array.from({ length: dizaines }).map((_, i) => (
        <div key={`d${i}`} style={{ display: "grid", gridTemplateColumns: u, gridAutoRows: u, border: "0.4mm solid #c9481f" }}>
          {Array.from({ length: 10 }).map((_, k) => <div key={k} style={cb("#f6b58f")} />)}
        </div>
      ))}
      {unites > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(unites, 5)}, ${u})`, gridAutoRows: u, gap: "0.6mm" }}>
          {Array.from({ length: unites }).map((_, k) => <div key={k} style={cb("#4ade80", "0.3mm solid #16a34a")} />)}
        </div>
      )}
    </div>
  );
}

function Ex({ n, titre, exemple, children }: { n: number; titre: ReactNode; exemple?: ReactNode; children?: ReactNode }) {
  return (
    <div className="print-avoid-break" style={{ border: `1.5px solid ${MATHS}33`, borderRadius: "3mm", padding: "2.5mm 3mm", background: "#fff", marginBottom: "3mm", boxShadow: "0 1px 0 #e2e8f0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "2mm", marginBottom: "1mm" }}>
        <span style={{ flexShrink: 0, width: "6mm", height: "6mm", borderRadius: "50%", background: MATHS, color: "#fff", fontWeight: 800, fontSize: "13px", display: "grid", placeItems: "center" }}>{n}</span>
        <span style={{ fontSize: "12.5px", fontWeight: 700 }}>{titre}</span>
      </div>
      {exemple && (
        <div style={{ margin: "0 0 1.5mm", display: "inline-flex", alignItems: "center", gap: "2mm", background: "#f0fdfa", border: "1px solid #ccfbf1", borderRadius: "5px", padding: "0.3mm 2.5mm" }}>
          <span style={{ fontSize: "9.5px", fontWeight: 800, color: MATHS, textTransform: "uppercase" }}>Ex.</span>
          <span style={{ fontFamily: "'Caveat','Comic Neue',cursive", fontSize: "16px", color: "#134e4a" }}>{exemple}</span>
        </div>
      )}
      {children}
    </div>
  );
}

function Items({ lignes }: { lignes: string[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.2mm", fontFamily: "'Caveat','Comic Neue',cursive", fontSize: "18px", color: "#222", paddingLeft: "2mm" }}>
      {lignes.map((l, i) => <div key={i}>{l}</div>)}
    </div>
  );
}

function VraiFaux({ lignes }: { lignes: string[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5mm", fontSize: "13px" }}>
      {lignes.map((l, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: "2mm" }}>
          <span style={{ fontFamily: "'Caveat','Comic Neue',cursive", fontSize: "18px" }}>{l}</span>
          <span style={{ marginLeft: "auto", fontWeight: 700, color: "#334155" }}>Vrai&nbsp;/&nbsp;Faux</span>
        </div>
      ))}
    </div>
  );
}

function Dots({ n }: { n: number }) {
  return <div style={{ marginTop: "1mm" }}>{Array.from({ length: n }).map((_, i) => <div key={i} style={{ borderBottom: "2px dotted #94a3b8", height: "7mm" }} />)}</div>;
}

function Shell({ titre, niveau, colA, colB }: { titre: string; niveau: string; colA: ReactNode; colB: ReactNode }) {
  return (
    <div className="fiche-a4 fiche-a4-landscape" style={{ width: "297mm", minHeight: "200mm", background: "#fff", color: "#111", boxSizing: "border-box", padding: "9mm", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "2.5px solid #111", borderRadius: "2mm", padding: "5mm 6mm", minHeight: "186mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <div style={{ borderBottom: "1.5px solid #111", paddingBottom: "2mm", marginBottom: "3mm", display: "flex", alignItems: "baseline", gap: "3mm" }}>
          <h1 style={{ fontSize: "25px", margin: 0, fontWeight: 700, fontFamily: "'Caveat','Comic Neue',cursive" }}>{titre}</h1>
          <span style={{ fontSize: "14px", fontWeight: 700, color: "#333", fontFamily: "'Caveat','Comic Neue',cursive" }}>· {niveau}</span>
          <span style={{ marginLeft: "auto", fontSize: "11px", fontWeight: 700, color: MATHS, textTransform: "uppercase", letterSpacing: "0.05em" }}>Nombres · Numération</span>
          <div style={{ fontSize: "13px" }}>Prénom : <span style={{ display: "inline-block", width: "50mm", borderBottom: "1px solid #333" }} /></div>
        </div>
        <div style={{ flex: 1, display: "flex", gap: "7mm" }}>
          <div style={{ flex: 1, minWidth: 0 }}>{colA}</div>
          <div style={{ width: "0", borderLeft: "1.5px solid #e2e8f0" }} />
          <div style={{ flex: 1, minWidth: 0 }}>{colB}</div>
        </div>
      </div>
    </div>
  );
}

/* ============================= CE1 — Construire 100 ============================= */
export function ConstruireCE1() {
  return (
    <Shell titre="Je construis 100" niveau="CE1"
      colA={<>
        <Ex n={1} titre="Écris le nombre représenté.">
          <div style={{ display: "flex", gap: "8mm", flexWrap: "wrap" }}>
            <div><MiniBase10 dizaines={7} unites={3} /><div style={{ fontSize: "15px" }}>= ……………</div></div>
            <div><MiniBase10 dizaines={9} unites={0} /><div style={{ fontSize: "15px" }}>= ……………</div></div>
          </div>
        </Ex>
        <Ex n={2} titre="Complète pour faire 100." exemple="60 + 40 = 100">
          <Items lignes={["70 + …… = 100", "…… + 30 = 100", "100 = 80 + ……", "100 = …… + 45"]} />
        </Ex>
      </>}
      colB={<>
        <Ex n={3} titre="Complète." exemple="100 = 10 dizaines">
          <Items lignes={["100 = …… dizaines", "9 dizaines et …… unités = 100", "100 = 70 + ……", "10 dizaines = ……"]} />
        </Ex>
        <Ex n={4} titre="Vrai ou faux ? Entoure.">
          <VraiFaux lignes={["100 = 10 dizaines", "100 = 1 centaine", "50 + 40 = 100", "100 = 20 dizaines"]} />
        </Ex>
        <Ex n={5} titre="Problème. Écris ton calcul et ta réponse.">
          <div style={{ fontFamily: "'Caveat','Comic Neue',cursive", fontSize: "17px" }}>Tom a 6 barres de 10 cubes. Combien a-t-il de cubes ? Combien lui en manque-t-il pour faire 100 ?</div>
          <Dots n={2} />
        </Ex>
      </>}
    />
  );
}

/* ============================= CE2 — Construire 1 000 ============================= */
export function ConstruireCE2() {
  return (
    <Shell titre="Je construis 1 000" niveau="CE2"
      colA={<>
        <Ex n={1} titre="Écris le nombre représenté.">
          <div style={{ display: "flex", gap: "8mm", flexWrap: "wrap" }}>
            <div><MiniBase10 centaines={3} dizaines={5} unites={2} /><div style={{ fontSize: "15px" }}>= ……………</div></div>
            <div><MiniBase10 centaines={7} dizaines={0} unites={4} /><div style={{ fontSize: "15px" }}>= ……………</div></div>
          </div>
        </Ex>
        <Ex n={2} titre="Complète pour faire 1 000." exemple="900 + 100 = 1 000">
          <Items lignes={["700 + …… = 1 000", "…… + 250 = 1 000", "1 000 = 990 + ……", "1 000 = …… + 1"]} />
        </Ex>
      </>}
      colB={<>
        <Ex n={3} titre="Complète." exemple="1 000 = 10 centaines = 100 dizaines">
          <Items lignes={["1 000 = …… centaines", "1 000 = …… dizaines", "7 centaines 5 dizaines = ……", "1 000 = 600 + ……"]} />
        </Ex>
        <Ex n={4} titre="Vrai ou faux ? Entoure.">
          <VraiFaux lignes={["1 000 = 10 centaines", "1 000 = 100 dizaines", "1 000 = 10 dizaines", "900 + 100 = 1 000"]} />
        </Ex>
        <Ex n={5} titre="Problème. Écris ton calcul et ta réponse.">
          <div style={{ fontFamily: "'Caveat','Comic Neue',cursive", fontSize: "17px" }}>Une école a récolté 8 centaines d'euros. Combien cela fait-il ? Combien manque-t-il pour atteindre 1 000 € ?</div>
          <Dots n={2} />
        </Ex>
      </>}
    />
  );
}
