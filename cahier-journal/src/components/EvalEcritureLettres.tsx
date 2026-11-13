/**
 * Évaluation maths — Écrire / lire les nombres en lettres (CE1 & CE2).
 * Prévue pour ~20 min. Comporte une GRILLE DE COMPÉTENCES façon LSU que
 * l'enseignant remplit lui-même (4 niveaux de maîtrise).
 * « au cas où » : à sortir si l'évaluation n'est pas déjà prête.
 */
import { CONSIGNE_FONT } from "./FichePedagogiqueA4";

const NOIR = "#111";
const CURSIVE = "'Caveat','Comic Neue',cursive";

const NIVEAUX_LSU: { t: string; bg: string; c: string }[] = [
  { t: "Très bonne\nmaîtrise", bg: "#dcfce7", c: "#15803d" },
  { t: "Maîtrise\nsatisfaisante", bg: "#ecfccb", c: "#4d7c0f" },
  { t: "Maîtrise\nfragile", bg: "#fef3c7", c: "#b45309" },
  { t: "Maîtrise\ninsuffisante", bg: "#fee2e2", c: "#b91c1c" },
];

function Exo({ n, consigne, children }: { n: number; consigne: React.ReactNode; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.2mm" }}>
      <div style={{ fontSize: "13.5px", fontWeight: 700, fontFamily: CONSIGNE_FONT }}><span style={{ fontWeight: 800 }}>{n}.</span> <span style={{ textDecoration: "underline", textUnderlineOffset: "2px" }}>{consigne}</span></div>
      <div style={{ marginTop: "0.8mm", paddingLeft: "4mm" }}>{children}</div>
    </div>
  );
}

