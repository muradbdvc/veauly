import React from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../../data';

const Navbar = ({ className: wrapperClassName = '' }) => {
  return (
    <div className={`navbar_wrapper ${wrapperClassName}`}>
      {/* Logo Section */}
      <div className="absolute top-8 left-8 z-[51]">
        <NavLink 
          to="/" 
          className="text-white text-2xl font-bold hover:text-gray-300 transition-colors"
        >
          Veauly
        </NavLink>
      </div>
      
      {/* Navigation Menu */}
      <div className="relative flex justify-center items-center py-8">
        <div className="glass-morphism-dark">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id} className="list-none">
                {item.label === 'Contact' ? (
                  <NavLink 
                    to="/contact" 
                    className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg transition-all duration-200 inline-block font-medium"
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <NavLink 
                    to={item.url} 
                    className={({ isActive }) => `
                      text-white hover:bg-white/10 px-6 py-4 rounded-lg transition-all duration-200 inline-block font-medium
                      ${isActive ? 'bg-white/20' : ''}
                    `}
                  >
                    {item.label}
                  </NavLink>
                )}  
              </li>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;