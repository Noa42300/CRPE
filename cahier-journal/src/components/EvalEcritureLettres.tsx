/**
 * Évaluation maths — Écrire / lire les nombres en lettres (CE1 & CE2).
 * Prévue pour ~20 min. Comporte une GRILLE DE COMPÉTENCES façon LSU que
 * l'enseignant remplit lui-même (4 niveaux de maîtrise).
 * « au cas où » : à sortir si l'évaluation n'est pas déjà prête.
 */
import { CONSIGNE_FONT } from "./FichePedagogiqueA4";

const NOIR = "#111";
const CURSIVE = "'Caveat','Comic Neue',cursive";

const NIVEAUX_LSU = ["Très bonne\nmaîtrise", "Maîtrise\nsatisfaisante", "Maîtrise\nfragile", "Maîtrise\ninsuffisante"];

function Exo({ n, consigne, children }: { n: number; consigne: React.ReactNode; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.2mm" }}>
      <div style={{ fontSize: "13.5px", fontWeight: 700, fontFamily: CONSIGNE_FONT }}><span style={{ fontWeight: 800 }}>{n}.</span> <span style={{ textDecoration: "underline", textUnderlineOffset: "2px" }}>{consigne}</span></div>
      <div style={{ marginTop: "0.8mm", paddingLeft: "4mm" }}>{children}</div>
    </div>
  );
}

function GrilleLSU({ competences }: { competences: string[] }) {
  return (
    <div style={{ marginTop: "3mm" }}>
      <div style={{ fontSize: "12px", fontWeight: 800, fontFamily: CONSIGNE_FONT, marginBottom: "1mm", textTransform: "uppercase", letterSpacing: "0.03em" }}>Réservé à l'enseignant — compétences (LSU)</div>
      <table style={{ borderCollapse: "collapse", width: "100%", fontFamily: CONSIGNE_FONT }}>
        <thead>
          <tr>
            <th style={{ border: `1px solid ${NOIR}`, textAlign: "left", padding: "1.5mm", fontSize: "11px", background: "#f1f5f9" }}>Compétence</th>
            {NIVEAUX_LSU.map((n) => <th key={n} style={{ border: `1px solid ${NOIR}`, padding: "1mm", fontSize: "9px", width: "22mm", whiteSpace: "pre-line", background: "#f1f5f9" }}>{n}</th>)}
          </tr>
        </thead>
        <tbody>
          {competences.map((c) => (
            <tr key={c}>
              <td style={{ border: `1px solid ${NOIR}`, padding: "1.5mm", fontSize: "11px" }}>{c}</td>
              {NIVEAUX_LSU.map((n) => <td key={n} style={{ border: `1px solid ${NOIR}`, textAlign: "center" }}><span style={{ display: "inline-block", width: "4mm", height: "4mm", border: `1.4px solid #555`, borderRadius: "50%" }} /></td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EvalFrame({ titre, niveau, children }: { titre: string; niveau: string; children: React.ReactNode }) {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: NOIR, boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: `2.5px solid ${NOIR}`, borderRadius: "2mm", padding: "5mm 6mm", minHeight: "272mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: `2px solid ${NOIR}`, paddingBottom: "1.5mm", marginBottom: "3mm" }}>
          <div><h1 style={{ fontSize: "22px", margin: 0, fontWeight: 700, fontFamily: CURSIVE }}>{titre}</h1><span style={{ fontSize: "12px", fontWeight: 700, fontFamily: CONSIGNE_FONT }}>Évaluation · {niveau} · ~20 min</span></div>
          <span style={{ fontSize: "12px", fontWeight: 700, fontFamily: CONSIGNE_FONT }}>Prénom : .................. &nbsp; Date : ............</span>
        </div>
        <div style={{ flex: 1 }}>{children}</div>
      </div>
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
