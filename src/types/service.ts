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

  //Contact information
  phone?: string;
  email?: string;
  website?: string;

  //Address information
  address?: string;

  // Business info
  openingHours?: string;

  // External links
  bookingUrl?: string;

  //Map location support
  coordinates?: {
    latitude?: number;
    longitude?: number;
  };
}
