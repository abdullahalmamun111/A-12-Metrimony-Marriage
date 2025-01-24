import React, { useContext } from "react";
import useSecure from "../Hooks/useSecure";
import { useQuery } from "@tanstack/react-query";
import { ContextApi } from "../AuthProvider/AuthContext";

const Mycontact = () => {
  const axiosSecure = useSecure();
  const { user } = useContext(ContextApi);

  // Fetch all requests
  const { data: requests = [], refetch } = useQuery({
    queryKey: ["request"],
    queryFn: async () => {
      const res = await axiosSecure.get("/request");
      return res.data;
    },
  });

  // Filter requests where bioEmail matches user email and is approved
  const filteredRequests = requests.filter(
    (request) => request.email === user?.email
  );

  const handleDeleteRequest = (id,name) => {
	
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Contact Requests</h2>
      {filteredRequests.length === 0 ? (
        <p>No approved contact requests available.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Biodata ID</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Mobile</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((request) => (
              <tr key={request._id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{request.name}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {request.biodataId}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {request.approved ? "Approved" : "Pending"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {request.approved ? request.bioMobile : "Hidden"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {request.approved ? request.bioEmail : "Hidden"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="bg-red-500 text-white px-4 py-1 rounded"
                    onClick={() => handleDeleteRequest(request._id,request.name)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Mycontact;
