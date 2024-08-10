import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function About  ()  {
        const { loading, portfolioData } = useSelector((state) => state.root);
        const { about } = portfolioData;
        const { skills, description1, description2, imageURL } = about;
  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex w-full items-center sm:flex-col gap-16">
        <div className="h-[80vh] w-1/2 sm:mt-1 sm:w-3/5 sm:h-[60vh]">
          <img
            src={imageURL}
            alt="About"
            className="h-[65vh] ml-10 mt-8 border-4 border-tertiary sm:h-[50vh] sm:w-[60vw] sm:mx-auto object-contain"
          />
        </div>
        <div className="flex flex-col gap-16 w-1/2 sm:w-4/5 sm:gap-8">
          <p className="text-white text-lg sm:mt-5 sm:text-center">
            {description1 || ""}
          </p>

          <p className="text-white text-lg sm:text-center">
            {description2 || ""}
          </p>
        </div>
      </div>

      <div className="py-10">
        <h1 className="text-tertiary text-xl font-medium sm:text-center">
          Skills include:
        </h1>
        <div className="flex flex-wrap gap-16 mt-12 sm:grid sm:grid-cols-3 sm:gap-2 sm:mt-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-tertiary py-3 px-5 sm:px-2 sm:py-2"
            >
              <h1 className="text-tertiary text-base sm:text-xs">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About