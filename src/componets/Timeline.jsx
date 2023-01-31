import React from "react";
// import { Parallax } from "react-scroll-parallax";
import "./Timeline.css";


const Timeline = () => {
  return (
    <div className="md:-mt-40 md:bg-gradient-to-b md:from-black md:to-transparent">
      <div className="container bg-transparent mx-auto w-full h-full ">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-50 border-white h-full border linenormal linealign"  />
          {/* right timeline */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline" >
            <div className="order-1 w-5/12 fit" />
            <div className="z-20 flex items-center order-1 shadow-xl w-8 h-8 rounded-full number  bg-[#0A2647] " >
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 rounded-lg shadow-xl w-5/12 fit px-6 py-4 bg-[#7286D3] backdrop-blur-3xl ">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
          {/* left timeline */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline timealign">
            <div className="order-1 w-5/12 fit" />
            <div className="z-20 flex items-center order-1 shadow-xl w-8 h-8 rounded-full number  bg-[#0A2647] " >
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 rounded-lg shadow-xl w-5/12 fit px-6 py-4 bg-[#65647C] " >
              <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
          {/* right timeline */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12 fit" />
            <div className="z-20 flex items-center order-1 shadow-xl w-8 h-8 rounded-full number  bg-[#0A2647]" >
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 rounded-lg shadow-xl w-5/12 fit px-6 py-4 bg-[#F8F4EA]" >
              <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
          {/* left timeline */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline timealign">
            <div className="order-1 w-5/12 fit" />
            <div className="z-20 flex items-center order-1 shadow-xl w-8 h-8 rounded-full number bg-[#0A2647]" >
              <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
            </div>
            <div className="order-1 rounded-lg shadow-xl w-5/12 fit px-6 py-4 bg-[#2C74B3]" >
              <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
