"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CallButton } from "@/components/layout/CallButton";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { restaurant } from "@/data/restaurant";
import { NAV_LINKS } from "@/lib/nav";
import { cn } from "@/lib/utils";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(!isHome);
  const [route, setRoute] = useState(pathname);

  if (route !== pathname) {
    setRoute(pathname);
    setMenuOpen(false);
    setScrolled(pathname !== "/");
  }

  useEffect(() => {
    if (!isHome) {
      return;
    }

    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const hero = document.getElementById("hero");
        const navHeight =
          Number.parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue(
              "--nav-height",
            ),
          ) || 88;

        if (!hero) {
          setScrolled(window.scrollY > 24);
          return;
        }

        setScrolled(hero.getBoundingClientRect().bottom <= navHeight);
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isHome]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          styles.header,
          (scrolled || !isHome) && !menuOpen && styles.scrolled,
          menuOpen && styles.menuOpen,
        )}
      >
        <a className={styles.skip} href="#contenu">
          Aller au contenu
        </a>

        <Link className={styles.logo} href="/">
          <span className={styles.wordmark}>{restaurant.name}</span>
          <span className={styles.place}>{restaurant.place}</span>
        </Link>

        <nav className={styles.nav} aria-label="Navigation principale">
          <ul className={styles.list}>
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  className={cn(styles.link, pathname === item.href && styles.active)}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <CallButton label="Appeler" className={styles.reserve} />
        </nav>

        <div className={styles.mobileActions}>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
          </button>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        pathname={pathname}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
