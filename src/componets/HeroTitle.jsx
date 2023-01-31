import React, { Component } from "react";
import TypeAnimation from "./TypeAnimation";

export default class HeroTitle extends Component {
  constructor(props) {
    super(props);
    this.element = React.createRef();
    this.observer = null;
    this.textRef = React.createRef();
  }

  componentDidMount() {
    this.observer = new IntersectionObserver((entries) => {
      // Check if the element is in the viewport
      if (entries[0].isIntersecting) {
      }
    });
    this.observer.observe(this.element.current);
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }
  render() {
    return (
      <div
        className="h-[70vh] flex justify-center  content-center items-center  md:mt-[5vh] "
        ref={this.element}
      >
        <h1
          style={{
            fontFamily: "Azonix",
            transformStyle: "preserve-3d",
          }}
          className="text-4xl p-1  md:max-w-[70vw] md:text-6xl text-center md:text-left bg-clip-text bg-gradient-to-br from-pc to-sc font-extrabold -z-20"
        >
          <span className="text-transparent leading-[1.8]">ADI SHANKARA </span>
          <span ref={this.textRef}>
            <TypeAnimation />
          </span>
          <span className="text-transparent leading-[1.8]">2K23</span>
        </h1>
      </div>
    );
  }
}
