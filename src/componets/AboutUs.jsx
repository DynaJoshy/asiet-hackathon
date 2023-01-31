import React, { useEffect, useState } from "react";
import image2 from "../assets/asiet1.jpeg";
import { Parallax } from "react-scroll-parallax";
import LazyLoad from "react-lazy-load";

const AboutUs = () => {
  const targetRef = React.useRef(null);

  const [targetElement, setElement] = useState();
  useEffect(() => {
    setElement(targetRef.current);
  }, []);

  return (
    <>
      <div ref={targetRef}></div>
      <div
        className="
        relative py-[15vh] mx-auto pt-[16vh] px-4 overflow-x-clip 
        backdrop-blur-sm bg-[rgb(0,0,0,0.75)]
         border-white/20 
        bg-clip-padding text-[#f0f0f0]  "
      >
        <div className="mx-auto max-w-6xl flex ">
          {/* :TITLE CONTAINER */}
          {/* ::Category */}
          <div>
            <Parallax
              scale={[0.5, 1]}
              opacity={[0.2, 1]}
              targetElement={targetElement}
            >
              <h3 className="text-lg  pt-10 md:pt-0 text-[var(--primary-accent-color)] font-bold uppercase tracking-wide">
                About Us
              </h3>
              {/* ::Title */}
              <h2 className="mb-8 text-2xl text-[var(--secondary-color)] font-bold capitalize">
                <span className="text-[var(--primary-color)]">About Our</span>{" "}
                <span className="">Institute</span>
              </h2>
              {/* Content goes here */}
              <p className="text-base text-justify text-[var(--secondary-color)]">
                Adi Shankara Institute of Engineering and Technology was
                established in Kalady with the sole purpose of cultivating the
                engineering temperament of its students and turning them into
                enterprising people in the industry. The school is managed by
                ADI SANKARA TRUST, a registered trust that has made a name for
                itself in the field of education. The Foundation has a tradition
                of managing educational institutions for more than 50 years.
                With JIT, we, ASIET, aspire to create a platform to bring
                professionals and students together and create a collaborative
                environment to solve a given problem in a rational way through
                the three exclusive phases.
              </p>
              {/* ::Button */}
              <button
                className="group
                          my-5 px-5 py-2.5 
                          bg-[var(--secondary-color)] text-[var(--secondary-color))]
                          text-base font-bold 
                          relative inline-flex items-center rounded  
                          transition-all duration-200 ease-linear
                          hover:bg-[var(--accent-color)] "
                aria-label="Know More"
                style={{
                  //shadow-[12px_8px_40px_-3px rgba(0, 0, 0, 0.3)]
                  boxShadow: "rgb(0 0 0 / 30%) 12px 8px 40px -3px",
                }}
              >
                <a
                  href="https://www.adishankara.ac.in/about-us"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--primary-accent-color)] group-hover:text-[var(--primary-accent-color)]"
                >
                  Know More
                </a>
              </button>
            </Parallax>
          </div>
          <Parallax
            scale={[0.8, 1.2]}
            translateX={[0, 5]}
            targetElement={targetElement}
          >
            {/* :IMAGES CONTAINER */}<LazyLoad offset={600} height={'500px'}>
            <div
              className="
              absolute md:relative top-1/2 left-1/2 md:inset-0 flex 
              h-full sm:ml-5 w-full md:w-1/2 
              transform -translate-x-1/2 md:translate-x-0"
            >
              
              {/* ::Image 1 */}
              <div className="invisible md:visible flex-shrink-0 relative bottom-8 left-10 w-80 h-full rounded shadow ">
                {/* Image goes here */}
                <img
                  src={image2}
                  alt=""
                  className="
              shadow-[20px_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-3xl bg-white/10 border-t-[1px] border-l-[1px] rounded-xl border-white/20
               absolute inset-0 w-full h-full object-cover object-left-bottom  "
                />
              </div>
              {/* ::Image 2 */}
              <div className="invisible md:visible flex-shrink-0 relative top-8 right-28 sm:right-10 md:right-28 lg:right-10 w-80 h-full rounded shadow overflow-hidden">
                {/* Image goes here */}
                <img
                  src={image2}
                  alt=""
                  className=" shadow-[20px_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-3xl bg-white/10 border-t-[1px] border-l-[1px] rounded-xl border-white/20 
              absolute inset-0 w-full h-full object-center object-cover "
                />
              </div>
            </div></LazyLoad>
          </Parallax>
          {/* :OVERLAY */}
          {/* <div className="absolute inset-0 block md:hidden w-full h-full bg-gray-600 opacity-90" /> */}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
