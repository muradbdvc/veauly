import React from "react";
import Navbar from "./../navbar/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="pt-8 text-white">
        {/*Logo*/}
        <a href="/" className="text-3xl beautique font-light absolute py-2">
          Veauly
        </a>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
