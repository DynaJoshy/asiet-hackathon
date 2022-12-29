import React, { Component } from "react";
import { Animator, MoveIn, MoveOut } from "react-scroll-motion";

export default class Page2 extends Component {
  // constructor(props) {
  //   super(props);
  //   this.element = React.createRef();
  //   this.observer = null;
  // }

  element = React.createRef();
  observer = null;

  componentDidMount() {
    this.observer = new IntersectionObserver((entries) => {
      // Check if the element is in the viewport
      if (entries[0].isIntersecting) {
        console.log("Page 2 is in the viewport");
        this.props.updatePage(2);
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
        className="flex justify-center items-center h-screen z-10 "
        ref={this.element}
      >
        <span className="font-semibold text-4xl z-40">
          <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
          <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>-
          I'm Dante Chun -
          <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
          <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
        </span>
      </div>
    );
  }
}