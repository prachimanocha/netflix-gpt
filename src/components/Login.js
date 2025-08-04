import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    };
  return (
    <div className="relative h-screen w-screen">
      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
        alt="background"
      />

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 -z-10" />

      <Header />

      {/* Sign In Form */}
      <div className="flex justify-center items-center h-full">
        <form className="bg-black bg-opacity-75 p-10 rounded-md text-white w-[350px] space-y-6">
          <h2 className="text-3xl font-bold">{ isSignInForm ? "Sign In" : "Sign Up"}</h2>

          <div className="flex flex-col space-y-4">
            {!isSignInForm && (<input
              type="text"
              placeholder="Full Name"
              className="p-3 bg-gray-700 rounded text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />)}
            <input
              type="email"
              placeholder="Email or phone number"
              className="p-3 bg-gray-700 rounded text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 bg-gray-700 rounded text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded"
            >
              { isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </div>

          <div className="flex justify-between text-sm text-gray-400">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>

          <div className="text-gray-400 text-sm hover:underline" onClick={toggleSignInForm}>
            {isSignInForm ? "New to Netflix? Sign up now" : "Already registered! Sign in now"}
          </div>

          <p className="text-xs text-gray-500">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Learn more.
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
