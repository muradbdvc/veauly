import React from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../../data';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar_wrapper">
      {/* Logo Section */}
      <div className="navbar__logo-wrap-2">
        <NavLink to="/" className="navbar__link btn-wrap w-inline-block">
          <div className="text-block-2">Veauly</div>
        </NavLink>
      </div>
 
      {/* Navigation Menu */}
      <div className="navbar_outline">
        <div className="nav-wrapper glowing-wrapper-active menu">
          <nav className="menu">
            <ul className="navroad menu">
              {navItems.map((item, index) => {
                return (
                  <li key={item.id}>
                    {item.label === 'Contact' ? (
                      <NavLink 
                        to="/contact" 
                        className="button-contact w-inline-block"
                      >
                        <div className="button__inner">
                          <div className="button__text">{item.label}</div>
                        </div>
                      </NavLink>
                    ) : (
                      <NavLink 
                        to={item.url} 
                        className="navbar_button w-inline-block"
                      >
                        <div className="navbar_button-text">{item.label}</div>
                      </NavLink>
                    )}  
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;