import React, { useState, useEffect } from "react";
import "./colorGenerator.css";

const Colorgenerator = () => {
  const [colord, setColor] = useState(null);
  const [type, TypeColor] = useState(null);

  const generateColor = (e) => {
    if (parseInt(e.keyCode) === 32) {
      const randomColor = "#" + Math.random().toString(16).substr(-6);
      const type = lightOrDark(randomColor.toString());
      setColor(randomColor);
      TypeColor(type);
    }
  };

  const lightOrDark = (color) => {
    let r, g, b, hsp;

    if (color.match(/^rgb/)) {
      // If HEX --> store the red, green, blue values in separate variables
      color = color.match(
        /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
      );

      r = color[1];
      g = color[2];
      b = color[3];
    } else {
      // If RGB --> Convert it to HEX: http://gist.github.com/983661
      color = +(
        "0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&")
      );

      r = color >> 16;
      g = (color >> 8) & 255;
      b = color & 255;
    }

    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    // Using the HSP value, determine whether the color is light or dark
    if (hsp > 127.5) {
      return "light";
    } else {
      return "dark";
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", generateColor);
    return () => {
      // 👇️ remove event listener when the component unmounts
      window.removeEventListener("keydown", generateColor);
    };
  });

  return (
    <div className="colorgenerator-challenge">
      <div className={`box ${type}`} style={{ backgroundColor: colord }}>
        {!colord && <h6>Press the spacebar</h6>}
        {colord}
        {colord && (
          <p className="fixedText">
            Press the spacebar to generate random color
          </p>
        )}
      </div>
    </div>
  );
};

export default Colorgenerator;
