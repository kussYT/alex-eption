import { Button } from "@/components/ui/Button";
import { seminars } from "@/data/seminars";
import styles from "./SeminarPreview.module.css";

export function SeminarPreview() {
  return (
    <section className={styles.section} aria-labelledby="seminaires-title">
      <div className={styles.inner}>
        <h2 id="seminaires-title" className={styles.title}>
          Séminaires
        </h2>
        <p className={styles.lead}>{seminars.description}</p>
        <Button href="/seminaires" variant="textInk" arrow className={styles.cta}>
          Préparer un séminaire
        </Button>
      </div>
    </section>
  );
}
