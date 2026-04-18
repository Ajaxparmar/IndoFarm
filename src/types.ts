export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'dry-fruits' | 'lucky-stones';
  image: string;
  rating: number;
  reviewsCount: number;
  stock: number;
  isFavorite?: boolean;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  paymentStatus: 'paid' | 'unpaid';
  address: {
    name: string;
    street: string;
    city: string;
    zip: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  isAdmin?: boolean;
  wishlist?: string[];
}
