import React from "react";
import Featured from "../featured/Featured";

const Work = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Our Work</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our portfolio of creative projects and see how we've helped brands transform their digital presence.
          </p>
        </div>
        <Featured />
      </div>
    </div>
  );
};

export default Work;
