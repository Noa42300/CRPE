/**
 * Briques partagées pour les fiches d'exercices PAYSAGE (modèle validé par
 * l'enseignant) : feuille A4 paysage, trait central « comme 2 pages » (SANS
 * ciseaux), consignes en police Aptos, exemple résolu, lignes de copie, etc.
 * Une fiche de 2 pages = <LandscapeDoc> [Feuille] <PageBreak/> [Feuille] </LandscapeDoc>.
 */
import { CONSIGNE_FONT } from "./FichePedagogiqueA4";

export const CURSIVE = "'Caveat','Comic Neue',cursive";

export function LandscapeDoc({ children }: { children: React.ReactNode }) {
  return (
    <div className="fiche-a4 fiche-a4-landscape" style={{ width: "297mm", background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      {children}
    </div>
  );
}

export function PageBreak() { return <div className="fiche-pagebreak" style={{ height: 0 }} />; }

export function Feuille({ titre, sousTitre, children }: { titre: string; sousTitre: string; children: React.ReactNode }) {
  return (
    <div style={{ height: "210mm", boxSizing: "border-box", padding: "7mm 8mm" }}>
      <div style={{ border: "2.5px solid #111", borderRadius: "2mm", padding: "4mm 5mm", height: "196mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <div style={{ borderBottom: "1.5px solid #111", paddingBottom: "1.5mm", marginBottom: "2.5mm", display: "flex", alignItems: "baseline", gap: "3mm" }}>
          <h1 style={{ fontSize: "24px", margin: 0, fontWeight: 700, fontFamily: CURSIVE }}>{titre}</h1>
          <span style={{ fontSize: "13px", fontWeight: 700, color: "#444", fontFamily: CURSIVE }}>· {sousTitre}</span>
        </div>
        <div style={{ flex: 1, display: "flex" }}>{children}</div>
      </div>
    </div>
  );
}

export function Col({ children }: { children: React.ReactNode }) {
  return <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "2.5mm", padding: "0 3mm" }}>{children}</div>;
}

export function Trait() {
  return <div style={{ width: "0", borderLeft: "2px dashed #94a3b8", margin: "0 3mm" }} />;
}

export function Consigne({ n, children, aide }: { n: number; children: React.ReactNode; aide?: string }) {
  return (
    <div style={{ fontSize: "12.5px", fontWeight: 700, marginBottom: "1mm", fontFamily: CONSIGNE_FONT }}>
      <span style={{ fontWeight: 800 }}>{n}.</span>{" "}
      <span style={{ textDecoration: "underline", textUnderlineOffset: "2px" }}>{children}</span>
      {aide && <span style={{ marginLeft: "2mm", fontSize: "10px", fontWeight: 700, color: "#444", background: "#f1f3f5", border: "1px solid #ced4da", borderRadius: "999px", padding: "0.2mm 2mm" }}>{aide}</span>}
    </div>
  );
}

export function Exemple({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ margin: "0 0 1mm", display: "flex", width: "fit-content", maxWidth: "100%", alignItems: "center", gap: "2mm", background: "#eef6ee", border: "1px solid #cfe3cf", borderRadius: "6px", padding: "0.3mm 3mm" }}>
      <span style={{ fontSize: "9.5px", fontWeight: 800, color: "#2f6b34", textTransform: "uppercase", letterSpacing: "0.04em" }}>Exemple</span>
      <span style={{ fontFamily: CURSIVE, fontSize: "16px", color: "#1c4a20" }}>{children}</span>
    </div>
  );
}

export function Lines({ n }: { n: number }) {
  return (
    <div style={{ marginTop: "0.5mm" }}>
      {Array.from({ length: n }).map((_, i) => (
        <div key={i} style={{ borderBottom: "1.8px dotted #64748b", height: "6.5mm" }} />
      ))}
    </div>
  );
}

export function Mots({ mots, fs = 18 }: { mots: string[]; fs?: number }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5mm 4mm", fontFamily: CURSIVE, fontSize: `${fs}px`, padding: "0.5mm 0 1mm 2mm" }}>
      {mots.map((m, i) => <span key={i}>{m}{i < mots.length - 1 ? " ·" : ""}</span>)}
    </div>
  );
}

export function Defi({ children }: { children: React.ReactNode }) {
  return <span style={{ marginLeft: "2mm", fontSize: "10px", fontWeight: 800, color: "#7c3aed" }}>⭐ {children}</span>;
}
