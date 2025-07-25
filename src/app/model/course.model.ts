export interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  startDate?: string;
  category?: string;
  duration?: string;
  image?: string;
  soldOut?: boolean;
  onSale?: boolean;
}
