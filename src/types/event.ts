export type RestaurantEvent = {
  slug: string;
  title: string;
  date: string;
  description: string;
  image: string;
  featured?: boolean;
  price?: number;
  reservationNote?: string;
};
