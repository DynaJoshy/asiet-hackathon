import React, { Component } from "react";
import Hero from "./Hero";
import cursorImg from "../assets/cursor.png";
import ContactUs from "./ContactUs";
import Faq from "./Faq";

export default class HomePage extends Component {
  render() {
    const cursor_path = `url(${cursorImg})`;
    return (
      <div
        className=" bg-black"
        style={{
          cursor: `${cursor_path},auto`,
        }}
      >
        <Hero />
        <div className="relative z-50 ">
          <Faq/>
          <ContactUs />
        </div>
      </div>
    );
  }
}
