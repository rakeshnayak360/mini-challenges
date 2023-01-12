import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import "./gradientGenerator.css";

const Gradientgenerator = () => {
  const [colors, setColors] = useState({
    color1: "#0000ff", // in hexa
    color2: "#ff0000", // in hexa
    angle: "90", // in degree
  });

  const [copied, setCopied] = useState(false);

  const handleRandom = () => {
    const color1 = "#" + Math.random().toString(16).substr(-6);
    const color2 = "#" + Math.random().toString(16).substr(-6);
    setColors({ ...colors, color1: color1, color2: color2 });
  };

  const handleCopy = () => {
    const textarea = document.createElement("textarea");
    textarea.value =
      "linear-gradient(" +
      colors.angle +
      "deg, " +
      colors.color1 +
      ", " +
      colors.color2 +
      ")";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 500);
  };

  return (
    <div className="gradientChallenge">
      <div className="colorBox">
        <label>
          Color 1:{" "}
          <input
            type="color"
            value={colors.color1}
            onChange={(e) => setColors({ ...colors, color1: e.target.value })}
          />
        </label>
        <label>
          Color 2:{" "}
          <input
            type="color"
            value={colors.color2}
            onChange={(e) => setColors({ ...colors, color2: e.target.value })}
          />
        </label>
        <label>
          Angle:{" "}
          <input
            type="number"
            value={colors.angle}
            onChange={(e) => setColors({ ...colors, angle: e.target.value })}
          />
        </label>
      </div>
      <button
        type="button"
        className="randomcolorBtn"
        onClick={() => handleRandom()}
      >
        Random
      </button>

      <div
        className="colorPreview"
        style={{
          background:
            "linear-gradient(" +
            colors.angle +
            "deg, " +
            colors.color1 +
            ", " +
            colors.color2 +
            ")",
        }}
      ></div>
      <div className="colorCode">
        {"linear-gradient(" +
          colors.angle +
          "deg, " +
          colors.color1 +
          ", " +
          colors.color2 +
          ")"}
        <span className="copyIcon" onClick={() => handleCopy()}>
          <FontAwesomeIcon icon={faCopy} />
        </span>
      </div>
      {copied && <p>Copied</p>}
    </div>
  );
};

export default Gradientgenerator;
