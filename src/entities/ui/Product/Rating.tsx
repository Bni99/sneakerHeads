import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

type RatingProps = {
  rating: number;
  maxRating?: number;
  showNumber?: boolean;
  numberOfReviews: number;
};

const Rating = ({
  rating,
  maxRating = 5,
  showNumber = true,
  numberOfReviews,
}: RatingProps) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = maxRating - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: fullStars }).map((_, i) => (
        <FaStar key={`full-${i}`} className="text-yellow-400" />
      ))}
      {halfStar && <FaStarHalfAlt className="text-yellow-400" />}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="text-yellow-400" />
      ))}

      {showNumber && (
        <>
          <span className="text-sm font-semibold text-black">
            {rating.toFixed(1)}
          </span>

          <span className="text-brand-dark-grey text-sm font-semibold">
            ({numberOfReviews})
          </span>
        </>
      )}
    </div>
  );
};

export default Rating;
