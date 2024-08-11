import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Projects  () {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-24 sm:flex-col">
        <div className="flex flex-col gap-8 border-l-2 border-[#135d4c85] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
            <div
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
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <img
            src={projects[selectedItemIndex].image}
            alt=""
            className="h-60 w-72 object-contain"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-2xl font-md">
              <a
                href={projects[selectedItemIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {projects[selectedItemIndex].title}
              </a>
            </h1>

            <p className="text-white text-lg ">
              {projects[selectedItemIndex].description}
            </p>
            <p className="text-secondary text-lg">
              {projects[selectedItemIndex].technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`mr-4 ${
                    index < projects[selectedItemIndex].technologies.length - 1
                      ? "inline-block"
                      : ""
                  }`}
                >
                  {tech}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
