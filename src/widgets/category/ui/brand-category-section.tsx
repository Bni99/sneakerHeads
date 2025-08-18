import { Link } from "react-router-dom";
import { SiAdidas, SiJordan, SiNike, SiPuma, SiReebok } from "react-icons/si";

const brandCategories = [
  {
    categoryName: "Nike",
    link: "/topBrands/nike",
    logo: <SiNike size={72} />,
  },
  {
    categoryName: "Puma",
    link: "/topBrands/puma",
    logo: <SiPuma size={72} />,
  },
  {
    categoryName: "Jordan",
    link: "/topBrands/jordans",
    logo: <SiJordan size={72} />,
  },
  {
    categoryName: "Adidas",
    link: "/topBrands/adidas",
    logo: <SiAdidas size={72} />,
  },
  {
    categoryName: "Reebok",
    link: "/topBrands/reebok",
    logo: <SiReebok size={72} />,
  },
];

const BrandCategoriesSection = () => {
  return (
    <div className="mt-24 border-2 border-black">
      <h2 className="font-display text-brand-dark-blue p-4 pl-0 text-2xl font-bold">
        Explore Our Top Brands
      </h2>
      <div className="mt-12 flex h-full border-2 border-red-700">
        {brandCategories.map((category) => {
          return (
            <div className="hover:bg-brand-light-grey border-brand-light-grey m-2 ml-0 flex flex-1 justify-center border-2 p-6 pl-0">
              <div>
                <Link to={category.link}>{category.logo}</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrandCategoriesSection;
