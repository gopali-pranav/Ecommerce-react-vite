import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPages = () => {
  return (
    <div>
      <div class="min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="/vite.svg"
              alt="Your Company"
            />
          </div>
          <h2 class="text-2xl font-semibold mb-6 mt-5 text-gray-800">
            Sign Up
          </h2>

          <form action="#" method="POST">
            <div class="mb-4">
              <label
                for="username"
                class="block text-gray-700 text-sm font-semibold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your username"
                required
              />
            </div>

            <div class="mb-4">
              <label
                for="email"
                class="block text-gray-700 text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your email"
                required
              />
            </div>

            <div class="mb-4">
              <label
                for="password"
                class="block text-gray-700 text-sm font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your password"
                required
              />
            </div>

            <button
              type="submit"
              class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            >
              Sign Up
            </button>
          </form>

          <p class="text-gray-600 text-sm mt-4">
            Already have an account?{" "}
            <a href="#" class="text-blue-500">
              <Link to={"/login"}>Login here</Link>
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPages;
