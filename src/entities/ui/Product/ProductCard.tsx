import { Link } from "react-router-dom";
import ProductTag from "./ProductTag";
import type { ProductType } from "../../../types";
import { formatCurrency } from "../../../shared/utils";
import ProductCardRating from "./ProductCardRating";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, image, title, price, tags, rating, numberOfReviews } = product;
  return (
    <Link to={`/product/${id}`}>
      <div
        className="border-brand-light-grey hover:border-brand-dark-grey relative w-80 border shadow-sm transition-all duration-300 hover:shadow-md"
        key={id}
      >
        <img src={image} className="h-80 w-full" />
        <span className="absolute top-2 left-2">
          {tags && <ProductTag labels={tags} />}
        </span>
        <span className="absolute top-70 left-2">
          <ProductCardRating
            rating={rating || 0}
            numberOfReviews={numberOfReviews || 0}
          />
        </span>
        <h4 className="p-2 text-lg">{title}</h4>
        <div className="flex justify-between">
          <span className="block p-2 font-bold">{formatCurrency(price)}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
