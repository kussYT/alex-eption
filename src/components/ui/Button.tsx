import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn, isExternalHref } from "@/lib/utils";
import styles from "./Button.module.css";

type Variant = "primary" | "outline" | "text" | "textInk" | "ghost";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
};

type LinkButtonProps = CommonProps & {
  href: string;
  type?: never;
};

type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: never;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

function ButtonInner({
  children,
  arrow,
}: {
  children: ReactNode;
  arrow?: boolean;
}) {
  return (
    <>
      <span>{children}</span>
      {arrow ? (
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      ) : null}
    </>
  );
}

export function Button(props: ButtonProps) {
  const { children, variant = "primary", arrow = false, className } = props;
  const classes = cn(styles.button, styles[variant], className);

  if ("href" in props && props.href) {
    const { href } = props;

    if (isExternalHref(href)) {
      const isWeb = href.startsWith("http");

      return (
        <a
          href={href}
          className={classes}
          rel={isWeb ? "noopener noreferrer" : undefined}
        >
          <ButtonInner arrow={arrow}>{children}</ButtonInner>
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        <ButtonInner arrow={arrow}>{children}</ButtonInner>
      </Link>
    );
  }

  const native = props as NativeButtonProps;
  const type = native.type ?? "button";
  const { disabled, name, id, onClick } = native;

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      name={name}
      id={id}
      onClick={onClick}
    >
      <ButtonInner arrow={arrow}>{children}</ButtonInner>
    </button>
  );
}
