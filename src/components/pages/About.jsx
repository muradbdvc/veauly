import React from "react";
import { Card, Button } from "../ui";

const About = () => {
  return (
    <div className="about-page">
      <div className="container mx-auto py-20">
        <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
        <p className="text-lg text-gray-300 mb-6">
          We are a creative studio that transforms bold ideas into standout brands through strategy, design, and marketing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card variant="elevated" padding="large">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To create meaningful, lasting connections between brands and their audiences through innovative design and strategic marketing.
            </p>
          </Card>
          <Card variant="outlined" padding="large">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300">
              To be a leading creative studio that pushes boundaries of design and technology to deliver exceptional experiences.
            </p>
          </Card>
          <div className="text-center mt-8">
            <Button variant="primary" size="large">
              Learn More About Our Studio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;