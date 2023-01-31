import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";
import "./Scrollbar.css";
import { Parallax } from "react-scroll-parallax";

import neonImg from "../assets/neonlight.webp"

const Faq = () => {
  const faq = [
    {
      number: 1,
      question: "What is Fancy best component?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!",
    },
    {
      number: 2,
      question:
        "I have a technical issue I need resolved, how do I contact Fancy support?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus.",
    },
    {
      number: 3,
      question: "What is Fancy best component?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!",
    },
    {
      number: 4,
      question: "What is Fancy best component?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!",
    },
    {
      number: 5,
      question: "What is Fancy best component?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!",
    },
    {
      number: 6,
      question: "What is Fancy best component?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!",
    },
    {
      number: 7,
      question: "What is Fancy best component?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!",
    },
    {
      number: 8,
      question: "What is Fancy best component?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!",
    },
  ];
  const targetRef = React.useRef(null);

  const [targetElement, setElement] = useState();
  useEffect(() => {
    setElement(targetRef.current);
  }, []);

  return (
    <div id="faq" className="relative py-10 w-full  overflow-x-hidden ">
      <div className="container mx-auto w-full md:max-h-screen grid grid-cols-2">
        
        {/* Container */}
        {/* :IMAGE */}
        <Parallax
          shouldAlwaysCompleteAnimation={true}
          scale={[0.8, 1]}
          targetElement={targetElement}
          opacity={[0.5, 1.3]}
        >
          <div className="h-full col-span-2 md:col-span-1 relative p-4 flex flex-col justify-center items-center">
            <div className="hidden md:block relative w-full h-full max-w-xl">
              <img
                src={neonImg}
                alt="neon light"
                className="absolute w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </Parallax>
        {/* :FAQ */}
        <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-center md:max-h-screen text-center md:text-left">
          {/* ::Title */}
          <div className="text-2xl">
            <span className="text-[var(--primary-color)]" ref={targetRef}>
              Frequently Asked
            </span>
            Questions
          </div>
          {/* ::Accordion Panel */}
          <dl className="mx-auto my-10 p-3 max-w-2xl flex flex-col items-center scrollbar md:overflow-y-scroll z-10">
            {faq.map((faq) => (
              <Disclosure key={faq.number}>
                {({ open }) => (
                  <>
                    <Parallax
                      shouldAlwaysCompleteAnimation={true}
                      scale={[0.8, 1]}
                      startScroll={"450%"}
                      targetElement={targetElement}
                      endScroll={"460%"}
                      opacity={[0.5, 1.3]}
                      className="w-full"
                    >
                      {/* Question */}
                      <dt
                        className={`group mt-6 w-full border-b-2 border-gray-700 text-[#f0f0f0] hover:text-[var(--secondary-color)] ${
                          open && "text-[#f0f0f0]"
                        }`}
                      >
                        <Disclosure.Button className="py-5 px-3 w-full flex justify-between items-center">
                          <QuestionMarkCircleIcon
                            className={`${
                              open && "text-[#f0f0f0]"
                            } mt-auto mb-auto flex-shrink-0 mr-2 w-5 h-5 text-[var(--primary-color)] group-hover:text-[#f0f0f0]`}
                            aria-hidden="true"
                          />
                          <span className="mr-auto text-base text-left transition duration-150 ease-in transform group-hover:translate-x-2">
                            {faq.question}
                          </span>
                          <ChevronDownIcon
                            className={`${
                              open && "transform rotate-180 text-[#f0f0f0]"
                            } mt-auto mb-auto flex-shrink-0 ml-2 w-5 h-5 text-[#f0f0f0] group-hover:text-[#f0f0f0]`}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                      </dt>
                      {/* Answer */}
                      <dd className="w-full text-base text-gray-400">
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-left">
                          {faq.answer}
                        </Disclosure.Panel>
                      </dd>
                    </Parallax>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Faq;
