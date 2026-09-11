import type { Wine } from "@/types/wine";

export const wines: Wine[] = [
  {
    name: "Côteaux du Layon",
    domain: "Domaine de la Bergerie",
    region: "Loire",
    appellation: "Coteaux du Layon",
    year: "2022",
    featured: true,
  },
  {
    name: "Marsannay",
    domain: "Domaine Jean Fournier",
    region: "Bourgogne",
    appellation: "Marsannay",
    year: "2021",
    featured: true,
    image: "/images/wines/cave.jpg",
  },
  {
    name: "Faugères",
    domain: "Domaine Léon Barral",
    region: "Languedoc",
    appellation: "Faugères",
    year: "2020",
    featured: true,
  },
  {
    name: "Savennières",
    domain: "Domaine du Closel",
    region: "Loire",
    appellation: "Savennières",
    year: "2021",
  },
  {
    name: "Côtes du Jura",
    domain: "Domaine Tissot",
    region: "Jura",
    appellation: "Côtes du Jura",
    year: "2022",
  },
];

export const featuredWines = wines.filter((wine) => wine.featured);
