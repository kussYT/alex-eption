import { toTelHref } from "@/lib/utils";

export const restaurant = {
  name: "ALEX’CEPTION",
  shortName: "Alex’ception",
  place: "Raismes",
  region: "Hauts-de-France",
  addressLine: "6 Rue Jean Jaurès",
  postalCode: "59590",
  city: "Raismes",
  phone: "03 27 36 91 99",
  phoneHref: toTelHref("03 27 36 91 99"),
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=6+Rue+Jean+Jaur%C3%A8s+59590+Raismes",
  tagline: "Cuisine de saison, à Raismes.",
  description:
    "Une cuisine contemporaine, guidée par les produits, les saisons et l’envie d’une table sincère — généreuse, précise, sans mise à distance.",
  heroImage: {
    src: "/images/hero/hero.jpg",
    alt: "Service en salle, assiette et verres à table",
  },
  hours: [
    { days: "Mardi — Vendredi", hours: "12h00 – 13h30" },
    { days: "Samedi", hours: "19h00 – 21h00" },
    { days: "Dimanche", hours: "12h00 – 13h30" },
    { days: "Lundi", hours: "Fermé" },
  ],
} as const;

export const featuredProducts = [
  {
    id: "produit",
    title: "Le produit, d’abord.",
    body: "La carte suit ce que la saison a de meilleur. Peu d’effets, beaucoup d’attention : un produit choisi au bon moment, travaillé pour rester lisible.",
    image: "/images/dishes/plat-01.jpg",
    alt: "Plat de saison, dressage contemporain",
    layout: "imageStart" as const,
  },
  {
    id: "carte",
    title: "Une carte qui change.",
    body: "Entrées, plats, desserts : la carte évolue souvent. On y vient pour le moment présent, pas pour un menu figé.",
    image: "/images/dishes/plat-02.jpg",
    alt: "Assiette gastronomique, lumière naturelle",
    layout: "imageEnd" as const,
  },
  {
    id: "table",
    title: "Autour de la table.",
    body: "Le vin, le service, la salle : tout est pensé pour accompagner le plat, sans théâtre inutile. Une expérience de table, accessible.",
    image: "/images/restaurant/salle.jpg",
    alt: "Service en salle, table dressée",
    layout: "wide" as const,
  },
] as const;
