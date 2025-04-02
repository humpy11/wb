import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      age: props.age,
    };
  }

  
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>User Details</h1>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <label htmlFor="nameInput">Update Name:</label>
        <input
          id="nameInput"
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
      </div>
    );
  }
}

export default User;