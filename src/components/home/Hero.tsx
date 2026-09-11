import { CallButton } from "@/components/layout/CallButton";
import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import { restaurant } from "@/data/restaurant";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Accueil">
      <div className={styles.media} aria-hidden="true">
        <div className={styles.photo}>
          <CoverImage
            src={restaurant.heroImage.src}
            alt=""
            sizes="100vw"
            priority
          />
        </div>
        <div className={styles.blend} />
      </div>

      <div className={styles.content}>
        <p className={styles.place}>
          Restaurant · {restaurant.place}
        </p>
        <h1 className={styles.title}>{restaurant.name}</h1>
        <p className={styles.phrase}>{restaurant.tagline}</p>
        <div className={styles.actions}>
          <Button href="/carte" variant="primary" className={styles.cta}>
            Voir la carte
          </Button>
          <CallButton variant="text" className={styles.call} />
        </div>
      </div>
    </section>
  );
}
