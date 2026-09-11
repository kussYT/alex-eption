import Image from "next/image";
import { cn } from "@/lib/utils";
import styles from "./CoverImage.module.css";

type CoverImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  position?: string;
};

export function CoverImage({
  src,
  alt,
  sizes,
  priority = false,
  className,
  position,
}: CoverImageProps) {
  return (
    <div className={cn(styles.frame, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={80}
        sizes={sizes}
        className={styles.image}
        style={position ? { objectPosition: position } : undefined}
      />
    </div>
  );
}
