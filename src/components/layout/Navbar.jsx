import React, { useState } from 'react';
// src/components/layout/Navbar.jsx
import { navLinks } from "../../constants";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50  bg-opacity-90 backdrop-blur-sm shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-2xl font-bold text-cyan-400">Dipankar Mandal</a>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="text-gray-300 hover:text-cyan-400 underline transition duration-300">{link.title}</a>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes className="text-white h-6 w-6" /> : <FaBars className="text-white h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="block text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>{link.title}</a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;