import React from 'react';
import { FaUser, FaFemale, FaMale, FaHeart } from 'react-icons/fa';
import SectionTitle from '../Shared/SectionTitle';
import useAllUser from '../Hooks/useAllUser';
import useSecure from '../Hooks/useSecure';
import { useQuery } from '@tanstack/react-query';

const SuccessCounter = () => {
  const {allUser} = useAllUser();
  const axiosSecure = useSecure();

  const totalBiodataCount = allUser.length;
  const maleBiodataCount = allUser.filter(user => user.biodataType === "Male").length;
  const femaleBiodataCount = allUser.filter(user => user.biodataType === "Female").length;
  const premiumBiodataCount = allUser.filter(user => user.userType === "premium").length;

  // Fetching success story data
  const { data: successData = [] } = useQuery({
    queryKey: ['successStory'],
    queryFn: async () => {
      const res = await axiosSecure.get('/successStory');
      return res.data;
    },
  });


  const counters = [
    {
      id: 1,
      title: "Total Biodata",
      value:totalBiodataCount,
      icon: <FaUser className="text-6xl text-blue-500" />,
    },
    {
      id: 2,
      title: "Girls' Biodata",
      value: maleBiodataCount,
      icon: <FaFemale className="text-6xl text-pink-500" />,
    },
    {
      id: 3,
      title: "Boys' Biodata",
      value: femaleBiodataCount,
      icon: <FaMale className="text-6xl text-green-500" />,
    },
    {
      id: 4,
      title: "Marriages Completed",
      value: successData.length,
      icon: <FaHeart className="text-6xl text-red-500" />,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-white via-yellow-50 to-pink-50 py-8">
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle title={'Our Achievements'} subtitle={"A glimpse of what we've accomplished together!"}>
       </SectionTitle>

        {/* Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {counters.map((counter) => (
            <div
              key={counter.id}
              className="flex flex-col items-center justify-center text-center p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-4">{counter.icon}</div>

              {/* Value */}
              <h3 className="text-5xl font-bold text-gray-800 mb-2 flex items-center">
                {/* Value */}
                {counter.value.toLocaleString()} 
                {/* + Icon */}
                <span className="text-3xl text-gray-500 ml-1">+</span>
              </h3>

              {/* Title */}
              <p className="text-gray-600 text-lg">{counter.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessCounter;
