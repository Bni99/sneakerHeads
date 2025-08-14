import menImg from "../assets/category-men.jpg";
import womenImg from "../assets/category-women.jpg";
import kidImg from "../assets/category-kid.jpg";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const CategoriesSection = () => {
  const categories = [
    {
      categoryName: "Men",
      link: "/men",
      image: menImg,
    },
    { categoryName: "Women", link: "/women", image: womenImg },
    { categoryName: "Kids", link: "/kids", image: kidImg },
  ];
  return (
    <div className="border-2 border-black">
      <h2 className="text-2xl p-4 pl-0 font-bold">Explore by Category</h2>
      <div className="border-2 border-red-700 flex h-full">
        {categories.map((category) => {
          return (
            <div className="border-2 border-black flex-1 p-6 pl-0">
              <div>
                <Link to={category.link}>
                  <img src={category.image} />
                </Link>
              </div>
              <h4 className="text-xl p-4 pl-0">
                <Link to={category.link} className="flex gap-1 items-center">
                  {category.categoryName} <GoArrowRight size={16} />
                </Link>
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesSection;
