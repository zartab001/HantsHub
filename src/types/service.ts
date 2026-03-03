export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  category: Category;
  image: string;
  location: string;
  createdAt: string;

  phone?: string; // optional phone number
  email?: string; // optional email address
}
