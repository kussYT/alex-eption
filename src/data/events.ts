import type { RestaurantEvent } from "@/types/event";

export const events: RestaurantEvent[] = [
  {
    slug: "carte-de-saison",
    title: "Nouvelle carte de saison",
    date: "2026-03-17",
    description:
      "La carte change avec les arrivages. Produits du moment, plats recalibrés, desserts plus clairs.",
    image: "/images/events/event-01.jpg",
    featured: true,
  },
  {
    slug: "soir-vins",
    title: "Un soir autour des vins",
    date: "2026-04-09",
    description:
      "Quelques cuvées de la cave, servies avec des assiettes pensées pour elles. Places limitées.",
    image: "/images/events/event-02.jpg",
  },
  {
    slug: "table-de-fete",
    title: "Table de fête",
    date: "2026-05-16",
    description:
      "Un menu unique, une salle un peu plus habillée. Pour un dîner qui sort de la semaine.",
    image: "/images/restaurant/salle.jpg",
  },
];

export const featuredEvents = events.filter((event) => event.featured).slice(0, 3);
