import React from "react";
import TextEffect6 from "./atoms/TextEffect6";
import ButtonEffect34 from "./atoms/buttonEffect34.jsx";
import "./Coming_soon.css";

const ComingSoon = () => {
  return (
    <div className="relative w-full bg-[#171717]">
      <div className="flex flex-col items-center max-w-4xl min-h-screen py-16 mx-auto text-center sm:justify-center">
        {/* :TEXT BACKGROUND */}
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <p className="text-4xl font-extrabold text-center text-[var(--primary-color)] text-opacity-40 sm:text-6xl md:text-7xl">
            Great Things
          </p>
          <p className="font-[#171717] tracking-widest text-center text-[var(--primary-color)] text-opacity-40 uppercase text-8xl sm:text-10xl md:text-12xl">
            Take Time
          </p>
        </div>

        {/* :TEXT EFFECT */}
        <div className="adjust">
          <div className="relative mb-16">
            <TextEffect6>Coming Soon</TextEffect6>
          </div>

          {/* :BUTTON BACK HOME */}
          <a
            href="#link"
            className="mt-10 text-base"
            aria-label="Go Back to Home"
          >
            <ButtonEffect34>Go Back to Home</ButtonEffect34>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
