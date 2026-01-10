import React from "react";
import "./aboutus.scss";
import { aboutContent, aboutMetrics } from "../../data/index";
import about from "../../assets/about.avif";
import { AboutCard } from "./AboutCard";
import { MetricsCard } from "./MetricsCard";

const AboutUs = () => {
  return (
    <div className="h-screen container my-20">
      <div className="aboutus-title text-black mx-auto">
        {aboutContent.title}
      </div>
      <div className="wrap-content">
        <AboutCard content={aboutContent.card} />
        <MetricsCard metrics={aboutMetrics} image={about} />
      </div>
    </div>
  );
};

export default AboutUs;
