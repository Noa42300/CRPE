/**
 * PAGE — INSCRIPTION
 */
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AuthForm } from "@/components/AuthForm";
import { getCurrentProfile } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Créer un compte",
  description: "Crée ton compte gratuit CRPE avec Noa et commence à réviser.",
};

export default async function InscriptionPage() {
  const profile = await getCurrentProfile();
  if (profile) redirect("/profil");

  return (
    <div className="container-page py-16 sm:py-24">
      <AuthForm mode="signup" />
    </div>
  );
}
