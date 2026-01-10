import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="w-full hero-section">
      <div></div>
      <div className="h-screen">
        <h1 className="absolute hero-header top-2/3 left-1/3 text-white font-light Beautiquedisplay">
          Veauly
        </h1>
        <div className="flex justify-around mt-40 -mx-30">
          <div className="font-outfit tracking-wide text-2xl">
            Design Agency<sup>&reg;</sup>
          </div>
          <div className="grid col-span-full font-outfit tracking-wide text-lg font-thin">
            <span>UX/UI Design</span>
            <span>Development</span>
            <span>Management</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Hero);
