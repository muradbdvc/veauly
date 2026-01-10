import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <div className="container mx-auto py-20">
        <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
        <p className="text-lg text-gray-300 mb-6">
          We are a creative studio that transforms bold ideas into standout brands through strategy, design, and marketing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To create meaningful, lasting connections between brands and their audiences through innovative design and strategic marketing.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300">
              To be the leading creative studio that pushes boundaries of design and technology to deliver exceptional experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
