import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

type Category = {
  id: number;
  categoryName: string;
  link: string;
  image: string;
};

type CategoriesSectionProps = {
  categoryTitle: string;
  categories: Category[];
};

const CategoriesSection = ({
  categoryTitle,
  categories,
}: CategoriesSectionProps) => {
  return (
    <section className="mt-12 border-2 border-black">
      <h2 className="font-display text-brand-dark-blue p-4 pl-0 text-2xl font-bold">
        {categoryTitle}
      </h2>
      <div className="flex h-full border-2 border-red-700">
        {categories?.map((category: Category) => {
          return (
            <div
              key={category?.id}
              className="flex-1 border-2 border-black p-6 pl-0"
            >
              <div>
                <Link to={category.link}>
                  <img src={category.image} alt={category.categoryName} />
                </Link>
              </div>
              <h4 className="p-4 pl-0 text-xl">
                <Link
                  to={category.link}
                  className="flex w-fit items-center gap-1 rounded-md p-1 pr-3 pl-3 font-bold"
                >
                  {category.categoryName} <GoArrowRight size={16} />
                </Link>
              </h4>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoriesSection;
