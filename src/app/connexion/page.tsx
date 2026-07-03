/**
 * PAGE — CONNEXION
 */
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AuthForm } from "@/components/AuthForm";
import { getCurrentProfile } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Connexion",
  description: "Connecte-toi à ton compte CRPE avec Noa.",
};

export default async function ConnexionPage() {
  // Si déjà connecté, on va directement au profil.
  const profile = await getCurrentProfile();
  if (profile) redirect("/profil");

  return (
    <div className="container-page py-16 sm:py-24">
      <AuthForm mode="login" />
    </div>
  );
}
