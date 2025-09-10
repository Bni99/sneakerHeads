import { create } from "zustand";

type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  size: string | null;
};

type CartStoreState = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  totalItems: number;
};

export const useCartStore = create<CartStoreState>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      const updatedItems = [...state.items, item];
      return {
        items: updatedItems,
        totalItems: updatedItems.length,
      };
    }),
  totalItems: 0,
}));
