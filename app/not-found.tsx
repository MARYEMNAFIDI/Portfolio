import { BrandLogo } from "@/components/brand-logo";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <BrandLogo href="/" />
      <span className="eyebrow">404 / PAGE INTROUVABLE</span>
      <h1>Cette page a pris<br /><em>un autre chemin.</em></h1>
      <p>Le lien demandé n’existe pas ou a changé d’adresse.</p>
      <Link className="button button-primary" href="/">Revenir à l’accueil <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M3.5 10h12m-5-5 5 5-5 5" /></svg></Link>
    </main>
  );
}
