// UserDetails.js
import React from "react";

const UserDetails = (props) => {
  return (
    <div>
      <h3>User Details</h3>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Email:</strong> {props.email}</p>
    </div>
  );
};

export default UserDetails;
