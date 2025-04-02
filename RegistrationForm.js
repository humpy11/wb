// RegistrationForm.js
import React, { useState } from "react";
import UserDetails from "./UserDetails";


const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const isEmpty = !name || !email || !password;
  
    if (isEmpty) {
      setError("Please fill in all fields.");
      setSubmitted(false);
    } else {
      setError("");
      setSubmitted(true);
    }
  };
  

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />

        <button type="submit">Register</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {submitted && <UserDetails name={name} email={email} />}
    </div>
  );
};

export default RegistrationForm;
