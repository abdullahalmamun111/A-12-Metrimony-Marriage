import React, { useState, useEffect, useContext } from 'react';
import SectionTitle from '../Shared/SectionTitle';
import useAllUser from '../Hooks/useAllUser';
import UserCard from './UserCard';
import { ThemeContext } from '../ThemeProvider';

const PremiumMember = () => {
  const { allUser } = useAllUser();
  const [sortOrder, setSortOrder] = useState('ascending'); // Default sort order
  const [premiumUsers, setPremiumUsers] = useState([]); // Premium users data
  const [sortedUsers, setSortedUsers] = useState([]); // Sorted premium users
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Filter premium users on component mount
  useEffect(() => {
    const premiumData = allUser.filter((user) => user.userType === 'premium');
    setPremiumUsers(premiumData.slice(0, 6)); // Limit to 6 users
  }, [allUser]);

  // Sort premium users whenever `premiumUsers` or `sortOrder` changes
  useEffect(() => {
    const sorted = [...premiumUsers].sort((a, b) => {
      return sortOrder === 'ascending' ? a.age - b.age : b.age - a.age;
    });
    setSortedUsers(sorted);
  }, [premiumUsers, sortOrder]);

  // Handle dropdown change
  const handleSortChange = (event) => {
    setSortOrder(event.target.value); // Update sortOrder
  };

  return (
    <div className={`${theme === "dark" ? "bg-gray-900 " : "bg-white "}py-4 `}>
      <SectionTitle subtitle={'Meet Our Premium Members'} title={'OUR PREMIUM MEMBERS'} />

      {/* Dropdown for Sorting */}
      <div className="flex justify-end px-3 mb-4">
        <label htmlFor="sortOrder" className="mr-2 mt-2 font-medium text-gray-600">
          Sort by Age:
        </label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={handleSortChange}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>

      {/* Grid of User Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5 px-3">
        {sortedUsers.map((item) => (
          <UserCard key={item.biodataId} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PremiumMember;
