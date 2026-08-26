"use client";

import { useEffect, useRef } from "react";
import { HeroPhoto } from "@/components/home/HeroPhoto";
import { Button } from "@/components/ui/Button";
import { copy } from "@/lib/copy";
import styles from "./Hero.module.css";

export function Concept01Hero() {
  const photoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const photo = photoRef.current;
    const content = contentRef.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!photo || !content || reduced.matches) {
      return;
    }

    let frame = 0;

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const hero = document.getElementById("hero");
        if (!hero || window.innerWidth < 768) {
          return;
        }

        const { top, height } = hero.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, -top / height));
        photo.style.transform = `translate3d(0, ${progress * 28}px, 0)`;
        content.style.opacity = String(1 - progress * 0.18);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section id="hero" className={styles.hero} aria-label={copy.hero.ariaLabel}>
      <div className={styles.media} aria-hidden="true">
        <div ref={photoRef} className={styles.photo}>
          <HeroPhoto />
        </div>
        <div className={styles.blend} />
        <div className={styles.navVeil} />
      </div>

      <div ref={contentRef} className={styles.content}>
        <p className={styles.label}>
          <span className={styles.labelLine} aria-hidden="true" />
          {copy.hero.label}
        </p>

        <h1 className={styles.title}>
          <span className={styles.lineMask}>
            <span className={styles.line}>{copy.hero.titleLead}</span>
          </span>
          <span className={styles.lineMask}>
            <span className={styles.line}>
              {copy.hero.titleDe}{" "}
              <em className={styles.italic}>{copy.hero.titleSeason}</em>
              <span className={styles.period}>.</span>
            </span>
          </span>
        </h1>

        <p className={styles.intro}>{copy.hero.intro}</p>

        <div className={styles.actions}>
          <Button href="#reserver" variant="primary" arrow>
            {copy.hero.reserve}
          </Button>
          <Button href="#la-carte" variant="text">
            {copy.hero.carte}
          </Button>
        </div>

        <p className={styles.credits}>
          <span>{copy.hero.chefs}</span>
          <span>{copy.hero.place}</span>
        </p>
      </div>

      <a className={styles.scrollHint} href="#philosophie">
        {copy.hero.discover}
        <span className={styles.scrollLine} aria-hidden="true" />
      </a>
    </section>
  );
}
