import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  pz(num) {
    return num < 10 ? "0" + num : num;
  }

  formattime() {
    const hrs = this.state.time.getHours();
    const mins = this.state.time.getMinutes();
    const secs = this.state.time.getSeconds();
    const meridtime = hrs >= 12 ? "pm" : "am";
    const adjustedHrs = hrs % 12 || 12;
    return `${this.pz(adjustedHrs)}:${this.pz(mins)}:${this.pz(secs)} ${meridtime}`;
  }

  render() {
    return (
      <div className="clockcontainer">
        <div className="clock">
          <span>{this.formattime()}</span>
        </div>
      </div>
    );
  }
}

export default Clock;