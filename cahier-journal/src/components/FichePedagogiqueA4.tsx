/**
 * Fiche pédagogique imprimable (A4) — générique, illustrée, calibrée CE1-CE2.
 * ----------------------------------------------------------------------
 * Support d'affichage (TBI), trace écrite à coller (option écriture cursive),
 * ou fiche d'exercices différenciée avec une illustration/aide par exercice.
 * Pictogrammes SVG maison (pictos.tsx), zéro image externe. `.fiche-a4` + print.
 */
import type { ReactNode } from "react";
import { Picto } from "./pictos";

export type FicheBloc =
  | { kind: "def"; titre?: string; contenu: string; picto?: string }
  | { kind: "puces"; titre?: string; points: string[] }
  | { kind: "exemples"; titre?: string; points: string[] }
  | { kind: "pictos"; titre?: string; items: { name: string; label: string }[] }
  | { kind: "timeline"; titre?: string; steps: { name: string; label: string }[] }
  | { kind: "paires"; titre?: string; paires: { avant: { name: string; label: string }; apres: { name: string; label: string } }[] }
  | { kind: "exercice"; consigne: string; items?: string[]; lignes?: number; picto?: string; aide?: string }
  | { kind: "base10"; dizaines: number; unites: number; centaines?: number; legende?: string }
  | { kind: "lignes"; n: number };

export interface FicheData {
  entete: string;
  titre: string;
  niveau?: string;
  discipline?: string;
  /** true = corps de leçon en écriture cursive (police Borel). */
  cursive?: boolean;
  blocs: FicheBloc[];
}

const ORANGE = "#c9481f";
const H: React.CSSProperties = { color: ORANGE, fontWeight: 800 };
const line: React.CSSProperties = { borderBottom: "1.5px solid #b9d4ec", height: "8.5mm" };

function Lignes({ n }: { n: number }) {
  return (
    <div style={{ marginTop: "1.5mm" }}>
      {Array.from({ length: n }).map((_, i) => <div key={i} style={line} />)}
    </div>
  );
}

