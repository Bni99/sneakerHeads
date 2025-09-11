import { create } from "zustand";
import type { CartItemType } from "../../types";

type CartStoreState = {
  items: CartItemType[];
  addItem: (item: CartItemType) => void;
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
