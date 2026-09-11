import { Button } from "@/components/ui/Button";
import { menuPreviewItems } from "@/data/menu";
import { formatPrice } from "@/lib/utils";
import styles from "./MenuPreview.module.css";

export function MenuPreview() {
  return (
    <section className={styles.section} aria-labelledby="carte-title">
      <div className={styles.inner}>
        <h2 id="carte-title" className={styles.title}>
          La carte
        </h2>

        <ul className={styles.list}>
          {menuPreviewItems.map((item) => (
            <li key={item.name} className={styles.row}>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.dots} aria-hidden="true" />
              <span className={styles.price}>{formatPrice(item.price)}</span>
            </li>
          ))}
        </ul>
        <Button href="/carte" variant="textInk" arrow className={styles.link}>
          Consulter la carte complète
        </Button>
      </div>
    </section>
  );
}
