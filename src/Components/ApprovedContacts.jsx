import React from "react";
import useSecure from "../Hooks/useSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ApprovedContacts = () => {
  const axiosSecure = useSecure();

  const { data: requests = [], refetch } = useQuery({
    queryKey: ["request"],
    queryFn: async () => {
      const res = await axiosSecure.get("/request");
      return res.data;
    },
  });

  const handleApprove = async (id,name) => {
    axiosSecure.patch(`/request/approved/${id}`)
    .then(res => {
     if (res.data.modifiedCount > 0) {
          refetch()
          Swal.fire({
          title: "Good job!",
          text: `${name}'s Requst been Approved!`,
          icon: "success",
          });
        }
    })


  };

  return (
    <div className="p-4 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-center mb-6">
        Approved Contact Requests
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Biodata ID</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request._id} className="hover:bg-gray-50">
                <td className="py-3 px-4">{request.name}</td>
                <td className="py-3 px-4">{request.email}</td>
                <td className="py-3 px-4">{request.biodataId}</td>
                <td className="py-3 px-4">
                  {request.approved? 'Approved':<button
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
                    onClick={() => handleApprove(request._id,request.name)}
                  >
                    Approve Contact
                  </button>}
                </td>
              </tr>
            ))}
            {requests.length === 0 && (
              <tr>
                <td colSpan="4" className="py-3 px-4 text-center text-gray-500">
                  No contact requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedContacts;
