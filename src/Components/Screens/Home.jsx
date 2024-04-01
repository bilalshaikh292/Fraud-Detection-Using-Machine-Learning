import React, { useState } from "react";
import Lottie from "lottie-react";
import scam from "../../assets/Lottie/anim.json";
import Typewriter from "typewriter-effect";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const scrollBottom = () => {
    window.scrollTo({
      top: 780,
      behavior: "smooth"
    });
  };

  return (
    <>
      <div className="h-screen w-full relative ">
        <div className="absolute inset-0 bg-black opacity-45">
          <Navbar />
        </div>
        <div className="h-full w-full flex justify-center items-end bg-home bg-no-repeat bg-cover bg-end shadow-md m:bg-center bg-fixed">
          <img className="h-24 mb-9 cursor-pointer rotate-90 hover:translate-y-4 active:translate-y-8 " src="/arrow.png" alt=""
            onClick={scrollBottom}
          />
        </div>
      </div>

      <div className="h-screen w-full bg-[#120E05] flex flex-col justify-center items-center space-y-8 text-center font-Onest">
        <div className="flex flex-col justify-center items-center text-6xl w-full text-white opacity-45 tracking-wider">
          <div style={{ width: 300, height: 250 }}>
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
      <div className="h-screen w-full bg-[#fff5e9] opacity-80 flex justify-center items-center text-center font-Onest">
        <div className="text-6xl w-[80%] text-[#120E05]  tracking-wider">
          We're a group of passionate individuals working hard to keep your
          financial transactions safe. Using simple yet effective technology, we
          monitor every transaction in real-time to catch any suspicious
          activity.
        </div>
      </div>

      {/* Button for smooth scrolling to top */}
      <div className="fixed bottom-8 right-8">
        <button
          className="rotate-[-45deg]"
          onClick={scrollToTop}
        >
          <img className="h-16  hover:animate-spin" src="/scribble.png" alt="" />
        </button>
      </div>
    </>
  );
}

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center font-Onest p-6 fixed ">
      <h1 className="text-5xl font-bold text-white border-b-2 border-white cursor-pointer hover:text-[#f6e271]">
        Fraud <br /> Detection
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center md:space-x-4 text-xl font-semibold text-white self-start ">
        <a className="text-white hover:text-[#f6e271]" href="/login">
          Login
        </a>
        <a className="text-white hover:text-[#f6e271]" href="/signup">
          Signup
        </a>
      </div>
    </div>
  );
};
