import type { CartItemType } from "../../../types";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

type CartItemsProps = {
  items: CartItemType[];
};

const CartItems = ({ items }: CartItemsProps) => {
  if (!items || items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="flex-3 flex-col border p-2 pl-0">
      {items.map((item) => (
        <CartItem item={item} />
      ))}
    </div>
  );
};

export default CartItems;
