import { Link } from "react-router-dom";

type Section = {
  id: number;
  sectionName: string;
  link: string;
  image: string;
};

type SplitSectionProps = { sections: Section[] };

export const SplitSection = ({ sections }: SplitSectionProps) => {
  return (
    <section className="m-12 mt-20 h-[100vh]">
      <div className="flex h-full w-full">
        {sections?.map((section) => (
          <div key={section.id} className="flex-1 p-6 pl-0">
            <Link to={section.link} className="block h-full">
              <div className="group relative h-full w-full overflow-hidden">
                <img
                  src={section.image}
                  alt={section.sectionName}
                  className="h-full w-full object-cover"
                />

                <div className="group-hover:bg-brand-black/12 bg-brand-grey/12 pointer-events-none absolute inset-0 transition-colors duration-400" />

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <h2 className="text-[28px] font-semibold text-white opacity-0 drop-shadow-lg duration-400 ease-out group-hover:opacity-100">
                    {section.sectionName}
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
