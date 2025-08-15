import newArrivalsImg from "../assets/new-arrivals.jpg";
import limitedEditionImg from "../assets/limited-edition.jpg";
import bestSellersImg from "../assets/best-sellers.jpg";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const specialCollections = [
  {
    title: "New Arrivals",
    link: "/collections/new-arrivals",
    image: newArrivalsImg,
  },
  {
    title: "Limited Edition",
    link: "/collections/limited-edition",
    image: limitedEditionImg,
  },
  {
    title: "Best Sellers",
    link: "/collections/best-sellers",
    image: bestSellersImg,
  },
];

const SpecialCategoriesSection = () => {
  return (
    <div className="mt-24 border-2 border-black">
      <h2 className="font-display text-brand-dark-blue p-4 pl-0 text-2xl font-bold">
        Special Collection
      </h2>
      <div className="flex h-full border-2 border-red-700">
        {specialCollections.map((category) => {
          return (
            <div className="flex-1 border-2 border-black p-6 pl-0">
              <div>
                <Link to={category.link}>
                  <img src={category.image} />
                </Link>
              </div>
              <h4 className="p-4 pl-0 text-xl">
                <Link
                  to={category.link}
                  className="flex w-fit items-center gap-1 rounded-md p-1 pr-3 pl-3 font-bold"
                >
                  {category.title} <GoArrowRight size={16} />
                </Link>
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpecialCategoriesSection;
