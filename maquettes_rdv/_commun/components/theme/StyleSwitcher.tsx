"use client";

import { CONCEPTS, type ConceptId } from "@/lib/theme";
import { useTheme } from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/cn";
import styles from "./StyleSwitcher.module.css";

const CONCEPT_LABELS: Record<ConceptId, string> = {
  "01": "Style 1, sombre",
  "02": "Style 2, naturel",
  "03": "Style 3, chaud",
};

export function StyleSwitcher() {
  const { concept, setConcept } = useTheme();

  return (
    <div className={styles.switcher} role="group" aria-label="Changer de style">
      {CONCEPTS.map((id) => (
        <button
          key={id}
          type="button"
          className={cn(
            styles.button,
            styles[`concept${id}`],
            concept === id && styles.active,
          )}
          aria-label={CONCEPT_LABELS[id]}
          aria-pressed={concept === id}
          onClick={() => setConcept(id)}
        >
          {Number(id)}
        </button>
      ))}
    </div>
  );
}
