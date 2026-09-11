import Link from "next/link";
import { restaurant } from "@/data/restaurant";
import { FOOTER_LINKS } from "@/lib/nav";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link href="/" className={styles.wordmark}>
          {restaurant.name}
        </Link>
        <nav aria-label="Pied de page">
          <ul className={styles.links}>
            {FOOTER_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} {restaurant.name}</p>
        <p className={styles.credit}>
          Site réalisé par <span>VersaTech</span>
        </p>
      </div>
    </footer>
  );
}
