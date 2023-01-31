import React, { useEffect, useState } from "react";
import logo1 from "../../assets/Sponsors/titlab.png.webp";
import logo2 from "../../assets/Sponsors/titlab.png.webp";
import logo3 from "../../assets/Sponsors/titlab.png.webp";
import logo4 from "../../assets/Sponsors/titlab.png.webp";
import partLogo1 from "../../assets/Sponsors/titlab.png.webp"
import partLogo2 from "../../assets/Sponsors/ciirc.png.webp"
import "./Sponsors.css";
import Tilt from "react-parallax-tilt";
import { Parallax } from "react-scroll-parallax";
import LazyLoad from "react-lazy-load";
import { useWindowSize } from "react-use";

const Sponsors = () => {
  const { width } = useWindowSize();

  const targetTitleRef = React.useRef(null);
  const targetPlatinumRef = React.useRef(null);
  const targetDiamondRef = React.useRef(null);
  const targetSilverRef = React.useRef(null);
  const targetGoldRef = React.useRef(null);

  const [targetTitle, setTitle] = useState();
  const [targetPlatinum, setPlatinum] = useState();
  const [targetDiamond, setDiamond] = useState();
  const [targetSilver, setSilver] = useState();
  const [targetGold, setGold] = useState();

  useEffect(() => {
    setTitle(targetTitleRef.current);
    setPlatinum(targetPlatinumRef.current);
    setDiamond(targetDiamondRef.current);
    setGold(targetGoldRef.current);
    setSilver(targetSilverRef.current);
  }, []);
  return (
    <div className="sponsers_main_container z-20 -mt-10 md:mt-28 bg-gradient-to-b from-black via-black to-transparent">
      <div className="sponsors_container">
        <div className="sponsor_title" ref={targetTitleRef}>
          <h1 className="text-2xl p-5 mt-20 font-bold">
            <span>OUR</span> SPONSORS
          </h1>
        </div>
        <div className="sponsors_platinum sponsors" ref={targetPlatinumRef}>
          {width > 640 ? (
            <Parallax
              className="mt-8 md:-mt-14"
              scale={[0, 1]}
              opacity={[0, 1]}
              targetElement={targetTitle}
            >
              <div className="w-full flex justify-center items-center">
                <span className="flex-grow opacity-80">
                  <svg
                    width="96"
                    height="23"
                    viewBox="0 0 96 23"
                    fill="none"
                    className="pl-8 mt-3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <linearGradient
                      id="gradientlplat"
                      x1="100%"
                      y1="0%"
                      x2="0%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#000" />
                      <stop offset="100%" stopColor="cyan" />
                    </linearGradient>
                    <path
                      d="M95 1H5C2.00232 1 1 2 1 5C1 8 1 22 1 22"
                      stroke="url(#gradientlplat)"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <h1 className="text-lg font-semibold mb-auto px-5">Platinum</h1>
                <span className="flex-grow opacity-80 ">
                  <svg
                    width="96"
                    height="23"
                    viewBox="0 0 96 23"
                    className="pr-8 mt-3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="gradientrplat"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#000" />
                        <stop offset="100%" stopColor="cyan" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M1 1H91C93.9977 1 95 2 95 5C95 8 95 22 95 22"
                      stroke="url(#gradientrplat)"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="images mt-8 md:-mt-14">
                <Tilt
                  scale={0.9}
                  glareEnable={true}
                  glareColor="cyan"
                  glarePosition="all"
                  glareMaxOpacity={0.45}
                  glareBorderRadius="15px"
                  perspective={500}
                >
                  <div className="img">
                    <img src={logo1} alt="" />
                  </div>
                </Tilt>
                <Tilt
                  scale={0.9}
                  glareEnable={true}
                  glareColor="cyan"
                  glarePosition="all"
                  glareMaxOpacity={0.45}
                  glareBorderRadius="15px"
                  perspective={500}
                >
                  <div className="img">
                    <img src={logo2} alt="" />
                  </div>
                </Tilt>
                <Tilt
                  scale={0.9}
                  glareEnable={true}
                  glareColor="cyan"
                  glarePosition="all"
                  glareMaxOpacity={0.45}
                  glareBorderRadius="15px"
                  perspective={500}
                >
                  <div className="img">
                    <img src={logo3} alt="" />
                  </div>
                </Tilt>
                <Tilt
                  scale={0.9}
                  glareEnable={true}
                  glareColor="cyan"
                  glarePosition="all"
                  glareMaxOpacity={0.45}
                  glareBorderRadius="15px"
                  perspective={500}
                >
                  <div className="img">
                    <img src={logo4} alt="" />
                  </div>
                </Tilt>
              </div>
            </Parallax>
          ) : (
            <div>
              <div className="w-full flex justify-center items-center">
                <span className="flex-grow opacity-80">
                  <svg
                    width="96"
                    height="23"
                    viewBox="0 0 96 23"
                    fill="none"
                    className="pl-8 mt-3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <linearGradient
                      id="gradientlplat"
                      x1="100%"
                      y1="0%"
                      x2="0%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#000" />
                      <stop offset="100%" stopColor="cyan" />
                    </linearGradient>
                    <path
                      d="M95 1H5C2.00232 1 1 2 1 5C1 8 1 22 1 22"
                      stroke="url(#gradientlplat)"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <h1 className="text-lg font-semibold mb-auto px-5">Platinum</h1>
                <span className="flex-grow opacity-80 ">
                  <svg
                    width="96"
                    height="23"
                    viewBox="0 0 96 23"
                    className="pr-8 mt-3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="gradientrplat"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#000" />
                        <stop offset="100%" stopColor="cyan" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M1 1H91C93.9977 1 95 2 95 5C95 8 95 22 95 22"
                      stroke="url(#gradientrplat)"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
              <LazyLoad offset={450}>
                <div className="images">
                  <div className="img">
                    <img src={logo1} alt="" />
                  </div>
                  <div className="img">
                    <img src={logo2} alt="" />
                  </div>
                  <div className="img">
                    <img src={logo3} alt="" />
                  </div>
                  <div className="img">
                    <img src={logo4} alt="" />
                  </div>
                </div>
              </LazyLoad>
            </div>
          )}
        </div>
        <div className="sponsors_diamond sponsors" ref={targetDiamondRef}>
          {width > 640 ? (
            <Parallax
              className=""
              scale={[-0.5, 1]}
              opacity={[0, 1]}
              targetElement={width > 650 ? targetTitle : targetPlatinum}
            >
              <div className="w-full flex justify-center items-center">
                <span className="flex-grow opacity-80">
                  <svg
                    width="96"
                    height="23"
                    viewBox="0 0 96 23"
                    fill="none"
                    className="pl-8 mt-3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <linearGradient
                      id="gradientldiamone"
                      x1="100%"
                      y1="0%"
                      x2="0%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#000" />
                      <stop offset="100%" stopColor="pink" />
                    </linearGradient>
                    <path
                      d="M95 1H5C2.00232 1 1 2 1 5C1 8 1 22 1 22"
                      stroke="url(#gradientldiamone)"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <h1 className="text-lg font-semibold mb-auto px-5">Diamond</h1>
                <span className="flex-grow opacity-80 ">
                  <svg
                    width="96"
                    height="23"
                    viewBox="0 0 96 23"
                    className="pr-8 mt-3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="gradientrdiamond"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#000" />
                        <stop offset="100%" stopColor="pink" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M1 1H91C93.9977 1 95 2 95 5C95 8 95 22 95 22"
                      stroke="url(#gradientrdiamond)"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
              <LazyLoad offset={300}>
                <div className="images mt-8 md:-mt-14">
                  <Tilt
                    scale={0.9}
                    glareEnable={true}
                    glareColor="pink"
                    glarePosition="all"
                    glareMaxOpacity={0.45}
                    glareBorderRadius="15px"
                    perspective={500}
                  >
                    <div className="img">
                      <img src={logo1} alt="" />
                    </div>
                  </Tilt>
                  <Tilt
                    scale={0.9}
                    glareEnable={true}
                    glareColor="pink"
                    glarePosition="all"
                    glareMaxOpacity={0.45}
                    glareBorderRadius="15px"
                    perspective={500}
                  >
                    <div className="img">
                      <img src={logo2} alt="" />
                    </div>
                  </Tilt>
                  <Tilt
                    scale={0.9}
                    glareEnable={true}
                    glareColor="pink"
                    glarePosition="all"
                    glareMaxOpacity={0.45}
                    glareBorderRadius="15px"
                    perspective={500}
                  >
                    <div className="img">
                      <img src={logo3} alt="" />
                    </div>
                  </Tilt>
                  <Tilt
                    scale={0.9}
                    glareEnable={true}
                    glareColor="pink"
                    glarePosition="all"
                    glareMaxOpacity={0.45}
                    glareBorderRadius="15px"
                    perspective={500}
                  >
                    <div className="img">
                      <img src={logo4} alt="" />
                    </div>
                  </Tilt>
                </div>
              </LazyLoad>
            </Parallax>
          ) : (
            <div>
              <div className="w-full flex justify-center items-center">
                <span className="flex-grow opacity-80">
                  <svg
                    width="96"
                    height="23"
                    viewBox="0 0 96 23"
                    fill="none"
                    className="pl-8 mt-3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <linearGradient
                      id="gradientldiamone"
                      x1="100%"
                      y1="0%"
                      x2="0%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#000" />
                      <stop offset="100%" stopColor="pink" />
                    </linearGradient>
                    <path
                      d="M95 1H5C2.00232 1 1 2 1 5C1 8 1 22 1 22"
                      stroke="url(#gradientldiamone)"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <h1 className="text-lg font-semibold mb-auto px-5">Diamond</h1>
                <span className="flex-grow opacity-80 ">
                  <svg
                    width="96"
                    height="23"
                    viewBox="0 0 96 23"
                    className="pr-8 mt-3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="gradientrdiamond"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#000" />
                        <stop offset="100%" stopColor="pink" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M1 1H91C93.9977 1 95 2 95 5C95 8 95 22 95 22"
                      stroke="url(#gradientrdiamond)"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
              <LazyLoad offset={450}>
                <div className="images">
                  <div className="img">
                    <img src={logo1} alt="" />
                  </div>
                  <div className="img">
                    <img src={logo2} alt="" />
                  </div>
                  <div className="img">
                    <img src={logo3} alt="" />
                  </div>
                  <div className="img">
                    <img src={logo4} alt="" />
                  </div>
                </div>
              </LazyLoad>
            </div>
          )}
        </div>
        <div className="sponsors_gold sponsors " ref={targetGold}>
          {width > 640 ? (
            <Parallax
              scale={[0, 1]}
              opacity={[0, 1]}
              targetElement={width > 650 ? targetPlatinum : targetDiamond}
            >
              <div className="w-full flex justify-center items-center">
                <span className="flex-grow opacity-80">
                  <svg
                    width="96"
                    height="23"
                    viewBox="0 0 96 23"
                    fill="none"
                    className="pl-8 mt-3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <linearGradient
                      id="gradientlgold"
                      x1="100%"
                      y1="0%"
                      x2="0%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#000" />
                      <stop offset="100%" stopColor="gold" />
                    </linearGradient>
                    <path
                      d="M95 1H5C2.00232 1 1 2 1 5C1 8 1 22 1 22"
                      stroke="url(#gradientlgold)"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <h1 className="text-lg font-semibold mb-auto px-5">Gold</h1>
                <span className="flex-grow opacity-80 ">
                  <svg
                    width="96"
                    height="23"
                    viewBox="0 0 96 23"
                    className="pr-8 mt-3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="gradientrgold"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#000" />
                        <stop offset="100%" stopColor="gold" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M1 1H91C93.9977 1 95 2 95 5C95 8 95 22 95 22"
                      stroke="url(#gradientrgold)"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
              <LazyLoad offset={300}>
                <div className="images mt-8 md:-mt-14">
                  <Tilt
                    scale={0.9}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    glareBorderRadius="15px"
                    glareColor="gold"
                    glarePosition="all"
                    perspective={500}
                  >
                    <div className="img">
                      <img src={logo1} alt="" />
                    </div>
                  </Tilt>
                  <Tilt
                    scale={0.9}
                    glareEnable={true}
                    glareColor="gold"
                    glarePosition="all"
                    glareMaxOpacity={0.45}
                    glareBorderRadius="15px"
                    perspective={500}
                  >
                    <div className="img">
                      <img src={logo2} alt="" />
                    </div>
                  </Tilt>
                  <Tilt
                    scale={0.9}
                    glareEnable={true}
                    glareColor="gold"
                    glarePosition="all"
                    glareMaxOpacity={0.45}
                    glareBorderRadius="15px"
                    perspective={500}
                  >
                    <div className="img">
                      <img src={logo3} alt="" />
                    </div>
                  </Tilt>
                  <Tilt
                    scale={0.9}
                    glareEnable={true}
                    glareColor="gold"
                    glarePosition="all"
                    glareMaxOpacity={0.45}
                    glareBorderRadius="15px"
                    perspective={500}
                  >
                    <div className="img">
                      <img src={logo4} alt="" />
                    </div>
                  </Tilt>
                </div>
              </LazyLoad>
            </Parallax>
          ) : (
            <div>
              <div className="w-full flex justify-center items-center">
                <span className="flex-grow opacity-80">
                  <svg
                    width="96"
                    height="23"
                    viewBox="0 0 96 23"
                    fill="none"
                    className="pl-8 mt-3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <linearGradient
                      id="gradientlgold"
                      x1="100%"
                      y1="0%"
                      x2="0%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#000" />
                      <stop offset="100%" stopColor="gold" />
                    </linearGradient>
                    <path
                      d="M95 1H5C2.00232 1 1 2 1 5C1 8 1 22 1 22"
                      stroke="url(#gradientlgold)"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <h1 className="text-lg font-semibold mb-auto px-5">Gold</h1>
                <span className="flex-grow opacity-80 ">
                  <svg
                    width="96"
                    height="23"
                    viewBox="0 0 96 23"
                    className="pr-8 mt-3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="gradientrgold"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#000" />
                        <stop offset="100%" stopColor="gold" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M1 1H91C93.9977 1 95 2 95 5C95 8 95 22 95 22"
                      stroke="url(#gradientrgold)"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
              <LazyLoad offset={450}>
                <div className="images">
                  <div className="img">
                    <img src={logo1} alt="" />
                  </div>
                  <div className="img">
                    <img src={logo2} alt="" />
                  </div>
                  <div className="img">
                    <img src={logo3} alt="" />
                  </div>
                  <div className="img">
                    <img src={logo4} alt="" />
                  </div>
                </div>
              </LazyLoad>
            </div>
          )}
        </div>
        <div className="sponsors_silver sponsors" ref={targetSilverRef}>
          {width > 640 ? (
            <Parallax
              scale={[0, 1]}
              opacity={[0, 1]}
              targetElement={width > 650 ? targetDiamond : targetPlatinum}
            >
              <div className="w-full flex justify-center items-center">
                <span className="flex-grow opacity-80">
                  <svg
                    width="96"
                    height="23"
                    viewBox="0 0 96 23"
                    fill="none"
                    className="pl-8 mt-3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <linearGradient
                      id="gradientlsilver"
                      x1="100%"
                      y1="0%"
                      x2="0%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#000" />
                      <stop offset="100%" stopColor="silver" />
                    </linearGradient>
                    <path
                      d="M95 1H5C2.00232 1 1 2 1 5C1 8 1 22 1 22"
                      stroke="url(#gradientlsilver)"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <h1 className="text-lg font-semibold mb-auto px-5">Silver</h1>
                <span className="flex-grow opacity-80 ">
                  <svg
                    width="96"
                    height="23"
                    viewBox="0 0 96 23"
                    className="pr-8 mt-3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="gradientrsilver"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#000" />
                        <stop offset="100%" stopColor="silver" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M1 1H91C93.9977 1 95 2 95 5C95 8 95 22 95 22"
                      stroke="url(#gradientrsilver)"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
              <LazyLoad offset={300}>
                <div className="images mt-8 md:-mt-14">
                  <div className="img">
                    <img src={logo1} alt="" />
                  </div>
                  <div className="img">
                    <img src={logo2} alt="" />
                  </div>
                  <div className="img">
                    <img src={logo3} alt="" />
                  </div>
                  <div className="img">
                    <img src={logo4} alt="" />
                  </div>
                </div>
              </LazyLoad>
            </Parallax>
          ) : (
            <div>
              <div className="w-full flex justify-center items-center">
                <span className="flex-grow opacity-80">
                  <svg
                    width="96"
                    height="23"
                    viewBox="0 0 96 23"
                    fill="none"
                    className="pl-8 mt-3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <linearGradient
                      id="gradientlsilver"
                      x1="100%"
                      y1="0%"
                      x2="0%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#000" />
                      <stop offset="100%" stopColor="silver" />
                    </linearGradient>
                    <path
                      d="M95 1H5C2.00232 1 1 2 1 5C1 8 1 22 1 22"
                      stroke="url(#gradientlsilver)"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <h1 className="text-lg font-semibold mb-auto px-5">Silver</h1>
                <span className="flex-grow opacity-80 ">
                  <svg
                    width="96"
                    height="23"
                    viewBox="0 0 96 23"
                    className="pr-8 mt-3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="gradientrsilver"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#000" />
                        <stop offset="100%" stopColor="silver" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M1 1H91C93.9977 1 95 2 95 5C95 8 95 22 95 22"
                      stroke="url(#gradientrsilver)"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
              <LazyLoad offset={450}>
                <div className="images">
                  <div className="img">
                    <img src={logo1} alt="" />
                  </div>
                  <div className="img">
                    <img src={logo2} alt="" />
                  </div>
                  <div className="img">
                    <img src={logo3} alt="" />
                  </div>
                  <div className="img">
                    <img src={logo4} alt="" />
                  </div>
                </div>
              </LazyLoad>
            </div>
          )}
        </div>
        <div className="sponsor_title">
          <h1 className="text-2xl  font-bold p-5">
            <span>OUR</span> PARTNERS
          </h1>
        </div>
        <div className="sponsors_silver sponsors">
          {width > 640 ? (
            <Parallax
              className="mt-8 md:-mt-14"
              scale={[0, 1]}
              opacity={[0, 1]}
              targetElement={targetSilver}
            >
              <LazyLoad offset={300}>
                <div className="images ">
                  <Tilt
                    scale={0.9}
                    glareEnable={true}
                    glareColor="pink"
                    glarePosition="all"
                    glareMaxOpacity={0.45}
                    glareBorderRadius="15px"
                    perspective={500}
                  >
                    <div className="img">
                      <img src={partLogo1} alt="" />
                    </div>
                  </Tilt>
                  <Tilt
                    scale={0.9}
                    glareEnable={true}
                    glareColor="pink"
                    glarePosition="all"
                    glareMaxOpacity={0.45}
                    glareBorderRadius="15px"
                    perspective={500}
                  >
                    <div className="img">
                      <img src={partLogo2} alt="" />
                    </div>
                  </Tilt>
                  <Tilt
                    scale={0.9}
                    glareEnable={true}
                    glareColor="pink"
                    glarePosition="all"
                    glareMaxOpacity={0.45}
                    glareBorderRadius="15px"
                    perspective={500}
                  >
                    <div className="img">
                      <img src={logo3} alt="" />
                    </div>
                  </Tilt>
                  <Tilt
                    scale={0.9}
                    glareEnable={true}
                    glareColor="pink"
                    glarePosition="all"
                    glareMaxOpacity={0.45}
                    glareBorderRadius="15px"
                    perspective={500}
                  >
                    <div className="img">
                      <img src={logo4} alt="" />
                    </div>
                  </Tilt>
                </div>
              </LazyLoad>
            </Parallax>
          ) : (
            <div>
              <div className="w-full flex justify-center items-center">
                <span className="flex-grow opacity-80">
                  <svg
                    width="96"
                    height="23"
                    viewBox="0 0 96 23"
                    fill="none"
                    className="pl-8 mt-3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <linearGradient
                      id="gradientlsilver"
                      x1="100%"
                      y1="0%"
                      x2="0%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#000" />
                      <stop offset="100%" stopColor="silver" />
                    </linearGradient>
                    <path
                      d="M95 1H5C2.00232 1 1 2 1 5C1 8 1 22 1 22"
                      stroke="url(#gradientlsilver)"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <h1 className="text-lg font-semibold mb-auto px-5">Silver</h1>
                <span className="flex-grow opacity-80 ">
                  <svg
                    width="96"
                    height="23"
                    viewBox="0 0 96 23"
                    className="pr-8 mt-3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="gradientrsilver"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#000" />
                        <stop offset="100%" stopColor="silver" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M1 1H91C93.9977 1 95 2 95 5C95 8 95 22 95 22"
                      stroke="url(#gradientrsilver)"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
              <LazyLoad offset={450} >
                <div className="images ">
                  <div className="img">
                    <img src={logo1} alt="" />
                  </div>
                  <div className="img">
                    <img src={logo2} alt="" />
                  </div>
                  <div className="img">
                    <img src={logo3} alt="" />
                  </div>
                  <div className="img">
                    <img src={logo4} alt="" />
                  </div>
                </div>
              </LazyLoad>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
