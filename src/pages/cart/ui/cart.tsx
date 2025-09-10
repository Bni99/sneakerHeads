import { useCartStore } from "../../../shared";

const Cart = () => {
  const items = useCartStore((store) => store.items);
  return (
    <div className="mx-42 mt-12 h-[90vh] border">
      {items.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        items.map((item) => {
          return (
            <div className="border">
              <img src={item.image} className="h-24" />
              {item.title}
              {item.price}
              {item.size}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Cart;
