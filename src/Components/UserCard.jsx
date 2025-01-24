import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ item }) => {
  const {_id, profileImage, biodataId, biodataType, age, occupation, permanentDivision } = item;

  return (
    <div className="relative max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Yellow overlay behind the image */}
      <div className="absolute inset-0 bg-yellow-400 -z-10 rounded-lg scale-110"></div>

      {/* Profile Image */}
      <div className="relative h-[300px] w-full bg-center overflow-hidden rounded-t-lg">
        <img
          src={profileImage}
          alt="Profile"
          className="w-full bg-center h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>

      {/* Card Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800">Biodata ID: {biodataId}</h3>
        <p className="text-gray-600">Type: {biodataType}</p>
        <p className="text-gray-600">Age: {age} years</p>
        <p className="text-gray-600">Occupation: {occupation}</p>
        <p className="text-gray-600">Division: {permanentDivision}</p>
        <Link to={`details/${_id}`}>
        <button
          className="mt-4 px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow hover:from-green-500 hover:to-blue-600 transition-colors duration-300"
        >
          View Profile
        </button>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
