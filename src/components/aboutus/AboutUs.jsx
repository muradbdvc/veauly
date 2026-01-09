import React from "react";
import "./aboutus.scss";
import about from "../../assets/about.avif";

const AboutUs = () => {
  return (
    <div className="h-screen container my-20 p-4 overflow-hidden">
      <div className="aboutus-title text-black mx-auto">Why Work With Us</div>
      <div className="flex gap-5">
        <div className="grow rounded-lg about">
          <h3>Why us?</h3>
          <p className="w-xs my-4">
            Elevate your brand with a studio that brings strategy, design,
            motion, and technology together — delivering visuals that stand out,
            stories that resonate, and digital experiences built to perform.
          </p>
          <div className="text-4xl">
            Choosing the right studio matters — especially when your brand needs
            to stand out, move, and perform. We combine design, motion, and web
            to deliver work that makes an instant impact and keeps your audience
            engaged.
          </div>
        </div>
        <div className="metrics">
          <h3>Metrics</h3>
          <img src={about} alt="" className="scale-250" />
          <div className="clint-review">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <div>
              <span>2M+</span>Happy clients.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
