import React from "react";
import { navItems } from "./data";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Navbar.scss";
import { Home, About, Work, Contact } from "../pages";

const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
        {/** Mobile Menu */}
        <nav className="flex justify-center mx-auto absolute right-0 top-0 left-0 pt-8">
          <ul className="flex flex-raw space-x-10 rounded-4xl pl-5 border-2 border-White-lite">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link href={item.url}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
