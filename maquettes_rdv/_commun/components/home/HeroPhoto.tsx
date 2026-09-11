"use client";

import Image from "next/image";
import { useTheme } from "@/components/theme/ThemeProvider";
import { HERO_IMAGES } from "@/lib/media";
import styles from "./HeroPhoto.module.css";

export function HeroPhoto({ sizes = "100vw" }: { sizes?: string }) {
  const { concept } = useTheme();
  const image = HERO_IMAGES[concept];

  return (
    <div className={styles.frame}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        quality={80}
        sizes={sizes}
        className={styles.image}
      />
    </div>
  );
}
