import { FaStar } from "react-icons/fa";

type ProductCardRatingProps = {
  rating: number;
  numberOfReviews: number;
};

const ProductCardRating = ({
  rating,
  numberOfReviews,
}: ProductCardRatingProps) => {
  return (
    <div className="flex items-center gap-1 bg-white px-[2px]">
      <span className="text-sm font-semibold text-black">
        {rating.toFixed(1)}
      </span>{" "}
      <FaStar className="text-yellow-400" />|{" "}
      <span className="text-brand-dark-grey text-sm font-semibold">
        {numberOfReviews}
      </span>
    </div>
  );
};

export default ProductCardRating;
