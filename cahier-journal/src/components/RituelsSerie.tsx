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

const FR = "#1d4ed8";
const ROUGE = "#dc2626";
const CURSIVE = "'Caveat','Comic Neue',cursive";

/* 14 jours de la Période 2 (lundi / mardi). */
const JOURS = [
  "Lundi 2 nov.", "Mardi 3 nov.",
  "Lundi 9 nov.", "Mardi 10 nov.",
  "Lundi 16 nov.", "Mardi 17 nov.",
  "Lundi 23 nov.", "Mardi 24 nov.",
  "Lundi 30 nov.", "Mardi 1er déc.",
  "Lundi 7 déc.", "Mardi 8 déc.",
  "Lundi 14 déc.", "Mardi 15 déc.",
];

const PHRASES = [
  "Le chien court dans le jardin",
  "Où est passé mon stylo",
  "Comme il fait froid ce matin",
  "Range ton cartable",
  "Les élèves lisent en silence",
  "As-tu pris ton goûter",
  "Quelle belle récréation",
  "Ferme la fenêtre, s'il te plaît",
  "Nous partons à la cantine",
  "Est-ce que tu as compris",
  "Quel beau dessin tu as fait",
  "Écoute bien la consigne",
  "Le facteur apporte le courrier",
  "Veux-tu jouer avec moi",
];

/* Problèmes : surtout multiplication (×), quelques additions (+) et des
 * comparaisons (de plus / de moins / il reste). On recopie l'ÉNONCÉ, pas la
 * question. */
const PROBLEMES: { enonce: string; question: string }[] = [
  { enonce: "Dans la classe, il y a 5 tables de 4 élèves.", question: "Combien d'élèves en tout ?" },
  { enonce: "J'ai 3 paquets de 6 gâteaux.", question: "Combien de gâteaux ?" },
  { enonce: "Léo a 24 billes. Il en gagne 13.", question: "Combien de billes a-t-il maintenant ?" },
  { enonce: "Il y a 4 boîtes de 5 crayons.", question: "Combien de crayons ?" },
  { enonce: "Tom a 12 images. Léa a 8 images.", question: "Combien Tom a-t-il d'images de plus que Léa ?" },
  { enonce: "Le jardinier plante 4 rangées de 5 fleurs.", question: "Combien de fleurs ?" },
  { enonce: "6 enfants ont chacun 2 billes.", question: "Combien de billes en tout ?" },
  { enonce: "Dans le car, il y a 18 enfants. 7 enfants montent encore.", question: "Combien d'enfants dans le car ?" },
  { enonce: "Dans 3 cages, il y a 4 oiseaux dans chacune.", question: "Combien d'oiseaux ?" },
  { enonce: "Il y a 13 CE1 et 10 CE2 dans la classe.", question: "Combien y a-t-il de CE1 de plus que de CE2 ?" },
  { enonce: "7 sachets contiennent chacun 2 bonbons.", question: "Combien de bonbons ?" },
  { enonce: "2 étagères portent 8 livres chacune.", question: "Combien de livres ?" },
  { enonce: "J'ai lu 15 pages hier et 12 pages aujourd'hui.", question: "Combien de pages en tout ?" },
  { enonce: "Paul a 25 cartes. Il en donne 9.", question: "Combien de cartes lui reste-t-il ?" },
];

function Carte({ label, phrase, probleme }: { label: string; phrase: string; probleme: { enonce: string; question: string } }) {
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

function PageJour({ label, phrase, probleme }: { label: string; phrase: string; probleme: { enonce: string; question: string } }) {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", padding: "7mm 9mm", height: "297mm", display: "flex", flexDirection: "column", fontFamily: "'Lexend','Nunito',sans-serif" }}>
      {Array.from({ length: 4 }).map((_, i) => <Carte key={i} label={label} phrase={phrase} probleme={probleme} />)}
    </div>
  );
}

export function RituelsMatinSerie() {
  return (
    <div>
      {JOURS.map((label, d) => (
        <div key={d}>
          {d > 0 && <div className="fiche-pagebreak" style={{ height: 0 }} />}
          <PageJour label={label} phrase={PHRASES[d % PHRASES.length]} probleme={PROBLEMES[d % PROBLEMES.length]} />
        </div>
      ))}
    </div>
  );
}
