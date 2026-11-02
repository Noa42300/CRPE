/**
 * Maths — « La multiplication dans diverses situations » : fiche d'exercices au
 * FORMAT FICHIER (type manuel), demandé par l'enseignant. Police ronde,
 * consignes à verbe en gras, numéros entourés, bandeaux de section, dessins de
 * groupes, « barre l'intrus », tableau à compléter, « colorie le bon calcul »,
 * problèmes variés, défi.
 */
import { FicheModele, SectionBar, Exo, Choix, ListeIntrus, Defi, MODELE_FONT } from "./ficheModele";

const MA = "#0e7490";

/* Un groupe de n jetons dans une case (dessin simple, imprimable). */
function Groupe({ n }: { n: number }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "2px", border: `2px solid ${MA}`, borderRadius: "2mm", padding: "2px 4px", margin: "0 2px", verticalAlign: "middle" }}>
      {Array.from({ length: n }).map((_, i) => <span key={i} style={{ width: 9, height: 9, borderRadius: "50%", background: MA, display: "inline-block" }} />)}
    </span>
  );
}
function GroupesRow({ m, n }: { m: number; n: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "2mm", margin: "1mm 0" }}>
      {Array.from({ length: m }).map((_, i) => <Groupe key={i} n={n} />)}
      <span style={{ fontSize: "15px", fontWeight: 700, marginLeft: "2mm" }}>…… × …… = ……</span>
    </div>
  );
}

function CelluleVide() { return <td style={{ border: "1.5px solid #333", height: "8mm", textAlign: "center", fontSize: "13px", fontWeight: 700 }} />; }

export function FicheModeleMaths() {
  return (
    <FicheModele matiere="Calcul" titre="La multiplication" couleur={MA} dotActif={1} page="La multiplication">
      <SectionBar couleur={MA}>Comprendre la multiplication</SectionBar>

      <Exo n={1} couleur={MA} consigne={<><b>Écris</b> la multiplication qui correspond à chaque dessin.</>}>
        <GroupesRow m={3} n={2} />
        <GroupesRow m={4} n={5} />
        <GroupesRow m={2} n={6} />
      </Exo>

      <Exo n={2} couleur={MA} consigne={<><b>Barre</b> l'écriture qui n'est PAS égale à la multiplication.</>}>
        <div style={{ fontSize: "12px", fontWeight: 700, color: MA }}>4 × 3 =</div>
        <ListeIntrus mots={["3 + 3 + 3 + 3", "4 + 4 + 4", "3 × 4", "4 + 3"]} />
        <div style={{ fontSize: "12px", fontWeight: 700, color: MA }}>2 × 5 =</div>
        <ListeIntrus mots={["5 + 5", "2 + 2 + 2 + 2 + 2", "5 × 2", "2 + 5"]} />
      </Exo>

      <SectionBar couleur={MA}>La multiplication dans diverses situations</SectionBar>

      <Exo n={3} couleur={MA} consigne={<><b>Complète</b> le tableau.</>}>
        <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed", margin: "1mm 0", fontFamily: MODELE_FONT }}>
          <thead>
            <tr>{["Situation", "Addition", "Multiplication", "Résultat"].map((e) => <th key={e} style={{ border: "1.5px solid #333", background: MA, color: "#fff", fontSize: "11px", fontWeight: 800, padding: "1mm" }}>{e}</th>)}</tr>
          </thead>
          <tbody>
            <tr><td style={{ border: "1.5px solid #333", fontSize: "12px", padding: "1mm", textAlign: "center" }}>3 paquets de 4</td><CelluleVide /><CelluleVide /><CelluleVide /></tr>
            <tr><td style={{ border: "1.5px solid #333", fontSize: "12px", padding: "1mm", textAlign: "center" }}>5 sachets de 2</td><CelluleVide /><CelluleVide /><CelluleVide /></tr>
            <tr><td style={{ border: "1.5px solid #333", fontSize: "12px", padding: "1mm", textAlign: "center" }}>4 boîtes de 5</td><CelluleVide /><CelluleVide /><CelluleVide /></tr>
          </tbody>
        </table>
      </Exo>

      <Exo n={4} couleur={MA} consigne={<><b>Colorie</b> le bon calcul dans chaque situation.</>}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5mm", fontSize: "12.5px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "2mm" }}>3 rangées de 4 chaises : <Choix options={["3 × 4", "3 + 4"]} /></div>
          <div style={{ display: "flex", alignItems: "center", gap: "2mm" }}>2 enfants et 5 billes : <Choix options={["2 × 5", "2 + 5"]} /></div>
          <div style={{ display: "flex", alignItems: "center", gap: "2mm" }}>6 œufs dans 1 boîte : <Choix options={["6 × 1", "6 + 1"]} /></div>
        </div>
      </Exo>

      <SectionBar couleur={MA}>Résoudre des problèmes</SectionBar>

      <Exo n={5} couleur={MA} consigne={<><b>Résous</b> chaque problème. Écris la multiplication et la réponse.</>}>
        <div style={{ fontSize: "12.5px", lineHeight: 1.5 }}>
          a) Dans la classe, il y a <b>4 rangées</b> de <b>5 tables</b>. Combien de tables&nbsp;?
          <div style={{ fontWeight: 700, marginTop: "0.5mm" }}>…… × …… = …… tables</div>
          <div style={{ marginTop: "1.5mm" }}>b) Léa achète <b>3 paquets</b> de <b>6 gommes</b>. Combien de gommes&nbsp;?</div>
          <div style={{ fontWeight: 700, marginTop: "0.5mm" }}>…… × …… = …… gommes</div>
        </div>
      </Exo>

      <Defi>Invente un problème qui se résout avec la multiplication <b>5 × 2</b>.</Defi>
    </FicheModele>
  );
}
