import Link from "next/link";
import { restaurant } from "@/data/restaurant";
import { NAV_LINKS } from "@/lib/nav";
import { cn } from "@/lib/utils";
import styles from "./MobileMenu.module.css";

type MobileMenuProps = {
  open: boolean;
  pathname: string;
  onClose: () => void;
};

export function MobileMenu({ open, pathname, onClose }: MobileMenuProps) {
  return (
    <div
      id="menu-mobile"
      className={cn(styles.overlay, open && styles.open)}
      aria-hidden={!open}
      inert={!open}
    >
      <nav aria-label="Navigation mobile">
        <ul className={styles.list}>
          <li>
            <Link
              className={cn(styles.link, pathname === "/" && styles.active)}
              href="/"
              onClick={onClose}
            >
              Accueil
            </Link>
          </li>
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <Link
                className={cn(styles.link, pathname === item.href && styles.active)}
                href={item.href}
                onClick={onClose}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <a
        className={styles.call}
        href={restaurant.phoneHref}
        aria-label={`Appeler pour réserver au ${restaurant.phone}`}
      >
        <span className={styles.callAction}>Appeler pour réserver</span>
        <span className={styles.callNumber}>{restaurant.phone}</span>
      </a>
    </div>
  );
}
