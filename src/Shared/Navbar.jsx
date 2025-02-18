import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";
import { ContextApi } from "../AuthProvider/AuthContext";
import Swal from "sweetalert2";
import { ThemeContext } from "../ThemeProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(ContextApi);
  const { theme, toggleTheme } = useContext(ThemeContext);

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
    <nav
      className={`${
        theme === "dark"
          ? "bg-gray-900"
          : "bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 "
      } shadow-md fixed top-0 left-0 w-full z-50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
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

                {/* theme controller */}
                <button
                  onClick={toggleTheme}
                  className={`${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {theme === "light" ? (
                    <svg
                      className="swap-on h-10 w-10 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  ) : (
                    <svg
                      className="swap-off h-10 w-10 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                  )}
                </button>
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
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
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
