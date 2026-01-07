import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer h-screen content-center mx-auto">
        <h1>Let's Talk</h1>
        <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-white hover:text-black border border-black transition-all duration-300 font-outfit uppercase text-xs tracking-widest">
          View Project
        </button>
      </div>
    </>
  );
};

export default Footer;
