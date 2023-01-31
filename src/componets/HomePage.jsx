import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { useWindowSize } from "react-use";

import "./animation.css";

import AllUNeed2Know from "./AllUNeed2Know";
import AboutUs from "./AboutUs";
import CountDown from "./CountDown";
import ContactUs from "./ContactUs";
import Faq from "./Faq";
import HeroTitle from "./HeroTitle";
import Menu from "./Menu";
import PosterCarousel from "./PosterCarousel";
import Sponsors from "./Sponsors/Sponsors";
import Tagline from "./Tagline";

import planetVideo from "../assets/earth2.mp4";
import planetVideoM from "../assets/earthmobile.mp4";
import cloudImg from "../assets/Parallax/cloud.png.webp";
import collegePic from "../assets/Parallax/asiet.png.webp";
// import prizeVideo from "../assets/prize.mp4";
import prizeVideoM from "../assets/prizeM.mp4";

const Component = () => {
  const { width } = useWindowSize();

  const background: BannerLayer = {
    speed: -10,
    translateX: width > 640 ? [0, -20] : [0, -40],
    scale: width > 640 ? [2.5, 1.5, "easeOutCubic"] : [1, 0.5, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <div className="bg-animation no-animation">
        <div
          id="stars"
          style={{
            animationPlayState: "paused",
          }}
        ></div>
        <div
          id="stars2"
          style={{
            animationPlayState: "paused",
          }}
        ></div>
        <div
          id="stars3"
          style={{
            animationPlayState: "paused",
          }}
        ></div>
        <div
          id="stars4"
          style={{
            animationPlayState: "paused",
          }}
        ></div>
      </div>
    ),
  };
  const videoglobe: BannerLayer = {
    translateY: width > 640 ? ["25%", "-25%"] : ["90%", "-25%"],
    translateX: width > 640 ? ["48%", "50%"] : ["0%", "0%"],
    opacity: [0.95, 0.8, "easeOutCubic"],
    scale: [width > 640 ? 0.8 : 1, width > 640 ? 1.1 : 1, "easeOutCubic"],
    // onChange: (el) => {
    //   console.log(el.el.firstChild.firstChild);
    //   el.el.firstChild.currentTime = el.progress * 10;
    // },
    children: (
      <div className="flex justify-center w-full h-full">
        <video
          autoPlay
          loop
          muted
          className="top-0 absolute bottom-0 object-contain h-screen min-w-max md:h-auto "
        >
          {/* <source src={planetVideo} type='video/mp4; codecs="hvc1"' /> */}
          {width > 640 ? (
            <source src={planetVideo} type='video/mp4; codecs="avc1"' />
          ) : (
            <source src={planetVideoM} type='video/mp4; codecs="avc1"' />
          )}
        </video>
      </div>
    ),
  };
  const videoprize: BannerLayer = {
    translateY: width > 640 ? ["45%", "30%"] : ["20%", "0%"],
    opacity:
      width > 640 ? [3.5, -0.7, "easeOutCubic"] : [1, 0.9, "easeOutCubic"],
    scale: [width > 640 ? 1 : 1, width > 640 ? 0.6 : 1, "easeOutCubic"],
    children: (
      <div className="flex justify-center w-full h-full">
        <video
          autoPlay
          loop
          muted
          className="z-30 top-0 absolute bottom-0 object-contain md:h-auto "
        >
          {width > 640 ? (
            <source src={prizeVideoM} type='video/mp4; codecs="avc1"' />
          ) : (
            <source src={prizeVideoM} type='video/mp4; codecs="avc1"' />
          )}
        </video>
      </div>
    ),
  };
  const headline: BannerLayer = {
    translateX: width > 640 ? [5, 20] : [0, 0],
    translateY: [width > 640 ? -2 : -10, -20],
    speed: 40,
    scale: [1, 1.15, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute p-5 inset-0 flex items-center justify-center md:justify-start ">
        <HeroTitle />
      </div>
    ),
  };
  const countdown = {
    translateY: [width > 640 ? 86 : 69, 70],
    speed: -10,
    translateX: width > 640 ? [6, 20] : [0, 0],
    scale: [1, 1.15, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <CountDown />,
  };
  const tagline: BannerLayer = {
    translateY: [width > 640 ? 65 : 60, width > 640 ? 48 : 68],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <>
        <Tagline />
      </>
    ),
  };
  return (
    <>
      <div className="bg-gradient-to-b from-transparent via-[#7285d328] to-[#7285d371] ">
        <Menu />
        {width > 640 ? (
          <>
            <ParallaxBanner
              layers={[
                background,
                videoglobe,
                headline,
                countdown,
                // sponsers,
                // videoprize,
                tagline,
              ]}
              // gradientOverlay]}
              className="h-[100vh] bg-black"
            ></ParallaxBanner>
            <div className="flex justify-center w-full h-full">
              <video
                autoPlay
                loop
                muted
                className="z-30 top-10 absolute bottom-0 object-contain md:h-auto "
              >
                {width > 640 ? (
                  <source src={prizeVideoM} type='video/mp4; codecs="avc1"' />
                ) : (
                  <source src={prizeVideoM} type='video/mp4; codecs="avc1"' />
                )}
              </video>
            </div>
            <Sponsors />
          </>
        ) : (
          <>
            <ParallaxBanner
              layers={[
                background,
                headline,
                videoglobe,
                countdown,
                videoprize,
                tagline,
              ]}
              className="h-[110vh] bg-black"
            />
            {/* <Tagline /> */}
            <Sponsors />
          </>
        )}
        <div className="bg-animation -z-10">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>
        {/* <Timeline /> */}
        {/* <Partners /> */}
        <PosterCarousel />
        <ParallaxBanner
          className="bg-gradient-to-b from-transparent via-[#171717]/50 to-[#171717]/50"
          layers={[
            {
              translateY: [width > 640 ? 70 : 84, -15],
              translateX: [width > 640 ? -60 : -100, 30],
              scale: [3, 0.7, "easeOutCubic"],
              children: (
                <img
                  className="w-full md:w-1/2 opacity-70"
                  src={cloudImg}
                  alt="Cloud"
                  loading="lazy"
                />
              ),
            },
            {
              translateY: [width > 640 ? 70 : 80, -15],
              translateX: [width > 640 ? 178 : 100, width > 640 ? -30 : -50],
              scale: [width > 640 ? 3 : 4, 0.7, "easeOutCubic"],
              children: (
                <img
                  className="w-full md:w-1/2 opacity-70"
                  src={cloudImg}
                  alt="Cloud"
                  loading="lazy"
                />
              ),
            },
            {
              speed: 80,
              translateY: [width > 640 ? 64 : 57, width > 640 ? 90 : 110],
              scale: [1, 1.5, "easeOutCubic"],
              children: (
                <img
                  className="w-screen"
                  src={collegePic}
                  alt="College"
                  loading="lazy"
                />
              ),
            },
          ]}
        >
          <AllUNeed2Know />
          <Faq />
          <AboutUs />
          <ContactUs />
        </ParallaxBanner>
      </div>
    </>
  );
};
export default Component;
