"use client";

import { HeroPhoto } from "@/components/home/HeroPhoto";
import { Button } from "@/components/ui/Button";
import { copy } from "@/lib/copy";
import styles from "./Concept02Hero.module.css";

export function Concept02Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label={copy.hero.ariaLabel}>
      <div className={styles.split}>
        <div className={styles.col}>
          <p className={styles.label}>{copy.hero.label}</p>

          <h1 className={styles.title}>
            <span className={styles.line1}>{copy.hero.titleLead}</span>
            <span className={styles.line2}>
              {copy.hero.titleDe} {copy.hero.titleSeason}.
            </span>
          </h1>

          <p className={styles.intro}>{copy.hero.intro}</p>

          <div className={styles.actions}>
            <Button href="#reserver" variant="primary">
              {copy.hero.reserve}
            </Button>
            <Button href="#la-carte" variant="text">
              {copy.hero.carte}
            </Button>
          </div>

          <p className={styles.sign}>
            <span>Cuisine contemporaine</span>
            <span>{copy.hero.place}</span>
          </p>
        </div>

        <div className={styles.media} aria-hidden="true">
          <HeroPhoto sizes="(min-width: 768px) 46vw, 100vw" />
        </div>
      </div>
    </section>
  );
}
