import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useSecure from '../Hooks/useSecure';

const Myfavourites = () => {
  const axiosSecure = useSecure();

  // Fetch favourites data using TanStack Query
  const { data: favourites = [], refetch } = useQuery({
    queryKey: ['favourites'],
    queryFn: async () => {
      const res = await axiosSecure.get('/favourites');
      return res.data;
    },
  });

  // Handle delete action
  const handleDelete = async (id) => {
	






    // const confirm = window.confirm('Are you sure you want to delete this favourite?');
    // if (confirm) {
    //   await axiosSecure.delete(`/favourites/${id}`);
    //   refetch(); // Refresh the data after deletion
    // }
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
                      onClick={() => handleDelete(fav._id)}
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
