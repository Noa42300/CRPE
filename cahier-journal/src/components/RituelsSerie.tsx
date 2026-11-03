/**
 * Rituels du matin À IMPRIMER — TOUTE LA PÉRIODE 2 (lundis & mardis,
 * 3 nov → 15 déc 2026), calés sur les notions :
 *   ① Français — les types de phrases (dire le type + mettre le bon point)
 *   ② Maths — un PROBLÈME (surtout multiplication, parfois addition, et le
 *      vocabulaire « de plus / de moins / il reste »).
 * Présentation du problème demandée par l'enseignant : le mot « Problème »
 * centré en haut, souligné en ROUGE, en écriture cursive ; les élèves
 * RECOPIENT l'énoncé sur leur cahier SANS la question, puis cherchent.
 * Une carte « rituel du jour » × 4 par A4 à découper. Une page par jour.
 * (≠ RituelsMatin.tsx, qui est la VUE projetable des rituels de P1.)
 */
import { CONSIGNE_FONT } from "./FichePedagogiqueA4";
import { JOURS_P2, type ProblemeP2 } from "../lib/ritualsP2";

const FR = "#1d4ed8";
const ROUGE = "#dc2626";
const CURSIVE = "'Caveat','Comic Neue',cursive";

function Carte({ label, phrase, probleme }: { label: string; phrase: string; probleme: ProblemeP2 }) {
  return (
    <div style={{ flex: 1, border: "2px solid #111", borderRadius: "2mm", margin: "0 0 3mm", padding: "2mm 4mm", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "1.5mm" }}>
      <div style={{ fontSize: "9.5px", fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.04em", fontFamily: CONSIGNE_FONT }}>Rituel du matin — {label}</div>

      {/* ① Français */}
      <div>
        <div style={{ fontSize: "10px", fontWeight: 800, color: FR, fontFamily: CONSIGNE_FONT }}>① Français — les types de phrases</div>
        <div style={{ fontSize: "15px", fontFamily: CURSIVE }}>« {phrase} ___ »</div>
        <div style={{ fontSize: "10px", fontFamily: CONSIGNE_FONT }}>Type : ..................... &nbsp; Point : ....</div>
      </div>

      {/* ② Problème — « Problème » centré, souligné rouge, cursive */}
      <div>
        <div style={{ textAlign: "center", margin: "0.5mm 0 1mm" }}>
          <span style={{ fontFamily: CURSIVE, fontSize: "18px", color: ROUGE, borderBottom: `2px solid ${ROUGE}`, paddingBottom: "0.3mm", lineHeight: 1 }}>Problème</span>
        </div>
        <div style={{ fontSize: "12.5px", fontWeight: 600, fontFamily: CONSIGNE_FONT, lineHeight: 1.25 }}>{probleme.enonce}</div>
        <div style={{ fontSize: "9.5px", fontStyle: "italic", color: "#64748b", fontFamily: CONSIGNE_FONT, marginTop: "0.5mm" }}>Question (je ne la recopie pas) : {probleme.question}</div>
        <div style={{ fontSize: "8.5px", color: "#94a3b8", fontFamily: CONSIGNE_FONT, marginTop: "0.5mm" }}>➜ Je recopie l'énoncé sur mon cahier, puis je cherche.</div>
      </div>
    </div>
  );
}

function PageJour({ label, phrase, probleme }: { label: string; phrase: string; probleme: ProblemeP2 }) {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", padding: "7mm 9mm", height: "297mm", display: "flex", flexDirection: "column", fontFamily: "'Lexend','Nunito',sans-serif" }}>
      {Array.from({ length: 4 }).map((_, i) => <Carte key={i} label={label} phrase={phrase} probleme={probleme} />)}
    </div>
  );
}

export function RituelsMatinSerie() {
  return (
    <div>
      {JOURS_P2.map((j, d) => (
        <div key={j.date}>
          {d > 0 && <div className="fiche-pagebreak" style={{ height: 0 }} />}
          <PageJour label={j.label} phrase={j.phrase} probleme={j.probleme} />
        </div>
      ))}
    </div>
  );
}
