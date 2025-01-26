import React, { useContext } from "react";
import useSecure from "../Hooks/useSecure";
import { useQuery } from "@tanstack/react-query";
import { ContextApi } from "../AuthProvider/AuthContext";
import usePublic from "../Hooks/usePublic";
import Swal from "sweetalert2";

const MyContact = () => {
  const axiosSecure = useSecure();
  const axiosPublic = usePublic();
  const { user } = useContext(ContextApi);

  // Fetch all requests
  const { data: requests = [], refetch } = useQuery({
    queryKey: ["request"],
    queryFn: async () => {
      const res = await axiosSecure.get("/requestUser");
      return res.data;
    },
  });

  // Filter requests where bioEmail matches user email and is approved
  const filteredRequests = requests.filter(
    (request) => request.email === user?.email
  );

  const handleDeleteRequest = (id, name) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/request/delete/${id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} has been Deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
        My Contact Requests
      </h2>
      {filteredRequests.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No approved contact requests available.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Biodata ID
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Status
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Mobile
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Email
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((request) => (
                <tr key={request._id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    {request.bioName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {request.biodataId}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {request.approved ? (
                      <span className="text-green-600 font-bold">Approved</span>
                    ) : (
                      <span className="text-yellow-500 font-bold">Pending</span>
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {request.approved ? request.bioMobile : "Hidden"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {request.approved ? request.bioEmail : "Hidden"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                      onClick={() =>
                        handleDeleteRequest(request._id, request.bioName)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyContact;
