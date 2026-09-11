import { cn, formatPrice } from "@/lib/utils";
import type { MenuCategory } from "@/types/menu";
import styles from "./MenuBoard.module.css";

export function MenuBoard({
  categories,
  tone = "dark",
}: {
  categories: MenuCategory[];
  tone?: "dark" | "paper";
}) {
  return (
    <div className={cn(styles.board, tone === "paper" && styles.paper)}>
      {categories.map((category) => (
        <section key={category.id} className={styles.category}>
          <h2>{category.title}</h2>
          {category.description ? (
            <p className={styles.intro}>{category.description}</p>
          ) : null}
          <ul>
            {category.items.map((item) => (
              <li key={item.name}>
                <div>
                  <p className={styles.name}>{item.name}</p>
                  <p className={styles.desc}>{item.description}</p>
                </div>
                <span className={styles.price}>{formatPrice(item.price)}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
