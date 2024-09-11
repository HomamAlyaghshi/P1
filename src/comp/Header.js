import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white text-black p-4 flex flex-wrap justify-between items-center shadow-lg">
      {/* logo */}
      <Link to="/">
        <button className="bg-cyan-100 rounded-2xl p-2 hover:bg-cyan-600 hover:p-2.5 hover:text-white transition-all duration-500">
          Main Page
        </button>
      </Link>

      {/* buttons in header */}
      <div className="flex space-x-2 sm:space-x-4 ml-auto">
        <Link to="/home-page">
          <button className="text-black hover:text-blue-700 px-2 sm:px-4 py-1 sm:py-2 rounded font-mono">
            HOME
          </button>
        </Link>
        <Link to="/about">
          <button className="text-black hover:text-blue-700 px-2 sm:px-4 py-1 sm:py-2 rounded font-mono">
            ABOUT
          </button>
        </Link>
        <Link to="/contact">
          <button className="text-black hover:text-blue-700 px-2 sm:px-4 py-1 sm:py-2 rounded font-mono">
            CONTACT
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
