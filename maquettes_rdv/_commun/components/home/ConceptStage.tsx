"use client";

import { Concept01Hero } from "@/components/home/Concept01Hero";
import { Concept01Manifesto } from "@/components/home/Concept01Manifesto";
import { Concept02Hero } from "@/components/home/Concept02Hero";
import { Concept02Manifesto } from "@/components/home/Concept02Manifesto";
import { Concept03Hero } from "@/components/home/Concept03Hero";
import { Concept03Manifesto } from "@/components/home/Concept03Manifesto";
import { useTheme } from "@/components/theme/ThemeProvider";
import styles from "./ConceptStage.module.css";

export function ConceptStage() {
  const { concept } = useTheme();

  return (
    <div key={concept} className={styles.fade}>
      {concept === "01" ? (
        <>
          <Concept01Hero />
          <Concept01Manifesto />
        </>
      ) : concept === "02" ? (
        <>
          <Concept02Hero />
          <Concept02Manifesto />
        </>
      ) : (
        <>
          <Concept03Hero />
          <Concept03Manifesto />
        </>
      )}
    </div>
  );
}
