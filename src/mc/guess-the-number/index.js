import React, { useState, useEffect } from "react";
import "./guesstheNumber.css";

const Guessthenumber = () => {
  const [input, setInput] = useState("");
  const [number, setNumber] = useState();
  const [status, setStatus] = useState();
  const [guesses, setGuesses] = useState([]);
  const [chances, setChances] = useState(10);
  // Status
  // 1: low
  // 2: high
  // 3: correct
  // 4: lost

  useEffect(() => {
    generateRandom();
  }, []);

  const generateRandom = () => {
    const a = Math.floor(Math.random() * 100); // 100 is the maximum number
    setNumber(a);
  };

  const handleSubmit = (event) => {
    if (parseInt(event.keyCode) === 13 && event.target.value !== "") {
      let dupChance = chances;
      --dupChance;
      setGuesses([...guesses, input]);
      setChances(dupChance);
      if (dupChance === 0) {
        setStatus(4);
      } else {
        if (parseInt(input) < number) setStatus(1);
        else if (parseInt(input) > number) setStatus(2);
        else if (parseInt(input) === number) setStatus(3);
      }
      setInput("");
    }
  };

  const handleReset = () => {
    setInput("");
    setNumber();
    setStatus();
    setGuesses([]);
    setChances(10);
    generateRandom();
  };

  return (
    <div className="guessChallenge">
      <div className="guessInput">
        <label>Enter a guess between 0 to 100 and hit Enter</label>
        <input
          type="number"
          value={input}
          autoFocus
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={(e) => handleSubmit(e)}
          disabled={status === 3 || status === 4}
        />
      </div>
      <div className="guessBtnGroup">
        <button type="button" onClick={() => handleReset()}>
          Reset
        </button>
      </div>

      <div className="guessResult">
        {status === 1 && <p>Too Low!</p>}
        {status === 2 && <p>Too High!</p>}
        {status === 3 && <p>Congrats! You guessed correct : {number}</p>}
        {status === 4 && (
          <p>Oh sucks! You lost. The number was {number}, play again</p>
        )}
        {guesses.length > 0 && <p>Your guesses: {guesses.toString()}</p>}
        <p>Remaining: {chances}</p>
      </div>
    </div>
  );
};

export default Guessthenumber;
