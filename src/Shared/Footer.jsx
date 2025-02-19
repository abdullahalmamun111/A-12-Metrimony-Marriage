import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { ThemeContext } from "../ThemeProvider";

const Footer = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <footer className={`${theme === "dark" ? "bg-gray-900 text-gray-400 " : " bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 text-white"} `}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About Us */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">About Matrimony Hub</h2>
            <p className="text-sm leading-relaxed">
              Matrimony Hub is a trusted platform that helps individuals find
              their ideal life partners. With advanced AI-driven matchmaking, we
              ensure a safe, secure, and seamless experience. Our mission is to
              create meaningful connections that lead to happy marriages.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="hover:text-gray-200 hover:underline transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-gray-200 hover:underline transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/biodatas"
                  className="hover:text-gray-200 hover:underline transition duration-300"
                >
                  Biodata
                </a>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className="hover:text-gray-200 hover:underline transition duration-300"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-gray-200 hover:underline transition duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-sm">
              <strong>Email:</strong> support@matrimonyhub.com
            </p>
            <p className="text-sm mt-2">
              <strong>Phone:</strong> +1 (234) 567-890
            </p>
            <p className="text-sm mt-2">
              <strong>Address:</strong> 123 Love Lane, Relationship City,
              Harmony State, 45678
            </p>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-6 text-lg">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 text-3xl transition duration-300 transform hover:scale-110"
                title="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-blue-600" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 text-3xl transition duration-300 transform hover:scale-110"
                title="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-blue-400" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 text-3xl transition duration-300 transform hover:scale-110"
                title="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-pink-500" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 text-3xl transition duration-300 transform hover:scale-110"
                title="LinkedIn"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-blue-700"
                />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 text-3xl transition duration-300 transform hover:scale-110"
                title="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} className="text-red-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-purple-300"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Matrimony Hub. All rights
            reserved.
          </p>
          <p className="text-sm mt-4 md:mt-0">
            Designed with <span className="text-red-400">❤️</span> by Abdullah
            Al-Mamun.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