/** Base 10 : plaques (100), barres (10), cubes (1). */
function Base10({ centaines = 0, dizaines, unites, legende }: { centaines?: number; dizaines: number; unites: number; legende?: string }) {
  const u = "4mm";
  const cube = (bg: string): React.CSSProperties => ({ width: u, height: u, background: bg, border: "0.4mm solid #fff", boxSizing: "border-box" });
  const total = centaines * 100 + dizaines * 10 + unites;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2mm" }}>
      <div style={{ display: "flex", alignItems: "flex-end", gap: "4mm", flexWrap: "wrap" }}>
        {Array.from({ length: centaines }).map((_, i) => (
          <div key={`c${i}`} style={{ display: "grid", gridTemplateColumns: `repeat(10, ${u})`, gridAutoRows: u, border: "0.5mm solid #2563eb" }}>
            {Array.from({ length: 100 }).map((_, k) => <div key={k} style={cube("#93c5fd")} />)}
          </div>
        ))}
        {Array.from({ length: dizaines }).map((_, i) => (
          <div key={`d${i}`} style={{ display: "grid", gridTemplateColumns: u, gridAutoRows: u, border: "0.5mm solid #c9481f" }}>
            {Array.from({ length: 10 }).map((_, k) => <div key={k} style={cube("#f6b58f")} />)}
          </div>
        ))}
        {unites > 0 && (
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(unites, 5)}, ${u})`, gridAutoRows: u, gap: "1mm" }}>
            {Array.from({ length: unites }).map((_, k) => <div key={k} style={{ ...cube("#4ade80"), border: "0.4mm solid #16a34a" }} />)}
          </div>
        )}
      </div>
      <div style={{ fontSize: "12px", color: "#555" }}>
        {legende ?? `${centaines ? centaines + " centaine(s) · " : ""}${dizaines} dizaine(s) et ${unites} unité(s)`} = <strong style={{ color: ORANGE, fontSize: "15px" }}>{total}</strong>
      </div>
    </div>
  );
}

function Carte({ name, label, bg, border }: { name: string; label: string; bg: string; border: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1mm", background: bg, border: `1.5px solid ${border}`, borderRadius: "8px", padding: "2.5mm 2mm", minWidth: "24mm" }}>
      <Picto name={name} size={46} title={label} />
      <span style={{ fontSize: "12.5px", fontWeight: 600, textAlign: "center", color: "#334155" }}>{label}</span>
    </div>
  );
}

export function FichePedagogiqueA4({ data }: { data: FicheData }) {
  const body = data.cursive ? "'Borel','Nunito',cursive" : "'Lexend','Nunito',system-ui,sans-serif";
  const isExo = data.entete.toLowerCase().includes("exercice") || data.entete.toLowerCase().includes("autonomie") || data.entete.toLowerCase().includes("distribuer");
  let exNo = 0;
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: "3mm", borderBottom: `3px solid ${ORANGE}`, paddingBottom: "2mm", marginBottom: "4mm" }}>
        <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.14em", color: ORANGE, fontWeight: 800 }}>{data.entete}</span>
        {data.niveau && <span style={{ marginLeft: "auto", fontSize: "13px", fontWeight: 800, color: "#fff", background: ORANGE, borderRadius: "999px", padding: "0.5mm 4mm" }}>{data.niveau}</span>}
      </div>
      <h1 style={{ fontSize: "24px", margin: "0 0 1mm", fontWeight: 800 }}>{data.titre}</h1>
      {data.discipline && <div style={{ fontSize: "12px", color: "#888", marginBottom: "3mm" }}>{data.discipline}</div>}

      {isExo && (
        <div style={{ display: "flex", gap: "6mm", fontSize: "13px", marginBottom: "4mm" }}>
          <div>Prénom : <span style={{ display: "inline-block", width: "45mm", borderBottom: "1px dotted #999" }} /></div>
          <div>Date : <span style={{ display: "inline-block", width: "35mm", borderBottom: "1px dotted #999" }} /></div>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "4mm" }}>
        {data.blocs.map((b, i) => {
          if (b.kind === "def") {
            return (
              <div key={i} style={{ display: "flex", gap: "3mm", alignItems: "center", background: "#f6f8f4", border: "1.5px solid #dfe6d8", borderRadius: "8px", padding: "3mm 4mm" }}>
                {b.picto && <div style={{ flexShrink: 0 }}><Picto name={b.picto} size={52} /></div>}
                <div>
                  {b.titre && <div style={{ ...H, fontSize: "14px", marginBottom: "1mm" }}>{b.titre}</div>}
                  <div style={{ fontSize: data.cursive ? "18px" : "14.5px", lineHeight: 1.55, fontFamily: body }}>{b.contenu}</div>
                </div>
              </div>
            );
          }
          if (b.kind === "puces") {
            return (
              <div key={i}>
                {b.titre && <div style={{ ...H, fontSize: "13px", marginBottom: "1mm" }}>{b.titre}</div>}
                <ul style={{ margin: 0, paddingLeft: "6mm", fontSize: data.cursive ? "17px" : "14px", lineHeight: 1.6, fontFamily: body }}>
                  {b.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              </div>
            );
          }
          if (b.kind === "exemples") {
            return (
              <div key={i} style={{ borderLeft: `4px solid ${ORANGE}`, paddingLeft: "3mm" }}>
                {b.titre && <div style={{ ...H, fontSize: "12px", marginBottom: "1mm" }}>{b.titre}</div>}
                <ul style={{ margin: 0, paddingLeft: "5mm", fontSize: data.cursive ? "16px" : "13.5px", lineHeight: 1.5, fontFamily: body, color: "#333" }}>
                  {b.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              </div>
            );
          }
          if (b.kind === "pictos") {
            return (
              <div key={i}>
                {b.titre && <div style={{ ...H, fontSize: "13px", marginBottom: "1.5mm" }}>{b.titre}</div>}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "3mm" }}>
                  {b.items.map((it, j) => <Carte key={j} name={it.name} label={it.label} bg="#fff7ed" border="#fed7aa" />)}
                </div>
              </div>
            );
          }
          if (b.kind === "timeline") {
            return (
              <div key={i}>
                {b.titre && <div style={{ ...H, fontSize: "13px", marginBottom: "1.5mm" }}>{b.titre}</div>}
                <div style={{ display: "flex", alignItems: "center", gap: "2mm", flexWrap: "wrap" }}>
                  {b.steps.map((st, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: "2mm" }}>
                      <Carte name={st.name} label={st.label} bg="#f8fafc" border="#cbd5e1" />
                      {j < b.steps.length - 1 && <Picto name="fleche" size={30} title="puis" />}
                    </div>
                  ))}
                </div>
              </div>
            );
          }
          if (b.kind === "paires") {
            return (
              <div key={i}>
                {b.titre && <div style={{ ...H, fontSize: "13px", marginBottom: "1.5mm" }}>{b.titre}</div>}
                <div style={{ display: "flex", flexDirection: "column", gap: "2.5mm" }}>
                  {b.paires.map((pr, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: "3mm" }}>
                      <Carte name={pr.avant.name} label={pr.avant.label} bg="#fdf6ec" border="#e0c9a6" />
                      <Picto name="fleche" size={28} title="devient" />
                      <Carte name={pr.apres.name} label={pr.apres.label} bg="#eff6ff" border="#bfdbfe" />
                    </div>
                  ))}
                </div>
              </div>
            );
          }
          if (b.kind === "base10") {
            return (
              <div key={i} style={{ border: "1px solid #e7e2d8", borderRadius: "8px", padding: "3mm" }}>
                <Base10 centaines={b.centaines} dizaines={b.dizaines} unites={b.unites} legende={b.legende} />
              </div>
            );
          }
          if (b.kind === "exercice") {
            exNo += 1;
            return (
              <div key={i} className="print-avoid-break" style={{ display: "flex", gap: "3mm" }}>
                {b.picto && <div style={{ flexShrink: 0 }}><Picto name={b.picto} size={40} /></div>}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "14px", fontWeight: 700 }}>
                    <span style={H}>{exNo}.</span> {b.consigne}
                    {b.aide && <span style={{ marginLeft: "2mm", fontSize: "11px", fontWeight: 700, color: ORANGE, background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: "999px", padding: "0.3mm 2mm" }}>aide : {b.aide}</span>}
                  </div>
                  {b.items && (
                    <ul style={{ margin: "1mm 0 0", paddingLeft: "6mm", fontSize: "14px", lineHeight: 2 }}>
                      {b.items.map((it, j) => <li key={j}>{it}</li>)}
                    </ul>
                  )}
                  {b.lignes ? <Lignes n={b.lignes} /> : null}
                </div>
              </div>
            );
          }
          return <Lignes key={i} n={b.n} />;
        })}
      </div>
    </div>
  );
}

export function ficheNode(data: FicheData): ReactNode {
  return <FichePedagogiqueA4 data={data} />;
}
