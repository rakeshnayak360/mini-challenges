import React, { useState } from "react";
import "./progressbar.css";

const Progressbar = () => {
  const [amount, setAmount] = useState(0);

  const handleStartPause = () => {};
  const handleStop = () => {};
  const handleReset = () => {};

  return (
    <div className="progreebarBox">
      <div className="bar">
        <div className="fill" style={{ width: amount + "%" }}></div>
      </div>
      <div className="btnGroup">
        <button className="startBtn" onClick={handleStartPause}>
          Start
        </button>
        <button className="stopBtn" onClick={handleStop}>
          Stop
        </button>
        <button className="resetBtn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Progressbar;
