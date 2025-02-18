import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ item }) => {
  const {_id, profileImage, biodataId, biodataType, age, occupation, permanentDivision } = item;

  return (
    <div className="relative max-w-md bg-white rounded-lg shadow-lg overflow-hidden">

      {/* Profile Image */}
      <div className="relative h-[200px] md:h-[300px] w-full bg-center overflow-hidden rounded-t-lg">
        <img
          src={profileImage}
          alt="Profile"
          className="w-full bg-center h-full transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>

      {/* Card Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800">Biodata ID: {biodataId}</h3>
        {/* <p className="text-gray-600">Type: {biodataType}</p> */}
        {/* <p className="text-gray-600">Age: {age} years</p> */}
        <p className="text-gray-600">Occupation: {occupation}</p>
        <p className="text-gray-600">Division: {permanentDivision}</p>
        <Link to={`details/${_id}`}>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors duration-300"
        >
          View Profile
        </button>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
