import React, { useContext } from 'react';
import { FaUserPlus, FaRegClipboard, FaHeart, FaCheck } from 'react-icons/fa';
import SectionTitle from '../Shared/SectionTitle';
import { ThemeContext } from '../ThemeProvider';

const HowItWorks = () => {
   const { theme } = useContext(ThemeContext);
  const steps = [
    {
      id: 1,
      title: "Sign Up",
      description: "Create your account and become a part of our growing community.",
      icon: <FaUserPlus className="text-5xl text-green-500" />,
    },
    {
      id: 2,
      title: "Fill Your Profile",
      description: "Provide your details like interests, goals, and preferences to find your perfect match.",
      icon: <FaRegClipboard className="text-5xl text-blue-500" />,
    },
    {
      id: 3,
      title: "Find Matches",
      description: "Browse through profiles and find potential matches based on your preferences.",
      icon: <FaHeart className="text-5xl text-pink-500" />,
    },
    {
      id: 4,
      title: "Start Connecting",
      description: "Send messages and connect with like-minded individuals to build meaningful relationships.",
      icon: <FaCheck className="text-5xl text-purple-500" />,
    },
  ];

  return (
    <section className={`${theme === "dark" ? "bg-gray-900" : "bg-gradient-to-r from-yellow-50 via-white to-pink-50 py-16"} py-4`}>
      <div className="max-w-7xl mx-auto px-6">

		<SectionTitle title={'How It Works'} subtitle={'Follow these simple steps to find your perfect life partner through our platform.'}>
       </SectionTitle>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center p-6 bg-gray-300 shadow-md rounded-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-4">{step.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
