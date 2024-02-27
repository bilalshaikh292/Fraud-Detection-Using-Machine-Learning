import React from 'react';

export default function Signup() {
  return (
    <>
      <div className="p-4 lg:flex lg:flex-row-reverse md:p-20 lg:p-0 font-Onest">
        <div className="h-32 w-32 bg-pattern-2 bg-no-repeat bg-cover bg-end shadow-md m:bg-center bg-fixed lg:h-screen lg:w-1/2"></div>
        <div className="lg:w-1/2 lg:py-8 lg:px-32 flex justify-center  flex-col">
          <h1 className="text-4xl mt-14 mb-8 font-semibold text-start">Create your account?</h1>
          <input id="email" className="w-full placeholder-dark border-2 border-dark rounded-md py-3 px-4" placeholder="Enter your email" type="text" />
          <p id="invalid-email" className="hidden text-red-500 text-sm">Invalid Email</p>
          <input className="w-full mt-6 placeholder-dark border-2 border-dark rounded-md py-3 px-4" placeholder="Enter your password" type="password" />
          <input className="w-full mt-6 placeholder-dark border-2 border-dark rounded-md py-3 px-4" placeholder="Confirm your password" type="password" />
          <div className="w-full flex justify-between items-center mt-6">
            <div className="flex items-center">
              <input className="w-4 h-4 accent-dark" type="checkbox" name="remember-p" id="" />
              <p className="ml-2">Remember me</p>
            </div>
            <a href="#" className="hover:opacity-90">Forgot password</a>
          </div>
          {/* Buttons */}
          <button className="w-full mt-5 rounded-md bg-dark text-light py-3 hover:bg-opacity-90">Sign up</button>
          <button className="flex items-center justify-center w-full mt-6 rounded-md border-2 border-dark py-3">
            <div className="h-5 w-5 mr-2 space-x-2">
              <img src="/google.png" alt="" />
            </div>
            <div>
              Sign up with Google
            </div>
          </button>

          <div className="flex justify-center items-center mt-7">
            <p className="text-sm text-gray-700 mx-1">Don't have an account?</p>
            <a href="/login" className="hover:opacity-90">Sign in</a>
          </div>
        </div>
      </div>
    </>
  );
}
