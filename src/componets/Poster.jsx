import React from "react";
import SamPos1 from "../assets/SamplePoster1.jpg";
import PosterCard from "./PosterCard";
import xbox from "../assets/Poster/xbox.png.webp";
import Ps from "../assets/Poster/ps5.png.webp";
import superM from "../assets/Poster/supermario.png.webp";
import mcSteeve from "../assets/Poster/minecraft.png.webp";
import drone from "../assets/Poster/drone2.png.webp";
import idea from "../assets/Poster/Idea.png.webp";
import vr from "../assets/Poster/ARVR.png.webp";

const Poster = () => {
  const categories = [
    {
      id: 0,
      name: "Codathon",
      tagline:
        "Codathon is a 24hrs Hackathon event, where aspiring student entrepreneurs can come collaborate and build their startup ideas to a minimum viable product (MVP) with the support of Nasscom 10k Startups , MakerGram and Google Cloud.",
      href: "#link",
      picture: SamPos1,
      pictureAlt: "Description of your picture",
      front1: vr,
      
      front2: drone,
      back1: "",
      back2: "",
      price: "7.5 Lakhs",
    },
    {
      id: 1,
      name: "Gameathon",
      tagline:
        "Gameathon is also a 24hrs Hackathon event, where students will receive hybrid mentoring bootcamp in Unity Game Development. In addition, they can build their own creative games or startup products through games with the support of TiltLabs Consultancy Services Pvt Ltd and JITF Banglore.",
      href: "#link",
  
      front1: superM,
      front2: xbox,
      back1: mcSteeve,
      back2: Ps,

      price: "5.5 Lakhs",
    },
    {
      id: 2,
      name: "Young Scientist Award",
      tagline:
        "Young Scientist Award is an exclusive program offered to school students where we are planning to mentor, support and fund to school students startup ideas.",
      href: "#link",
       
      pictureAlt: "Description of your picture",
      front1: idea,
      
      front2: "",
      back1: "",
      back2: "",
      price: "3.5 Lakhs",
    },
  ];
  
  return (
    <div className="mx-auto py-5 px-4 w-full max-w-7xl bg-transparent md:mt-56">
      <div className="mx-auto max-w-md md:max-w-none flex flex-col md:flex-row items-center ">
        {/* :TITLE */}
        <h2 className="relative m-4 md:w-16 lg:w-24 flex justify-center text-base lg:text-2xl text-gray-400 font-bold uppercase tracking-widest whitespace-nowrap origin-center transform md:-rotate-90 hover:text-gray-700">
          <a href="#allCategoryLink">
            All <span className="text-[var(--primary-color)]">Categories</span>
          </a>
        </h2>

        {/* :NAVIGATION */}
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 rounded-sm">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.href}
              className="col-span-1 md:aspect-w-1 md:aspect-h-2 group relative w-full h-[40rem] md:h-full"
            >
              <PosterCard
                id={category.id}
                front1={category.front1}
                front2={category.front2}
                back1={category.back1}
                back2={category.back2}
                name={category.name}
                tagline={category.tagline}
                picture={category.picture}
                pictureAlt={category.pictureAlt}
                price={category.price}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Poster;
