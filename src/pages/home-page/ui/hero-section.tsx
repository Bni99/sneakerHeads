import { Link } from "react-router-dom";
import heroImage from "../assets/hero-section-img.jpg";
import { GoArrowRight } from "react-icons/go";

const HeroSection = () => {
  return (
    <div className=" border-2 border-blue-400 relative h-[90vh]">
      <img
        src={heroImage}
        alt="hero-image"
        className="object-cover h-full w-full"
      ></img>
      <div className="border-2 border-black w-[30%] absolute top-20 left-10">
        <h2 className="text-5xl font-extrabold p-4 pl-0">Up To 40% Off</h2>
        <h4 className="text-lg p-2 pl-0">
          For a limited time only — Grab your pair before they’re gone !
        </h4>
        <Link
          to="/collections"
          className="flex items-center gap-1 font-semibold"
        >
          Shop Now <GoArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
