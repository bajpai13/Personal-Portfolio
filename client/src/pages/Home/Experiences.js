import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;

  return (
    <div>
      <SectionTitle title="Experience" />
      <div className="flex py-10 gap-24 sm:flex-col">
        <div className="flex flex-col gap-8 border-l-2 border-[#135d4c85] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.map((experience, index) => (
            <div
              key={index} // Added key prop to avoid React warnings
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-10 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7d5a32] py-3 sm:w-full"
                    : "text-white"
                }`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 w-2/3 sm:w-full">
          <h1 className="text-secondary text-2xl font-semibold">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-xl">
            {experiences[selectedItemIndex].company}
          </h1>
          <p className="text-white text-lg">
            {experiences[selectedItemIndex].description}
          </p>
          {/* Display image with object-cover */}
          {experiences[selectedItemIndex].image && (
            <div className="w-full h-64 sm:h-48">
              <img
                src={experiences[selectedItemIndex].image}
                alt={experiences[selectedItemIndex].title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Experiences;
