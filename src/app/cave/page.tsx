import { PageHero } from "@/components/ui/PageHero";
import { wines } from "@/data/wines";
import { createMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = createMetadata({
  title: "La cave",
  description:
    "La cave d’ALEX’CEPTION : une sélection de vins pour accompagner la cuisine de saison, à Raismes.",
  path: "/cave",
});

export default function CavePage() {
  return (
    <>
      <PageHero
        title="La cave"
        lead="Pas une cave-spectacle : des bouteilles choisies pour la table, à ouvrir maintenant."
      />
      <div className="site-container page-body">
        <ul className={styles.list}>
          {wines.map((wine) => (
            <li key={`${wine.name}-${wine.year}`}>
              <p className={styles.name}>{wine.name}</p>
              <p className={styles.meta}>
                {wine.domain}
                <br />
                {wine.appellation} · {wine.region} · {wine.year}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
