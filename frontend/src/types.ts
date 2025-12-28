
export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  originalPrice?: number;
  image: string;
  gallery?: string[]; // Supplement images for product detail view
  brand: string;
  rating: number;
  reviewCount: number;
  description: string;
  category: string;
  sizes?: string[];
  colors?: string[];
  inStock: boolean;
  isStartingPrice?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface FilterState {
  brands: string[];
  priceRange: [number, number];
  sizes: string[];
  colors: string[];
}

export interface Review {
  id: string;
  user: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

export type View = 'home' | 'grid' | 'detail' | 'about' | 'contact' | 'blog' | 'account' | 'checkout' | 'reviews';
