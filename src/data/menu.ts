import type { MenuCategory } from "@/types/menu";

export const menu: MenuCategory[] = [
  {
    id: "entrees",
    title: "Entrées",
    items: [
      {
        name: "Betterave, fromage blanc, aneth",
        description: "Betteraves rôties, crème acidulée, herbes fraîches.",
        price: 16,
      },
      {
        name: "Tartare de saint-jacques, agrumes",
        description: "Saint-jacques, pamplemousse, huile de sésame.",
        price: 22,
      },
      {
        name: "Velouté de saison",
        description: "Légumes du moment, un filet d’huile, croûtons.",
        price: 14,
      },
    ],
  },
  {
    id: "plats",
    title: "Plats",
    items: [
      {
        name: "Poisson de côte, légumes glacés",
        description: "Selon arrivage, beurre blanc, légumes de saison.",
        price: 32,
      },
      {
        name: "Volaille rôtie, jus corsé",
        description: "Fermière, pommes grenaille, jus réduit.",
        price: 29,
      },
      {
        name: "Légumes rôtis, condiment aux herbes",
        description: "Jardin du moment, sauce verte, noisettes.",
        price: 24,
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      {
        name: "Chocolat, sel, café",
        description: "Ganache sombre, crumble, glace café.",
        price: 12,
      },
      {
        name: "Fruits de saison, sabayon",
        description: "Selon le marché, herbes fraîches.",
        price: 11,
      },
    ],
  },
];

export const menuPreviewItems = [
  menu[0].items[1],
  menu[1].items[0],
  menu[1].items[1],
  menu[2].items[0],
];
