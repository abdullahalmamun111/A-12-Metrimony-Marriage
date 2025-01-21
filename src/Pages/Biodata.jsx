import React, { useState } from 'react';
import useAllUser from '../Hooks/useAllUser';
import { Link } from 'react-router-dom';

const BiodatasPage = () => {
    const { allUser } = useAllUser();
    const [filters, setFilters] = useState({
        ageRange: [0, 100],
        biodataType: '',
        division: '',
    });

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

    return (
        <div className="flex flex-col lg:flex-row">
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
                                handleFilterChange('ageRange', [
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
                                handleFilterChange('ageRange', [
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
                        onChange={(e) =>
                            handleFilterChange('biodataType', e.target.value)
                        }
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
                        onChange={(e) =>
                            handleFilterChange('division', e.target.value)
                        }
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
                    {filteredBiodatas?.slice(0, 20).map((user) => (
                        <div
                            key={user._id}
                            className="border p-4 rounded-lg shadow-lg bg-white"
                        >
                            <img
                                src={user.profileImage}
                                alt={user.name}
                                className="w-full h-32 object-cover mb-4 rounded"
                            />
                            <h3 className="font-bold text-lg mb-2">
                                {user.name}
                            </h3>
                            <p>
                                <strong>Biodata ID:</strong> {user.biodataId}
                            </p>
                            <p>
                                <strong>Biodata Type:</strong> {user.biodataType}
                            </p>
                            <p>
                                <strong>Permanent Division:</strong>{' '}
                                {user.permanentDivision}
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
            </div>
        </div>
    );
};

export default BiodatasPage;
