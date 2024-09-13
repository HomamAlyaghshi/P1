import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-black p-4 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <Link to="/">
        <button className="bg-cyan-100 rounded-2xl p-2 hover:bg-cyan-600 hover:p-2.5 hover:text-white transition-all duration-500 ease-out delay-300">
          Main Page
        </button>
      </Link>

      {/* Burger Menu Icon */}
      <div className="sm:hidden">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? (
            <XMarkIcon className="w-8 h-8 text-black" />
          ) : (
            <Bars3Icon className="w-8 h-8 text-black" />
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex space-x-4 ml-auto">
        <Link to="/home-page">
          <button className="text-black    px-4 py-2 rounded font-mono hover:text-xl hover:text-blue-700 hover:bg-gray-200 transition-all duration-500 ease-out delay-100 ">
            HOME
          </button>
        </Link>
        <Link to="/about">
          <button className="text-black hover:text-blue-700 px-4 py-2 rounded font-mono hover:text-xl hover:bg-gray-200 transition-all duration-500 ease-out delay-100">
            ABOUT
          </button>
        </Link>
        <Link to="/contact">
          <button className="text-black hover:text-blue-700 px-4 py-2 rounded font-mono hover:text-xl hover:bg-gray-200 transition-all duration-500 ease-out delay-100">
            CONTACT
          </button>
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-1/2 h-full bg-gray-100 shadow-lg z-50 transition-transform transform translate-x-0">
          {/* Close button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 left-4 text-black"
            aria-label="Close menu"
          >
            <XMarkIcon className="w-8 h-8" />
          </button>

          <div className="flex flex-col items-center p-6 space-y-6">
            <Link to="/home-page">
              <button
                onClick={toggleMenu}
                className="text-black hover:text-blue-700 px-4 py-2 rounded font-mono"
              >
                HOME
              </button>
            </Link>
            <Link to="/about">
              <button
                onClick={toggleMenu}
                className="text-black hover:text-blue-700 px-4 py-2 rounded font-mono"
              >
                ABOUT
              </button>
            </Link>
            <Link to="/contact">
              <button
                onClick={toggleMenu}
                className="text-black hover:text-blue-700 px-4 py-2 rounded font-mono"
              >
                CONTACT
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
