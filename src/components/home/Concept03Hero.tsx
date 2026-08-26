"use client";

import { HeroPhoto } from "@/components/home/HeroPhoto";
import { Button } from "@/components/ui/Button";
import { copy } from "@/lib/copy";
import styles from "./Concept03Hero.module.css";

export function Concept03Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label={copy.hero.ariaLabel}>
      <div className={styles.media} aria-hidden="true">
        <div className={styles.photo}>
          <HeroPhoto sizes="100vw" />
        </div>
        <div className={styles.shade} />
      </div>

      <div className={styles.content}>
        <p className={styles.label}>{copy.hero.label}</p>
        <h1 className={styles.title}>
          <span className={styles.line}>{copy.hero.titleLead}</span>
          <span className={styles.line}>
            {copy.hero.titleDe} {copy.hero.titleSeason}.
          </span>
        </h1>
        <p className={styles.intro}>{copy.hero.intro}</p>
        <div className={styles.actions}>
          <Button href="#reserver" variant="primary">
            {copy.hero.reserve}
          </Button>
          <Button href="#la-carte" variant="text" className={styles.quiet}>
            {copy.hero.carte}
          </Button>
        </div>
      </div>
    </section>
  );
}
