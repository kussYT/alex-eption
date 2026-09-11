"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/cn";
import { NAV_LINKS } from "@/lib/nav";
import styles from "./Navbar.module.css";

export function Navbar() {
  const { concept } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const hero = document.getElementById("hero");

        if (!hero) {
          setScrolled(false);
          return;
        }

        const navHeight =
          Number.parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue(
              "--nav-height",
            ),
          ) || 88;

        setScrolled(hero.getBoundingClientRect().bottom <= navHeight);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [concept]);

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
          scrolled && !menuOpen && styles.scrolled,
          menuOpen && styles.menuOpen,
        )}
      >
        <a className={styles.skip} href="#contenu">
          Aller au contenu
        </a>

        <a className={styles.logo} href="#hero">
          <span className={styles.wordmark}>ALEX’CEPTION</span>
          <span className={styles.place}>Raismes</span>
        </a>

        <nav className={styles.nav} aria-label="Navigation principale">
          <ul className={styles.list}>
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <a className={styles.link} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#reserver" variant="outline">
            Réserver
          </Button>
        </nav>

        <div className={styles.mobileActions}>
          <Button href="#reserver" variant="outline">
            Réserver
          </Button>
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

      <div
        id="menu-mobile"
        className={cn(styles.overlay, menuOpen && styles.overlayOpen)}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <nav aria-label="Navigation mobile">
          <ul className={styles.overlayList}>
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  className={styles.overlayLink}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
