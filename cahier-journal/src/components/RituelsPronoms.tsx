/**
 * Rituels du matin À IMPRIMER — lundi 23 & mardi 24 nov (version renforcée) :
 *   ① Français — LA PHRASE DU JOUR sur les PRONOMS PERSONNELS (on les manipule :
 *      remplacer un groupe nominal sujet par un pronom ; CE2 : transformer / accorder).
 *   ② Maths — un PROBLÈME DIFFÉRENCIÉ : un énoncé CE1 (une étape) ET un énoncé
 *      CE2 plus difficile (deux étapes, nombres plus grands).
 * Le mot « Problème » centré, souligné rouge, cursive ; on recopie l'énoncé
 * sans la question, puis on cherche. 2 cartes par A4 à découper, une page par jour.
 */
import { CONSIGNE_FONT } from "./FichePedagogiqueA4";

const FR = "#1d4ed8";
const ROUGE = "#dc2626";
const MA = "#0e7490";
const CURSIVE = "'Caveat','Comic Neue',cursive";

interface RituelJour {
  label: string;
  phrase: React.ReactNode;        // la phrase du jour (groupe à remplacer souligné)
  ce1Fr: React.ReactNode;         // consigne pronoms CE1
  ce2Fr: React.ReactNode;         // consigne pronoms CE2
  probCE1: { enonce: string; question: string };
  probCE2: { enonce: string; question: string };
}

const U = ({ children }: { children: React.ReactNode }) => (
  <span style={{ textDecoration: "underline", textDecorationColor: FR, fontWeight: 700 }}>{children}</span>
);

