import menImg from "../../../widgets/category/assets/category-men.jpg";
import womenImg from "../../../widgets/category/assets/category-women.jpg";
import kidImg from "../../../widgets/category/assets/category-kid.jpg";
import newArrivalsImg from "../../../widgets/category/assets/new-arrivals.jpg";
import limitedEditionImg from "../../../widgets/category/assets/limited-edition.jpg";
import bestSellersImg from "../../../widgets/category/assets/best-sellers.jpg";

export const categories = [
  { id: 1, categoryName: "Men", link: "/men", image: menImg },
  { id: 2, categoryName: "Women", link: "/women", image: womenImg },
  { id: 3, categoryName: "Kids", link: "/kids", image: kidImg },
];

export const specialCategories = [
  {
    id: 1,
    categoryName: "New Arrivals",
    link: "/collections/new-arrivals",
    image: newArrivalsImg,
  },
  {
    id: 2,
    categoryName: "Limited Edition",
    link: "/collections/limited-edition",
    image: limitedEditionImg,
  },
  {
    id: 3,
    categoryName: "Best Sellers",
    link: "/collections/best-sellers",
    image: bestSellersImg,
  },
];
