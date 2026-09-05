/**
 * Fiche pédagogique imprimable (A4) — générique et pilotée par des données.
 * ----------------------------------------------------------------------
 * Sert de support d'affichage (leçon collective au TBI), de trace écrite à
 * coller, ou de fiche d'exercices différenciée (CE1/CE2). Un seul composant,
 * alimenté par une liste de blocs, calibré A4 (`.fiche-a4` + @media print).
 */
import type { ReactNode } from "react";

export type FicheBloc =
  | { kind: "def"; titre?: string; contenu: string }
  | { kind: "puces"; titre?: string; points: string[] }
  | { kind: "exemples"; titre?: string; points: string[] }
  | { kind: "exercice"; consigne: string; items?: string[]; lignes?: number }
  | { kind: "lignes"; n: number };

export interface FicheData {
  entete: string; // ex : "Leçon", "Affichage", "Exercices", "Fichier autonomie"
  titre: string;
  niveau?: string; // "CE1", "CE2", "CE1-CE2"
  discipline?: string;
  blocs: FicheBloc[];
}

const H: React.CSSProperties = { color: "#c9481f", fontWeight: 800 };
const line: React.CSSProperties = { borderBottom: "1px solid #bcb6ab", height: "8mm" };

function Lignes({ n }: { n: number }) {
  return (
    <div style={{ marginTop: "1.5mm" }}>
      {Array.from({ length: n }).map((_, i) => (
        <div key={i} style={line} />
      ))}
    </div>
  );
}

export function FichePedagogiqueA4({ data }: { data: FicheData }) {
  let exNo = 0;
  return (
    <div
      className="fiche-a4"
      style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}
    >
      {/* En-tête */}
      <div style={{ display: "flex", alignItems: "baseline", gap: "3mm", borderBottom: "2px solid #c9481f", paddingBottom: "2mm", marginBottom: "4mm" }}>
        <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.14em", color: "#c9481f", fontWeight: 700 }}>
          {data.entete}
        </span>
        {data.niveau && (
          <span style={{ marginLeft: "auto", fontSize: "12px", fontWeight: 700, color: "#555", border: "1px solid #ccc", borderRadius: "999px", padding: "0.5mm 3mm" }}>
            {data.niveau}
          </span>
        )}
      </div>
      <h1 style={{ fontSize: "22px", margin: "0 0 1mm", fontWeight: 800 }}>{data.titre}</h1>
      {data.discipline && <div style={{ fontSize: "12px", color: "#888", marginBottom: "3mm" }}>{data.discipline}</div>}

      {/* Champs élève (fiche d'exercices) */}
      {(data.entete.toLowerCase().includes("exercice") || data.entete.toLowerCase().includes("autonomie")) && (
        <div style={{ display: "flex", gap: "6mm", fontSize: "13px", marginBottom: "4mm" }}>
          <div>Prénom : <span style={{ display: "inline-block", width: "45mm", borderBottom: "1px dotted #999" }} /></div>
          <div>Date : <span style={{ display: "inline-block", width: "35mm", borderBottom: "1px dotted #999" }} /></div>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "3.5mm" }}>
        {data.blocs.map((b, i) => {
          if (b.kind === "def") {
            return (
              <div key={i} style={{ background: "#f6f8f4", border: "1px solid #dfe6d8", borderRadius: "6px", padding: "3mm 4mm" }}>
                {b.titre && <div style={{ ...H, fontSize: "14px", marginBottom: "1mm" }}>{b.titre}</div>}
                <div style={{ fontSize: "14px", lineHeight: 1.5 }}>{b.contenu}</div>
              </div>
            );
          }
          if (b.kind === "puces") {
            return (
              <div key={i}>
                {b.titre && <div style={{ ...H, fontSize: "13px", marginBottom: "1mm" }}>{b.titre}</div>}
                <ul style={{ margin: 0, paddingLeft: "6mm", fontSize: "13.5px", lineHeight: 1.55 }}>
                  {b.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              </div>
            );
          }
          if (b.kind === "exemples") {
            return (
              <div key={i} style={{ borderLeft: "3px solid #c9481f", paddingLeft: "3mm" }}>
                {b.titre && <div style={{ ...H, fontSize: "12px", marginBottom: "1mm" }}>{b.titre}</div>}
                <ul style={{ margin: 0, paddingLeft: "5mm", fontSize: "13px", lineHeight: 1.5, fontStyle: "italic", color: "#333" }}>
                  {b.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              </div>
            );
          }
          if (b.kind === "exercice") {
            exNo += 1;
            return (
              <div key={i} className="print-avoid-break">
                <div style={{ fontSize: "13.5px", fontWeight: 700 }}>
                  <span style={{ ...H }}>{exNo}.</span> {b.consigne}
                </div>
                {b.items && (
                  <ul style={{ margin: "1mm 0 0", paddingLeft: "6mm", fontSize: "13.5px", lineHeight: 1.9 }}>
                    {b.items.map((it, j) => <li key={j}>{it}</li>)}
                  </ul>
                )}
                {b.lignes ? <Lignes n={b.lignes} /> : null}
              </div>
            );
          }
          return <Lignes key={i} n={b.n} />;
        })}
      </div>
    </div>
  );
}

/** Petit utilitaire : enrobe un rendu de fiche pour la liste des supports. */
export function ficheNode(data: FicheData): ReactNode {
  return <FichePedagogiqueA4 data={data} />;
}
