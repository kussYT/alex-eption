"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import styles from "./NewsletterForm.module.css";

type NewsletterFormProps = {
  variant?: "section" | "footer";
};

export function NewsletterForm({ variant = "section" }: NewsletterFormProps) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <p className={cn(styles.thanks, variant === "footer" && styles.thanksFooter)}>
        Merci. On vous écrit quand il y a quelque chose à dire.
      </p>
    );
  }

  return (
    <form className={cn(styles.form, styles[variant])} onSubmit={onSubmit}>
      <label className={styles.srOnly} htmlFor={`newsletter-email-${variant}`}>
        Adresse e-mail
      </label>
      <input
        id={`newsletter-email-${variant}`}
        name="email"
        type="email"
        required
        autoComplete="email"
        inputMode="email"
        placeholder="Votre e-mail"
        className={styles.input}
      />
      <Button type="submit" variant={variant === "footer" ? "outline" : "primary"}>
        S’inscrire
      </Button>
      {variant === "section" ? (
        <p className={styles.consent}>
          En vous inscrivant, vous acceptez de recevoir occasionnellement des nouvelles
          du restaurant. Pas de publicité, pas de revente.
        </p>
      ) : null}
    </form>
  );
}
