import { CoverImage } from "@/components/ui/CoverImage";
import { featuredProducts } from "@/data/restaurant";
import styles from "./ProductShowcase.module.css";

export function ProductShowcase() {
  const landscape = featuredProducts[0];
  const portrait = featuredProducts[2];

  return (
    <section className={styles.section} aria-labelledby="univers-title">
      <figure className={styles.landscape}>
        <CoverImage
          src={landscape.image}
          alt={landscape.alt}
          sizes="100vw"
        />
      </figure>

      <div className={styles.spread}>
        <h2 id="univers-title" className={styles.statement}>
          <span>Le produit.</span>
          <span className={styles.italic}>La saison.</span>
          <span>L’essentiel.</span>
        </h2>
        <figure className={styles.portrait}>
          <CoverImage
            src={portrait.image}
            alt={portrait.alt}
            sizes="(min-width: 768px) 36vw, 70vw"
          />
        </figure>
      </div>
    </section>
  );
}
