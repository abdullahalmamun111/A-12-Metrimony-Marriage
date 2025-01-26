import React, { useState } from 'react';
import useSecure from '../Hooks/useSecure';
import { useQuery } from '@tanstack/react-query';

const MakeSuccess = () => {
  const axiosSecure = useSecure();
  const [selectedStory, setSelectedStory] = useState(null); // For modal data

  // Fetching success story data
  const { data: successData = [] } = useQuery({
    queryKey: ['successStory'],
    queryFn: async () => {
      const res = await axiosSecure.get('/successStoryAdmin');
      return res.data;
    },
  });

  return (
    <div className="p-6 w-full bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Success Stories
      </h1>
      {successData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 text-sm lg:text-base">
            <thead>
              <tr className="bg-blue-100 text-gray-700">
                <th className="p-4 border">Male Biodata ID</th>
                <th className="p-4 border">Female Biodata ID</th>
                <th className="p-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {successData.map((story) => (
                <tr key={story._id} className="hover:bg-gray-100">
                  <td className="p-4 border text-center">{story.selfBiodataId}</td>
                  <td className="p-4 border text-center">{story.partnerBiodataId}</td>
                  <td className="p-4 border text-center">
                    <button
                      onClick={() => setSelectedStory(story)}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                      View Story
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-red-500">No success stories found.</p>
      )}

      {/* Modal for viewing the story */}
      {selectedStory && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setSelectedStory(null)} // Close modal on outside click
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on click inside
          >
            <button
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-lg"
              onClick={() => setSelectedStory(null)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold text-center mb-4">Success Story</h2>
            <img
              src={selectedStory.coupleImage}
              alt="Couple"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600 text-justify mb-4">
              {selectedStory.successStory}
            </p>
            <button
              onClick={() => setSelectedStory(null)}
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MakeSuccess;
