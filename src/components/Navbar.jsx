'use client'
import React, { useState } from 'react';

const AnimatedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">
                Portfolio
              </h1>
            </div>

            {/* Hamburger Menu Button - Now visible on all screen sizes */}
            <div className="block">
              <button
                onClick={toggleMenu}
                className="relative inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger Icon */}
                <div className="w-6 h-6 relative">
                  <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-1'
                  }`}></span>
                  <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out translate-y-2.5 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                  <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Now shows on all screen sizes */}
        <div className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-black/95`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white block px-3 py-3 text-lg font-medium transition-colors duration-200 hover:bg-gray-800 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white block px-3 py-3 text-lg font-medium transition-colors duration-200 hover:bg-gray-800 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white block px-3 py-3 text-lg font-medium transition-colors duration-200 hover:bg-gray-800 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white block px-3 py-3 text-lg font-medium transition-colors duration-200 hover:bg-gray-800 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white block px-3 py-3 text-lg font-medium transition-colors duration-200 hover:bg-gray-800 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
  
  );
};

export default AnimatedNavbar;