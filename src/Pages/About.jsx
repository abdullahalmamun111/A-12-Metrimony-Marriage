import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="bg-gray-100 py-4 mt-16 px-6 md:px-12 lg:px-20">
      <Helmet>
        <title>About || MetrimonyHub</title>
      </Helmet>
      {/* Header Section */}

      <SectionTitle
        title={"About Matrimony Hub"}
        subtitle={
          "Connecting hearts and building lifelong relationships with trust, love, and dedication."
        }
      ></SectionTitle>

      {/* Image and Mission Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-10 mb-12">
        <img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="About Us"
          className="w-full lg:w-1/2 rounded-lg shadow-lg"
        />
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-justify">
            Matrimony Hub is dedicated to creating meaningful connections
            between individuals who are seeking their perfect match. Our mission
            is to provide a trusted platform where people can meet, interact,
            and build lasting relationships. With a commitment to integrity and
            inclusivity, we aim to bring people together from all walks of life.
          </p>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Trust</h3>
            <p className="text-gray-600">
              We ensure a secure and reliable platform where users can connect
              with confidence.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              Inclusivity
            </h3>
            <p className="text-gray-600">
              We celebrate diversity and welcome everyone to find their special
              someone.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              Commitment
            </h3>
            <p className="text-gray-600">
              We are committed to helping individuals discover meaningful
              relationships.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Join Us Today!
        </h2>
        <p className="text-gray-700 mb-6">
          Discover a world of possibilities and start your journey to love and
          happiness with Matrimony Hub.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default About;
