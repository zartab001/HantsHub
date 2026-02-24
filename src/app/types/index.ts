export interface Category {
  id: string;
  name: string;
  icon?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  price?: number;
}