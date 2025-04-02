import React, { Component } from "react";

class ToggleSwitch extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isOn: false, 
    };
  
  }
 
  toggleSwitch = () => {
    this.setState((pre) => ({
      isOn: !pre.isOn, 
    }));
  };
  
  render() {
    return (
      <div>
        <h1>Toggle Switch</h1>
        <p>Status: {this.state.isOn ? "ON" : "OFF"}</p> 
        <button onClick={this.toggleSwitch}>
          {this.state.isOn ? "Switch OFF" : "Switch ON"}
        </button>
      </div>
    );
  }
}

export default ToggleSwitch;