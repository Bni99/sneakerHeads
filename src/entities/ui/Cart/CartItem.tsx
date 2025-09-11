import { useCartStore } from "../../../shared";
import { formatCurrency } from "../../../shared/utils";
import type { CartItemType } from "../../../types";
import { RxCross2 } from "react-icons/rx";

type CartItemProps = {
  item: CartItemType;
};

const CartItem = ({ item }: CartItemProps) => {
  const { id, title, image, price, size } = item;
  const removeItem = useCartStore((state) => state.removeItem);

  const handleRemoveItem = () => {
    removeItem(id);
  };

  return (
    <div
      key={`${id}`}
      className="border-brand-light-grey relative mb-4 flex h-44 w-[80%] border shadow-sm"
    >
      <div>
        <img src={image} className="h-full" alt={title} />
      </div>
      <div className="flex-1 px-5">
        <h2 className="pt-4 text-lg font-bold">{title}</h2>
        <h4 className="text-brand-dark-grey py-1">{formatCurrency(price)}</h4>
        <h4 className="text-sm">
          <span className="font-bold">Size: </span>
          {size}
        </h4>
      </div>
      <div>
        <RxCross2
          className="text-brand-dark-grey absolute top-0 right-0 m-3 cursor-pointer"
          size={22}
          onClick={handleRemoveItem}
        />
      </div>
    </div>
  );
};

export default CartItem;
