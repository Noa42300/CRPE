-- =====================================================================
--  BASE DE DONNÉES — CRPE avec Noa
-- =====================================================================
--
--  COMMENT L'UTILISER :
--  1. Va sur ton projet Supabase → menu "SQL Editor"
--  2. Clique sur "New query"
--  3. Copie-colle TOUT ce fichier
--  4. Clique sur "Run"
--
--  Cela crée les tables, la sécurité et quelques contenus d'exemple.
-- =====================================================================


-- =====================================================================
--  1. TABLE "profiles" — les utilisateurs
-- =====================================================================
--  Chaque utilisateur inscrit (via Supabase Auth) aura une ligne ici.
create table if not exists public.profiles (
  id          uuid primary key references auth.users (id) on delete cascade,
  email       text,
  created_at  timestamptz not null default now()
);


-- =====================================================================
--  2. TABLE "resources" — tout le contenu du site
-- =====================================================================
--  Fiches, vidéos, textes, sujets blancs... Tout est stocké ici.
create table if not exists public.resources (
  id              uuid primary key default gen_random_uuid(),
  title           text not null,
  description     text not null default '',
  -- Catégorie : conseils / ecrites / orales / methodo / sujets-blancs
  category        text not null,
  -- Matière : francais / maths / histoire-geo-emc / arts-plastiques /
  --           musique / langues / oral-lecon / eps / general
  subject         text not null default 'general',
  -- Type : video / pdf / texte
  type            text not null,
  -- Lien vers la vidéo/PDF, OU le texte lui-même si type = 'texte'
  url             text not null default '',
  -- Optionnel (sujets blancs) : lien vers la correction
  correction_url  text,
  created_at      timestamptz not null default now()
);


-- =====================================================================
--  3. SÉCURITÉ (Row Level Security)
-- =====================================================================
--  On active la sécurité au niveau des lignes pour contrôler les accès.
alter table public.profiles  enable row level security;
alter table public.resources enable row level security;

-- ---- Règles pour "profiles" ----
-- Un utilisateur peut LIRE son propre profil.
drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
  on public.profiles for select
  using (auth.uid() = id);

-- Un utilisateur peut MODIFIER son propre profil.
drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
  on public.profiles for update
  using (auth.uid() = id);

-- ---- Règles pour "resources" ----
-- TOUT LE MONDE peut LIRE les ressources : le site est 100% gratuit.
drop policy if exists "resources_select_all" on public.resources;
create policy "resources_select_all"
  on public.resources for select
  using (true);


-- =====================================================================
--  4. CRÉATION AUTOMATIQUE DU PROFIL À L'INSCRIPTION
-- =====================================================================
--  Quand un utilisateur s'inscrit, on crée automatiquement sa ligne dans
--  "profiles". Comme ça, tu n'as rien à faire côté application.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();


-- =====================================================================
--  5. CONTENUS D'EXEMPLE (facultatif)
-- =====================================================================
--  Quelques ressources pour démarrer. Tu peux les supprimer et ajouter
--  les tiennes via le menu "Table Editor" → "resources" → "Insert row".
--  NB : les sujets blancs ne sont plus des ressources en base ; ils sont
--  gérés par le système dédié (src/lib/sujets-blancs) qui génère pages et
--  PDF automatiquement. On ne les insère donc pas ici.
insert into public.resources (title, description, category, subject, type, url, correction_url)
values
  ('Par où commencer ta préparation au CRPE', 'Ma feuille de route complète pour organiser tes révisions sur toute l''année.', 'conseils', 'general', 'video', 'https://www.youtube.com/embed/dQw4w9WgXcQ', null),
  ('Ma routine de révision (fiche PDF)', 'Le planning exact que j''ai suivi semaine par semaine.', 'conseils', 'general', 'pdf', 'https://www.africau.edu/images/default/sample.pdf', null),
  ('Français — La grammaire essentielle', 'Fiche synthèse des notions de grammaire attendues à l''écrit.', 'ecrites', 'francais', 'pdf', 'https://www.africau.edu/images/default/sample.pdf', null),
  ('Maths — Géométrie : fiche complète', 'Théorèmes, formules et exercices corrigés.', 'ecrites', 'maths', 'pdf', 'https://www.africau.edu/images/default/sample.pdf', null),
  ('Oral de leçon Français — La méthode complète', 'La structure exacte d''une bonne leçon de français.', 'orales', 'oral-lecon', 'video', 'https://www.youtube.com/embed/dQw4w9WgXcQ', null),
  ('EPS + Valeurs de la République — Réussir l''entretien', 'Comment structurer ton oral d''EPS.', 'orales', 'eps', 'video', 'https://www.youtube.com/embed/dQw4w9WgXcQ', null),
  ('Construire un planning de révision efficace', 'La méthode pour planifier tes semaines sans t''épuiser.', 'methodo', 'general', 'video', 'https://www.youtube.com/embed/dQw4w9WgXcQ', null)
on conflict do nothing;
