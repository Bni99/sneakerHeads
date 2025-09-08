export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  rating?: number;
  image: string;
  images: string[];
  availableSizes: string[];
  tags?: string[];
  numberOfReviews?: number;
};
