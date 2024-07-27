import React from 'react'
import { useSelector } from 'react-redux';

function Intro  () {
    const { loading, portfolioData } = useSelector((state) => state.root);
    const {intro} = portfolioData;
    const {firstName, lastName, welcomeText, education, city, profileImage} = intro;
  return (
    <div className="h-[130vh] bg-primary flex flex-col items-center justify-center gap-7 py-10">
      <h1 className="text-tertiary/90 font-light text-8xl pb-10 sm:text-4xl">
        {welcomeText || ""}
      </h1>
      <img
        src={profileImage}
        className="w-64 h-64 rounded-full object-cover sm:w-48 sm:h-48"
        alt="Profile"
      />
      <h1 className="text-secondary font-md text-3xl sm:text-3xl sm:text-center">
        {firstName || ""} {lastName || ""}
      </h1>
      <h1 className="text-white font-light text-xl  sm:text-xl sm:text-center">
        {education || ""}
      </h1>
      <h1 className="text-white font-light text-md sm:text-xl sm:text-center">
        {city || ""}
      </h1>
    </div>
  );
}

export default Intro