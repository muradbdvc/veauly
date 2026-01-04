import React from "react";
import "./Testimonial.scss";
import man from "./../../assets/man.jpg";

const Testimonial = () => {
  return (
    <div className="container h-screen">
      <h3 className="font-sans text-2xl font-light py-16">
        Trusted by Clients
      </h3>
      <div className="testimonial flex text-black gap-12">
        <div className="card">
          <img src={man} alt="" />
          <p>
            "The team is efficient and reliable. They delivered everything they
            promised. I will definitely hire them again for future projects."
          </p>
          <h3>H. Rackham, Carrot</h3>
        </div>
        <div className="card">
          <img src={man} alt="" />
          <p>
            "The team is efficient and reliable. They delivered everything they
            promised. I will definitely hire them again for future projects."
          </p>
          <h3>H. Rackham, Carrot</h3>
        </div>
        <div className="card">
          <img src={man} alt="" />
          <p>
            "The team is efficient and reliable. They delivered everything they
            promised. I will definitely hire them again for future projects."
          </p>
          <h3>H. Rackham, Carrot</h3>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
