import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { ContextApi } from "../AuthProvider/AuthContext";
import useSecure from "../Hooks/useSecure";
import { useNavigate } from "react-router-dom";

const divisions = [
  "Dhaka",
  "Chattagram",
  "Rangpur",
  "Barisal",
  "Khulna",
  "Mymensingh",
  "Sylhet",
];

const weights = ["40kg", "41kg", "42kg", "43kg", "44kg", "45kg", "46kg", "47kg", "48kg", "49kg", "50kg", "51kg", "52kg", "53kg", "54kg", "55kg", "56kg", "57kg", "58kg", "59kg", "60kg", "61kg", "62kg", "63kg", "64kg", "65kg", "66kg", "67kg", "68kg", "69kg", "70kg", "71kg", "72kg", "73kg", "74kg", "75kg", "76kg", "77kg", "78kg", "79kg", "80kg", "81kg", "82kg", "83kg", "84kg", "85kg", "86kg", "87kg", "88kg", "89kg", "90kg", "91kg", "92kg", "93kg", "94kg", "95kg", "96kg", "97kg", "98kg", "99kg", "100kg"]
;
const heights = ["4'5","4'6","4'7","4'8","4'9", "5'0","5'1","5'2","5'3","5'4", "5'5", "6'0","6'1", "6'2", "6'3", "6'4",  "6'5"];
const occupations = ["Student", "Engineer", "Doctor", "Business", "Other"];
const races = [
  "Fair", "Very Fair", "Medium", "Light", "Tan", "Olive", "Brown", 
  "Deep Brown", "Dark", "Ebony", "Pale", "Pinkish", "Golden", 
  "Peach", "Ruddy", "Dusky", "Ivory", "Beige", "Honey", 
  "Caramel", "Mocha", "Amber"
]
;

const EditBiodata = () => {
  const navigate = useNavigate();
  const axiosSecure = useSecure();
  const { user } = useContext(ContextApi);
  const [formData, setFormData] = useState({
    biodataType: "",
    name: "",
    profileImage: "",
    dateOfBirth: "",
    height: "",
    weight: "",
    age: "",
    occupation: "",
    race: "",
    fatherName: "",
    motherName: "",
    permanentDivision: "",
    presentDivision: "",
    partnerAge: "",
    partnerHeight: "",
    partnerWeight: "",
    email: user.email,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosSecure.post("/biodata", formData)
    .then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: "Done!",
          text: `Bio Added Successfully!`,
          icon: "success",
        }).then(() => {
          window.location.reload();
      });
      navigate('/dashboard')
      }
    });
    // Reset form
    setFormData({
      biodataType: "",
      name: "",
      profileImage: "",
      dateOfBirth: "",
      height: "",
      weight: "",
      age: "",
      occupation: "",
      race: "",
      fatherName: "",
      motherName: "",
      permanentDivision: "",
      presentDivision: "",
      partnerAge: "",
      partnerHeight: "",
      partnerWeight: "",
      email: user.email,
    });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen w-full">
    

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Please provide all required information and Create your profile.
          </h1>

          <form onSubmit={handleSubmit}>
            {/* Biodata Type */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">
                Biodata Type <span className="text-red-500">*</span>
              </label>
              <select
                required
                name="biodataType"
                value={formData.biodataType}
                onChange={handleInputChange}
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
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
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
                value={formData.profileImage}
                onChange={handleInputChange}
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
                value={formData.dateOfBirth}
                onChange={handleInputChange}
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
                value={formData.height}
                onChange={handleInputChange}
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
                value={formData.weight}
                onChange={handleInputChange}
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
                value={formData.age}
                onChange={handleInputChange}
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
                value={formData.occupation}
                onChange={handleInputChange}
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
                name="race"
                value={formData.race}
                onChange={handleInputChange}
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
                // value={formData.fatherName}
                onChange={handleInputChange}
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
                // value={formData.motherName}
                onChange={handleInputChange}
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
                // value={formData.permanentDivision}
                onChange={handleInputChange}
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

            {/* Present Division */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">
                Present Division <span className="text-red-500">*</span>
              </label>
              <select
                required
                name="presentDivision"
                value={formData.presentDivision}
                onChange={handleInputChange}
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

            {/* Expected Partner Age */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">
                Expected Partner Age
              </label>
              <input
                required
                type="number"
                name="partnerAge"
                // value={formData.partnerAge}
                onChange={handleInputChange}
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
                // value={formData.partnerHeight}
                onChange={handleInputChange}
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
                // value={formData.partnerWeight}
                onChange={handleInputChange}
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
                // value={formData.mobileNumber}
                onChange={handleInputChange}
                placeholder="Enter mobile number"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-purple-500 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Submit
            </button>
          </form>
        </div>
      
    </div>
  );
};

export default EditBiodata;
