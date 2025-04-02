// Clock.js
import React, { useState, useEffect } from "react";

const Clock2 = ({ title }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock">
      <h3>{title}</h3>
      <p>{time}</p>
    </div>
  );
};

export default Clock2;
