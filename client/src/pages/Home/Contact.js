import React from 'react'
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

function Contact() {
    
     const { portfolioData } = useSelector((state) => state.root);
     const { contact } = portfolioData;
  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-white/60 text-4xl">{"{"}</h1>
          {Object.keys(contact).map(
            (key) =>
              key !== "_id" && (
                <h1 key={key} className="ml-12 mt-2">
                  <span className="text-tertiary text-2xl font-light sm:text-xl">
                    {key} :{" "}
                  </span>
                  <span className="text-tertiary text-2xl font-light sm:text-xl">
                    {contact[key]}
                  </span>
                </h1>
              )
          )}
          <h1 className="text-white/60 text-4xl">{"}"}</h1>
        </div>
        <div className="h-[80vh] sm:h-auto sm:mt-8 sm:flex sm:justify-center">
          <img
            src="/1.jpg"
            className="h-[60vh] sm:h-auto sm:w-full sm:max-h-[60vh] sm:px-4 sm:object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact