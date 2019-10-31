import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [state, setState] = useState("Begin");

  const [guess, setGuess] = useState(150);
  const [numGuess, setNumGuess] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const playGame = () => {
    setState("playing");
    setMin(0);
    setMax(300);
    setNumGuess(1);
    setGuess(150);
  };
  if (state === "Begin") {
    return (
      <div>
        <p>Choose a number in between 0 and 300</p>
        <p>and I will try to guess it :)</p>
        <button onClick={playGame}>Play</button>
      </div>
    );
  }
  const lower = () => {
    setNumGuess(numGuess + 1);
    setMax(guess);
    const nextGuess = parseInt((guess - min) / 2) + min;
    setGuess(nextGuess);
  };
  const more = () => {
    setNumGuess(numGuess + 1);
    setMin(guess);
    const nextGuess = parseInt((max - guess) / 2) + guess;
    setGuess(nextGuess);
  };
  const gotIt = () => {
    setState("END");
  };
  if (state === "END") {
    return (
      <div>
        <p>
          I guess correct the number {guess} with {numGuess} guesses.
        </p>
        <button onClick={playGame}>Play Again</button>
      </div>
    );
  }
  return (
    <div className="App">
      <p>The number is {guess}?</p>
      <button onClick={lower}>Lower!</button>
      <button onClick={gotIt}>correct!</button>
      <button onClick={more}>More!</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
