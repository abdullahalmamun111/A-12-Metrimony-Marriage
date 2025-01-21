import React, { useContext } from "react";
import signUpImg from "../assets/signUp.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ContextApi } from "../AuthProvider/AuthContext";
import usePublic from "../Hooks/usePublic";

const Signup = () => {
  const axiosPublic = usePublic();
  const location = useLocation();
  const navigate = useNavigate();
  const { createUser, googleSignIn, updateUserProfile } =
    useContext(ContextApi);

  // google sign In
  const handleGoogleLogin = () => {
    googleSignIn()
    .then((result) => {
        const userInfo = {
            name: result.user?.displayName,
            email : result.user?.email,
          }
          axiosPublic.post('/users', userInfo)
          .then(res => {
            Swal.fire({
              title: "Success!",
              text: "Your Sign Up Sucessfull",
              icon: "success"
            });
            navigate(location.state? location.state :'/');
          })
    });
  };

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password).then((result) => {
      updateUserProfile(name, photo)
      .then((result) => {
        const userInfo = {
            name,
            email
        }

        axiosPublic.post('/users', userInfo)
        .then(res => {
            if(res.data.insertedId){
                Swal.fire({
                    title: "Success!",
                    text: "Your Sign Up Sucessfull",
                    icon: "success",
                  });
                  navigate(location.state ? location.state : "/");
            }
        })
      });
    });
  };

  return (
    <div className="min-h-screen my-4 py-4 bg-gray-100 flex items-center justify-center px-4 lg:px-20">
      <div className="flex flex-col lg:flex-row-reverse items-center shadow-lg bg-white rounded-lg overflow-hidden w-full max-w-5xl">
        {/* Left Side with Image */}
        <div className="w-full lg:w-1/2  flex items-center justify-center p-10">
          <img
            src={signUpImg}
            alt="Sign Up Illustration"
            className="max-w-full"
          />
        </div>
        {/* Right Side with Form */}
        <div className="w-full lg:w-1/2 p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800">
            Sign Up
          </h1>
          <form onSubmit={handleCreateUser} className="space-y-6 mt-6">
            {/* Name Input */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />
            </div>

            {/* Photo URL Input */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Your Photo URL"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Type here"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />
            </div>

            {/* Sign Up Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white font-medium py-3 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* back to home button */}
          <div>
            <Link to={"/"}>
              <button
                type="submit"
                className="w-full mt-4 bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Back To Home
              </button>
            </Link>
          </div>

          {/* Additional Options */}
          <div className="mt-6 text-center">
            <p className="text-sm">
              Already Have an Account?{" "}
              <Link
                to={"/login"}
                className="text-blue-500 font-medium hover:underline"
              >
                Please Sign In
              </Link>
            </p>

            <p className="text-xl font-semibold mt-4">Or Sign Up With</p>
            <div className="flex justify-center items-center mt-4 space-x-4">
              <button
                className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Sign up with Facebook"
              >
                <i className="fab fa-facebook-f text-blue-600"></i>
              </button>

              <button
                onClick={handleGoogleLogin}
                className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label="Sign up with Google"
              >
                <i className="fab fa-google text-red-600"></i>
              </button>

              <button
                className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Sign up with Twitter"
              >
                <i className="fab fa-twitter text-blue-400"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
