import React from "react";
import { aboutContent, aboutMetrics } from "../../data/index";
import about from "../../assets/about.avif";
import { AboutCard } from "./AboutCard";
import { MetricsCard } from "./MetricsCard";

const AboutUs = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            {aboutContent.title}
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <AboutCard content={aboutContent.card} />
          <MetricsCard metrics={aboutMetrics} image={about} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
