/**
 * Maths — Fiche de PROBLÈMES (addition et soustraction), CE1 & CE2.
 * Problèmes variés : réunion, retrait, comparaison (de plus / de moins),
 * recherche de l'état initial, et un problème à 2 étapes / monnaie.
 * Un exemple résolu en tête montre comment présenter (calcul + phrase réponse).
 * À donner après l'évaluation de maths (ceux qui ont fini). Une seule A4 par niveau.
 */
import { FicheModele, SectionBar, Exo } from "./ficheModele";

const MA = "#0e7490";
const CURSIVE = "'Caveat','Comic Neue',cursive";
const CONSIGNE_FONT = "'Aptos','Inter','Segoe UI',system-ui,sans-serif";

/* Zone de réponse : « Mon calcul » (lignes) + « Réponse » (phrase). */
function Rep({ calc = 1 }: { calc?: number }) {
  return (
    <div style={{ marginTop: "0.8mm" }}>
      <div style={{ fontSize: "10.5px", fontWeight: 700, color: "#64748b", fontFamily: CONSIGNE_FONT }}>Mon calcul :</div>
      {Array.from({ length: calc }).map((_, i) => <div key={i} style={{ borderBottom: "1.6px dotted #94a3b8", height: "7.5mm" }} />)}
      <div style={{ fontSize: "12px", marginTop: "1mm", fontFamily: CURSIVE }}>Réponse : <span style={{ display: "inline-block", borderBottom: "1.6px dotted #94a3b8", minWidth: "95mm" }}>&nbsp;</span></div>
    </div>
  );
}

/* Exemple résolu (méthode) en tête de fiche. */
function Exemple({ enonce, calcul, reponse }: { enonce: string; calcul: string; reponse: string }) {
  return (
    <div style={{ border: `1.5px solid #cfe3cf`, background: "#eef6ee", borderRadius: "2mm", padding: "2mm 3mm", marginBottom: "1mm" }}>
      <span style={{ fontSize: "10px", fontWeight: 800, color: "#2f6b34", textTransform: "uppercase", letterSpacing: "0.04em" }}>Exemple</span>
      <div style={{ fontFamily: CURSIVE, fontSize: "15px", lineHeight: 1.45, marginTop: "0.5mm" }}>
        {enonce}<br />➜ Calcul : <b>{calcul}</b> &nbsp;&nbsp; ➜ Réponse : <b>{reponse}</b>
      </div>
    </div>
  );
}

export function FicheProblemesCE1() {
  return (
    <FicheModele matiere="Mathématiques" titre="Les problèmes" couleur={MA} dots={4} dotActif={1} page="Addition et soustraction · CE1">
      <SectionBar couleur={MA}>Je lis, je calcule, je réponds par une phrase</SectionBar>
      <Exemple enonce="Marie a 12 fleurs. Elle en cueille 5 de plus." calcul="12 + 5 = 17" reponse="Marie a 17 fleurs." />
      <Exo n={1} couleur={MA} consigne={<>Léa a <b>24</b> billes. Son frère lui en donne <b>13</b>. Combien de billes a-t-elle maintenant ?</>}><Rep /></Exo>
      <Exo n={2} couleur={MA} consigne={<>Dans le bus, il y a <b>30</b> voyageurs. À l'arrêt, <b>12</b> descendent. Combien reste-t-il de voyageurs ?</>}><Rep /></Exo>
      <Exo n={3} couleur={MA} consigne={<>Tom a <b>18</b> images. Jules en a <b>25</b>. Combien Jules a-t-il d'images <b>de plus</b> que Tom ?</>}><Rep /></Exo>
      <Exo n={4} couleur={MA} consigne={<>J'avais des bonbons. J'en ai mangé <b>7</b>, il m'en reste <b>15</b>. Combien avais-je de bonbons au départ ?</>}><Rep /></Exo>
      <Exo n={5} couleur={MA} consigne={<>Au magasin, un cahier coûte <b>4 €</b> et une gomme <b>3 €</b>. Je paie avec un billet de <b>10 €</b>. Combien me rend-on ?</>}><Rep calc={2} /></Exo>
    </FicheModele>
  );
}

export function FicheProblemesCE2() {
  return (
    <FicheModele matiere="Mathématiques" titre="Les problèmes" couleur={MA} dots={4} dotActif={1} page="Addition et soustraction · CE2">
      <SectionBar couleur={MA}>Je lis, je calcule, je réponds par une phrase</SectionBar>
      <Exemple enonce="Un car a 240 places. 125 sont prises." calcul="240 − 125 = 115" reponse="Il reste 115 places libres." />
      <Exo n={1} couleur={MA} consigne={<>La bibliothèque a <b>356</b> livres. On en achète <b>128</b> nouveaux. Combien y a-t-il de livres en tout ?</>}><Rep /></Exo>
      <Exo n={2} couleur={MA} consigne={<>Un stade contient <b>500</b> spectateurs. <b>235</b> sont déjà assis. Combien de places restent libres ?</>}><Rep /></Exo>
      <Exo n={3} couleur={MA} consigne={<>Léo a économisé <b>145 €</b>, sa sœur <b>208 €</b>. Combien sa sœur a-t-elle <b>de plus</b> que Léo ?</>}><Rep /></Exo>
      <Exo n={4} couleur={MA} consigne={<>Un fermier récolte <b>130</b> pommes le matin et <b>95</b> l'après-midi. Il en vend <b>160</b>. Combien lui en reste-t-il ?</>}><Rep calc={2} /></Exo>
      <Exo n={5} couleur={MA} consigne={<>Un livre coûte <b>1 000</b> points. J'ai <b>640</b> points, j'en gagne <b>180</b>. Combien de points me manque-t-il encore ?</>}><Rep calc={2} /></Exo>
    </FicheModele>
  );
}