function Carte({ j }: { j: RituelJour }) {
  return (
    <div style={{ border: "2px solid #111", borderRadius: "2mm", margin: "0 0 5mm", padding: "3mm 5mm", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "2mm" }}>
      <div style={{ fontSize: "10px", fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.04em", fontFamily: CONSIGNE_FONT }}>Rituel du matin — {j.label}</div>

      {/* ① Français — la phrase du jour (pronoms) */}
      <div>
        <div style={{ fontSize: "11px", fontWeight: 800, color: FR, fontFamily: CONSIGNE_FONT }}>① Français — la phrase du jour : les pronoms</div>
        <div style={{ fontSize: "17px", fontFamily: CURSIVE, margin: "0.5mm 0" }}>« {j.phrase} »</div>
        <div style={{ fontSize: "11px", fontFamily: CONSIGNE_FONT, lineHeight: 1.4 }}>
          <b style={{ color: MA }}>CE1 :</b> {j.ce1Fr}<br />
          <b style={{ color: MA }}>CE2 :</b> {j.ce2Fr}
        </div>
      </div>

      {/* ② Problème différencié CE1 / CE2 */}
      <div>
        <div style={{ textAlign: "center", margin: "0.5mm 0 1.5mm" }}>
          <span style={{ fontFamily: CURSIVE, fontSize: "19px", color: ROUGE, borderBottom: `2px solid ${ROUGE}`, paddingBottom: "0.3mm", lineHeight: 1 }}>Problème</span>
        </div>
        <div style={{ display: "flex", gap: "3mm" }}>
          {([["CE1", j.probCE1], ["CE2", j.probCE2]] as const).map(([niv, p]) => (
            <div key={niv} style={{ flex: 1, border: `1.5px solid ${MA}`, borderRadius: "1.5mm", padding: "1.5mm 2.5mm", background: "#f0fdff" }}>
              <div style={{ fontSize: "10px", fontWeight: 800, color: MA, fontFamily: CONSIGNE_FONT }}>{niv}</div>
              <div style={{ fontSize: "12px", fontWeight: 600, fontFamily: CONSIGNE_FONT, lineHeight: 1.3 }}>{p.enonce}</div>
              <div style={{ fontSize: "9.5px", fontStyle: "italic", color: "#64748b", fontFamily: CONSIGNE_FONT, marginTop: "0.5mm" }}>Question (je ne la recopie pas) : {p.question}</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: "9px", color: "#94a3b8", fontFamily: CONSIGNE_FONT, marginTop: "1mm" }}>➜ Je recopie mon énoncé (sans la question), puis je cherche : schéma, calcul, phrase-réponse.</div>
      </div>
    </div>
  );
}

function Page({ j }: { j: RituelJour }) {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", padding: "9mm 10mm", height: "297mm", display: "flex", flexDirection: "column", fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <Carte j={j} />
      <Carte j={j} />
    </div>
  );
}

const LUNDI: RituelJour = {
  label: "lundi 23 novembre",
  phrase: <><U>Timoté et Alia</U> rangent le matériel.</>,
  ce1Fr: <>je remplace « Timoté et Alia » par un pronom (il, elle, ils, elles).</>,
  ce2Fr: <>je récris la phrase en remplaçant le groupe souligné par un pronom.</>,
  probCE1: { enonce: "Le maître range 4 boîtes de 6 feutres.", question: "Combien de feutres range-t-il en tout ? (4 × 6)" },
  probCE2: { enonce: "À la cantine, il y a 8 tables de 6 places. 41 élèves s'installent pour manger.", question: "Combien de places restent libres ? (8 × 6, puis − 41)" },
};

const MARDI: RituelJour = {
  label: "mardi 24 novembre",
  phrase: <><U>Les oiseaux</U> chantent dans l'arbre.</>,
  ce1Fr: <>je remplace « Les oiseaux » par un pronom (il, elle, ils, elles).</>,
  ce2Fr: <>je récris la phrase au singulier (« L'oiseau… ») et j'accorde le verbe.</>,
  probCE1: { enonce: "Dans un sachet, il y a 5 billes. Léo a 5 sachets.", question: "Combien de billes a-t-il en tout ? (5 × 5)" },
  probCE2: { enonce: "Un livre a 96 pages. Léo a lu 48 pages lundi, puis 17 pages mardi.", question: "Combien de pages lui reste-t-il à lire ? (48 + 17, puis 96 − …)" },
};

export function RituelsPronomsLundi() {
  return <Page j={LUNDI} />;
}
export function RituelsPronomsMardi() {
  return <Page j={MARDI} />;
}

/* --- Semaine suivante : lundi 30 nov & mardi 1er déc --- */
const LUNDI2: RituelJour = {
  label: "lundi 30 novembre",
  phrase: <><U>Le maître et les élèves</U> regardent le tableau.</>,
  ce1Fr: <>je remplace « Le maître et les élèves » par un pronom (il, elle, ils, elles).</>,
  ce2Fr: <>je récris la phrase en remplaçant le groupe souligné par un pronom.</>,
  probCE1: { enonce: "Dans la classe, il y a 5 rangées de 4 tables.", question: "Combien de tables en tout ? (5 × 4)" },
  probCE2: { enonce: "Le maître achète 6 paquets de 8 feutres. Il en distribue 37.", question: "Combien de feutres lui reste-t-il ? (6 × 8, puis − 37)" },
};
const MARDI2: RituelJour = {
  label: "mardi 1er décembre",
  phrase: <><U>Les filles</U> jouent à la marelle dans la cour.</>,
  ce1Fr: <>je remplace « Les filles » par un pronom (il, elle, ils, elles).</>,
  ce2Fr: <>je récris la phrase au singulier (« La fille… ») et j'accorde le verbe.</>,
  probCE1: { enonce: "Un paquet contient 6 gâteaux. Papa achète 4 paquets.", question: "Combien de gâteaux en tout ? (6 × 4)" },
  probCE2: { enonce: "Une boîte contient 9 crayons. Le maître a 5 boîtes et en casse 8.", question: "Combien de crayons entiers reste-t-il ? (5 × 9, puis − 8)" },
};
export function RituelsPronomsLundi2() {
  return <Page j={LUNDI2} />;
}
export function RituelsPronomsMardi2() {
  return <Page j={MARDI2} />;
}
