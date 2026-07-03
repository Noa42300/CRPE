"use client";

/** Bouton de déconnexion réutilisable. */
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export function SignOutButton({ className = "btn-secondary" }: { className?: string }) {
  const router = useRouter();

  async function handleClick() {
    if (isSupabaseConfigured()) {
      await createClient().auth.signOut();
    }
    router.push("/");
    router.refresh();
  }

  return (
    <button onClick={handleClick} className={className}>
      Se déconnecter
    </button>
  );
}
