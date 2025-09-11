import { CartItems } from "../../../entities";
import { useCartStore } from "../../../shared";

const Cart = () => {
  const items = useCartStore((store) => store.items);
  return (
    <div className="mx-42 mt-12 h-[90vh] border">
      <div className="flex">
        <CartItems items={items} />
        {items.length > 0 && <div className="flex-2 border">Order Summary</div>}
      </div>
    </div>
  );
};

export default Cart;
