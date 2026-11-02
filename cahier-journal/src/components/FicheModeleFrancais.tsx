/**
 * Français — « Les types de phrases » : fiche d'exercices au FORMAT FICHIER
 * (type « Je m'entraîne »), demandé par l'enseignant. Police ronde, consignes
 * à verbe en gras, numéros entourés, bandeaux de section, tableau à trier,
 * « barre l'intrus », « colorie le bon point », images → phrases, défi.
 */
import { FicheModele, SectionBar, Exo, Tableau, Choix, ListeIntrus, LignesModele, CaseImage, Defi } from "./ficheModele";

const FR = "#1d4ed8";

export function FicheTypesPhrasesModele() {
  return (
    <FicheModele matiere="Grammaire" titre="Les types de phrases" couleur={FR} dotActif={1} page="Les types de phrases">
      <SectionBar couleur={FR}>Reconnaître le type d'une phrase</SectionBar>

      <Exo n={1} couleur={FR} consigne={<><b>Écris</b> la lettre de chaque phrase dans la bonne colonne.</>}>
        <div style={{ fontSize: "12.5px", lineHeight: 1.55, marginBottom: "1mm" }}>
          <b>a.</b> Le chat dort. &nbsp; <b>b.</b> As-tu faim ? &nbsp; <b>c.</b> Quelle belle journée ! &nbsp; <b>d.</b> Ferme la porte. &nbsp; <b>e.</b> Où vas-tu ? &nbsp; <b>f.</b> Range tes affaires.
        </div>
        <Tableau couleur={FR} lignes={2} entetes={["déclarative (.)", "interrogative (?)", "exclamative (!)", "impérative (ordre)"]} />
      </Exo>

      <Exo n={2} couleur={FR} consigne={<><b>Barre</b> l'intrus dans chaque liste (la phrase qui n'est pas du bon type).</>}>
        <div style={{ fontSize: "11px", fontWeight: 700, color: FR, marginBottom: "0.3mm" }}>Que des questions :</div>
        <ListeIntrus mots={["As-tu froid ?", "Où es-tu ?", "Je lis un livre.", "Qui vient ?"]} />
        <div style={{ fontSize: "11px", fontWeight: 700, color: FR, marginBottom: "0.3mm" }}>Que des ordres :</div>
        <ListeIntrus mots={["Écoute bien.", "Range la salle.", "Comme il fait chaud !", "Lève-toi."]} />
      </Exo>

      <SectionBar couleur={FR}>Mettre le bon point</SectionBar>

      <Exo n={3} couleur={FR} consigne={<><b>Complète</b> chaque phrase avec le bon point : . ? !</>}>
        <div style={{ fontSize: "13px", lineHeight: 1.9 }}>
          a) Tu viens avec moi ____ &nbsp;&nbsp; b) Le soleil brille ____<br />
          c) Quel beau dessin ____ &nbsp;&nbsp; d) Ouvre ton cahier ____
        </div>
      </Exo>

      <Exo n={4} couleur={FR} consigne={<><b>Colorie</b> le point qui convient dans chaque phrase.</>}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5mm", fontSize: "13px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "2mm" }}>Comme tu es grand <Choix options={[".", "?", "!"]} /></div>
          <div style={{ display: "flex", alignItems: "center", gap: "2mm" }}>As-tu vu le chien <Choix options={[".", "?", "!"]} /></div>
          <div style={{ display: "flex", alignItems: "center", gap: "2mm" }}>Je mange une pomme <Choix options={[".", "?", "!"]} /></div>
        </div>
      </Exo>

      <SectionBar couleur={FR}>Transformer une phrase</SectionBar>

      <Exo n={5} couleur={FR} consigne={<><b>Transforme</b> chaque phrase déclarative en question. (Exemple : Tu as faim. → As-tu faim ?)</>}>
        <div style={{ fontSize: "13px", marginBottom: "0.5mm" }}>a) Tu aimes les pommes.</div>
        <LignesModele n={1} />
        <div style={{ fontSize: "13px", margin: "1mm 0 0.5mm" }}>b) Le train arrive à l'heure.</div>
        <LignesModele n={1} />
      </Exo>

      <Exo n={6} couleur={FR} consigne={<><b>Écris</b> une phrase qui donne un ordre (impérative) pour chaque image.</>}>
        <div style={{ display: "flex", justifyContent: "center", gap: "4mm", marginTop: "0.5mm" }}>
          <CaseImage>🖐️</CaseImage>
          <CaseImage>🚪</CaseImage>
          <CaseImage>🧹</CaseImage>
        </div>
      </Exo>

      <Defi>Invente une phrase <b>exclamative</b>, puis une phrase <b>impérative</b> sur la récréation.</Defi>
    </FicheModele>
  );
}
