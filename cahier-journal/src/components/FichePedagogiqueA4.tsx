/**
 * Fiche pédagogique imprimable (A4) — générique, illustrée, calibrée CE1-CE2.
 * ----------------------------------------------------------------------
 * Support d'affichage (TBI), trace écrite à coller (option écriture cursive),
 * ou fiche d'exercices différenciée avec une illustration/aide par exercice.
 * Pictogrammes SVG maison (pictos.tsx), zéro image externe. `.fiche-a4` + print.
 */
import type { ReactNode } from "react";
import { Picto } from "./pictos";
import { WikiImage } from "./WikiImage";

export type FicheBloc =
  | { kind: "def"; titre?: string; contenu: string; picto?: string }
  | { kind: "puces"; titre?: string; points: string[] }
  | { kind: "exemples"; titre?: string; points: string[] }
  | { kind: "pictos"; titre?: string; items: { name: string; label: string }[] }
  | { kind: "timeline"; titre?: string; steps: { name: string; label: string }[] }
  | { kind: "paires"; titre?: string; paires: { avant: { name: string; label: string }; apres: { name: string; label: string } }[] }
  | { kind: "exercice"; consigne: string; items?: string[]; lignes?: number; picto?: string; aide?: string; exemple?: string }
  | { kind: "base10"; dizaines: number; unites: number; centaines?: number; legende?: string }
  | { kind: "comparer"; a: number; b: number; signe: "<" | ">" | "="; cdu?: boolean }
  | { kind: "tableau"; titre?: string; entetes: string[]; lignes: string[][] }
  | { kind: "champs"; items: string[] }
  | { kind: "traits"; n: number }
  | { kind: "wiki"; title: string; alt: string; height?: string; legende?: string }
  | { kind: "pagebreak"; label?: string }
  | { kind: "lignes"; n: number };

export interface FicheData {
  entete: string;
  titre: string;
  niveau?: string;
  discipline?: string;
  /** true = corps de leçon en écriture cursive (police Borel). */
  cursive?: boolean;
  /** Colonne « Je sais… » à droite (auto-évaluation), une entrée par exercice.
   *  Réservée aux fiches d'exercices (modèle authentique CE1-CE2). */
  competences?: string[];
  blocs: FicheBloc[];
}

// Chrome des fiches en ENCRE NOIRE (plus d'orange « IA »). Les couleurs vives
// restent réservées aux illustrations et au matériel pédagogique (base 10…).
const ORANGE = "#1f2937";
const H: React.CSSProperties = { color: ORANGE, fontWeight: 800 };
const line: React.CSSProperties = { borderBottom: "1.5px solid #9aa4ad", height: "9mm" };

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

/** Carte-nombre pour la comparaison : le nombre en grand, avec option c/d/u colorés. */
function CarteNombre({ n, cdu }: { n: number; cdu?: boolean }) {
  const s = String(n).padStart(cdu ? 3 : String(n).length, "0");
  const chiffres = s.split("");
  const start = chiffres.length - 3; // colorer les 3 derniers rangs c·d·u
  const couleur = (posFromRight: number) => (posFromRight === 2 ? "#2563eb" : posFromRight === 1 ? "#c9481f" : "#16a34a");
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5mm", minWidth: "26mm" }}>
      {cdu ? (
        <div style={{ display: "flex", gap: "1.5mm" }}>
          {chiffres.map((c, i) => {
            const posFromRight = chiffres.length - 1 - i;
            const on = i >= start && posFromRight <= 2;
            return (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "9mm", height: "12mm", fontSize: "28px", fontWeight: 900, color: on ? "#fff" : "#111", background: on ? couleur(posFromRight) : "#fff", border: "1.5px solid #cbd5e1", borderRadius: "4px" }}>{c}</span>
            );
          })}
        </div>
      ) : (
        <span style={{ fontSize: "34px", fontWeight: 900, color: "#111" }}>{n}</span>
      )}
      {cdu && <span style={{ fontSize: "10px", color: "#64748b", letterSpacing: "0.35em" }}>c d u</span>}
    </div>
  );
}

function Carte({ name, label, bg, border }: { name: string; label: string; bg: string; border: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5mm", background: bg, border: `1.5px solid ${border}`, borderRadius: "10px", padding: "3mm 2.5mm", minWidth: "26mm" }}>
      <div style={{ display: "grid", placeItems: "center", width: "18mm", height: "18mm", borderRadius: "50%", background: "#ffffff", border: `1.5px solid ${border}` }}>
        <Picto name={name} size={56} title={label} />
      </div>
      <span style={{ fontSize: "13px", fontWeight: 600, textAlign: "center", color: "#334155", lineHeight: 1.2 }}>{label}</span>
    </div>
  );
}

