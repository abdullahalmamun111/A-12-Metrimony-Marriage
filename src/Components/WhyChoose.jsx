import React, { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import SectionTitle from "../Shared/SectionTitle";
import { FaHeart, FaUsers, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaHeart className="text-red-500 text-5xl" />, 
    title: "Personalized Matches", 
    description: "Get tailored partner recommendations based on your preferences."
  },
  {
    icon: <FaUsers className="text-blue-500 text-5xl" />, 
    title: "Verified Profiles", 
    description: "Every profile is verified to ensure authenticity and security."
  },
  {
    icon: <FaShieldAlt className="text-green-500 text-5xl" />, 
    title: "Privacy & Security", 
    description: "Your data is protected with top-notch security measures."
  }
];

const WhyChoose = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-gray-900 text-gray-300"
          : "bg-white text-gray-700"
      } py-16 px-4 md:px-16`}
    >
      <SectionTitle
        title="Why Choose Us"
        subtitle="Follow these simple steps to find your perfect life partner through our platform."
      />

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col text-gray-800 items-center bg-gray-300 text-center p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-opacity-80 backdrop-blur-md"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
