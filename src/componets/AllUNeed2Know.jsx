import React, { useEffect, useState } from "react";
import allUNeed2Know from "../assets/SamplePoster2.jpeg.webp";
import Tilt from "react-parallax-tilt";
import { useWindowSize } from "react-use";
import { Parallax } from "react-scroll-parallax";
import LazyLoad from "react-lazy-load";

const AllUNeed2Know = () => {
  const { width } = useWindowSize();
  const targetRef = React.useRef(null);

  const [targetElement, setElement] = useState();
  useEffect(() => {
    setElement(targetRef.current);
  }, []);

  return (
    <>
      <div ref={targetRef}></div>
      <section className="text-gray-100 bg-gradient-to-b from-transparent via-[#171717]/50 to-transparent md:bg-transparent">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-center text-gray-50">
              ALL <span className=" text-[var(--primary-color)]">U NEED 2 KNOW</span>
            </h2>
            <Parallax
              shouldAlwaysCompleteAnimation={true}
              targetElement={targetElement}
              scale={[0.6, 1]}
              opacity={[0.5, 1.3]}
            >
              <h3 className="max-w-3xl mx-auto mt-4 text-lg  text-center text-gray-50">
                All you need to know about the HACKATHON 2023 event
              </h3>
            </Parallax>
          </div>
          <div className="flex flex-col md:flex-row">
            <div>
              <Parallax
                scale={[0.6, 1]}
                opacity={[0.5, 1.3]}
                targetElement={targetElement}
              >
                <h3 className="text-lg  tracking-tight ">
                  Ad vix debet docendi
                </h3>
                <p className="mt-3 text-base text-gray-400">
                  Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos
                  etiam regione ut, persius eripuit quo id. Sit te euismod
                  tacimates.
                </p>
              </Parallax>
              <div className="mt-12 space-y-12">
                <Parallax
                  scale={[0.6, 1]}
                  opacity={[0.5, 1.3]}
                  targetElement={targetElement}
                >
                  <div className="flex">
                    <div className="flex-shrink-0"></div>
                    <div className="ml-4 lg:ml-14">
                      <h4 className="text-lg font-medium leading-6 ">
                        Per ei quaeque sensibus
                      </h4>
                      <p className="mt-2 text-base text-gray-400">
                        Ex usu illum iudico molestie. Pro ne agam facete
                        mediocritatem, ridens labore facete mea ei. Pro id
                        apeirian dignissim. Lorem ipsum dolor sit amet,
                        consectetur
                      </p>
                    </div>
                  </div>
                </Parallax>
                <Parallax
                  scale={[0.6, 1]}
                  opacity={[0.5, 1.3]}
                  targetElement={targetElement}
                >
                  <div className="flex">
                    <div className="flex-shrink-0"></div>
                    <div className="ml-4 lg:ml-14">
                      <h4 className="text-lg font-medium leading-6 ">
                        Cu imperdiet posidonium sed
                      </h4>
                      <p className="mt-2 text-base text-gray-400">
                        Amet utinam aliquando ut mea, malis admodum ocurreret
                        nec et, elit tibique cu nec. Nec ex maluisset
                        inciderint, ex quis. lorum Lorem ipsum dolor sit amet
                        consectetur
                      </p>
                    </div>
                  </div>
                </Parallax>
                <Parallax
                  scale={[0.6, 1]}
                  opacity={[0.5, 1.3]}
                  targetElement={targetElement}
                >
                  <div className="flex">
                    <div className="flex-shrink-0"></div>
                    <div className="ml-4 lg:ml-14">
                      <h4 className="text-lg font-medium leading-6 ">
                        Nulla omittam sadipscing mel ne
                      </h4>
                      <p className="mt-2 text-base text-gray-400">
                        At sed possim oporteat probatus, justo graece ne nec,
                        minim commodo legimus ut vix. Ut eos iudico quando
                        soleat, nam modus. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Quas ullam inventore ipsa
                        ab consequuntur quibusdam cupiditate!
                      </p>
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>

            <div aria-hidden="true" className="mt-10 lg:mt-0 p-5">
              <LazyLoad offset={300}>
                {width > 640 ? (
                  <Tilt>
                    <img
                      src={allUNeed2Know}
                      alt=""
                      className="mx-auto shadow-[20px_20px_50px_rgba(0,0,0,0.15)] bg-white/10 border-t-[1px] max-w-sm border-l-[1px] rounded-xl border-white/20"
                    />
                  </Tilt>
                ) : (
                  <img
                    src={allUNeed2Know}
                    alt=""
                    className="mx-auto shadow-[20px_20px_50px_rgba(0,0,0,0.15)] bg-white/10 border-t-[1px] max-w-[min(24rem,100%)] border-l-[1px] rounded-xl border-white/20"
                  />
                )}
              </LazyLoad>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AllUNeed2Know;
