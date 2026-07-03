# 🎓 CRPE avec Noa

Plateforme web moderne de révision pour le **CRPE** (Concours de Recrutement de Professeurs des Écoles).
Fiches, vidéos, méthodes et sujets blancs — avec un espace **gratuit** et un accès **Premium** (paiement unique à vie).

> Ce guide est écrit pour un **débutant total**. Suis les étapes dans l'ordre, sans en sauter. 🙂

---

## 📚 Sommaire

1. [Ce que fait le site](#1-ce-que-fait-le-site)
2. [Les technologies utilisées](#2-les-technologies-utilisées)
3. [Installation sur ton ordinateur](#3-installation-sur-ton-ordinateur)
4. [Lancer le site en local](#4-lancer-le-site-en-local)
5. [Connecter Supabase (base de données + comptes)](#5-connecter-supabase)
6. [Connecter Stripe (paiement)](#6-connecter-stripe)
7. [Ajouter / modifier du contenu](#7-ajouter--modifier-du-contenu)
8. [Modifier l'apparence du site](#8-modifier-lapparence-du-site)
9. [Déployer en ligne avec Vercel](#9-déployer-en-ligne-avec-vercel)
10. [Gérer les utilisateurs](#10-gérer-les-utilisateurs)
11. [Structure des fichiers](#11-structure-des-fichiers)
12. [Questions fréquentes](#12-questions-fréquentes)

---

## 1. Ce que fait le site

- 🏠 **Page d'accueil** avec présentation de Noa et vidéo.
- 📖 **5 sections de contenu** : Conseils, Épreuves écrites, Épreuves orales, Méthodologie, Sujets blancs.
- 🔎 **Recherche globale** et filtres (par matière, gratuit/premium).
- 🔓 **Accès gratuit** : une partie du contenu est visible sans payer.
- 🔒 **Accès Premium** : paiement unique (10 € par défaut) → accès à **tout**, à vie.
- 👤 **Comptes utilisateurs** (inscription / connexion) via Supabase.
- 💳 **Paiement sécurisé** via Stripe.

> ✅ **Bonne nouvelle** : le site **fonctionne immédiatement** avec des contenus de démonstration, **même sans configurer** Supabase ni Stripe. Tu peux donc le lancer et le regarder tout de suite, puis brancher la base de données et le paiement quand tu es prêt.

---

## 2. Les technologies utilisées

| Outil | À quoi ça sert |
|-------|----------------|
| **Next.js** | Le "moteur" du site (pages, navigation). |
| **TypeScript** | Le langage de programmation (JavaScript amélioré). |
| **Tailwind CSS** | Le style / le design. |
| **Supabase** | La base de données + les comptes utilisateurs. |
| **Stripe** | Le paiement en ligne. |
| **Vercel** | L'hébergement (mettre le site en ligne). |

Tu n'as pas besoin de tout comprendre pour utiliser le site !

---

## 3. Installation sur ton ordinateur

### Étape 1 — Installer Node.js

1. Va sur [https://nodejs.org](https://nodejs.org).
2. Télécharge la version **LTS** (le gros bouton).
3. Installe-la (clique sur "Suivant" jusqu'au bout).

Pour vérifier que ça a marché, ouvre un **terminal** (sur Mac : app "Terminal" ; sur Windows : "PowerShell") et tape :

```bash
node --version
```

Si un numéro s'affiche (ex : `v22.x.x`), c'est bon ✅.

### Étape 2 — Récupérer le projet

Si tu as le projet sur GitHub :

```bash
git clone <adresse-du-projet>
cd CRPE
```

### Étape 3 — Installer les dépendances

Dans le dossier du projet, tape :

```bash
npm install
```

Cela télécharge tout ce dont le site a besoin (patiente une minute).

---

## 4. Lancer le site en local

Toujours dans le dossier du projet :

```bash
npm run dev
```

Puis ouvre ton navigateur à l'adresse : **[http://localhost:3000](http://localhost:3000)**

🎉 Le site s'affiche ! (Avec des contenus de démonstration tant que Supabase n'est pas branché.)

Pour arrêter le site : reviens dans le terminal et appuie sur `Ctrl + C`.

---

## 5. Connecter Supabase

Supabase gère la **base de données** (le contenu) et les **comptes utilisateurs**.

### Étape 1 — Créer un projet Supabase

1. Va sur [https://supabase.com](https://supabase.com) et crée un compte (gratuit).
2. Clique sur **"New project"**.
3. Donne un nom, un mot de passe de base de données (garde-le précieusement), choisis une région proche (ex : Europe).
4. Attends que le projet soit prêt (1-2 minutes).

### Étape 2 — Créer les tables

1. Dans ton projet Supabase, va dans le menu **"SQL Editor"** (à gauche).
2. Clique sur **"New query"**.
3. Ouvre le fichier **`supabase/schema.sql`** de ce projet, copie **tout** son contenu.
4. Colle-le dans l'éditeur, puis clique sur **"Run"** (en bas à droite).

✅ Cela crée automatiquement les tables `profiles` et `resources`, la sécurité, et quelques contenus d'exemple.

### Étape 3 — Récupérer tes clés

1. Dans Supabase, va dans **"Project Settings"** (roue crantée) → **"API"**.
2. Note ces 3 valeurs :
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** (clé) → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** (clé secrète) → `SUPABASE_SERVICE_ROLE_KEY`

### Étape 4 — Les mettre dans le projet

1. À la racine du projet, fais une **copie** du fichier `.env.example` et renomme-la **`.env.local`**.
2. Remplis les valeurs Supabase :

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...
```

3. Relance le site (`Ctrl + C` puis `npm run dev`).

Maintenant, les comptes et le vrai contenu de la base sont actifs 🎉.

---

## 6. Connecter Stripe

Stripe gère le **paiement** du Premium.

### Étape 1 — Créer un compte Stripe

1. Va sur [https://stripe.com](https://stripe.com) et crée un compte.
2. Tu peux tout tester en **mode test** (aucune vraie carte nécessaire).

### Étape 2 — Récupérer tes clés

1. Dans Stripe, va dans **"Developers"** → **"API keys"**.
2. Note :
   - **Publishable key** → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - **Secret key** → `STRIPE_SECRET_KEY`
3. Ajoute-les dans `.env.local`.

### Étape 3 — Configurer le webhook (IMPORTANT)

Le webhook, c'est ce qui **active automatiquement le Premium** après un paiement.

**Pour tester en local**, installe la CLI Stripe : [https://stripe.com/docs/stripe-cli](https://stripe.com/docs/stripe-cli), puis :

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

La commande affiche un **secret** qui commence par `whsec_...`. Copie-le dans `.env.local` :

```bash
STRIPE_WEBHOOK_SECRET=whsec_...
```

**Pour la production** (site en ligne) :

1. Stripe → **"Developers"** → **"Webhooks"** → **"Add endpoint"**.
2. URL : `https://TON-DOMAINE.com/api/stripe/webhook`
3. Événement à écouter : **`checkout.session.completed`**.
4. Copie le **"Signing secret"** (`whsec_...`) et mets-le dans les variables d'environnement de Vercel (voir section 9).

### Tester un paiement

Sur la page **Premium**, clique sur payer. Utilise la carte de test Stripe :
- Numéro : `4242 4242 4242 4242`
- Date : n'importe quelle date future — CVC : n'importe quel nombre.

Après paiement, ton compte passe automatiquement en **Premium** ✅.

---

## 7. Ajouter / modifier du contenu

Tout le contenu du site vit dans la table **`resources`** de Supabase.

### Ajouter une ressource

1. Dans Supabase → menu **"Table Editor"** → table **`resources`**.
2. Clique sur **"Insert row"** et remplis :

| Champ | Explication | Exemple |
|-------|-------------|---------|
| `title` | Le titre affiché | `Maths — Les fractions` |
| `description` | Petit texte de présentation | `Toutes les bases des fractions.` |
| `category` | La section | `ecrites` |
| `subject` | La matière | `maths` |
| `type` | Le format | `video`, `pdf` ou `texte` |
| `url` | Lien de la vidéo/PDF (ou le texte si type=texte) | `https://...` |
| `is_premium` | Réservé aux Premium ? | `true` ou `false` |
| `difficulty` | (Sujets blancs) | `facile`, `moyen`, `difficile` |
| `correction_url` | (Sujets blancs) lien de correction | `https://...` |

3. Clique sur **"Save"**. La ressource apparaît immédiatement sur le site.

### Valeurs possibles

- **`category`** : `conseils`, `ecrites`, `orales`, `methodo`, `sujets-blancs`
- **`subject`** : `francais`, `maths`, `histoire-geo-emc`, `arts-plastiques`, `musique`, `langues`, `oral-lecon`, `eps`, `general`
- **`type`** : `video`, `pdf`, `texte`

> 💡 **Astuce vidéo YouTube** : utilise le lien au format `https://www.youtube.com/embed/IDENTIFIANT` (remplace `watch?v=` par `embed/`).

> 💡 **Astuce PDF** : héberge tes PDF dans **Supabase → Storage**, rends le fichier public, puis colle son lien dans `url`.

---

## 8. Modifier l'apparence du site

- **Les couleurs** : fichier `tailwind.config.ts` (cherche `navy` = bleu foncé, `sky` = bleu clair).
- **Le menu** : fichier `src/lib/nav.ts`.
- **Les textes de la page d'accueil** : fichier `src/app/page.tsx`.
- **Le prix du Premium** : variable `NEXT_PUBLIC_PREMIUM_PRICE_EUR` dans `.env.local` (ex : `10`).
- **La vidéo de présentation** : dans `src/app/page.tsx`, cherche `Vidéo de présentation` et remplace l'URL.

Chaque fichier est **commenté en français** pour te guider.

---

## 9. Déployer en ligne avec Vercel

1. Crée un compte sur [https://vercel.com](https://vercel.com) (connexion avec GitHub conseillée).
2. Mets ton projet sur **GitHub** (si ce n'est pas déjà fait).
3. Dans Vercel : **"Add New"** → **"Project"** → choisis ton dépôt → **"Import"**.
4. Dans **"Environment Variables"**, ajoute **toutes** les variables de ton `.env.local` (mêmes noms, mêmes valeurs). ⚠️ N'oublie pas `NEXT_PUBLIC_SITE_URL` avec l'adresse finale (ex : `https://crpe-avec-noa.vercel.app`).
5. Clique sur **"Deploy"**. Attends quelques minutes → ton site est en ligne ! 🚀

> Après le déploiement, retourne dans Stripe pour créer le **webhook de production** (section 6, étape 3) avec ta vraie URL.

---

## 10. Gérer les utilisateurs

Dans Supabase :

- **Voir les inscrits** : menu **"Authentication"** → **"Users"**.
- **Voir / modifier les statuts** : menu **"Table Editor"** → table **`profiles`**.
- **Rendre quelqu'un Premium manuellement** : dans `profiles`, passe sa colonne `is_premium` à `true`.
- **Retirer le Premium** : repasse `is_premium` à `false`.

> 🔒 Pour la **sécurité**, un utilisateur ne peut **jamais** se déclarer Premium tout seul : seul le webhook Stripe (après un vrai paiement) ou toi (manuellement dans Supabase) pouvez l'activer.

---

## 11. Structure des fichiers

```
CRPE/
├── src/
│   ├── app/                    # Les pages du site
│   │   ├── page.tsx            # Page d'accueil
│   │   ├── conseils/           # Page Conseils
│   │   ├── epreuves-ecrites/   # Page Épreuves écrites
│   │   ├── epreuves-orales/    # Page Épreuves orales
│   │   ├── methodologie/       # Page Méthodologie
│   │   ├── sujets-blancs/      # Page Sujets blancs
│   │   ├── recherche/          # Recherche globale
│   │   ├── ressource/[id]/     # Détail d'une ressource
│   │   ├── premium/            # Page de paiement
│   │   ├── connexion/          # Connexion
│   │   ├── inscription/        # Inscription
│   │   ├── profil/             # Espace utilisateur
│   │   └── api/stripe/         # Paiement + webhook
│   ├── components/             # Éléments réutilisables (boutons, cartes...)
│   └── lib/                    # Logique (Supabase, Stripe, données...)
│       └── demo-data.ts        # Contenus de démonstration
├── supabase/schema.sql         # À exécuter dans Supabase pour créer la base
├── .env.example                # Modèle des clés secrètes
└── README.md                   # Ce fichier
```

---

## 12. Questions fréquentes

**Le site affiche des contenus de démo ?**
C'est normal tant que Supabase n'est pas connecté. Suis la [section 5](#5-connecter-supabase).

**Je vois "Connexion non configurée" quand je clique sur Premium.**
Tu dois d'abord connecter Supabase (section 5) puis Stripe (section 6).

**Comment changer le prix ?**
Modifie `NEXT_PUBLIC_PREMIUM_PRICE_EUR` dans `.env.local` (et dans Vercel pour la prod).

**Le paiement ne rend pas Premium.**
Vérifie que le **webhook Stripe** est bien configuré (section 6, étape 3) et que `SUPABASE_SERVICE_ROLE_KEY` est bien renseignée.

**Mes secrets sont-ils en sécurité ?**
Oui : le fichier `.env.local` n'est **jamais** envoyé sur GitHub (il est ignoré). Ne le partage jamais.

---

### 🚀 Évolutions prévues (le code est prêt pour ça)

- Quiz interactifs
- Suivi de progression par matière
- Espace communauté / entraide

Bonne chance pour le CRPE ! 💪
