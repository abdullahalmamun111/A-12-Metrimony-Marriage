import React, { useState } from "react";
import useSecure from "../Hooks/useSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAllUser from "../Hooks/useAllUser";

const ManageUsers = () => {
  const axiosSecure = useSecure();
  const [search, setSearch] = useState("");
  const { allUser } = useAllUser();

  // Fetch users (includes server-side search)
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users", search],
    queryFn: async () => {
      const res = await axiosSecure.get(`/premiumReq?search=${search}`);
      return res.data;
    },
  });

  // Handlers for making admin and premium
  const handleMakeAdmin = async (id, name) => {
    axiosSecure.patch(`/premiumReq/admin/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: "Success!",
          text: `${name} is now an admin!`,
          icon: "success",
        });
      }
    });
  };

  const handleMakePremium = async (id, name, _id) => {
    axiosSecure.patch(`/biodata/${id}`);
    axiosSecure.patch(`/premiumReq/premium/${_id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: "Success!",
          text: `${name}'s biodata is now premium!`,
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen w-full">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Manage Users
      </h1>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-4 px-6 text-left">Name</th>
              <th className="py-4 px-6 text-left">Email</th>
              <th className="py-4 px-6 text-center">Make Admin</th>
              <th className="py-4 px-6 text-center">Make Premium</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50 border-b">
                  <td className="py-4 px-6">{user.name}</td>
                  <td className="py-4 px-6">{user.email}</td>
                  <td className="py-4 px-6 text-center">
                    {user.role === "admin" ? (
                      <span className="text-green-600 font-medium">Already Admin</span>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user._id, user.name)}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {user.userType === "premium" ? (
                      <span className="text-yellow-600 font-medium">Already Premium</span>
                    ) : (
                      <button
                        onClick={() =>
                          handleMakePremium(user.premiumreqId, user.name, user._id)
                        }
                        className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                      >
                        Make Premium
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="py-4 px-6 text-center text-gray-500 italic"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
