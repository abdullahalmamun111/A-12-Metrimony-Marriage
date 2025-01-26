import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ContextApi } from "../AuthProvider/AuthContext";
import Swal from "sweetalert2";
import usePublic from "../Hooks/usePublic";

const ViewloadedData = () => {
  const loadedData = useLoaderData();
  const { user } = useContext(ContextApi); // Logged-in user information
  const axiosPublic = usePublic();

  const handlePremiumReq = (name, email, loadedDataId, premiumreqId) => {
    const data = { name, email, loadedDataId, premiumreqId };

    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure to make you premium?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Sure!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.post("/premiumReq", data).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              title: "Done!",
              text: `Your Request Is been Processed!`,
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "Failed!",
              text: `Your Request Is Already Pending...!`,
              icon: "error",
            });
          }
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      {loadedData ? (
        <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-4xl w-full">
          {/* Header Section */}
          <div className="bg-blue-600 text-white py-6 px-4 text-center">
            <h1 className="text-3xl font-bold">{loadedData.name}</h1>
            <p className="text-lg mt-2">{loadedData.email}</p>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start p-6 space-y-6 lg:space-y-0 lg:space-x-6">
            {/* Profile Image */}
            <img
              src={loadedData.profileImage || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-blue-500"
            />
            {/* Basic Details */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Personal Information
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Age:</strong> {loadedData.age}
                </li>
                <li>
                  <strong>Date of Birth:</strong> {loadedData.dateOfBirth}
                </li>
                <li>
                  <strong>Height:</strong> {loadedData.height}
                </li>
                <li>
                  <strong>Weight:</strong> {loadedData.weight}
                </li>
                <li>
                  <strong>Race (Skin Color):</strong> {loadedData.race}
                </li>
                <li>
                  <strong>Occupation:</strong> {loadedData.occupation}
                </li>
                <li>
                  <strong>Mobile:</strong> {loadedData.mobile}
                </li>
              </ul>
            </div>
          </div>

          {/* Family Details */}
          <div className="px-6 py-4 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Family Details
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Father's Name:</strong> {loadedData.fatherName}
              </li>
              <li>
                <strong>Mother's Name:</strong> {loadedData.motherName}
              </li>
              <li>
                <strong>Permanent Division:</strong>{" "}
                {loadedData.permanentDivision}
              </li>
              <li>
                <strong>Present Division:</strong> {loadedData.presentDivision}
              </li>
            </ul>
          </div>

          {/* Partner Preferences */}
          <div className="px-6 py-4 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Partner Preferences
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Expected Partner Age:</strong> {loadedData.partnerAge}
              </li>
              <li>
                <strong>Expected Partner Height:</strong>{" "}
                {loadedData.partnerHeight}
              </li>
              <li>
                <strong>Expected Partner Weight:</strong>{" "}
                {loadedData.partnerWeight}
              </li>
            </ul>
          </div>

          {/* Action Section */}
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex flex-col items-center">
              {loadedData.userType ? (
                <span className="text-green-600 font-bold text-lg">
                  Premium User
                </span>
              ) : (
                <button
                  className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
                  onClick={() =>
                    handlePremiumReq(
                      loadedData.name,
                      loadedData.email,
                      loadedData.loadedDataId,
                      loadedData._id
                    )
                  }
                >
                  Make Premium
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-red-500 text-xl">No Biodata found for your account!</p>
      )}
    </div>
  );
};

export default ViewloadedData;
