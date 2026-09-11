import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import styles from "./WinePreview.module.css";

export function WinePreview() {
  return (
    <section className={styles.section} aria-labelledby="cave-title">
      <div className={styles.media} aria-hidden="true">
        <CoverImage
          src="/images/wines/cave.jpg"
          alt=""
          sizes="100vw"
          position="68% 48%"
        />
        <div className={styles.shade} />
      </div>
      <div className={styles.content}>
        <h2 id="cave-title" className={styles.title}>
          La cave
        </h2>
        <p className={styles.lead}>Pour la table, pas pour la vitrine.</p>
        <Button href="/cave" variant="text" arrow className={styles.cta}>
          Découvrir la cave
        </Button>
      </div>
    </section>
  );
}
