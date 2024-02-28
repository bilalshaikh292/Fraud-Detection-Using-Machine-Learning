import React from "react";
import Lottie from "lottie-react";
import scam from "../../assets/Lottie/anim.json";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full relative ">
        <div className="absolute inset-0 bg-black opacity-45">
          <Navbar />
        </div>
        <div className="h-full w-full flex justify-center items-end bg-home bg-no-repeat bg-cover bg-end shadow-md m:bg-center bg-fixed">
          <img className="p-12 opacity-35" src="/arrow.png" alt="" />
        </div>
      </div>

      <div className="h-screen w-full bg-[#120E05] flex flex-col justify-center items-center space-y-8 text-center">
        <div className="flex flex-col justify-center items-center text-6xl w-full text-white opacity-45 tracking-wider">
          {/* Welcome to Our Fraud Detection <br /> System Prototype */}

          <div style={{ width: 300, height: 300 }}>
      <Lottie
        animationData={scam}
        loop
        autoplay
      />
    </div>

          <Typewriter
            options={{
              strings: ["Welcome to Our Fraud Detection <br> System Prototype"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="h-screen w-full bg-[#fff5e9]  flex justify-center items-center text-center">
        <div className="text-6xl w-[80%] text-[#120E05]  tracking-wider">
          We're a group of passionate individuals working hard to keep your
          financial transactions safe. Using simple yet effective technology, we
          monitor every transaction in real-time to catch any suspicious
          activity.
        </div>
      </div>
    </>
  );
}

const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center font-Onest p-6 fixed ">
        <h1 className="text-5xl font-bold text-white border-b-2 border-white ">
          Fraud <br /> Detection
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-center md:space-x-4 text-xl font-semibold text-white self-start ">
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