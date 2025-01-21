import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../assets/login.jpg";
import Swal from "sweetalert2";
import { ContextApi } from "../AuthProvider/AuthContext";
import usePublic from "../Hooks/usePublic";

const Login = () => {
  const axiosPublic = usePublic();
  const location = useLocation();
  const navigate = useNavigate();
  const { googleSignIn, signIn } = useContext(ContextApi);

  // google sign In
  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        Swal.fire({
          title: "Success!",
          text: "Your Sign Up Sucessfull",
          icon: "success",
        });
        navigate(location.state ? location.state : "/");
      });
    });
  };

  // sign in with email and password
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        Swal.fire({
          title: "Success!",
          text: "Sign In Sucessfull",
          icon: "success",
        });
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Failed!",
          text: "Sorry Your Information Is Incorrect",
          icon: "error",
        });
      });
  };

  return (
    <div className="min-h-screen my-4 py-4 bg-gray-100 flex items-center justify-center px-4 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center shadow-lg bg-white rounded-lg overflow-hidden w-full max-w-5xl">
        {/* Left Side with Image */}
        <div className="w-full lg:w-1/2  flex items-center justify-center p-10">
          <img src={loginImg} alt="Login Illustration" className="max-w-full" />
        </div>
        {/* Right Side with Form */}
        <div className="w-full lg:w-1/2 p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800">
            Login
          </h1>
          <form onSubmit={handleSignIn} className="space-y-6 mt-6">
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
            {/* Login Button */}
            <div>
              <button className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Sign In
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
              New here?{" "}
              <Link
                to={"/signup"}
                className="text-blue-500 font-medium hover:underline"
              >
                Create a New Account
              </Link>
            </p>

            <p className="text-xl font-semibold mt-4">Or Sign In With</p>
            <div className="flex justify-center items-center mt-4 space-x-4">
              <button
                className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Sign in with Facebook"
              >
                <i className="fab fa-facebook-f text-blue-600"></i>
              </button>
              <button
                onClick={handleGoogleLogin}
                className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label="Sign in with Google"
              >
                <i className="fab fa-google text-red-600"></i>
              </button>
              <button
                className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Sign in with Twitter"
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

export default Login;
