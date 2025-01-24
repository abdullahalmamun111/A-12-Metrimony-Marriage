import { useQuery } from "@tanstack/react-query";
import React from "react";
import useSecure from "../Hooks/useSecure";
import Swal from "sweetalert2";

const ApprovePremium = () => {
  const axiosSecure = useSecure();

  // Fetching the premium approval requests
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/premiumReq");
      return res.data;
    },
  });

  // Handle the Make Premium button click
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
    <div className="p-4 bg-gray-100 min-h-screen w-full">
      <h1 className="text-3xl font-bold text-center mb-6">Approve Premium Requests</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Biodata ID</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-2 text-center">{user.name}</td>
                <td className="px-4 py-2 text-center">{user.email}</td>
                <td className="px-4 py-2 text-center">{user.biodataId}</td>
                <td className="px-4 py-2 text-center">
				{user.userType === 'premium' ? 'Already Premium' :<button
                      onClick={() => handleMakePremium(user.premiumreqId,user.name,user._id)}
                      className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                    >
                      Make Premium
                    </button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {users.length === 0 && (
          <p className="text-center mt-4 text-gray-500">No premium requests found.</p>
        )}
      </div>
    </div>
  );
};

export default ApprovePremium;
