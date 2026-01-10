import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer h-screen content-center px-auto">
        <h1 className="mx-auto text-white">Let's Talk</h1>
        <button
          className="bg-white text-black px-10 py-6 mx-auto rounded-full hover:bg-white hover:text-black border border-black transition-all duration-300 font-outfit uppercase text-xs tracking-widest font-bold
font-extrabold"
        >
          Start
        </button>
      </div>
      <section>
        <div className="fixed-footer py-36 mx-16">
          <h1 className="text-3xl text-black footer-brand-name">
            Veauly Studio
          </h1>
        </div>
      </section>
    </>
  );
};

export default Footer;
