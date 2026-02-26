export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  details?: string[];
  isFeatured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Category = 'Tailoring' | 'Street Essentials' | 'Accessories' | 'New Arrivals';
