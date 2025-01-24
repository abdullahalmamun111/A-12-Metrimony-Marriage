import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="bg-gray-100 mt-16 py-4 px-6 md:px-12 lg:px-20">
      {/* Header Section */}
      <Helmet>
        <title>Contact || MetrimonyHub</title>
      </Helmet>

      <SectionTitle
        title={"Contact Us"}
        subtitle={
          " Were here to help! Feel free to reach out to us with any questions, feedback,or inquiries"
        }
      ></SectionTitle>

      {/* Contact Form Section */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 lg:w-2/3">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name Field */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
                  required
                />
              </div>
              {/* Email Field */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
                  required
                />
              </div>
            </div>
            {/* Subject Field */}
            <div className="mb-6">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter the subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
                required
              />
            </div>
            {/* Message Field */}
            <div className="mb-6">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-blue-50 rounded-lg shadow-lg p-8 lg:w-1/3">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Contact Details
          </h2>
          <p className="text-gray-700 mb-4">
            If you’d prefer to contact us directly, here’s how you can reach us:
          </p>
          <ul className="space-y-4">
            <li>
              <span className="font-semibold text-gray-800">Phone:</span>{" "}
              <a
                href="tel:+1234567890"
                className="text-blue-600 hover:underline"
              >
                +123 456 7890
              </a>
            </li>
            <li>
              <span className="font-semibold text-gray-800">Email:</span>{" "}
              <a
                href="mailto:info@matrimonyhub.com"
                className="text-blue-600 hover:underline"
              >
                info@matrimonyhub.com
              </a>
            </li>
            <li>
              <span className="font-semibold text-gray-800">Address:</span>
              <p className="text-gray-700">
                123 Matrimony Street, <br />
                Love City, LT 45678
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
