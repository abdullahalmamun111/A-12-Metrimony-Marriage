import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure FontAwesome is imported

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-white">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* About Section */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">About Us</h2>
                        <p className="text-sm">
                            Matrimony Hub is an AI-driven platform to connect people with their ideal life partners. We aim to bring technology and love together for a seamless experience.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-200"
                            >
                                <i className="fab fa-facebook fa-lg"></i> {/* Facebook Icon */}
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-200"
                            >
                                <i className="fab fa-twitter fa-lg"></i> {/* Twitter Icon */}
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-200"
                            >
                                <i className="fab fa-instagram fa-lg"></i> {/* Instagram Icon */}
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-200"
                            >
                                <i className="fab fa-linkedin fa-lg"></i> {/* LinkedIn Icon */}
                            </a>
                        </div>
                    </div>

                    {/* Message Form */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Send Us a Message</h2>
                        <form>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full mb-4 px-4 py-2 rounded bg-white text-gray-700 focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full mb-4 px-4 py-2 rounded bg-white text-gray-700 focus:outline-none"
                            />
                            <textarea
                                placeholder="Your Message"
                                className="w-full mb-4 px-4 py-2 rounded bg-white text-gray-700 focus:outline-none"
                                rows="4"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white font-semibold"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 border-t border-purple-300 pt-4 text-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Matrimony Hub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
