import React, { useContext, useState } from 'react';
import logo from '../assets/logo.webp';
import { ContextApi } from '../AuthProvider/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user,logOut } = useContext(ContextApi);
    

    const handleLogout = () => {
        logOut().then((result) => {
            Swal.fire({
              title: "Success!",
              text: "Log Out Sucessfull",
              icon: "success",
            });
          });
    }

    return (
        <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo and Website Name */}
                    <div className="flex items-center space-x-3">
                        <img
                            className="h-12 w-12 rounded-full"
                            src={logo}
                            alt="Logo"
                        />
                        <h1 className="text-2xl font-bold text-white">
                            Matrimony Hub
                        </h1>
                    </div>

                    {/* Menu for Larger Screens */}
                    <div className="hidden md:flex items-center space-x-6">
                        <a
                            href="/home"
                            className="text-white hover:text-gray-200 font-medium"
                        >
                            Home
                        </a>
                        <a
                            href="/biodatas"
                            className="text-white hover:text-gray-200 font-medium"
                        >
                            Biodatas
                        </a>
                        <a
                            href="/about"
                            className="text-white hover:text-gray-200 font-medium"
                        >
                            About Us
                        </a>
                        <a
                            href="/contact"
                            className="text-white hover:text-gray-200 font-medium"
                        >
                            Contact Us
                        </a>
                        {user ? (
                            <>
                                <a
                                    href="/dashboard"
                                    className="text-white hover:text-gray-200 font-medium"
                                >
                                    Dashboard
                                </a>
                                <button
                                onClick={handleLogout}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                                >
                                    Log Out
                                </button>
                            </>
                        ) : (
                            <a
                                href="/login"
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                            >
                                Login
                            </a>
                        )}
                    </div>

                    {/* Hamburger Menu for Small Devices */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:text-gray-200 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Dropdown Menu for Small Devices */}
            {isMenuOpen && (
                <div className="md:hidden bg-purple-500 text-white shadow-md">
                    <a
                        href="/home"
                        className="block px-4 py-2 hover:bg-purple-600"
                    >
                        Home
                    </a>
                    <a
                        href="/biodatas"
                        className="block px-4 py-2 hover:bg-purple-600"
                    >
                        Biodatas
                    </a>
                    <a
                        href="/about"
                        className="block px-4 py-2 hover:bg-purple-600"
                    >
                        About Us
                    </a>
                    <a
                        href="/contact"
                        className="block px-4 py-2 hover:bg-purple-600"
                    >
                        Contact Us
                    </a>
                    {user ? (
                        <>
                            <a
                                href="/dashboard"
                                className="block px-4 py-2 hover:bg-purple-600"
                            >
                                Dashboard
                            </a>
                            <button
                                className="block px-4 py-2 hover:bg-purple-600"
                            >
                                Log Out
                            </button>
                        </>
                    ) : (
                        <a
                            href="/login"
                            className="block px-4 py-2 hover:bg-purple-600"
                        >
                            Login
                        </a>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
