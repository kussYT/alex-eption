export function cn(
  ...parts: Array<string | false | undefined | null>
): string {
  return parts.filter(Boolean).join(" ");
}

export function formatPrice(price: number): string {
  return `${price} €`;
}

export function formatDate(isoDate: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${isoDate}T12:00:00`));
}

export function formatDateParts(isoDate: string) {
  const date = new Date(`${isoDate}T12:00:00`);

  return {
    day: new Intl.DateTimeFormat("fr-FR", { day: "2-digit" }).format(date),
    month: new Intl.DateTimeFormat("fr-FR", { month: "short" })
      .format(date)
      .replace(".", ""),
  };
}

export function toTelHref(phone: string): string {
  const digits = phone.replace(/[^\d+]/g, "");

  if (digits.startsWith("+")) {
    return `tel:${digits}`;
  }

  if (digits.startsWith("0")) {
    return `tel:+33${digits.slice(1)}`;
  }

  return `tel:${digits}`;
}

export function isExternalHref(href: string): boolean {
  return /^(https?:|tel:|mailto:)/.test(href);
}
