import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center flex-wrap">
        <h1 className="text-xl font-bold">MyApp</h1>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="#" className="hover:text-gray-200">
            About
          </Link>
          <Link to="#" className="hover:text-gray-200">
            Contact
          </Link>
          <Link to="/signup" className="hover:text-gray-200">
            Sign UP
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
