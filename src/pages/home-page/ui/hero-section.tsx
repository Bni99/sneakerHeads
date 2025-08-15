import { Link } from "react-router-dom";
import heroImage from "../assets/hero-section-img.jpg";
import { GoArrowRight } from "react-icons/go";

const HeroSection = () => {
  return (
    <div className="relative h-[90vh] border-2 border-blue-400">
      <img
        src={heroImage}
        alt="hero-image"
        className="h-full w-full object-cover"
      ></img>
      <div className="absolute top-20 left-10 w-[30%]">
        <h2 className="font-display text-brand-dark-blue p-4 pl-0 text-5xl font-extrabold">
          Up To 40% Off
        </h2>
        <h4 className="text-brand-dark-grey p-2 pl-0 text-lg">
          For a limited time only — Grab your pair before they’re gone !
        </h4>
        <Link
          to="/collections"
          className="font-display bg-brand-orange mt-2 flex w-fit items-center gap-1 rounded-md p-1 pr-3 pl-3 font-bold"
        >
          Shop Now <GoArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
