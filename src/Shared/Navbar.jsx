import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";
import { ContextApi } from "../AuthProvider/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(ContextApi);

  const handleLogout = () => {
    logOut().then(() => {
      Swal.fire({
        title: "Success!",
        text: "Log Out Successful",
        icon: "success",
      });
    });
  };

  return (
    <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Website Name */}
          <div className="flex items-center space-x-3">
            <img className="h-12 w-12 rounded-full" src={logo} alt="Logo" />
            <h1 className="text-2xl font-bold text-white">Matrimony Hub</h1>
          </div>

          {/* Menu for Larger Screens */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-200 font-medium border-b-2 border-white"
                  : "text-white hover:text-gray-200 font-medium"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/biodatas"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-200 font-medium border-b-2 border-white"
                  : "text-white hover:text-gray-200 font-medium"
              }
            >
              Biodatas
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-200 font-medium border-b-2 border-white"
                  : "text-white hover:text-gray-200 font-medium"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-200 font-medium border-b-2 border-white"
                  : "text-white hover:text-gray-200 font-medium"
              }
            >
              Contact Us
            </NavLink>
            {user ? (
              <>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-200 font-medium border-b-2 border-white"
                      : "text-white hover:text-gray-200 font-medium"
                  }
                >
                  Dashboard
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                >
                  Log Out
                </button>
              </>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-200 font-medium border-b-2 border-white"
                    : "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                }
              >
                Login
              </NavLink>
            )}
          </div>

          {/* Hamburger Menu for Small Devices */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu for Small Devices */}
      <div
        className={`md:hidden bg-purple-500 text-white shadow-md transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <NavLink
          to="/"
          className="block px-4 py-2 hover:bg-purple-600"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/biodatas"
          className="block px-4 py-2 hover:bg-purple-600"
          onClick={() => setIsMenuOpen(false)}
        >
          Biodatas
        </NavLink>
        <NavLink
          to="/about"
          className="block px-4 py-2 hover:bg-purple-600"
          onClick={() => setIsMenuOpen(false)}
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className="block px-4 py-2 hover:bg-purple-600"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact Us
        </NavLink>
        {user ? (
          <>
            <NavLink
              to="/dashboard"
              className="block px-4 py-2 hover:bg-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </NavLink>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                handleLogout();
              }}
              className="block px-4 py-2 hover:bg-purple-600"
            >
              Log Out
            </button>
          </>
        ) : (
          <NavLink
            to="/login"
            className="block px-4 py-2 hover:bg-purple-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
