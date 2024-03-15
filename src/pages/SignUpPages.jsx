import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const SignUpPages = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUser = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const sendingData = {
      username,
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/signUp",
        sendingData
      );

      console.log(response.data);
      if (response.data) {
        toast.success("User has been added successfully");
      } else {
        console.error("Unexpected response status:", response.status);
        toast.error("Failed to add user. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to add user. Please try again later.");
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="/vite.svg"
              alt="Your Company"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-6 mt-5 text-gray-800">
            Sign Up
          </h2>

          <form onSubmit={handleUser}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your username"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your email"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            >
              Sign Up
            </button>
          </form>

          <p className="text-gray-600 text-sm mt-4">
            Already have an account?{" "}
            <Link to={"/login"} className="text-blue-500">
              Login here
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPages;
