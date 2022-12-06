import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [changeAmount, setChangeAmount] = useState(1);

  // Increment on click of '+' button
  const handleIncrement = () => {
    setCount(count + changeAmount);
  };

  // Decrement on click of '-' button
  const handleDecrement = () => {
    setCount(count - changeAmount);
  };

  // Handle the amount of increment/decrement
  const handleChangeAmount = (e) => {
    setChangeAmount(parseInt(e.target.value));
  };

  // Reset function
  const handleReset = () => {
    setCount(0);
    setChangeAmount(1);
  };

  return (
    <div className="counterBox">
      <h1 className="countValue">{count}</h1>
      <div className="countBtns">
        <button type="button" onClick={handleDecrement}>
          -
        </button>
        <button type="button" onClick={handleIncrement}>
          +
        </button>
      </div>
      <div className="changeAmountBox">
        <p>Increment/Decrement by</p>
        <input
          min="1"
          type="number"
          value={changeAmount}
          onChange={handleChangeAmount}
        />
      </div>
      <button className="resetBtn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