export function FichePedagogiqueA4({ data }: { data: FicheData }) {
  const body = data.cursive ? "'Borel','Nunito',cursive" : "'Lexend','Nunito',system-ui,sans-serif";
  // En écriture cursive (Borel, liée) il faut de plus grandes lettres et plus
  // d'interligne pour que ce soit vraiment lisible par des CE1-CE2.
  const cur = !!data.cursive;
  const lh = cur ? 1.9 : 1.55;
  const isExo = data.entete.toLowerCase().includes("exercice") || data.entete.toLowerCase().includes("autonomie") || data.entete.toLowerCase().includes("distribuer");
  let exNo = 0;
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", padding: "7mm", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
     <div style={{ border: "2.5px solid #111", borderRadius: "2mm", padding: "6mm 7mm", minHeight: "283mm", boxSizing: "border-box" }}>
      {/* En-tête simple, façon manuel : titre manuscrit + prénom, un filet fin. */}
      <div style={{ borderBottom: "1.5px solid #111", paddingBottom: "2mm", marginBottom: "4mm", display: "flex", alignItems: "baseline", gap: "3mm" }}>
        <h1 style={{ fontSize: "27px", margin: 0, fontWeight: 700, fontFamily: "'Caveat','Comic Neue',cursive" }}>{data.titre}</h1>
        {data.niveau && <span style={{ fontSize: "14px", fontWeight: 700, color: "#333", fontFamily: "'Caveat','Comic Neue',cursive" }}>· {data.niveau}</span>}
        {isExo && <div style={{ marginLeft: "auto", fontSize: "13px" }}>Prénom : <span style={{ display: "inline-block", width: "42mm", borderBottom: "1px solid #333" }} /></div>}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "4mm" }}>
        {data.blocs.map((b, i) => {
          if (b.kind === "def") {
            return (
              <div key={i} style={{ display: "flex", gap: "3mm", alignItems: "center", background: "#f6f8f4", border: "1.5px solid #dfe6d8", borderRadius: "8px", padding: "3mm 4mm" }}>
                {b.picto && <div style={{ flexShrink: 0 }}><Picto name={b.picto} size={cur ? 64 : 52} /></div>}
                <div>
                  {b.titre && <div style={{ ...H, fontSize: "14px", marginBottom: "1mm" }}>{b.titre}</div>}
                  <div style={{ fontSize: cur ? "22px" : "14.5px", lineHeight: lh, fontFamily: body }}>{b.contenu}</div>
                </div>
              </div>
            );
          }
          if (b.kind === "puces") {
            return (
              <div key={i}>
                {b.titre && <div style={{ ...H, fontSize: "13px", marginBottom: "1mm" }}>{b.titre}</div>}
                <ul style={{ margin: 0, paddingLeft: "6mm", fontSize: cur ? "20px" : "14px", lineHeight: cur ? 1.8 : 1.6, fontFamily: body }}>
                  {b.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              </div>
            );
          }
          if (b.kind === "exemples") {
            return (
              <div key={i} style={{ borderLeft: `4px solid ${ORANGE}`, paddingLeft: "3mm" }}>
                {b.titre && <div style={{ ...H, fontSize: "12px", marginBottom: "1mm" }}>{b.titre}</div>}
                <ul style={{ margin: 0, paddingLeft: "5mm", fontSize: cur ? "19px" : "13.5px", lineHeight: cur ? 1.75 : 1.5, fontFamily: body, color: "#333" }}>
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
          if (b.kind === "champs") {
            return (
              <div key={i} style={{ display: "flex", flexWrap: "wrap", gap: "6mm" }}>
                {b.items.map((label, j) => (
                  <div key={j} style={{ fontSize: "14px", fontWeight: 700 }}>
                    {label} : <span style={{ display: "inline-block", minWidth: "45mm", borderBottom: "1.5px solid #94a3b8" }}>&nbsp;</span>
                  </div>
                ))}
              </div>
            );
          }
          if (b.kind === "wiki") {
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "3mm" }}>
                <div style={{ width: "34mm", flexShrink: 0 }}>
                  <WikiImage title={b.title} alt={b.alt} accent="#16a34a" height={b.height ?? "26mm"} />
                </div>
                {b.legende && <div style={{ fontSize: "14px", color: "#333", fontStyle: "italic" }}>{b.legende}</div>}
              </div>
            );
          }
          if (b.kind === "traits") {
            return (
              <div key={i} style={{ border: "1.5px solid #94a3b8", borderRadius: "8px", padding: "4mm", display: "flex", flexWrap: "wrap", gap: "3mm 5mm" }}>
                {Array.from({ length: b.n }).map((_, k) => (
                  <span key={k} style={{ display: "inline-block", width: "3mm", height: "12mm", borderLeft: "2px solid #1c1917" }} />
                ))}
              </div>
            );
          }
          if (b.kind === "pagebreak") {
            // Séparateur visible + grande marge blanche : l'élève voit la fin de
            // la page 1, et la pagination PDF (coupe sur ligne blanche) tombe ici.
            return (
              <div key={i} className="fiche-pagebreak" style={{ margin: "6mm 0 2mm", textAlign: "center", breakBefore: "page" as React.CSSProperties["breakBefore"] }}>
                <div style={{ borderTop: "2px dashed #94a3b8", position: "relative", height: 0 }}>
                  <span style={{ position: "absolute", left: "50%", top: "-3mm", transform: "translateX(-50%)", background: "#fff", padding: "0 3mm", fontSize: "12px", fontWeight: 800, color: "#64748b", letterSpacing: "0.06em" }}>
                    ✂ — — — {b.label ?? "PAGE 2"} — — —
                  </span>
                </div>
                <div style={{ height: "6mm" }} />
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
          if (b.kind === "tableau") {
            return (
              <div key={i}>
                {b.titre && <div style={{ ...H, fontSize: "13px", marginBottom: "1.5mm" }}>{b.titre}</div>}
                <table style={{ borderCollapse: "collapse", width: "100%", fontSize: cur ? "16.5px" : "13.5px", fontFamily: body }}>
                  <thead>
                    <tr>
                      {b.entetes.map((h, j) => (
                        <th key={j} style={{ border: "1px solid #cbd5e1", background: "#f6f8f4", color: ORANGE, fontWeight: 800, padding: "2mm 2.5mm", textAlign: "left" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.lignes.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => (
                          <td key={c} style={{ border: "1px solid #cbd5e1", padding: "2mm 2.5mm", fontWeight: c === 0 ? 700 : 400, background: c === 0 ? "#fafaf9" : "#fff" }}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
          if (b.kind === "comparer") {
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6mm", border: "1.5px solid #dfe6d8", background: "#f6f8f4", borderRadius: "10px", padding: "4mm" }}>
                <CarteNombre n={b.a} cdu={b.cdu} />
                <span style={{ fontSize: "44px", fontWeight: 900, color: ORANGE, lineHeight: 1 }}>{b.signe}</span>
                <CarteNombre n={b.b} cdu={b.cdu} />
              </div>
            );
          }
          if (b.kind === "exercice") {
            exNo += 1;
            return (
              <div key={i} className="print-avoid-break" style={{ display: "flex", gap: "3mm" }}>
                {b.picto && <div style={{ flexShrink: 0 }}><Picto name={b.picto} size={40} /></div>}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "15px", fontWeight: 700 }}>
                    <span style={{ fontWeight: 800 }}>{exNo}.</span>{" "}
                    <span style={{ textDecoration: "underline", textUnderlineOffset: "2px" }}>{b.consigne}</span>
                    {b.aide && <span style={{ marginLeft: "2mm", fontSize: "11px", fontWeight: 700, color: "#444", background: "#f1f3f5", border: "1px solid #ced4da", borderRadius: "999px", padding: "0.3mm 2mm" }}>aide : {b.aide}</span>}
                  </div>
                  {b.exemple && (
                    <div style={{ margin: "1mm 0 0", display: "flex", width: "fit-content", maxWidth: "100%", alignItems: "center", gap: "2mm", background: "#eef6ee", border: "1px solid #cfe3cf", borderRadius: "6px", padding: "1mm 3mm" }}>
                      <span style={{ fontSize: "11px", fontWeight: 800, color: "#2f6b34", textTransform: "uppercase", letterSpacing: "0.04em" }}>Exemple</span>
                      <span style={{ fontFamily: "'Caveat','Comic Neue',cursive", fontSize: "20px", color: "#1c4a20" }}>{b.exemple}</span>
                    </div>
                  )}
                  {b.items && (
                    <ul style={{ margin: "1.5mm 0 0", paddingLeft: "7mm", fontSize: "21px", lineHeight: 1.9, fontFamily: "'Caveat','Comic Neue',cursive", color: "#222" }}>
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
    </div>
  );
}

export function ficheNode(data: FicheData): ReactNode {
  return <FichePedagogiqueA4 data={data} />;
}
