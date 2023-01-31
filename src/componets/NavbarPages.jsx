import React from "react";
import logoAsiet from "../assets/logo.png.webp";
import Burger1 from "./atoms/Burger1";
import EventCountDown from "./EventCountDown";
import "./Menu.css";
export const Navbar = ({ isOpen, setIsOpen, countDate }) => {
  return (
    <nav className="flex justify-between items-center p-5">
      {/* logo */}
      <div className="flex items-center">
        <a href="/" aria-label="logo">
          <img
            src={logoAsiet}
            alt="logo"
            className="w-10 h-10 object-contain brightness-[5] grayscale"
          />
        </a>
        {countDate ? (
          <span className="ml-5">
            <EventCountDown countDate={countDate} />
          </span>
        ) : (
          "  "
        )}
      </div>
      {/* nav links */}
      <div className="md:flex items-center hidden md:visible">
        <a
          href="/"
          aria-label="click to go back to home"
          className="2xl:text-lg text-sm font-medium  text-[#f0f0f064] uppercase hover:text-[#f0f0f0] hover:bg-white hover:bg-opacity-10 rounded-md px-5 2xl:px-10 2xl:py-5 py-2"
        >
          Home
        </a>
        <a
          href="#Events"
          aria-label="click to go to events"
          className="2xl:text-lg text-sm font-medium  text-[#f0f0f080] uppercase hover:text-[#f0f0f0] hover:bg-white hover:bg-opacity-10 rounded-md px-5 2xl:px-10 2xl:py-5 py-2"
        >
          Events
        </a>
        <a
          href="#Blogs"
          className="2xl:text-lg text-sm font-medium  text-[#f0f0f0c4] uppercase hover:text-[#f0f0f0] hover:bg-white hover:bg-opacity-10 rounded-md px-5 2xl:px-10 2xl:py-5 py-2"
        >
          Blogs
        </a>
        <a
          href="#Contact"
          className="2xl:text-lg text-sm font-medium  text-[#f0f0f0e6] uppercase hover:text-[#f0f0f0] hover:bg-white hover:bg-opacity-10 rounded-md px-5 2xl:px-10 2xl:py-5 py-2"
        >
          Contact
        </a>
      </div>
      <div className="md:hidden z-50">
        <Burger1 isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      {isOpen && (
        <div className="md:hidden bg-black/80 z-0 top-0 m-auto fixed pt-[12vh] md:w-[80vw] left-0 right-0 h-screen flex flex-col md:justify-center px-3  bg-opacity-95 text-base uppercase text-center font-semibold">
          <a
            href="/"
            className="block px-3 py-3 md:w-4/5 rounded-md uppercase md:text-2xl text-white/40 hover:text-[var(--primary-color)] "
          >
            HOME
          </a>
          <a
            href="/codathon"
            className="block px-3 py-3 md:w-4/5 rounded-md uppercase md:text-2xl text-white/40 hover:text-[var(--primary-color)] "
          >
            Codathon
          </a>

          <a
            href="/gameathon"
            className="block px-3 py-3 md:w-4/5 rounded-md uppercase md:text-2xl text-white/40 hover:text-[var(--primary-color)] "
          >
            Gameathon
          </a>

          <a
            href="/ideathon"
            className="block px-3 py-3 md:w-4/5 rounded-md uppercase md:text-2xl text-white/40 hover:text-[var(--primary-color)] "
          >
            Young Scientist Award
          </a>
          <a
            href="/mechathon"
            className="block px-3 py-3 md:w-4/5 rounded-md uppercase md:text-2xl text-white/40 hover:text-[var(--primary-color)] "
          >
            Mechathon
          </a>
          <a
            href="/civilathon"
            className="block px-3 py-3 md:w-4/5 rounded-md uppercase md:text-2xl text-white/40 hover:text-[var(--primary-color)] "
          >
            Civilathon
          </a>
          <a
            href="/bizthon"
            className="block px-3 py-3 md:w-4/5 rounded-md uppercase md:text-2xl text-white/40 hover:text-[var(--primary-color)] "
          >
            Bizthon
          </a>
          <a
            href="#faq"
            onClick={() => {
              setIsOpen(false);
            }}
            className="block px-3 py-3 md:w-4/5 rounded-md uppercase md:text-2xl text-white/40 hover:text-[var(--primary-color)] "
          >
            FAQS
          </a>
          <a
            href="https://www.adishankara.ac.in/contact-us"
            target="_blank"
            className="block px-3 py-3 md:w-4/5 rounded-md uppercase md:text-2xl text-white/40 hover:text-[var(--primary-color)] "
            rel="noreferrer"
          >
            Contact US
          </a>

          <div className="social-media-links">
            <i className="text-[var(--primary-color)] p-5  cursor-pointer hover:text-[var(--secondary-color)] fa-brands fa-facebook-f"></i>
            <i className="text-[var(--primary-color)] p-5 cursor-pointer hover:text-[var(--secondary-color)] fa-brands fa-instagram"></i>
            <i className="text-[var(--primary-color)] p-5 cursor-pointer hover:text-[var(--secondary-color)] fa-brands fa-youtube"></i>
          </div>
        </div>
      )}
    </nav>
  );
};
