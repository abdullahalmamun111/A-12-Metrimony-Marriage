import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Side Navigation */}
      <div className="w-full md:w-64 min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white shadow-lg">
        {/* Text-Based Logo */}
        <div className="flex text-center py-8 px-2">
          <h1 className="text-3xl font-bold tracking-wide bg-gradient-to-r from-pink-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
            Matrimony Hub
          </h1>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-6 px-6">
          <NavLink
            to="/dashboard/biodata"
            className={({ isActive }) =>
              isActive
                ? "block bg-blue-700 rounded-md px-4 py-3 font-medium shadow-md"
                : "block hover:bg-blue-600 rounded-md px-4 py-3"
            }
          >
            Edit Biodata
          </NavLink>
          <NavLink
            to="/dashboard/view-biodata"
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
        </nav>

        {/* Logout Button */}
        <div className="px-6 mt-8">
          <button
            className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 rounded-md px-4 py-3 text-white font-bold shadow-lg"
            onClick={() => {
              console.log("Logout clicked");
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Right Side Content */}
      <div className="flex-1">
        <div className="py-2">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Welcome to Dashboard
          </h1>
        </div>
        <div className="p-4 bg-gray-200 h-screen">
		<Outlet></Outlet>
		</div>
      </div>
    </div>
  );
};

export default Dashboard;
