import React from "react";

const Burger1 = ({ isOpen, setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Open Menu"
      className="group -mt-5 flex flex-col w-12 cursor-pointer active:outline-none focus:outline-none"
    >
      {/* Top line */}
      <span
        className={`
      group-hover:bg-[var(--accent-color)]
      rounded-xl w-2/5 h-1 my-1
      transition-all duration-500 ease-bounce 
      ${isOpen ? "origin-bottom bg-[var(--accent-color)]" : "bg-white"}`}
        style={{
          transform: `${isOpen ? "rotateZ(45deg) translate(6px,1px)" : ""}`,
        }}
        aria-hidden="true"
      />
      {/* Middle line */}
      <span
        className={`
      group-hover:bg-[var(--accent-color)]
      rounded-xl w-3/4 h-1 my-1
      transition-all duration-500 ease-bounce 
      ${
        isOpen
          ? "origin-top bg-[var(--accent-color)] transform-bgr1-s2"
          : "bg-white"
      }`}
        aria-hidden="true"
      />
      {/* Bottom line */}
      <span
        className={`
      group-hover:bg-[var(--accent-color)]
      rounded-xl w-1/2 h-1 my-1
      transition-all duration-500 ease-bounce 
      ${isOpen ? "origin-bottom bg-[var(--accent-color)]" : "bg-white"}`}
        style={{
          transform: `${isOpen ? "rotateZ(45deg) translate(2px,-14px)" : ""}`,
        }}
        aria-hidden="true"
      />
    </button>
  );
};

export default Burger1;
