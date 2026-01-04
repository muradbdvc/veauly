import React from "react";
import branding from "../../assets/branding.jpg";
import branding1 from "../../assets/branding1.jpg";
import technology from "../../assets/technology.jpg";
import identity from "../../assets/identity.jpg";

const Featured = () => {
  return (
    <div className="container h-screen">
      <span className="py-12">Featured Works</span>
      <div className="relative">
        <div className="overflow-hidden relative rounded-lg my-8 absolute">
          <img src={branding} alt="branding" />
          <div className="absolute top-1/3 left-3/7 text-white text-center">
            <h2>Reisfell</h2>
          </div>
          <div className="absolute bottom-0 left-0 w-full flex justify-between text-white p-3">
            <div>Branding</div>
            <div>Aug 19, 2025</div>
          </div>
        </div>
        <div className="overflow-hidden hidden relative rounded-lg my-8 absolute top-0 left-0">
          <img src={branding1} alt="branding1" />
          <div className="absolute top-1/3 left-3/7 text-white text-center">
            <h2>Reisfell</h2>
          </div>
          <div className="absolute bottom-0 left-0 w-full flex justify-between text-white p-3">
            <div>Branding</div>
            <div>Aug 19, 2025</div>
          </div>
        </div>
        <div className="overflow-hidden hidden relative rounded-lg">
          <img src={technology} alt="technology" />
          <div className="absolute top-1/3 left-3/7 text-white text-center">
            <h2>Reisfell</h2>
          </div>
          <div className="absolute bottom-0 left-0 w-full flex justify-between text-white p-3">
            <div>Branding</div>
            <div>Aug 19, 2025</div>
          </div>
        </div>
        <div className="overflow-hidden hidden relative rounded-lg">
          <img src={identity} alt="identity" />
          <div className="absolute top-1/3 left-3/7 text-white text-center">
            <h2>Reisfell</h2>
          </div>
          <div className="absolute bottom-0 left-0 w-full flex justify-between text-white p-3">
            <div>Branding</div>
            <div>Aug 19, 2025</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
