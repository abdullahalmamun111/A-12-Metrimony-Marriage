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

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const location = useLocation(); // Get the current route location
  const { logOut } = useContext(ContextApi);
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state
  const {allUser} = useAllUser();
  const {user} = useContext(ContextApi);
  
  const isAlreadyCreate = allUser.some(singleUser => singleUser.email ===user.email)

  // Check if the right-side content should be blank (no content loaded in the outlet yet)
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
        className={`fixed inset-y-0 left-0 transform md:transform-none md:relative w-64 min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white shadow-lg transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
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
        <nav className="space-y-2 px-2">
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
              {isAlreadyCreate ? <NavLink
                to={`/dashboard/update/${user.email}`}
                className={({ isActive }) =>
                  isActive
                    ? "block bg-blue-700 rounded-md px-4 py-3 font-medium shadow-md"
                    : "block hover:bg-blue-600 rounded-md px-4 py-3"
                }
              >
                Edit Biodata
              </NavLink> :<NavLink
                to="/dashboard/biodata"
                className={({ isActive }) =>
                  isActive
                    ? "block bg-blue-700 rounded-md px-4 py-3 font-medium shadow-md"
                    : "block hover:bg-blue-600 rounded-md px-4 py-3"
                }
              >
                Create Your Biodata
              </NavLink>}
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
        className="fixed top-8 left-4 text-3xl text-blue-600 md:hidden z-50"
        onClick={toggleSidebar}
      >
        <FiMenu />
      </button>

      {/* Main Content */}
      <div className="flex-1">
        <div className="py-2">
          <h1 className="text-3xl rounded-md font-bold bg-yellow-400 py-4 text-gray-600 text-center">
            {isAdmin ? "Admin Dashboard" : "User Dashboard"}
          </h1>
        </div>
        <div className="p-4 bg-gray-200 min-h-screen">
          {isDefault ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-xl text-center text-gray-600">
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
