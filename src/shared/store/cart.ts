import { create } from "zustand";
import type { CartItemType } from "../../types";

type CartStoreState = {
  items: CartItemType[];
  totalItems: number;
  totalPrice: number;
  addItem: (item: CartItemType) => void;
  removeItem: (itemId: number, size: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStoreState>((set) => ({
  items: [],
  totalItems: 0,
  totalPrice: 0,

  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find(
        (i) => i.id === item.id && i.size === item.size,
      );
      let updatedItems;
      if (existingItem) {
        updatedItems = state.items.map((i) =>
          i.id === item.id && i.size === item.size
            ? { ...i, quantity: i.quantity + 1 }
            : i,
        );
      } else {
        updatedItems = [...state.items, { ...item, quantity: 1 }];
      }

      const totalItems = updatedItems.reduce((sum, i) => sum + i.quantity, 0);

      const totalPrice = updatedItems.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0,
      );

      return {
        items: updatedItems,
        totalItems,
        totalPrice,
      };
    }),

  removeItem: (itemId, size) =>
    set((state) => {
      const filteredItems = state.items.filter(
        (item) => !(item.id === itemId && item.size === size),
      );
      const totalItems = filteredItems.reduce((sum, i) => sum + i.quantity, 0);
      const totalPrice = filteredItems.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0,
      );

      return {
        items: filteredItems,
        totalItems,
        totalPrice,
      };
    }),

  clearCart: () =>
    set({
      items: [],
      totalItems: 0,
      totalPrice: 0,
    }),
}));
