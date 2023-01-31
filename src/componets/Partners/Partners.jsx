import React from 'react'
import Tilt from "react-parallax-tilt";
import AnimatedComponent from "../AnimatedComponent";
import logo1 from "../../assets/Sponsors/titlab.png.webp";
import logo2 from "../../assets/Sponsors/kerala.png.webp";
import logo3 from "../../assets/Sponsors/maker.png.webp";
import logo4 from "../../assets/Sponsors/nascom1.png.webp";
import "./Partners.css"
function Partners() {
  return (
    <>
        <div className="parners_main_container bg-gradient-to-b from-black via-black to-transparent">
            <div className="partners_container">
                <div className="partners_title">
                    <h1 className="text-2xl p-5 font-bold"><span>OUR</span> PARTNERS</h1>
                </div>
                <div className="partners">
                <AnimatedComponent animation=" animate__fast animate__fadeInUp">
                    <div className="images">
                        <Tilt
                            scale={0.9}
                            glareEnable={true}
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
                </AnimatedComponent>
                </div>
            </div>
        </div>
    </>
  )
}

export default Partners