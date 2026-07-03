/**
 * Fonctions liées à l'utilisateur connecté (côté serveur)
 * -------------------------------------------------------
 * Regroupe la logique pour savoir QUI est connecté et s'il est Premium.
 */
import { createClient } from "./supabase/server";
import { isSupabaseConfigured } from "./supabase/config";
import type { Profile } from "./types";

/**
 * Récupère le profil de l'utilisateur connecté, ou null si personne
 * n'est connecté (ou si Supabase n'est pas configuré).
 */
export async function getCurrentProfile(): Promise<Profile | null> {
  if (!isSupabaseConfigured()) return null;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  // On cherche le profil correspondant dans la table "profiles".
  const { data: profile } = await supabase
    .from("profiles")
    .select("id, email, is_premium, created_at")
    .eq("id", user.id)
    .single();

  // Si le profil n'existe pas encore, on renvoie un profil "de base".
  if (!profile) {
    return {
      id: user.id,
      email: user.email ?? "",
      is_premium: false,
    };
  }

  return profile as Profile;
}

/** Raccourci : l'utilisateur connecté est-il Premium ? */
export async function isCurrentUserPremium(): Promise<boolean> {
  const profile = await getCurrentProfile();
  return profile?.is_premium ?? false;
}
