import menImg from "../../../widgets/category/assets/category-men.jpg";
import womenImg from "../../../widgets/category/assets/category-women.jpg";
import kidImg from "../../../widgets/category/assets/category-kid.jpg";
import newArrivalsImg from "../../../widgets/category/assets/new-arrivals.jpg";
import bestSellersImg from "../../../widgets/category/assets/best-sellers.jpg";

export const categories = [
  { id: 1, categoryName: "Men", link: "/men", image: menImg },
  { id: 2, categoryName: "Women", link: "/women", image: womenImg },
  { id: 3, categoryName: "Kids", link: "/kids", image: kidImg },
];

export const specialSection = [
  {
    id: 1,
    sectionName: "New Arrivals",
    link: "/collections/new-arrivals",
    image: newArrivalsImg,
  },
  {
    id: 2,
    sectionName: "Best Sellers",
    link: "/collections/best-sellers",
    image: bestSellersImg,
  },
];
