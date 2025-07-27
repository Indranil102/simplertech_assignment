import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div>
      <nav className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white p-4 flex justify-between items-center flex-wrap">
        <h1 className="text-xl font-bold">NavLink</h1>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-200">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-200">
            Contact
          </Link>
          {user ? (
            <button
              onClick={handleLogout}
              className="hover:text-gray-200 focus:outline-none bg-transparent border-none cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <Link to="/signup" className="hover:text-gray-200">
              Sign UP
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
