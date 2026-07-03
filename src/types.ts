export interface CoffeeItem {
  id: string;
  name: string;
  tagline: string;
  price: number;
  description: string;
  category: 'hot' | 'iced' | 'sweet';
  image: string;
  intensity: number; // 1-5 scale
  originDefault: string;
  ingredients: {
    name: string;
    percentage: number;
    color: string;
  }[];
}

export interface BeanOrigin {
  id: string;
  name: string;
  country: string;
  elevation: string;
  process: string;
  notes: string;
  description: string;
  acidity: number; // 0-100
  body: number; // 0-100
  sweetness: number; // 0-100
  bitterness: number; // 0-100
  priceKg: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    value: string;
  }[];
}
