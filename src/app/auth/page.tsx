'use client'

import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

const Page = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Sign Up

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Main Card */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-md font-medium ${isLogin ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 rounded-md font-medium ${!isLogin ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Dynamic Form */}
        {isLogin ? (
          /* Login Form */
          <div>
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Log In</h1>
              <p className="text-sm text-gray-600">Access your account</p>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
              >
                Log In
              </button>
            </form>
            <div className="flex justify-between mt-4 text-sm text-gray-600">
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
              <a href="#" className="hover:underline">
                Create an account
              </a>
            </div>
          </div>
        ) : (
          /* Sign Up Form */
          <div>
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Create an Account</h1>
              <p className="text-sm text-gray-600">Please fill in the details below</p>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
              >
                Create Account
              </button>
            </form>
          </div>
        )}

        {/* Divider */}
        <div className="flex items-center justify-between my-6">
          <span className="border-b w-1/5 lg:w-1/4"></span>
          <p className="text-sm text-gray-500">OR</p>
          <span className="border-b w-1/5 lg:w-1/4"></span>
        </div>

        {/* Google Signup/Login Button */}
        <button
          className="w-full py-2 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50 transition duration-300"
        >
          <FaGoogle className="text-red-500 mr-2" size={20} />
          <span className="text-sm text-gray-600">
            {isLogin ? 'Log in with Google' : 'Sign up with Google'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Page;