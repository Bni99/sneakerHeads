import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

type HeroSectionProps = {
  imgSrc: string;
  heading: string;
  description: string;
  link: string;
  linkText: string;
};

const HeroSection = ({
  imgSrc,
  heading,
  description,
  link,
  linkText,
}: HeroSectionProps) => {
  return (
    <div className="relative h-[90vh] border-2 border-blue-400">
      <img
        src={imgSrc}
        alt="hero-image"
        className="h-full w-full object-cover"
      ></img>
      <div className="absolute top-20 left-10 w-[30%]">
        <h2 className="font-display text-brand-dark-blue p-4 pl-0 text-5xl font-extrabold">
          {heading}
        </h2>
        <h4 className="text-brand-dark-grey p-2 pl-0 text-lg">{description}</h4>
        <Link
          to={link}
          className="font-display bg-brand-orange mt-2 flex w-fit items-center gap-1 rounded-md p-1 pr-3 pl-3 font-bold"
        >
          {linkText}
          <GoArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
