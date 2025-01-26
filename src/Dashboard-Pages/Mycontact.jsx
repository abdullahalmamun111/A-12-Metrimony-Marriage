import React, { useContext } from "react";
import useSecure from "../Hooks/useSecure";
import { useQuery } from "@tanstack/react-query";
import { ContextApi } from "../AuthProvider/AuthContext";
import usePublic from "../Hooks/usePublic";
import Swal from "sweetalert2";

const Mycontact = () => {
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

  // console.log(filteredRequests)

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
    <div className="p-4 w-full">
      <h2 className="text-xl text-center font-bold mb-4">My Contact Requests</h2>
      {filteredRequests.length === 0 ? (
        <p className="text-center">No approved contact requests available.</p>
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
                <td className="border border-gray-300 px-4 py-2">
                  {request.bioName}
                </td>
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
                    onClick={() =>
                      handleDeleteRequest(request._id, request.name)
                    }
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
