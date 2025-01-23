import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import useSecure from "../Hooks/useSecure";
import Swal from "sweetalert2";
import { ContextApi } from "../AuthProvider/AuthContext";

const Myfavourites = () => {
  const axiosSecure = useSecure();
  const {user} = useContext(ContextApi);
  // Fetch favourites data using TanStack Query
  const { data: favourites = [], refetch } = useQuery({
    queryKey: ["favourites"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/favourites?email=${user.email}`);
      return res.data;
    },
  });

  // Handle delete action
  const handleDelete = (id, name) => {
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
        const res = await axiosSecure.delete(`/favourites/${id}`);
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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">My Favourites</h1>

      {/* Check if there are any favourites */}
      {favourites.length === 0 ? (
        <p className="text-center text-gray-600">No favourites found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300 bg-white shadow-md">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Biodata ID</th>
                <th className="p-3 border">Permanent Address</th>
                <th className="p-3 border">Occupation</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {favourites.map((fav) => (
                <tr key={fav._id} className="text-center">
                  <td className="p-3 border">{fav.name}</td>
                  <td className="p-3 border">{fav.biodataId}</td>
                  <td className="p-3 border">{fav.permanentDivision}</td>
                  <td className="p-3 border">{fav.occupation}</td>
                  <td className="p-3 border">
                    <button
                      onClick={() => handleDelete(fav._id, fav.name)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
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

export default Myfavourites;
