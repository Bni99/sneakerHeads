import type { CartItemType } from "../../../types";
import EmptyCart from "./EmptyCart";

type CartItemsProps = {
  items: CartItemType[];
};

const CartItems = ({ items }: CartItemsProps) => {
  if (!items || items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="flex-4 border p-2 pl-0">
      {items.map((item) => (
        <div key={`${item.id}-${item.size}`} className="mb-4 flex border">
          <div className="border">
            <img src={item.image} className="h-36" alt={item.title} />
          </div>
          <div className="flex-1 border">
            <h2 className="px-3 pt-4 font-bold">{item.title}</h2>
            <h4 className="text-brand-dark-grey px-3 py-1">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "USD",
              }).format(item.price)}
            </h4>
            <h4 className="px-3 text-sm">
              <span className="font-bold">Size: </span>
              {item.size}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
