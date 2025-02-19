import React, { useContext, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import Swal from "sweetalert2";
import { ContextApi } from "../AuthProvider/AuthContext";
import { Helmet } from "react-helmet-async";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import useAllUser from "../Hooks/useAllUser";
import { ThemeContext } from "../ThemeProvider";
import Navbar from "../Shared/Navbar";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const location = useLocation();
  const { logOut } = useContext(ContextApi);
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { allUser } = useAllUser();
  const { user } = useContext(ContextApi);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isAlreadyCreate = allUser.some(
    (singleUser) => singleUser.email === user.email
  );

  const isDefault =
    location.pathname === "/dashboard" || location.pathname === "/dashboard/";

  const handleLogout = () => {
    logOut().then(() => {
      Swal.fire({
        title: "Success!",
        text: "Log Out Successful",
        icon: "success",
      });
    });
    navigate("/");
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Helmet>
        <title>Dashboard || Matrimony Hub</title>
      </Helmet>

      {/* Sidebar */}
      <div
        className={`${
          theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-gradient-to-b from-blue-500 to-purple-600 shadow-lg"
        } transform md:transform-none md:relative w-64 min-h-screen text-white transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? "translate-x-0 fixed" : "-translate-x-full md:translate-x-0 fixed"
        }`}
      >
        {/* Close Button for Small Devices */}
        <button
          className="absolute top-4 right-4 md:hidden text-white text-2xl"
          onClick={toggleSidebar}
        >
          <IoClose />
        </button>

        {/* Logo */}
        <div className="flex text-center py-8 px-2">
          <h1 className="text-3xl font-bold tracking-wide bg-gradient-to-r from-pink-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
            Matrimony Hub
          </h1>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-2 px-2 relative">
          {isAdmin ? (
            <>
              <NavLink
                to="/dashboard/admin"
                className={({ isActive }) =>
                  isActive
                    ? "block bg-blue-700 rounded-md px-4 py-3 font-medium shadow-md"
                    : "block hover:bg-blue-600 rounded-md px-4 py-3"
                }
              >
                Admin Dashboard
              </NavLink>
              <NavLink
                to="/dashboard/manage-users"
                className={({ isActive }) =>
                  isActive
                    ? "block bg-blue-700 rounded-md px-4 py-3 font-medium shadow-md"
                    : "block hover:bg-blue-600 rounded-md px-4 py-3"
                }
              >
                Manage Users
              </NavLink>
              <NavLink
                to="/dashboard/approvedPremium"
                className={({ isActive }) =>
                  isActive
                    ? "block bg-blue-700 rounded-md px-4 py-3 font-medium shadow-md"
                    : "block hover:bg-blue-600 rounded-md px-4 py-3"
                }
              >
                Approved Premium
              </NavLink>
              <NavLink
                to="/dashboard/approved-contacts"
                className={({ isActive }) =>
                  isActive
                    ? "block bg-blue-700 rounded-md px-4 py-3 font-medium shadow-md"
                    : "block hover:bg-blue-600 rounded-md px-4 py-3"
                }
              >
                Approved Contact Requests
              </NavLink>
              <NavLink
                to="/dashboard/makestory"
                className={({ isActive }) =>
                  isActive
                    ? "block bg-blue-700 rounded-md px-4 py-3 font-medium shadow-md"
                    : "block hover:bg-blue-600 rounded-md px-4 py-3"
                }
              >
                Make Success Story
              </NavLink>
            </>
          ) : (
            <>
              {isAlreadyCreate ? (
                <NavLink
                  to={`/dashboard/update/${user.email}`}
                  className={({ isActive }) =>
                    isActive
                      ? "block bg-blue-700 rounded-md px-4 py-3 font-medium shadow-md"
                      : "block hover:bg-blue-600 rounded-md px-4 py-3"
                  }
                >
                  Edit Biodata
                </NavLink>
              ) : (
                <NavLink
                  to="/dashboard/biodata"
                  className={({ isActive }) =>
                    isActive
                      ? "block bg-blue-700 rounded-md px-4 py-3 font-medium shadow-md"
                      : "block hover:bg-blue-600 rounded-md px-4 py-3"
                  }
                >
                  Create Your Biodata
                </NavLink>
              )}
              <NavLink
                to={`/dashboard/view-biodata/${user.email}`}
                className={({ isActive }) =>
                  isActive
                    ? "block bg-blue-700 rounded-md px-4 py-3 font-medium shadow-md"
                    : "block hover:bg-blue-600 rounded-md px-4 py-3"
                }
              >
                View Biodata
              </NavLink>
              <NavLink
                to="/dashboard/contact-requests"
                className={({ isActive }) =>
                  isActive
                    ? "block bg-blue-700 rounded-md px-4 py-3 font-medium shadow-md"
                    : "block hover:bg-blue-600 rounded-md px-4 py-3"
                }
              >
                My Contact Requests
              </NavLink>
              <NavLink
                to="/dashboard/favourites"
                className={({ isActive }) =>
                  isActive
                    ? "block bg-blue-700 rounded-md px-4 py-3 font-medium shadow-md"
                    : "block hover:bg-blue-600 rounded-md px-4 py-3"
                }
              >
                Favourites Biodata
              </NavLink>
              <NavLink
                to="/dashboard/gotMarried"
                className={({ isActive }) =>
                  isActive
                    ? "block bg-blue-700 rounded-md px-4 py-3 font-medium shadow-md"
                    : "block hover:bg-blue-600 rounded-md px-4 py-3"
                }
              >
                Got Married
              </NavLink>
            </>
          )}
        </nav>

        {/* Logout Button */}
        <div className="px-2 space-y-2 mt-2 pb-5">
          <button
            onClick={handleLogout}
            className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 rounded-md px-4 py-3 text-white font-bold shadow-lg"
          >
            Logout
          </button>
          <div>
            <Link to={"/"}>
              <button className="w-full bg-gradient-to-r from-green-500 to-green-900 hover:from-green-600 hover:to-green-700 rounded-md px-4 py-3 text-white font-bold shadow-lg">
                Back Home
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Menu Icon for Small Devices */}
      <button
        className={`fixed top-4 left-4 text-3xl md:hidden ${
          theme === "dark" ? "text-white" : "text-blue-600"
        } z-50`}
        onClick={toggleSidebar}
      >
        <FiMenu />
      </button>

      {/* Main Content */}
      <div
        className={`${
          theme === "dark" ? "bg-gray-900 flex-1 text-gray-400" : "bg-white flex-1"
        }`}
      >
        <div
          className={`${
            theme === "dark" ? "bg-gray-900" : "bg-yellow-400"
          } flex fixed top-0 w-full gap-4`}
        >
          <h1 className="text-2xl ml-[20%] md:text-3xl rounded-md font-bold py-4 text-gray-600 text-center">
            {isAdmin ? "Admin Dashboard" : "User Dashboard"}
          </h1>

          <button
            onClick={toggleTheme}
            className={`${theme === "dark" ? "text-white" : "text-gray-900"}`}
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
        </div>

        <div className="p-4 min-h-screen mt-[52px]">
          {isDefault ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-xl text-center">
                Select an option from the left menu to get started.
              </p>
            </div>
          ) : (
            <Outlet />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;