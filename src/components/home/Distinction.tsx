import { Button } from "@/components/ui/Button";
import { gaultMillau } from "@/data/awards";
import styles from "./Distinction.module.css";

export function Distinction() {
  return (
    <section className={styles.section} aria-labelledby="distinction-title">
      <div className={styles.inner}>
        <h2 id="distinction-title" className={styles.name}>
          {gaultMillau.name}
        </h2>
        <p className={styles.year}>{gaultMillau.year}</p>
        <p className={styles.score}>{gaultMillau.score}</p>
        <p className={styles.distinction}>{gaultMillau.distinction}</p>
        <p className={styles.cuisine}>{gaultMillau.cuisine}</p>
        <Button href={gaultMillau.href} variant="textInk" arrow className={styles.link}>
          {gaultMillau.linkLabel}
        </Button>
      </div>
    </section>
  );
}
