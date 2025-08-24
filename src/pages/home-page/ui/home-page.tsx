import { categories, specialSection } from "../config";
import {
  BrandCategoriesSection,
  CategoriesSection,
  SplitSection,
} from "../../../widgets/category";
import { HeroSection, VideoSection } from "../../../widgets/hero-section";
import heroImage from "../../../widgets/hero-section/assets/hero-section-img.jpg";

const HomePage = () => {
  return (
    <>
      <HeroSection
        imgSrc={heroImage}
        heading=" Up To 40% Off"
        description=" For a limited time only — Grab your pair before they’re gone !"
        link="/collections"
        linkText="Shop Now"
      />
      <CategoriesSection
        categoryTitle="Explore by Category"
        categories={categories}
      />
      <VideoSection
        videoSrc="src/widgets/hero-section/assets/sports.mp4"
        heading=" Play hard. Look Good."
        subHeading="Sneakers designed for athletes who never stop moving."
        link="#"
      />
      <BrandCategoriesSection />
      <SplitSection sections={specialSection} />
    </>
  );
};

export default HomePage;
