import { Link } from "react-router-dom";
import ProductTag from "./ProductTag";
import type { Product } from "../../../types";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, image, title, price, tags } = product;
  return (
    <Link to={`/product/${id}`}>
      <div className="relative w-80 border-2 border-black" key={id}>
        <img src={image} />
        <span className="absolute top-2 left-2">
          <ProductTag labels={tags} />
        </span>
        <h4 className="p-2 pl-0 text-lg">{title}</h4>
        <span className="font-bold">
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
