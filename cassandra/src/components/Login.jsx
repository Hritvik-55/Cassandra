import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="h-[95vh]">
      <Header />
      <div className="absolute ">
        <img
          className="object-fill w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>

      <form className="w-4/12 absolute bg-black m-6 my-36 mx-auto right-0 left-0 h-96 opacity-90 rounded-md">
        <h1 className="text-white font-bold text-2xl p-2 m-2 mx-10 my-3">
          {isSignIn ? " Sign In" : "Sign up"}
        </h1>
        {!isSignIn && (
          <input
            className="w-9/12 p-2 m-2 mx-10 my-3 bg-gray-800 bg-opacity-100 text-opacity-100 text-white"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="w-9/12 p-2 m-2 mx-10 my-3 bg-gray-800 bg-opacity-100 text-opacity-100  text-white"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="w-9/12 p-2 m-2 mx-10 my-3 bg-gray-800 bg-opacity-100 text-opacity-100  text-white"
          type="password"
          placeholder="Password"
        />

        <button className="bg-red-700 rounded-md p-2 m-2 w-9/12 mx-10 my-3 bg-opacity-100 text-opacity-100 text-white font-bold text-center ">
          {isSignIn ? " Sign In" : "Sign up"}
        </button>
        {isSignIn ? (
          <p className="text-white p-2 m-2 mx-10 my-3">
            New to Cassandra?
            <span
              className="font-extrabold cursor-pointer m-1"
              onClick={toggleSignIn}
            >
              Sign up now.
            </span>
          </p>
        ) : (
          <p className="text-white p-2 m-2 mx-10 my-3">
            Already a member?
            <span
              className="font-extrabold cursor-pointer m-1"
              onClick={toggleSignIn}
            >
              Sign In.
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
