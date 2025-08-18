import { Link } from "react-router-dom";

type VideoSectionProps = {
  videoSrc: string;
  heading: string;
  subHeading: string;
  link: string;
};

const VideoSection = ({
  videoSrc,
  heading,
  subHeading,
  link,
}: VideoSectionProps) => {
  return (
    <section className="relative mt-12 h-[80vh] overflow-hidden">
      <video
        className="absolute inset-0"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex h-full items-center border-2 border-white text-white">
        <div className="max-w-92 flex-col border-2 border-white">
          <h2 className="font-display p-4 text-3xl font-bold text-white drop-shadow-lg">
            {heading}
          </h2>
          <p className="p-4 pt-0 text-lg drop-shadow-md">{subHeading}</p>
          <Link to={link} className="m-4 mt-0 rounded-lg bg-white text-black">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
