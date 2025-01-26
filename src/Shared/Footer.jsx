import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Us */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">About Matrimony Hub</h2>
                        <p className="text-sm leading-relaxed">
                            Matrimony Hub is a trusted platform that helps individuals find their ideal life partners.
                            With advanced AI-driven matchmaking, we ensure a safe, secure, and seamless experience.
                            Our mission is to create meaningful connections that lead to happy marriages.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/about" className="hover:text-gray-200">About Us</a></li>
                            <li><a href="/privacy-policy" className="hover:text-gray-200">Privacy Policy</a></li>
                            <li><a href="/terms" className="hover:text-gray-200">Terms & Conditions</a></li>
                            <li><a href="/contact" className="hover:text-gray-200">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                        <p className="text-sm">
                            <strong>Email:</strong> support@matrimonyhub.com
                        </p>
                        <p className="text-sm mt-2">
                            <strong>Phone:</strong> +1 (234) 567-890
                        </p>
                        <p className="text-sm mt-2">
                            <strong>Address:</strong> 123 Love Lane, Relationship City, Harmony State, 45678
                        </p>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Follow Us</h2>
                        <div className="flex space-x-4 text-lg">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-200"
                            >
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-200"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-200"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-200"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-200"
                            >
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-12 border-t border-purple-300"></div>

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-6">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Matrimony Hub. All rights reserved.
                    </p>
                    <p className="text-sm mt-4 md:mt-0">
                        Designed with ❤️ by Abdullah Al-Mamun.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
