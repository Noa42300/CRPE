"use client";

/**
 * Client Supabase côté NAVIGATEUR
 * -------------------------------
 * À utiliser dans les composants client ("use client") pour, par exemple,
 * connecter ou inscrire un utilisateur.
 */
import { createBrowserClient } from "@supabase/ssr";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "./config";

export function createClient() {
  return createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
