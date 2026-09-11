import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import styles from "./Button.module.css";

type Variant = "primary" | "outline" | "text" | "textInk";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant: Variant;
  arrow?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant,
  arrow = false,
  className,
}: ButtonProps) {
  return (
    <Link href={href} className={cn(styles.button, styles[variant], className)}>
      <span>{children}</span>
      {arrow ? (
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      ) : null}
    </Link>
  );
}
