import React from 'react';

const UserCard = ({ item }) => {
  const { profileImage, biodataId, biodataType, age, occupation, permanentDivision } = item;

  return (
    <div className="relative max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Yellow overlay behind the image */}
      <div className="absolute inset-0 bg-yellow-400 -z-10 rounded-lg scale-110"></div>

      {/* Profile Image */}
      <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
        <img
          src={profileImage}
          alt="Profile"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>

      {/* Card Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800">Biodata ID: {biodataId}</h3>
        <p className="text-gray-600">Type: {biodataType}</p>
        <p className="text-gray-600">Age: {age} years</p>
        <p className="text-gray-600">Occupation: {occupation}</p>
        <p className="text-gray-600">Division: {permanentDivision}</p>
        <button
          className="mt-4 px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow hover:from-green-500 hover:to-blue-600 transition-colors duration-300"
          onClick={() => alert(`Viewing profile of Biodata ID: ${biodataId}`)}
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default UserCard;
