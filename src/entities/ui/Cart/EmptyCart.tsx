import { useNavigate } from "react-router-dom";
import { Button } from "../../../shared";

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-[70vh] w-full flex-col items-center justify-center">
      <img
        src="/images/cart/empty-cart.png"
        className="h-96"
        alt="Empty cart"
      />
      <h4 className="text-brand-dark-grey p-2">Let's add some items :)</h4>
      <Button
        className="mt-2 cursor-pointer"
        onClick={() => navigate("/collections")}
      >
        Back to Collections
      </Button>
    </div>
  );
};

export default EmptyCart;
