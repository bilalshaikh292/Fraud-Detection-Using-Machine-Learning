import React from 'react'

export default function Home() {

  return (
    <>
<div className="h-screen w-full relative">
  <div className="absolute inset-0 bg-black opacity-45">

      <Navbar/>

  </div>
  <div className="h-full w-full bg-home bg-no-repeat bg-cover bg-end shadow-md m:bg-center bg-fixed">
  </div>
</div>
    </>
  )
}

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center font-Onest p-6">
        <h1 className="text-5xl font-bold text-white border-b-2 border-white">Fraud <br /> Detection</h1>

        <div className="flex justify-between items-center space-x-4 text-lg text-white self-start">
          <a className="text-white " href="/login">
            Login
          </a>
          <a className="text-white " href="/signup">
            Signup
          </a>
        </div>
      </div>
    </>
  );
};