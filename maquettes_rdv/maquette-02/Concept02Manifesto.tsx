"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { copy } from "@/lib/copy";
import styles from "./Concept02Manifesto.module.css";

export function Concept02Manifesto() {
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
      { threshold: 0.24, rootMargin: "0px 0px -8% 0px" },
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
      <span className={styles.folio} aria-hidden="true">
        {copy.manifesto.folio}
      </span>

      <div className={styles.spread}>
        <div className={styles.left}>
          <p className={styles.kicker}>{copy.manifesto.kickerWord}</p>
          <h2 id="manifesto-title" className={styles.title}>
            {copy.manifesto.lines.map((line) => (
              <span key={line} className={styles.line}>
                {line}
              </span>
            ))}
          </h2>
        </div>

        <div className={styles.right}>
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
