import React, { useContext } from "react";
import { ContextApi } from "../AuthProvider/AuthContext";
import { useLoaderData, useNavigate } from "react-router-dom";
import usePublic from "../Hooks/usePublic";
import Swal from "sweetalert2";

const UpdateBio = () => {
  const { user } = useContext(ContextApi);
  const userData = useLoaderData();
  const navigate = useNavigate();
  const divisions = [
    "Dhaka",
    "Chattagram",
    "Rangpur",
    "Barisal",
    "Khulna",
    "Mymensingh",
    "Sylhet",
  ];

  const weights = [
    "40kg",
    "41kg",
    "42kg",
    "43kg",
    "44kg",
    "45kg",
    "46kg",
    "47kg",
    "48kg",
    "49kg",
    "50kg",
    "51kg",
    "52kg",
    "53kg",
    "54kg",
    "55kg",
    "56kg",
    "57kg",
    "58kg",
    "59kg",
    "60kg",
    "61kg",
    "62kg",
    "63kg",
    "64kg",
    "65kg",
    "66kg",
    "67kg",
    "68kg",
    "69kg",
    "70kg",
    "71kg",
    "72kg",
    "73kg",
    "74kg",
    "75kg",
    "76kg",
    "77kg",
    "78kg",
    "79kg",
    "80kg",
    "81kg",
    "82kg",
    "83kg",
    "84kg",
    "85kg",
    "86kg",
    "87kg",
    "88kg",
    "89kg",
    "90kg",
    "91kg",
    "92kg",
    "93kg",
    "94kg",
    "95kg",
    "96kg",
    "97kg",
    "98kg",
    "99kg",
    "100kg",
  ];
  const heights = [
    "4'5",
    "4'6",
    "4'7",
    "4'8",
    "4'9",
    "5'0",
    "5'1",
    "5'2",
    "5'3",
    "5'4",
    "5'5",
    "6'0",
    "6'1",
    "6'2",
    "6'3",
    "6'4",
    "6'5",
  ];
  const occupations = ["Student", "Engineer", "Doctor", "Business", "Other"];
  const races = [
    "Fair",
    "Very Fair",
    "Medium",
    "Light",
    "Tan",
    "Olive",
    "Brown",
    "Deep Brown",
    "Dark",
    "Ebony",
    "Pale",
    "Pinkish",
    "Golden",
    "Peach",
    "Ruddy",
    "Dusky",
    "Ivory",
    "Beige",
    "Honey",
    "Caramel",
    "Mocha",
    "Amber",
  ];
 
  const axiosPublic = usePublic();


  const handleSubmit = async(e) => {
	e.preventDefault();
	const form = e.target;
	const formData = new FormData(form);
	const data = Object.fromEntries(formData.entries())
	const res = await axiosPublic.patch(`/biodata/update/${user.email}`,data)
	if(res.data.modifiedCount > 0){
		Swal.fire({
            title: "Done!",
            text: `Your Bio Updated Successfully!`,
            icon: "success"
          });
		  navigate('/dashboard')
	}

  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen w-full">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Update Your Biodata
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Biodata Type */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Biodata Type <span className="text-red-500">*</span>
            </label>
            <select
			  defaultValue={userData.biodataType}
              required
              name="biodataType"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              required
			  defaultValue={userData.name}
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Profile Image */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Profile Image Link or Image
            </label>
            <input
              required
              type="text"
              name="profileImage"
			  defaultValue={userData.profileImage}
              placeholder="Enter image link"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="date"
              name="dateOfBirth"
			  defaultValue={userData.dateOfBirth}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Height */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Height <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="height"
			  defaultValue={userData.height}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select</option>
              {heights.map((height) => (
                <option key={height} value={height}>
                  {height}
                </option>
              ))}
            </select>
          </div>

          {/* Weight */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Weight <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="weight"
			  defaultValue={userData.weight}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select</option>
              {weights.map((weight) => (
                <option key={weight} value={weight}>
                  {weight}
                </option>
              ))}
            </select>
          </div>

          {/* Age */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Age</label>
            <input
              required
              type="number"
              name="age"
			  defaultValue={userData.age}
              placeholder="Enter your age"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Occupation */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Occupation <span className="text-red-500">*</span>
            </label>
            <select
              name="occupation"
              required
			  defaultValue={userData.occupation}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select</option>
              {occupations.map((occupation) => (
                <option key={occupation} value={occupation}>
                  {occupation}
                </option>
              ))}
            </select>
          </div>

          {/* Race */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Race <span className="text-red-500">*</span> (Skin color)
            </label>
            <select
              required
			  defaultValue={userData.race}
              name="race"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select</option>
              {races.map((race) => (
                <option key={race} value={race}>
                  {race}
                </option>
              ))}
            </select>
          </div>

          {/* Fathers Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Father's Name
            </label>
            <input
              required
              type="text"
              name="fatherName"
              defaultValue={userData.fatherName}
              placeholder="Enter father's name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Mothers Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Mother's Name
            </label>
            <input
              type="text"
              required
              name="motherName"
			  defaultValue={userData.motherName}
              placeholder="Enter mother's name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Permanent Division */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Permanent Division <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="permanentDivision"
			  defaultValue={userData.permanentDivision}
              // value={formData.permanentDivision}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattagram">Chattagram</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Barisal">Barisal</option>
              <option value="Khulna">Khulna</option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Sylhet">Sylhet</option>
            </select>
          </div>

          {/* Present Division */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Present Division <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="presentDivision"
			  defaultValue={userData.presentDivision}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattagra">Chattagra</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Barisal">Barisal</option>
              <option value="Khulna">Khulna</option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Sylhet">Sylhet</option>
            </select>
          </div>

          {/* Expected Partner Age */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Expected Partner Age
            </label>
            <input
              required
              type="number"
              name="partnerAge"
			  defaultValue={userData.partnerAge}
              placeholder="Enter expected partner's age"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Expected Partner Height */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Expected Partner Height <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="partnerHeight"
			  defaultValue={userData.partnerHeight}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select</option>
              {heights.map((height) => (
                <option key={height} value={height}>
                  {height}
                </option>
              ))}
            </select>
          </div>

          {/* Expected Partner Weight */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Expected Partner Weight <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="partnerWeight"
			  defaultValue={userData.partnerWeight}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select</option>
              {weights.map((weight) => (
                <option key={weight} value={weight}>
                  {weight}
                </option>
              ))}
            </select>
          </div>

          {/* Contact Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Contact Email
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              readOnly
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Mobile Number */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              name="mobile"
			  defaultValue={userData.mobile}
              placeholder="Enter mobile number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-purple-500 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Update Bio
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBio;
