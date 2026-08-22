# Cahier Journal — application personnelle d'enseignant

Un cahier journal **privé, gratuit, local et hors ligne** pour préparer et
suivre sa classe au quotidien. Pensé pour une classe à **double niveau
CE1-CE2**, mais entièrement personnalisable.

> 🔒 **Confidentialité by design.** Toutes vos données (séances, bilans,
> éventuels noms d'élèves) restent **sur votre appareil**, dans la base
> `IndexedDB` de votre navigateur. **Rien** n'est envoyé sur Internet : aucun
> serveur, aucune API, aucun compte, aucun tracker, aucune publicité, aucune IA.

---

## 1. Installer et lancer

Il faut [Node.js](https://nodejs.org) (version 18 ou plus) installé sur votre
ordinateur.

```bash
cd cahier-journal
npm install        # une seule fois : installe les dépendances
npm run dev        # lance l'application en mode développement
```

Ouvrez ensuite l'adresse affichée (par défaut http://localhost:5173).

### Version « application » (recommandée pour l'usage quotidien)

```bash
npm run build      # compile l'application dans le dossier dist/
npm run preview    # sert la version compilée (http://localhost:4173)
```

Une fois ouverte, l'application est **installable** comme une vraie appli :
dans Chrome/Edge, cliquez sur l'icône d'installation dans la barre d'adresse
(« Installer Cahier Journal »). Elle apparaît alors sur votre bureau / écran
d'accueil et **fonctionne hors ligne**.

Le dossier `dist/` est autonome : vous pouvez l'héberger sur n'importe quel
petit serveur statique local, ou le déposer sur une clé USB.

---

## 2. Ce que permet la V1

- Créer / modifier / dupliquer / supprimer une **journée**
- Naviguer entre les jours (flèches `←` / `→`), par **semaine**, par
  **calendrier**
- Créer et éditer des **créneaux horaires** (horaire, discipline, intitulé)
- Renseigner tout le détail d'une **séance** : objectif, compétence,
  programmation, organisation, rôle de l'enseignant, déroulement en étapes,
  matériel, différenciation, activités de dépassement, bilan, à reprendre,
  devoirs, notes
- **Double niveau CE1 / CE2 / groupe classe** : plusieurs activités dans un
  même créneau, avec badges de niveau
- **Sauvegarde automatique** (indicateur « Enregistrement… / Enregistré »)
- **Recherche** plein texte dans toutes les journées (`Ctrl/Cmd + K`)
- **Impression** d'une journée ou d'une semaine (→ « Enregistrer en PDF »)
- **Export / import** de la sauvegarde (fichier `.json` que vous contrôlez)
- **Mode sombre** (clair / sombre / automatique)
- **Paramètres** : profil, classe, niveaux, disciplines & couleurs, périodes,
  jours travaillés
- **Fonctionnement hors ligne** (PWA)

### Raccourcis clavier

| Raccourci | Action |
|---|---|
| `←` / `→` | Jour précédent / suivant |
| `T` | Revenir à aujourd'hui |
| `Ctrl/Cmd + K` | Recherche |
| `Ctrl/Cmd + S` | Forcer l'enregistrement |

---

## 3. Où sont mes données ? (détails)

- **Stockage** : base `IndexedDB` du navigateur, sur cet appareil uniquement.
- **Réseau** : aucune donnée de contenu ne quitte la machine. Le seul accès
  réseau possible est le téléchargement initial des fichiers de l'application.
- **Vider les données du navigateur** (ou le désinstaller) **efface** vos
  journées → exportez régulièrement une sauvegarde.
- **Changer d'ordinateur** : `Sauvegarde → Exporter`, puis `Importer` sur
  l'autre appareil.
- **Navigation privée** : à éviter pour un usage quotidien (les données peuvent
  être effacées à la fermeture).

La page **Sauvegarde** de l'application rappelle tout cela et gère l'export /
import / réinitialisation.

---

## 4. Architecture du code

```
cahier-journal/
├── index.html
├── src/
│   ├── main.tsx              # point d'entrée
│   ├── App.tsx              # coquille : navigation, raccourcis
│   ├── index.css            # styles globaux + impression
│   ├── lib/                 # logique métier (sans interface)
│   │   ├── types.ts         # modèles de données
│   │   ├── db.ts            # couche IndexedDB
│   │   ├── store.tsx        # état global + autosave
│   │   ├── backup.ts        # export / import
│   │   ├── factory.ts       # création d'objets vides
│   │   ├── dates.ts         # utilitaires de dates
│   │   ├── defaults.ts      # disciplines, couleurs, périodes
│   │   ├── lookup.ts        # correspondances disciplines / niveaux
│   │   └── print.ts         # contrôleur d'impression
│   └── components/          # interface
│       ├── Sidebar.tsx  SaveIndicator.tsx  ui.tsx
│       ├── DayView.tsx  SlotCard.tsx  ActivityEditor.tsx  PrintDay.tsx
│       ├── WeekView.tsx CalendarView.tsx SearchView.tsx
│       └── SettingsView.tsx  BackupView.tsx
└── scripts/make-icons.mjs   # génère les icônes PWA (sans dépendance)
```

**Technos** : Vite + React + TypeScript + Tailwind CSS + IndexedDB. Aucune
dépendance réseau à l'exécution.

---

## 5. Suite prévue (non incluse dans la V1)

Ces fonctionnalités viendront ensuite, une fois la V1 éprouvée en usage réel :

- Modèles de séances / de journées
- Emploi du temps récurrent (« utiliser pour tous les lundis »)
- Statistiques légères (nombre de séances par discipline, à reprendre…)
- Verrouillage par code

Elles ne sont volontairement **pas** affichées dans l'interface tant qu'elles
ne sont pas fonctionnelles.
