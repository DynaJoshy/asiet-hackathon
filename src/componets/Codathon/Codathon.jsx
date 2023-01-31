import React, { useState } from "react";
import bgImg from "../../assets/Codathon/bg.png.webp";
import {
  CalendarIcon,
  HeartIcon,
  ShieldExclamationIcon,
  SearchIcon,
  CreditCardIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { useWindowSize } from "react-use";
import "./Codathon.css";
import { Navbar } from "../NavbarPages";

function Codathon() {
  const features = [
    {
      name: "Register",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus tempora eaque ipsa aut enim laudantium? Vitae amet labore, eveniet nulla qui quis veritatis quisquam quos neque nostrum in doloremque minus!",
      icon: CalendarIcon,
    },
    {
      name: "Primary Care",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eveniet minima impedit odit nostrum magni alias ipsam in officia, temporibus asperiores ipsum ab qui facere et eaque voluptates repellendus voluptate?",
      icon: HeartIcon,
    },
    {
      name: "Insurance",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatem laborum sint nostrum maiores commodi fugiat minima exercitationem praesentium animi, ad, ducimus est eum porro voluptas consectetur fuga natus atque.",
      icon: ShieldExclamationIcon,
    },
    {
      name: "Speciality search",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatum rerum nobis maxime, rem minus, architecto blanditiis totam, perspiciatis fuga beatae nisi temporibus eaque nulla doloremque hic dolorum? Itaque, quasi!",
      icon: SearchIcon,
    },
    {
      name: "Online Payment",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus suscipit maiores animi fugiat eveniet dolorem ipsam laudantium obcaecati, fugit explicabo amet perferendis! Deserunt vero officia iusto beatae consectetur debitis voluptates.",
      icon: CreditCardIcon,
    },
    {
      name: "24/7 Support",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus ipsa consequatur enim maiores? Dolor incidunt fugiat molestias reprehenderit pariatur ipsa labore maiores hic, eius dolorum. Quo nostrum ipsa explicabo?",
      icon: UserGroupIcon,
    },
  ];

  const getIcon = (icon) => {
    const Icon = icon;
    return <Icon className="w-5 sm:w-8 h-5 sm:h-8" />;
  };

  const [currentFeature, setCurrentFeature] = useState(0);

  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="Codathon"
        style={
          width > 640
            ? {
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "contain",
                backgroundPosition: "right 0",
                backgroundRepeat: "no-repeat",
                height: "140vh",
                backgroundColor: "var(--bg-color)",
                boxShadow: "0px 0px 50px 0px var(--bg-color)",
              }
            : {
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "150vh",
                boxShadow: "0px 0px 50px 0px var(--bg-color)",
              }
        }
      >
        {/* navbar */}
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="flex flex-col justify-center h-screen p-5 md:p-10  2xl:p-24">
          <h1
            className="text-4xl font-bold  text-[var(--primary-color)] uppercase md:text-7xl 2xl:text-8xl pt-[5vh] "
            style={{ fontFamily: "Azonix" }}
          >
            Codathon
          </h1>
          {/* sub heading */}
          <h2 className="text-lg font-bold text-[var(--secondary-color)] uppercase md:text-xl 2xl:text-2xl md:pt-7">
            24 Hours of Innovation
          </h2>
          {/* description */}
          <p className="text-base text-[#f0f0f070] 2xl:text-2xl md:pt-10 md:w-1/3 2xl:w-1/2 leading-6">
            Codathon is a Codathon is a 24hrs Hackathon event, where
            aspiring student entrepreneurs can come collaborate and build their
            startup ideas to a minimum viable product with the support of
            Nasscom 10k Startups , MakerGram and Google Cloud. It has been
            designed specifically for students who have an grails in
            entrepreneurship and innovation. So, come forth ,grab and your
            ticket and prove your mettle!
          </p>
          {/* basic rounded line button */}
          <button
            className=
            "md:w-1/4 text-center max-h-16 md:max-h-auto
             text-[var(--secondary-color)] rounded-full duration-300
             py-5 px-6 text-sm font-bold uppercase mt-10 hover:bg-[#f0f0f054]
             hover:text-[var(--primary-color)] flex items-center justify-center
             border border-[var(--primary-color)] hover:border-[var(--secondary-color)]"
            style={{
              boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.6)",
            }}
          >
            Register Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2 mt-[0%]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="Codathon md:pt-20 min-h-[110vh] 2xl:pt-0 w-full bg-[var(--bg-color)] overflow-x-hidden">
        {/* CONTAINER */}
        <div className="2xl:my-[25vh] px-5 flex 2xl:scale-125 flex-col justify-center items-center space-y-10">
          {/* :TITLE CONTAINER */}
          <div className="relative z-50 w-full text-center text-[var(--primary-color)]">
            <h2 className="capitalize">
              <span className="block mt-2 text-3xl sm:text-4xl font-bold">
                Rules And Regulations
              </span>
            </h2>
          </div>

          {/* :FEATURES CONTAINER */}
          <div className="mx-auto w-full max-w-5xl grid grid-cols-4 gap-y-5 sm:gap-x-5">
            {/* ::Device container */}
            <div className="order-3 sm:order-2 col-span-full sm:col-span-2 relative flex justify-center">
              <div className="relative z-10 w-60 lg:w-64 overflow-hidden">
                {/* :::smartphone frame */}
                <img
                  src="https://fancytailwind.com/static/device-phone-white-fcfe0f4bbba2c26f3c420e89490ac2a5.png.webp"
                  alt=""
                  className="relative z-10 w-full h-full"
                />
                {/* :::feature details displayed */}
                <dl
                  className="absolute top-1/2 left-1/2 px-4 h-full flex flex-col justify-center items-center bg-white bg-opacity-90 text-center transform -translate-y-1/2 -translate-x-1/2"
                  style={{ width: "85%", height: "92%" }}
                >
                  {/* Background image */}
                  <div className="absolute top-0 left-0 w-full h-full bg-black object-cover"></div>
                  {/* Icon */}
                  <span className="relative w-8 sm:w-14 h-8 sm:h-14 inline-flex justify-center items-center rounded-full bg-gradient-to-br  text-[var(--primary-color)]">
                    {getIcon(features[currentFeature].icon)}
                  </span>
                  {/* Feature name */}
                  <dt className="relative mb-5 bg-gradient-to-br  bg-clip-text text-xl  font-bold">
                    {features[currentFeature].name}
                  </dt>
                  {/* Feature description */}
                  <dd className="relative text-sm text-[var(--primary-color)]/80">
                    {features[currentFeature].description}
                  </dd>
                  {currentFeature === 0 ? (
                    <button id="register_btn" className="bg-gradient-to-br ">
                      Register
                    </button>
                  ) : (
                    ""
                  )}
                </dl>
              </div>
              {/* :::background circles */}
            </div>

            {/* ::Features container left  */}
            <div className="order-1 sm:order-1 col-span-full sm:col-span-1 z-20 w-full grid grid-cols-3">
              {/* :::feature 1 */}
              <div className="col-span-1 sm:col-span-full relative md:left-10 flex justify-center items-center">
                <button onClick={() => setCurrentFeature(0)}>
                  <span
                    className={`w-8 sm:w-14 h-8 sm:h-14 inline-flex justify-center items-center rounded-full bg-gradient-to-br ${
                      currentFeature === 0
                        ? " text-[var(--primary-color)]"
                        : "from-[var(--primary-color)] to-transparent "
                    }`}
                  >
                    {getIcon(features[0].icon)}
                  </span>
                  <h3
                    className={`${
                      currentFeature === 0
                        ? "bg-gradient-to-br  bg-clip-text "
                        : "text-[var(--primary-color)]"
                    } text-xs sm:text-base uppercase p-4`}
                  >
                    {features[0].name}
                  </h3>
                </button>
              </div>
              {/* :::feature 2 */}
              <div className="col-span-1 sm:col-span-full relative flex justify-center items-center">
                <button onClick={() => setCurrentFeature(1)}>
                  <span
                    className={`w-8 sm:w-14 h-8 sm:h-14 inline-flex justify-center items-center rounded-full bg-gradient-to-br ${
                      currentFeature === 1
                        ? " text-[var(--primary-color)]"
                        : "from-[var(--primary-color)] to-transparent "
                    }`}
                  >
                    {getIcon(features[1].icon)}
                  </span>
                  <h3
                    className={`${
                      currentFeature === 1
                        ? "bg-gradient-to-br  bg-clip-text "
                        : "text-[var(--primary-color)]"
                    } text-xs sm:text-base uppercase p-4`}
                  >
                    {features[1].name}
                  </h3>
                </button>
              </div>
              {/* :::feature 3 */}
              <div className="col-span-1 sm:col-span-full relative md:left-10 flex justify-center items-center">
                <button onClick={() => setCurrentFeature(2)}>
                  <span
                    className={`w-8 sm:w-14 h-8 sm:h-14 inline-flex justify-center items-center rounded-full bg-gradient-to-br ${
                      currentFeature === 2
                        ? " text-[var(--primary-color)]"
                        : "from-[var(--primary-color)] to-transparent "
                    }`}
                  >
                    {getIcon(features[2].icon)}
                  </span>
                  <h3
                    className={`${
                      currentFeature === 2
                        ? "bg-gradient-to-br  bg-clip-text "
                        : "text-[var(--primary-color)]"
                    } text-xs sm:text-base uppercase p-4`}
                  >
                    {features[2].name}
                  </h3>
                </button>
              </div>
            </div>

            {/* ::Features container right  */}
            <div className="order-2 sm:order-3 col-span-full sm:col-span-1 z-20 w-full grid grid-cols-3">
              {/* :::feature 4 */}
              <div className="col-span-1 sm:col-span-full relative md:right-10 flex justify-center items-center">
                <button onClick={() => setCurrentFeature(3)}>
                  <span
                    className={`w-8 sm:w-14 h-8 sm:h-14 inline-flex justify-center items-center rounded-full bg-gradient-to-br ${
                      currentFeature === 3
                        ? " text-[var(--primary-color)]"
                        : "from-[var(--primary-color)] to-transparent "
                    }`}
                  >
                    {getIcon(features[3].icon)}
                  </span>
                  <h3
                    className={`${
                      currentFeature === 3
                        ? "bg-gradient-to-br  bg-clip-text "
                        : "text-[var(--primary-color)]"
                    } text-xs sm:text-base uppercase p-4`}
                  >
                    {features[3].name}
                  </h3>
                </button>
              </div>
              {/* :::feature 5 */}
              <div className="col-span-1 sm:col-span-full relative flex justify-center items-center">
                <button onClick={() => setCurrentFeature(4)}>
                  <span
                    className={` w-8 sm:w-14 h-8 sm:h-14 inline-flex justify-center items-center rounded-full bg-gradient-to-br ${
                      currentFeature === 4
                        ? " text-[var(--primary-color)]"
                        : "from-[var(--primary-color)] to-transparent "
                    }`}
                  >
                    {getIcon(features[4].icon)}
                  </span>
                  <h3
                    className={`${
                      currentFeature === 4
                        ? " bg-clip-text "
                        : "text-[var(--primary-color)]"
                    } text-xs sm:text-base uppercase p-4`}
                  >
                    {features[4].name}
                  </h3>
                </button>
              </div>
              {/* :::feature 6 */}
              <div className="col-span-1 sm:col-span-full relative md:right-10 flex justify-center items-center">
                <button onClick={() => setCurrentFeature(5)}>
                  <span
                    className={`w-8 sm:w-14 h-8 sm:h-14 inline-flex justify-center items-center rounded-full bg-gradient-to-br ${
                      currentFeature === 5
                        ? " text-[var(--primary-color)]"
                        : "from-[var(--primary-color)] to-transparent "
                    }`}
                  >
                    {getIcon(features[5].icon)}
                  </span>
                  <h3
                    className={`${
                      currentFeature === 5
                        ? "bg-gradient-to-br  bg-clip-text "
                        : "text-[var(--primary-color)]"
                    } text-xs sm:text-base uppercase p-4`}
                  >
                    {features[5].name}
                  </h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Codathon;