export function GrilleLSU({ competences, accent = "#334155" }: { competences: string[]; accent?: string }) {
  return (
    <div style={{ marginTop: "4mm", border: `1.5px solid ${accent}`, borderRadius: "2mm", overflow: "hidden" }}>
      <div style={{ background: accent, color: "#fff", fontSize: "11px", fontWeight: 800, fontFamily: CONSIGNE_FONT, letterSpacing: "0.04em", padding: "1.3mm 3mm" }}>Bilan de compétences — réservé au maître</div>
      <table style={{ borderCollapse: "collapse", width: "100%", fontFamily: CONSIGNE_FONT }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #cbd5e1", textAlign: "left", padding: "1.3mm 3mm", fontSize: "10.5px", background: "#fff", fontWeight: 700 }}>Ce que je sais faire</th>
            {NIVEAUX_LSU.map((n) => <th key={n.t} style={{ border: "1px solid #cbd5e1", padding: "1mm", fontSize: "8.5px", width: "22mm", whiteSpace: "pre-line", background: n.bg, color: n.c, fontWeight: 800 }}>{n.t}</th>)}
          </tr>
        </thead>
        <tbody>
          {competences.map((c, i) => (
            <tr key={c}>
              <td style={{ border: "1px solid #cbd5e1", padding: "1.4mm 3mm", fontSize: "10.5px", background: i % 2 ? "#f8fafc" : "#fff" }}>{c}</td>
              {NIVEAUX_LSU.map((n) => <td key={n.t} style={{ border: "1px solid #cbd5e1", textAlign: "center", background: i % 2 ? "#f8fafc" : "#fff" }}><span style={{ display: "inline-block", width: "4mm", height: "4mm", border: `1.5px solid ${n.c}`, borderRadius: "1px" }} /></td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function EvalFrame({ titre, niveau, duree = "~20 min", competence, accent = "#334155", children }: { titre: string; niveau: string; duree?: string; competence?: string; accent?: string; children: React.ReactNode }) {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: NOIR, boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif", display: "flex", flexDirection: "column" }}>
      {/* En-tête sobre : titre + prénom/date + filet */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderBottom: `2.5px solid ${accent}`, paddingBottom: "1.5mm" }}>
        <div>
          <div style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.14em", color: accent, textTransform: "uppercase", fontFamily: CONSIGNE_FONT }}>Évaluation · {niveau} · {duree}</div>
          <h1 style={{ fontSize: "24px", fontWeight: 800, margin: "0.5mm 0 0", color: "#1f2937" }}>{titre}</h1>
        </div>
        <div style={{ textAlign: "right", fontSize: "12.5px", fontWeight: 700, fontFamily: CONSIGNE_FONT, lineHeight: 1.9 }}>
          Prénom : ...........................<br />Date : ....................
        </div>
      </div>
      {competence && <div style={{ fontSize: "10.5px", fontFamily: CONSIGNE_FONT, color: "#64748b", fontStyle: "italic", margin: "1.5mm 1mm 0" }}>Compétence évaluée : {competence}</div>}
      <div style={{ flex: 1, marginTop: "3.5mm" }}>{children}</div>
    </div>
  );
}

export function EvalLettresCE1() {
  return (
    <EvalFrame titre="Écrire les nombres en lettres" niveau="CE1">
      <Exo n={1} consigne="Écris ces nombres en lettres.">
        <div style={{ fontFamily: CURSIVE, fontSize: "18px", lineHeight: 1.7 }}>
          16 → ...................................... &nbsp; 24 → ......................................<br />
          47 → ...................................... &nbsp; 60 → ......................................<br />
          83 → ...................................... &nbsp; 91 → ......................................
        </div>
      </Exo>
      <Exo n={2} consigne="Écris ces nombres en chiffres.">
        <div style={{ fontFamily: CURSIVE, fontSize: "18px", lineHeight: 1.8 }}>
          treize → ……&nbsp;&nbsp;&nbsp; trente-deux → ……&nbsp;&nbsp;&nbsp; cinquante → ……<br />
          soixante-dix → ……&nbsp;&nbsp;&nbsp; quatre-vingts → ……&nbsp;&nbsp;&nbsp; quatre-vingt-un → ……
        </div>
      </Exo>
      <Exo n={3} consigne="Écris en lettres les nombres que je dicte.">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5mm 8mm", fontFamily: CURSIVE, fontSize: "18px", marginTop: "1.5mm" }}>
          {["a) ..........................", "b) ..........................", "c) ..........................", "d) ..........................", "e) ..........................", "f) .........................."].map((x) => <span key={x}>{x}</span>)}
        </div>
      </Exo>
      <Exo n={4} consigne="Complète : écris le nombre juste avant et juste après.">
        <div style={{ fontFamily: CURSIVE, fontSize: "19px", lineHeight: 1.7 }}>…… · 40 · …… &nbsp;&nbsp;&nbsp;&nbsp; …… · 79 · …… &nbsp;&nbsp;&nbsp;&nbsp; …… · 99 · ……</div>
      </Exo>
      <Exo n={5} consigne="Décompose en dizaines et unités (exemple : 47 = 4 d 7 u).">
        <div style={{ fontFamily: CURSIVE, fontSize: "18px", lineHeight: 1.7 }}>
          36 = …… d …… u &nbsp;&nbsp;&nbsp; 58 = …… d …… u<br />
          70 = …… d …… u &nbsp;&nbsp;&nbsp; 85 = …… d …… u
        </div>
      </Exo>
      <Exo n={6} consigne="Compare avec < , > ou = , puis range du plus petit au plus grand.">
        <div style={{ fontFamily: CURSIVE, fontSize: "19px", lineHeight: 1.7 }}>58 …… 85 &nbsp;&nbsp;&nbsp; 71 …… 17 &nbsp;&nbsp;&nbsp; 60 …… 60</div>
        <div style={{ fontFamily: CURSIVE, fontSize: "19px", marginTop: "1.5mm" }}>58 · 15 · 85 · 51 → ..........................................</div>
      </Exo>
      <GrilleLSU competences={["Écrire en lettres les nombres jusqu'à 100", "Écrire en chiffres un nombre donné en lettres", "Écrire sous la dictée les nombres jusqu'à 100", "Connaître les nombres voisins (avant / après)", "Décomposer un nombre en dizaines et unités", "Comparer et ranger les nombres jusqu'à 100"]} />
    </EvalFrame>
  );
}

export function EvalLettresCE2() {
  return (
    <EvalFrame titre="Les nombres jusqu'à 1 000" niveau="CE2">
      <Exo n={1} consigne="Écris ces nombres en lettres.">
        <div style={{ fontFamily: CURSIVE, fontSize: "18px", lineHeight: 1.5 }}>
          105 → ...................................... &nbsp; 240 → ......................................<br />
          316 → ...................................... &nbsp; 1 000 → ......................................
        </div>
      </Exo>
      <Exo n={2} consigne="Écris ces nombres en chiffres.">
        <div style={{ fontFamily: CURSIVE, fontSize: "18px", lineHeight: 1.6 }}>
          deux cents → ……&nbsp;&nbsp; trois cent quatre-vingts → ……&nbsp;&nbsp; cinq cent douze → ……&nbsp;&nbsp; mille → ……
        </div>
      </Exo>
      <Exo n={3} consigne="Écris en lettres (attention aux pièges : 80, cent, mille !).">
        <div style={{ fontFamily: CURSIVE, fontSize: "18px", lineHeight: 1.5 }}>
          78 → ...................................... &nbsp; 91 → ......................................<br />
          480 → ...................................... &nbsp; 600 → ......................................
        </div>
      </Exo>
      <Exo n={4} consigne="Écris les nombres que je dicte.">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4mm 10mm", fontFamily: CURSIVE, fontSize: "20px", marginTop: "1mm" }}>
          {["a) ……", "b) ……", "c) ……", "d) ……", "e) ……", "f) ……"].map((x) => <span key={x}>{x}</span>)}
        </div>
      </Exo>
      <Exo n={5} consigne="Encadre : écris le nombre juste avant et juste après.">
        <div style={{ fontFamily: CURSIVE, fontSize: "20px", lineHeight: 1.8 }}>…… &lt; 300 &lt; …… &nbsp;&nbsp;&nbsp; …… &lt; 799 &lt; …… &nbsp;&nbsp;&nbsp; …… &lt; 1 000 &lt; ……</div>
      </Exo>
      <Exo n={6} consigne="Décompose (centaines, dizaines, unités).">
        <div style={{ fontFamily: CURSIVE, fontSize: "18px", lineHeight: 1.7 }}>
          456 = …… c …… d …… u &nbsp;&nbsp;&nbsp; 708 = …… c …… d …… u &nbsp;&nbsp;&nbsp; 630 = …… c …… d …… u
        </div>
      </Exo>
      <Exo n={7} consigne="Compare (< , > ou =), puis range du plus petit au plus grand.">
        <div style={{ fontFamily: CURSIVE, fontSize: "19px" }}>648 …… 684 &nbsp;&nbsp; 999 …… 1 000 &nbsp;&nbsp; 705 …… 750</div>
        <div style={{ fontFamily: CURSIVE, fontSize: "19px", marginTop: "1mm" }}>512 · 125 · 251 · 521 → ..........................................</div>
      </Exo>
      <GrilleLSU competences={["Lire et écrire en lettres les nombres jusqu'à 1 000", "Écrire en chiffres un nombre dicté ou donné en lettres", "Maîtriser les nombres particuliers (quatre-vingts, cents, mille)", "Connaître les nombres voisins (encadrer) et décomposer (c/d/u)", "Comparer et ranger les nombres jusqu'à 1 000"]} />
    </EvalFrame>
  );
}
