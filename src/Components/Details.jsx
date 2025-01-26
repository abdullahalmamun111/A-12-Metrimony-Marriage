import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAllUser from "../Hooks/useAllUser";
import { ContextApi } from "../AuthProvider/AuthContext";
import useSecure from "../Hooks/useSecure";
import Swal from "sweetalert2";
import usePremium from "../Hooks/usePremium";
import { useQuery } from "@tanstack/react-query";
import usePublic from "../Hooks/usePublic";

const Details = () => {
  const { user } = useContext(ContextApi);
  const detailsData = useLoaderData(); // Current biodata details
  const { allUser } = useAllUser(); // All biodatas
  const navigate = useNavigate(); // Navigation hook
  const axiosPublic = usePublic();

  const { data: favourites = [], refetch } = useQuery({
    queryKey: ["favourites"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/favourites?email=${user.email}`);
      return res.data;
    },
  });


    // Fetch all requests
    const { data: requests = [], } = useQuery({
      queryKey: ["request"],
      queryFn: async () => {
        const res = await axiosPublic.get(`/userReq?email=${user.email}`);
        return res.data;
      },
    });

  const [isPremium, setPremium] = useState(false);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://partner-path-metrimony-server.vercel.app/premiumReq/premium/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setPremium(data.premium);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [user?.email]);

  const axiosSecure = useSecure();
  // Extract detailsData properties
  const {
    _id,
    biodataType,
    name,
    profileImage,
    dateOfBirth,
    height,
    weight,
    age,
    occupation,
    race,
    fatherName,
    motherName,
    permanentDivision,
    presentDivision,
    partnerAge,
    partnerHeight,
    partnerWeight,
    email,
    mobile,
    biodataId,
  } = detailsData;

  const isExist = favourites.some((fav) => fav.biodataId === biodataId);
  const isReqExist = requests.some((req) =>req.biodataId === biodataId)

  // Get similar biodatas (same biodataType)
  const similarBiodatas = allUser
    ?.filter((user) => user.biodataType === biodataType && user._id !== _id)
    .slice(0, 3);

  // Add to Favourites Handler
  const handleAddToFavourites = () => {
    const favoriteItem = {
      favouriteId: _id,
      biodataId,
      permanentDivision,
      occupation,
      name,
      email: user.email,
    };
      axiosSecure.post("/favourites", favoriteItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Done!",
            text: `${name} Already Added Your Favourites!`,
            icon: "success",
          });
          refetch();
        }
      });
    
  };

  // Handle Request Contact Information
  const handleRequestContactInfo = () => {
    // navigate(`/checkout/${biodataId}`);
  };

  return (
    <div className="p-4">
      {/* Biodata Details */}
      <div className="border rounded-lg p-4 mt-16 shadow-lg bg-white mb-8">
        <img src={profileImage} alt={name} className="w-[400px] rounded mb-4" />
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p>
          <strong>Biodata ID:</strong> {biodataId}
        </p>
        <p>
          <strong>Biodata Type:</strong> {biodataType}
        </p>
        <p>
          <strong>Date of Birth:</strong> {dateOfBirth}
        </p>
        <p>
          <strong>Age:</strong> {age}
        </p>
        <p>
          <strong>Height:</strong> {height}
        </p>
        <p>
          <strong>Weight:</strong> {weight}
        </p>
        <p>
          <strong>Occupation:</strong> {occupation}
        </p>
        <p>
          <strong>Race:</strong> {race}
        </p>
        <p>
          <strong>Father's Name:</strong> {fatherName}
        </p>
        <p>
          <strong>Mother's Name:</strong> {motherName}
        </p>
        <p>
          <strong>Permanent Division:</strong> {permanentDivision}
        </p>
        <p>
          <strong>Present Division:</strong> {presentDivision}
        </p>
        <p>
          <strong>Preferred Partner Age:</strong> {partnerAge}
        </p>
        <p>
          <strong>Preferred Partner Height:</strong> {partnerHeight}
        </p>
        <p>
          <strong>Preferred Partner Weight:</strong> {partnerWeight}
        </p>

        {/* Conditional Contact Information */}
        {isPremium ? (
          <>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Mobile:</strong> {mobile}
            </p>
          </>
        ) : (
          <p className="text-gray-600 italic">
            Contact information is available for premium members only.
          </p>
        )}

        {/* Add to Favourites Button */}
        {isExist ?<button
          disabled
          className="mt-4 text-gray-500 px-4 py-2 rounded shadow-md"
        >
          Already Added Favourites
        </button> :<button
          onClick={handleAddToFavourites}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded shadow-md hover:bg-green-600"
        >
          Add to Favourites
        </button>}

        {/* Request Contact Information Button */}
        {!isPremium && (
          <Link to={`/checkout/${_id}`}>
            {isReqExist ? <button
              disabled
              className="mt-4 text-gray-500 px-4 py-2 rounded shadow-md"
            >
              Request Contact Information
            </button> : <button
              onClick={handleRequestContactInfo}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600 ml-4"
            >
              Request Contact Information
            </button>}
          </Link>
        )}
      </div>

      {/* Similar Biodatas Section */}
      <div>
        <h3 className="text-xl font-bold mb-4">Similar Biodatas</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {similarBiodatas?.map((user) => (
            <div
              key={user._id}
              className="border p-4 rounded-lg shadow-lg bg-white"
            >
              <img
                src={user.profileImage}
                alt={user.name}
                className="w-full h-32 object-cover mb-4 rounded"
              />
              <h3 className="font-bold text-lg mb-2">{user.name}</h3>
              <p>
                <strong>Biodata ID:</strong> {user.biodataId}
              </p>
              <p>
                <strong>Biodata Type:</strong> {user.biodataType}
              </p>
              <p>
                <strong>Age:</strong> {user.age}
              </p>
              <p>
                <strong>Permanent Division:</strong> {user.permanentDivision}
              </p>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full"
                onClick={() => navigate(`/details/${user._id}`)}
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
