import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Log In</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <Link to="/main">
            <button
              type="submit"
              className="w-full bg-cyan-500 text-white font-bold py-2 px-4 rounded-md hover:bg-cyan-600 transition duration-300"
            >
              Log In
            </button>
          </Link>
        </form>

        <div className="flex justify-between items-center mt-4">
          <a href="/forgot-password" className="text-blue-500">
            Forgot password?
          </a>
          <a href="/" className="text-blue-500">
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
