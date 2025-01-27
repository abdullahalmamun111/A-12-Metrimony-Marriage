import React, { useEffect, useState } from "react";
import useAllUser from "../Hooks/useAllUser";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import usePublic from "../Hooks/usePublic";

const BiodatasPage = () => {
  const [itemsPerPage , setItemPerpage] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)
  const [allBio, setAllBio] = useState(0);
  // const { allUser } = useAllUser();

  const axiosPublic = usePublic();

  const {data: allUser = [] , refetch} = useQuery({
    queryKey:[currentPage,itemsPerPage,'allbioForPagination'],
    queryFn: async() => {
      const res = await axiosPublic.get(`/allbioForPagination?page=${currentPage}&size=${itemsPerPage}`)
      return res.data;
    }
  })

   useEffect(() => {
    fetch('https://partner-path-metrimony-server.vercel.app/bioDataCount')
    .then(res => res.json())
    .then(data => {
      setAllBio(data.count)
    })
   },[])

  const totalBio = allBio;
  const numberOfPages = Math.ceil(totalBio / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];


  const [filters, setFilters] = useState({
    ageRange: [0, 100],
    biodataType: "",
    division: "",
  });
  
  // handle page no
  const handlePageno = (e) => {
    const val = parseInt(e.target.value)
    setItemPerpage(val)
    setCurrentPage(0)
    refetch();
  }


  // Handle filter changes
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Filter biodatas
  const filteredBiodatas = allUser?.filter((user) => {
    const matchesAge =
      user.age >= filters.ageRange[0] && user.age <= filters.ageRange[1];
    const matchesType = filters.biodataType
      ? user.biodataType === filters.biodataType
      : true;
    const matchesDivision = filters.division
      ? user.permanentDivision === filters.division
      : true;

    return matchesAge && matchesType && matchesDivision;
  });

  // handle previous Page
  const handlePrevPage = () => {
    if(currentPage > 0 ) {
      setCurrentPage(currentPage - 1)
    }
  }
// handle Next Page
  const handleNextPage = () => {
    if(currentPage < pages.length -1){
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div className="flex flex-col mt-16 lg:flex-row">
      <Helmet>
        <title>Biodata || MetrimonyHub</title>
      </Helmet>
      {/* Filter Section */}
      <div className="w-full lg:w-1/4 p-4 bg-gray-100">
        <h2 className="text-lg font-bold mb-4">Filters</h2>
        {/* Age Filter */}
        <div className="mb-4">
          <label className="block mb-2">Age Range:</label>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              placeholder="Min Age"
              className="border p-2 w-1/2"
              value={filters.ageRange[0]}
              onChange={(e) =>
                handleFilterChange("ageRange", [
                  +e.target.value,
                  filters.ageRange[1],
                ])
              }
            />
            <input
              type="number"
              placeholder="Max Age"
              className="border p-2 w-1/2"
              value={filters.ageRange[1]}
              onChange={(e) =>
                handleFilterChange("ageRange", [
                  filters.ageRange[0],
                  +e.target.value,
                ])
              }
            />
          </div>
        </div>

        {/* Biodata Type Filter */}
        <div className="mb-4">
          <label className="block mb-2">Biodata Type:</label>
          <select
            className="border p-2 w-full"
            value={filters.biodataType}
            onChange={(e) => handleFilterChange("biodataType", e.target.value)}
          >
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Division Filter */}
        <div>
          <label className="block mb-2">Division:</label>
          <select
            className="border p-2 w-full"
            value={filters.division}
            onChange={(e) => handleFilterChange("division", e.target.value)}
          >
            <option value="">All</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattagra">Chattagra</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Barisal">Barisal</option>
            <option value="Khulna">Khulna</option>
            <option value="Mymensingh">Mymensingh</option>
            <option value="Sylhet">Sylhet</option>
          </select>
        </div>
      </div>

      {/* Biodata List Section */}
      <div className="w-full lg:w-3/4 p-4">
        <h2 className="text-lg font-bold mb-4">All Biodatas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredBiodatas?.map((user) => (
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
                <strong>Permanent Division:</strong> {user.permanentDivision}
              </p>
              <p>
                <strong>Age:</strong> {user.age}
              </p>
              <p>
                <strong>Occupation:</strong> {user.occupation}
              </p>
              <Link to={`details/${user._id}`}>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full text-center">
                  View Profile
                </button>
              </Link>
            </div>
          ))}
        </div>
        {/* pagination */}
        <div className="mt-5">
          <button className="px-4 py-2 mx-1 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50" onClick={handlePrevPage}>Prev</button>
          {pages.map((page) => (
            <button
            onClick={() =>setCurrentPage(page)}
            className={currentPage === page ? "px-4 py-2 mx-1 text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50": "px-4 py-2 mx-1 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50" }>
              {page}
            </button>
          ))}
          <button className="px-4 py-2 mx-1 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50" onClick={handleNextPage}>Next</button>

          <select className="px-4 py-2 mx-1 border-2 rounded-md ml-5" onChange={handlePageno} name="" id="">
            <option value="15">15</option>
            <option value="14">14</option>
            <option value="13">13</option>
            <option value="12">12</option>
            <option value="11">11</option>
            <option value="10">10</option>
            <option value="9">9</option>
            <option value="8">8</option>
            <option value="7">7</option>
            <option value="6">6</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BiodatasPage;
