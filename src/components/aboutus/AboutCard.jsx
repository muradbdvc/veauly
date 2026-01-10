import React from 'react';

export const AboutCard = ({ content }) => {
  return (
    <div className="radial-gradient-violet p-8 md:p-12 rounded-3xl text-white flex-1">
      <div className="flex flex-col h-full">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {content.heading}
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-100">
            {content.description}
          </p>
        </div>
        <div className="mt-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {content.details}
          </h3>
        </div>
      </div>
    </div>
  );
};