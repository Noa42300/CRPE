/**
 * Fiche « séance EPS » mise en page clairement (A4) — pour comprendre et mener
 * la séance d'un coup d'œil : objectif, matériel, les phases avec leur durée et
 * ce qu'on dit/fait, la sécurité, les critères de réussite.
 * Complément de la fiche « terrain » (EpsTerrainSupport). `.fiche-a4` + print.
 */
export interface EpsPhase {
  titre: string;
  duree: string;
  points: string[];
}

export interface EpsSeanceData {
  titre: string;
  sousTitre: string;
  objectif: string;
  materiel: string;
  phases: EpsPhase[];
  securite: string[];
  reussite: string[];
}

export function EpsSeanceFiche({ data }: { data: EpsSeanceData }) {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "2.5px solid #111", borderRadius: "2mm", padding: "6mm 7mm", minHeight: "283mm", boxSizing: "border-box" }}>
        {/* En-tête */}
        <div style={{ borderBottom: "1.5px solid #111", paddingBottom: "2mm", marginBottom: "4mm" }}>
          <h1 style={{ fontSize: "26px", margin: 0, fontWeight: 700, fontFamily: "'Caveat','Comic Neue',cursive" }}>{data.titre}</h1>
          <div style={{ fontSize: "13px", color: "#555", marginTop: "1mm" }}>{data.sousTitre}</div>
        </div>

        {/* Objectif + matériel */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4mm", marginBottom: "5mm" }}>
          <div style={{ background: "#f6f8f4", border: "1.5px solid #dfe6d8", borderRadius: "8px", padding: "3mm 4mm" }}>
            <div style={{ fontWeight: 800, fontSize: "13px", marginBottom: "1mm" }}>🎯 Objectif</div>
            <div style={{ fontSize: "14px", lineHeight: 1.45 }}>{data.objectif}</div>
          </div>
          <div style={{ border: "1.5px solid #cbd5e1", borderRadius: "8px", padding: "3mm 4mm" }}>
            <div style={{ fontWeight: 800, fontSize: "13px", marginBottom: "1mm" }}>🎒 Matériel</div>
            <div style={{ fontSize: "14px", lineHeight: 1.45 }}>{data.materiel}</div>
          </div>
        </div>

        {/* Déroulement en phases numérotées */}
        <div style={{ fontWeight: 800, fontSize: "15px", marginBottom: "2mm" }}>Le déroulement, étape par étape</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "3mm", marginBottom: "5mm" }}>
          {data.phases.map((p, i) => (
            <div key={i} style={{ display: "flex", gap: "3mm", border: "1.5px solid #111", borderRadius: "8px", overflow: "hidden" }}>
              <div style={{ flexShrink: 0, width: "12mm", background: "#111", color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2mm 0" }}>
                <span style={{ fontSize: "22px", fontWeight: 800, fontFamily: "'Caveat','Comic Neue',cursive" }}>{i + 1}</span>
              </div>
              <div style={{ flex: 1, padding: "2.5mm 3mm" }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "3mm" }}>
                  <span style={{ fontWeight: 800, fontSize: "14.5px" }}>{p.titre}</span>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: "#fff", background: "#475569", borderRadius: "999px", padding: "0.5mm 3mm", whiteSpace: "nowrap" }}>⏱ {p.duree}</span>
                </div>
                <ul style={{ margin: "1.5mm 0 0", paddingLeft: "5mm", fontSize: "13.5px", lineHeight: 1.5 }}>
                  {p.points.map((pt, j) => <li key={j}>{pt}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Sécurité + réussite */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4mm" }}>
          <div style={{ border: "1.5px solid #e0b3a2", background: "#fdf3ef", borderRadius: "8px", padding: "3mm 4mm" }}>
            <div style={{ fontWeight: 800, fontSize: "13px", marginBottom: "1mm" }}>🦺 Sécurité</div>
            <ul style={{ margin: 0, paddingLeft: "5mm", fontSize: "13px", lineHeight: 1.5 }}>
              {data.securite.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
          <div style={{ border: "1.5px solid #bcd9c3", background: "#f1f8f2", borderRadius: "8px", padding: "3mm 4mm" }}>
            <div style={{ fontWeight: 800, fontSize: "13px", marginBottom: "1mm" }}>✅ J'ai réussi si…</div>
            <ul style={{ margin: 0, paddingLeft: "5mm", fontSize: "13px", lineHeight: 1.5 }}>
              {data.reussite.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Séance 3 (lundi 14) — Découverte : courir vite. */
export const EPS_COURIR_VITE_S3: EpsSeanceData = {
  titre: "EPS — Séance 3 : courir vite",
  sousTitre: "Athlétisme · Période 1 · Découverte (courir vite) · lundi 14 septembre · classe entière",
  objectif: "Réagir vite à un signal et courir vite, tout droit, jusqu'au bout de la ligne.",
  materiel: "3-4 couloirs de ≈ 25 m délimités par des plots ; un plot placé 2 m APRÈS l'arrivée ; sifflet ou cartons de couleur ; (fiche terrain à part).",
  phases: [
    {
      titre: "Mise en train",
      duree: "10 min",
      points: [
        "Je réveille le corps : trottiner, tourner les bras, monter les genoux.",
        "On revoit le signal d'arrêt : au signal, tout le monde s'arrête net.",
        "On teste le signal une fois pour de vrai.",
        "J'annonce le but du jour : « aujourd'hui, on apprend à courir VITE ».",
      ],
    },
    {
      titre: "Jeux de réaction — « les sorciers »",
      duree: "12 min",
      points: [
        "Au signal, on part le plus vite possible.",
        "On part de positions différentes : debout, assis, dos tourné.",
        "On écoute BIEN le signal : celui qui part trop tôt revient au départ.",
        "On court tout droit jusqu'à la ligne.",
      ],
    },
    {
      titre: "Sprints par vagues",
      duree: "13 min",
      points: [
        "Par vagues de 3-4, chacun sprinte dans son couloir.",
        "On court jusqu'au bout, on ralentit APRÈS la ligne (jusqu'au plot).",
        "Rôles qui tournent : un starter, un juge d'arrivée.",
        "On encourage les copains qui courent.",
      ],
    },
    {
      titre: "Retour au calme & bilan",
      duree: "7 min",
      points: [
        "On marche pour récupérer, on respire doucement.",
        "« Qu'est-ce qui t'a aidé à partir vite ? »",
        "« Qu'est-ce que tu veux améliorer la prochaine fois ? »",
        "On range le matériel tous ensemble.",
      ],
    },
  ],
  securite: [
    "Couloirs bien séparés, sol dégagé, plots visibles.",
    "Un seul signal de départ, un seul signal d'arrêt.",
    "On ne coupe pas dans le couloir du voisin.",
    "Échauffement complet avant les sprints.",
  ],
  reussite: [
    "Je pars au signal (pas avant).",
    "Je cours vite et tout droit.",
    "Je ralentis seulement après la ligne d'arrivée.",
  ],
};

/* Lundi 21 — Courir longtemps « les petits carrés » (matériel minimal). */
export const EPS_COURIR_CARRES_L21: EpsSeanceData = {
  titre: "EPS — Courir longtemps : les petits carrés",
  sousTitre: "Athlétisme · Période 1 · Découverte du jeu des carrés · lundi 21 septembre · classe entière",
  objectif: "Courir le plus longtemps possible SANS s'arrêter et sans marcher, en gérant son allure sur une grande boucle.",
  materiel: "Une grande boucle balisée par 4 plots (≈ 100 m). Pour chaque élève : une petite réserve de carrés de papier JAUNES et BLEUS + une enveloppe (ou un gobelet) à son prénom. C'est TOUT — pas d'autre matériel.",
  phases: [
    {
      titre: "J'explique le jeu des carrés",
      duree: "8 min",
      points: [
        "« Aujourd'hui, on court longtemps, et on va compter avec des petits carrés de couleur. »",
        "« À chaque tour de la boucle, vous prenez un carré : BLEU si vous avez couru tout le tour sans vous arrêter. »",
        "« JAUNE si vous avez marché pendant le tour, même un tout petit peu. »",
        "« On glisse son carré dans son enveloppe à chaque passage devant moi. »",
        "« Le but, c'est d'avoir le plus de carrés BLEUS possible : courir sans s'arrêter. »",
        "« On court à son rythme, on n'est pas obligé d'aller vite : on veut aller LONGTEMPS. »",
      ],
    },
    {
      titre: "Échauffement",
      duree: "8 min",
      points: [
        "« On réveille le corps : on trottine tranquillement un tour, tous ensemble. »",
        "« On tourne les bras, on monte les genoux, on souffle. »",
        "« On respire par le nez : si je peux parler en courant, mon allure est bonne. »",
        "« On repère bien le sens de la boucle : toujours dans le même sens. »",
        "(J'observe qui part déjà trop vite pour le rappeler avant le départ.)",
      ],
    },
    {
      titre: "La course des carrés",
      duree: "18 min",
      points: [
        "« Au signal, on part doucement, tous dans le même sens. »",
        "« À chaque tour, vous passez devant moi et vous prenez votre carré : bleu si vous n'avez pas marché, jaune si vous avez marché. »",
        "« On reste honnête : c'est TON carré, tu sais si tu as couru tout le tour. »",
        "« Si tu es fatigué, ralentis mais essaie de ne pas t'arrêter : garde un petit trot. »",
        "« On continue jusqu'au signal de fin. »",
        "(Je me place au point de passage, je distribue les carrés et j'encourage.)",
      ],
    },
    {
      titre: "On compte et on range",
      duree: "8 min",
      points: [
        "« Videz votre enveloppe : comptez vos carrés bleus, puis vos carrés jaunes. »",
        "« Combien de tours en tout ? Combien sans t'arrêter ? »",
        "« On note son score dans sa tête : la prochaine fois, on essaiera d'avoir plus de bleus. »",
        "« Qu'est-ce qui aide à ne pas s'arrêter ? … partir doucement, respirer, garder le même rythme. »",
        "« On ramasse tous les carrés par terre, on range les enveloppes. »",
      ],
    },
  ],
  securite: [
    "Boucle plate et dégagée, plots bien visibles, un seul sens de course.",
    "Départ échelonné pour éviter les bousculades au point de passage.",
    "Droit de ralentir ou de marcher (carré jaune) : personne ne se met en danger.",
    "Gourde d'eau à disposition, lacets serrés avant de partir.",
  ],
  reussite: [
    "Je cours à mon rythme sans m'arrêter.",
    "Je gagne des carrés BLEUS (tours courus sans marcher).",
    "Je sais dire combien de tours j'ai faits.",
  ],
};

/* Mardi 22 — Consolidation : battre son record de carrés bleus. */
export const EPS_COURIR_CARRES_M22: EpsSeanceData = {
  ...EPS_COURIR_CARRES_L21,
  titre: "EPS — Courir longtemps : je bats mon record de carrés bleus",
  sousTitre: "Athlétisme · Période 1 · Consolidation (les carrés) · mardi 22 septembre · classe entière",
  objectif: "Tenir une allure RÉGULIÈRE pour gagner plus de carrés bleus que la dernière fois (courir sans s'arrêter, plus longtemps).",
  phases: [
    {
      titre: "On se rappelle le jeu",
      duree: "6 min",
      points: [
        "« On rejoue au jeu des carrés : bleu = j'ai couru le tour sans m'arrêter, jaune = j'ai marché. »",
        "« Aujourd'hui, le défi : avoir PLUS de carrés bleus que la dernière fois. »",
        "« Le secret, ce n'est pas d'aller vite : c'est de partir doucement et de garder le même rythme. »",
        "« Si je peux parler en courant, mon allure est bonne. »",
        "« On se souvient de son score de lundi ? On essaie de faire mieux. »",
      ],
    },
    {
      titre: "Échauffement",
      duree: "7 min",
      points: [
        "« On trottine un tour tranquille, tous ensemble. »",
        "« On mobilise : bras, genoux, chevilles ; on souffle bien. »",
        "« On teste une allure « parler » : je cours et je récite les jours de la semaine. »",
        "« On repère le sens de la boucle. »",
        "(Je repère les élèves partis trop vite lundi pour les cadrer au départ.)",
      ],
    },
    {
      titre: "La course des carrés (plus longue)",
      duree: "20 min",
      points: [
        "« Au signal, on part DOUCEMENT : on garde des forces pour tenir longtemps. »",
        "« À chaque tour, je prends mon carré : bleu si je n'ai pas marché, jaune sinon. »",
        "« Objectif : enchaîner les bleus, ne pas s'arrêter. »",
        "« Fatigué ? Je ralentis en petit trot plutôt que de marcher. »",
        "« On tient jusqu'au signal de fin. »",
        "(Je circule, j'encourage ceux qui ralentissent à garder le trot.)",
      ],
    },
    {
      titre: "Bilan : ai-je progressé ?",
      duree: "7 min",
      points: [
        "« Comptez vos carrés bleus, puis les jaunes. »",
        "« Plus de bleus que lundi ? Bravo, tu as progressé ! »",
        "« Qu'est-ce qui t'a aidé à ne pas t'arrêter aujourd'hui ? »",
        "« La prochaine fois, on essaiera de tenir encore un peu plus longtemps. »",
        "« On ramasse tous les carrés et on range les enveloppes. »",
      ],
    },
  ],
  reussite: [
    "Je pars doucement et je garde la même allure.",
    "J'ai plus de carrés bleus que la dernière fois.",
    "Je cours plus longtemps sans m'arrêter.",
  ],
};

/* Mardi 29 — En binôme : le coureur et l'observateur (cartons rouge/bleu).
   Un élève court, son binôme observe : carton ROUGE à chaque tour COURU,
   carton BLEU à chaque tour MARCHÉ. On compte les rouges, puis on inverse. */
export const EPS_COURIR_CARTONS_BINOME: EpsSeanceData = {
  titre: "EPS — Courir longtemps : coureur & observateur (cartons)",
  sousTitre: "Athlétisme · Période 1 · Courir longtemps en binôme · mardi 29 septembre · classe entière",
  objectif: "Courir longtemps sans marcher et tenir le rôle d'observateur : compter les tours de son binôme (carton ROUGE = tour couru, carton BLEU = tour marché).",
  materiel: "Une grande boucle balisée par 4 plots (≈ 100 m). Pour chaque binôme : une réserve de cartons ROUGES et BLEUS + une enveloppe (ou un gobelet) au prénom du coureur. On travaille par deux : un coureur, un observateur. C'est TOUT.",
  phases: [
    {
      titre: "J'explique les deux rôles",
      duree: "8 min",
      points: [
        "« Aujourd'hui, on court par deux : un coureur et un observateur. »",
        "« Le coureur tourne autour de la boucle et essaie de courir sans s'arrêter. »",
        "« L'observateur regarde son binôme : à chaque tour, il pioche un carton ROUGE si son copain a COURU tout le tour, un carton BLEU s'il a MARCHÉ. »",
        "« L'observateur glisse le carton dans l'enveloppe du coureur à chaque passage. »",
        "« Le but du coureur : avoir le plus de cartons ROUGES possible (courir sans s'arrêter). »",
        "(Je forme les binômes et je montre le geste : je cours → carton rouge ; je marche → carton bleu.)",
      ],
    },
    {
      titre: "Échauffement",
      duree: "7 min",
      points: [
        "« On trottine un tour tranquille, tous ensemble. »",
        "« On réveille les articulations : bras, genoux, chevilles ; on souffle bien. »",
        "« On teste l'allure « parler » : je cours et je récite les jours de la semaine. »",
        "« Les observateurs repèrent bien la ligne de passage devant moi. »",
        "(Je rappelle que l'observateur reste honnête et bienveillant avec son binôme.)",
      ],
    },
    {
      titre: "La course (1er coureur)",
      duree: "12 min",
      points: [
        "« Au signal, les coureurs partent DOUCEMENT pour tenir longtemps. »",
        "« Observateurs : à chaque passage, un carton ROUGE si le copain a couru, un carton BLEU s'il a marché. »",
        "« Coureurs, si vous êtes fatigués, ralentissez en petit trot plutôt que de marcher. »",
        "« On tient jusqu'au signal de fin. »",
        "« Observateurs, encouragez votre binôme : « Vas-y, continue, tu tiens ! » »",
        "(Je circule, je vérifie que chaque observateur suit bien SON coureur.)",
      ],
    },
    {
      titre: "On inverse les rôles (2e coureur)",
      duree: "12 min",
      points: [
        "« On échange : l'observateur devient coureur, le coureur devient observateur. »",
        "« Même règle : carton ROUGE = tour couru, carton BLEU = tour marché. »",
        "« Nouveaux coureurs, souvenez-vous : on part doucement, on garde le même rythme. »",
        "« Observateurs, on compte bien chaque tour, on ne triche pas. »",
        "« On tient jusqu'au signal. »",
        "(Je veille à ce que tout le monde ait bien couru une fois.)",
      ],
    },
    {
      titre: "Bilan à deux",
      duree: "6 min",
      points: [
        "« Chaque coureur vide son enveloppe : on compte les cartons ROUGES, puis les BLEUS. »",
        "« Qui a beaucoup de rouges ? Bravo, tu as couru longtemps sans t'arrêter ! »",
        "« On dit un merci à son observateur : c'est grâce à lui qu'on connaît son score. »",
        "« La prochaine fois, on essaiera d'avoir encore plus de rouges. »",
        "« On ramasse tous les cartons et on range les enveloppes. »",
      ],
    },
  ],
  securite: [
    "Boucle dégagée, balisée par 4 plots ; sens de course unique pour éviter les chocs.",
    "Droit de ralentir ou de marcher (carton bleu) : personne ne se met en danger.",
    "Observateur placé au bord de la boucle, jamais sur le passage des coureurs.",
    "Une gorgée d'eau au bilan ; on repère les élèves essoufflés.",
  ],
  reussite: [
    "Coureur : je gagne des cartons ROUGES (tours courus sans marcher).",
    "Coureur : je pars doucement et je garde la même allure.",
    "Observateur : je suis bien mon binôme et je compte juste chaque tour.",
  ],
};
