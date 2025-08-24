import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../shared";

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
  const navigate = useNavigate();
  return (
    <div className="relative mr-42 ml-42 h-[90vh]">
      <img
        src={imgSrc}
        alt="hero-image"
        className="h-full w-full object-cover"
      ></img>
      <div className="absolute top-30 left-30 w-[30%]">
        <h2 className="font-display text-brand-dark-blue p-4 pl-0 text-5xl font-extrabold">
          {heading}
        </h2>
        <h4 className="text-brand-dark-grey p-2 pl-0 text-lg">{description}</h4>
        <Button onClick={() => navigate(`${link}`)} className="mt-2">
          {linkText} <GoArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
