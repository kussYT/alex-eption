import type { Metadata } from "next";
import { restaurant } from "@/data/restaurant";

export const SITE_URL = "https://alexception.fr";

export const defaultTitle = "ALEX’CEPTION | Restaurant à Raismes";

export const defaultDescription =
  "Restaurant à Raismes : cuisine de saison, produits choisis, carte généreuse et cave soignée. Une table contemporaine, accessible et sincère.";

export function createMetadata({
  title,
  description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}): Metadata {
  const pageDescription = description ?? defaultDescription;
  const url = new URL(path, SITE_URL).toString();
  const openGraphTitle = title ? `${title} | ALEX’CEPTION` : defaultTitle;

  return {
    title: title ?? { absolute: defaultTitle },
    description: pageDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: openGraphTitle,
      description: pageDescription,
      locale: "fr_FR",
      type: "website",
      url,
      siteName: restaurant.name,
    },
  };
}
