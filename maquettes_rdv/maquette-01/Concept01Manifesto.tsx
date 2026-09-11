"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { copy } from "@/lib/copy";
import styles from "./Manifesto.module.css";

export function Concept01Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!section) {
      return;
    }

    if (reduced.matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="philosophie"
      ref={sectionRef}
      className={cn(styles.section, visible && styles.visible)}
      aria-labelledby="manifesto-title"
    >
      <div className={`site-container ${styles.grid}`}>
        <aside className={styles.aside}>
          <p className={styles.kicker}>
            {copy.manifesto.kicker}
            <span className={styles.kickerLine} aria-hidden="true" />
          </p>
          <p className={styles.meta}>
            {copy.manifesto.cuisineType}
            <br />
            {copy.manifesto.place}
          </p>
        </aside>

        <div className={styles.main}>
          <h2 id="manifesto-title" className={styles.title}>
            <span className={styles.lineMask}>
              <span className={styles.line}>{copy.manifesto.lines[0]}</span>
            </span>
            <span className={styles.lineMask}>
              <span className={styles.line}>
                <em className={styles.italic}>{copy.manifesto.lines[1]}</em>
              </span>
            </span>
            <span className={styles.lineMask}>
              <span className={styles.line}>{copy.manifesto.lines[2]}</span>
            </span>
          </h2>

          <p className={styles.body}>{copy.manifesto.body}</p>

          <div className={styles.link}>
            <Button href="#cuisine" variant="textInk" arrow>
              {copy.manifesto.link}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
