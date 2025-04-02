import React, { useState } from "react";

function NumberGuessGame() {
  const [target, setTarget] = useState(generateRandomNumber());
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleGuess() {
    const userGuess = parseInt(guess, 10);
    if (isNaN(userGuess)) {
      setMessage("Enter a valid number.");
      return;
    }
    if (userGuess > target) {
      setMessage("Too High!");
    } else if (userGuess < target) {
      setMessage("Too Low!");
    } else {
      setMessage("Correct! You guessed it!");
    }
  }

  function resetGame() {
    setTarget(generateRandomNumber());
    setGuess("");
    setMessage("");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Guess the Number (1-100)</h2>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>Guess</button>
      <button onClick={resetGame}>Reset</button>
      <p>{message}</p>
    </div>
  );
}

export default NumberGuessGame;
