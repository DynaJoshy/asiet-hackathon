import React, { Component } from "react";

export default class EventCountDown extends Component {
  constructor(props) {
    super();
    this.time = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    this.state = this.time

    this.countDownDate = new Date(props.countDate).getTime();
  }
  calculateNewTime = () => {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = this.countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    this.time = {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
    this.setState(this.time);
    // If the count down is finished, write some text
    if (distance < 0) {
      this.setState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      clearInterval(this.x);
    }
  };
  componentDidMount() {
    this.x = setInterval(this.calculateNewTime, 1000);
  }
  render() {
    return (
      <div
        className="grid grid-flow-col gap-1 auto-cols-max text-xl font-poppins">
        <div className="flex flex-col md:p-2 md:pb-0 rounded-box text-base md:text-xl text-neutral-content">
          <span className="countdown text-2xl md:text-3xl font-semibold ">
            <span style={{ "--value": this.state.days }}></span>
          </span>
          days
        </div>
        <div className="flex flex-col md:p-2 md:pb-0 rounded-box text-base md:text-xl text-neutral-content">
          <span className="countdown text-2xl md:text-3xl font-semibold">
            <span style={{ "--value": this.state.hours }}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col md:p-2 md:pb-0 rounded-box text-base md:text-xl text-neutral-content">
          <span className="countdown text-2xl md:text-3xl font-semibold">
            <span style={{ "--value": this.state.minutes }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col md:p-2 md:pb-0 rounded-box text-base md:text-xl text-neutral-content">
          <span className="countdown text-2xl md:text-3xl font-semibold">
            <span style={{ "--value": this.state.seconds }}></span>
          </span>
          sec
        </div>
      </div>
    );
  }
}
