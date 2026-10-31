/**
 * Rituels du matin À IMPRIMER (≈ novembre → janvier), calés sur les notions :
 *   ① Français — les types de phrases (dire le type + mettre le bon point)
 *   ② Maths — un problème de « groupes égaux » (addition ou multiplication ?)
 * Une carte « rituel du jour » (les deux) × 4 par A4 à découper et coller. Une
 * page par jour (lundi / mardi) de chaque semaine jusqu'aux vacances de janvier.
 * (≠ RituelsMatin.tsx, qui est la VUE projetable des rituels de P1.)
 */
import { CONSIGNE_FONT } from "./FichePedagogiqueA4";

const FR = "#1d4ed8";
const MA = "#4338ca";
const CURSIVE = "'Caveat','Comic Neue',cursive";

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
];
const PROBLEMES = [
  "Dans la classe, il y a 5 tables de 4 élèves. Combien d'élèves ?",
  "J'ai 3 paquets de 6 gâteaux. Combien de gâteaux ?",
  "Il y a 4 boîtes de 5 crayons. Combien de crayons ?",
  "6 enfants ont chacun 2 billes. Combien de billes ?",
  "2 étagères portent chacune 8 livres. Combien de livres ?",
  "Dans 5 paniers, il y a 3 pommes. Combien de pommes ?",
  "4 joueurs ont chacun 5 cartes. Combien de cartes ?",
  "3 vases contiennent 4 fleurs chacun. Combien de fleurs ?",
  "Il y a 7 sachets de 2 bonbons. Combien de bonbons ?",
  "2 cages abritent chacune 6 oiseaux. Combien d'oiseaux ?",
];

const JOURS: string[] = [];
["Sem. 1", "Sem. 2", "Sem. 3", "Sem. 4", "Sem. 5", "Sem. 6", "Sem. 7", "Sem. 8"].forEach((s) => {
  JOURS.push(`${s} · lundi`, `${s} · mardi`);
});

function Carte({ label, phrase, probleme }: { label: string; phrase: string; probleme: string }) {
  return (
    <div style={{ flex: 1, border: "2px solid #111", borderRadius: "2mm", margin: "0 0 3mm", padding: "2mm 3.5mm", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ fontSize: "9.5px", fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.04em", fontFamily: CONSIGNE_FONT }}>Rituel du matin — {label}</div>
      <div>
        <div style={{ fontSize: "10px", fontWeight: 800, color: FR, fontFamily: CONSIGNE_FONT }}>① Français — les types de phrases</div>
        <div style={{ fontSize: "15px", fontFamily: CURSIVE }}>« {phrase} ___ »</div>
        <div style={{ fontSize: "10px", fontFamily: CONSIGNE_FONT }}>Type : ..................... &nbsp; Point : ....</div>
      </div>
      <div>
        <div style={{ fontSize: "10px", fontWeight: 800, color: MA, fontFamily: CONSIGNE_FONT }}>② Maths — addition ou multiplication ?</div>
        <div style={{ fontSize: "13px", fontWeight: 700, fontFamily: CONSIGNE_FONT, lineHeight: 1.15 }}>{probleme}</div>
        <div style={{ borderBottom: "1.4px dotted #64748b", height: "5.5mm" }} />
        <div style={{ fontSize: "9.5px", fontFamily: CONSIGNE_FONT }}>Réponse : ............................................</div>
      </div>
    </div>
  );
}

function PageJour({ label, phrase, probleme }: { label: string; phrase: string; probleme: string }) {
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
