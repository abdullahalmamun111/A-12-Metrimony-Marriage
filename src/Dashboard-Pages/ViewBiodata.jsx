import React, { useContext } from "react";
import useAllUser from "../Hooks/useAllUser";
import { ContextApi } from "../AuthProvider/AuthContext";
import Swal from "sweetalert2";
import useSecure from "../Hooks/useSecure";
import usePublic from "../Hooks/usePublic";

const ViewBiodata = () => {
  const { allUser } = useAllUser(); // All biodata fetched
  const { user } = useContext(ContextApi); // Logged-in user information
  const axiosPublic = usePublic();
  // Filter biodata where email matches logged-in user's email
  const userBiodata = allUser.filter(
    (biodata) => biodata.email === user?.email
  );
  
  const handlePremiumReq = (name,email,biodataId,premiumreqId) => {
	const data = {name,email,biodataId,premiumreqId}

	Swal.fire({
		title: "Are you sure?",
		text: " Are you sure to make you premium",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Yes, Sure!"
	  }).then((result) => {
		if (result.isConfirmed) {
			axiosPublic.post('/premiumReq',data)
				.then((res) => {
				  if (res.data.insertedId) {
					Swal.fire({
					  title: "Done!",
					  text: `Your Request Is been Processed!`,
					  icon: "success",
					});
				  }
				});
		}
	  });
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-8">
        Your Biodata
      </h1>
      {userBiodata.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userBiodata.map((biodata) => (
            <div
              key={biodata.biodataId}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl border border-gray-200"
            >
              <img
                src={
                  biodata.profileImage ||
                  "https://via.placeholder.com/150"
                }
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {biodata.name}
              </h2>
              <div className="text-gray-600">
                <p>
                  <span className="font-medium">Biodata Type:</span>{" "}
                  {biodata.biodataType}
                </p>
                <p>
                  <span className="font-medium">Date of Birth:</span>{" "}
                  {biodata.dateOfBirth}
                </p>
                <p>
                  <span className="font-medium">Height:</span> {biodata.height}
                </p>
                <p>
                  <span className="font-medium">Weight:</span> {biodata.weight}
                </p>
                <p>
                  <span className="font-medium">Age:</span> {biodata.age}
                </p>
                <p>
                  <span className="font-medium">Occupation:</span>{" "}
                  {biodata.occupation}
                </p>
                <p>
                  <span className="font-medium">Race (Skin Color):</span>{" "}
                  {biodata.race}
                </p>
                <p>
                  <span className="font-medium">Father's Name:</span>{" "}
                  {biodata.fatherName}
                </p>
                <p>
                  <span className="font-medium">Mother's Name:</span>{" "}
                  {biodata.motherName}
                </p>
                <p>
                  <span className="font-medium">Permanent Division:</span>{" "}
                  {biodata.permanentDivision}
                </p>
                <p>
                  <span className="font-medium">Present Division:</span>{" "}
                  {biodata.presentDivision}
                </p>
                <p>
                  <span className="font-medium">Expected Partner Age:</span>{" "}
                  {biodata.partnerAge}
                </p>
                <p>
                  <span className="font-medium">Expected Partner Height:</span>{" "}
                  {biodata.partnerHeight}
                </p>
                <p>
                  <span className="font-medium">Expected Partner Weight:</span>{" "}
                  {biodata.partnerWeight}
                </p>
                <p>
                  <span className="font-medium">Email:</span> {biodata.email}
                </p>
                <p>
                  <span className="font-medium">Mobile:</span> {biodata.mobile}
                </p>
              </div>
              <button
                className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={()=> handlePremiumReq(biodata.name,biodata.email,biodata.biodataId,biodata._id)}
              >
                Make Biodata Premium
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-red-500 text-center text-xl">
          No biodata found for your account!
        </p>
      )}
    </div>
  );
};

export default ViewBiodata;
