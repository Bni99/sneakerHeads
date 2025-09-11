import { create } from "zustand";
import type { CartItemType } from "../../types";

type CartStoreState = {
  items: CartItemType[];
  addItem: (item: CartItemType) => void;
  totalItems: number;
  removeItem: (itemId: number) => void;
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
  removeItem: (itemId) =>
    set((state) => {
      const filteredItems = state.items.filter((item) => {
        return item.id !== itemId;
      });
      return {
        items: filteredItems,
        totalItems: filteredItems.length,
      };
    }),
}));
