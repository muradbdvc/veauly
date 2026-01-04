import React from "react";
import { navItems } from "./data";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div>
      {/** Mobile Menu */}
      <nav className="flex justify-center mx-auto absolute right-0 top-0 left-0 pt-8">
        <ul className="flex flex-raw space-x-10 rounded-4xl pl-5 border-2 border-White-lite">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
