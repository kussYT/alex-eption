export type MenuItem = {
  name: string;
  description: string;
  price: number;
};

export type MenuCategory = {
  id: string;
  title: string;
  description?: string;
  items: MenuItem[];
};
