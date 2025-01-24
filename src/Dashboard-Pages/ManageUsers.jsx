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
  const handleMakeAdmin = async (id,name) => {
	axiosSecure.patch(`/premiumReq/admin/${id}`)
  .then((res) => {
		if (res.data.modifiedCount > 0) {
		  refetch()
		  Swal.fire({
			title: "Good job!",
			text: `${name} is an admin Now !`,
			icon: "success",
		  });
		}
	  });
  };

  const handleMakePremium = async (id,name,_id) => {
	axiosSecure.patch(`/biodata/${id}`)
	axiosSecure.patch(`/premiumReq/premium/${_id}`)
	.then((res) =>{
		if (res.data.modifiedCount > 0) {
		  refetch()
		  Swal.fire({
			title: "Good job!",
			text: `${name}'s Biodata Premium Now !`,
			icon: "success",
		  });
		}
	  });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Manage Users
      </h1>

      {/* Search Bar */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4">Make Admin</th>
              <th className="p-4">Make Premium</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id} className="border-b hover:bg-gray-100">
                  <td className="p-4">{user.name}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4 text-center">
                   { user.role === 'admin' ? 'Already Admin' : <button
                      onClick={() => handleMakeAdmin(user._id,user.name)}
                      className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                    >
                      Make Admin
                    </button>}
                  </td>
                  <td className="p-4 text-center">
                    {user.userType === 'premium' ? 'Already Premium' :<button
                      onClick={() => handleMakePremium(user.premiumreqId,user.name,user._id)}
                      className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                    >
                      Make Premium
                    </button>}
					
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="p-4 text-center text-gray-500 italic"
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
