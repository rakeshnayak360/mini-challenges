import React, { useState } from "react";
import "./pixelArt.css";

const Pixelart = () => {
  const [activeColor, setActiveColor] = useState("orange");

  const [mdown, setMdown] = useState(false);
  // const [mdEnter, setMEnter] = useState(false);
  const [matrixe, setMaxtrix] = useState({ row: 7, column: 7 });

  const colors = [
    "aqua",
    "black",
    "blue",
    "navy",
    "olive",
    "orange",
    "purple",
    "red",
    "silver",
    "teal",
    "white",
    "yellow",
  ];

  // This is to set the active color when user picks the color
  const handleColorpick = (color) => {
    setActiveColor(color);
  };

  // This is to handle when mouse enters the box
  const handlePaintMouseEnter = (e) => {
    // setMEnter(true);
    if (mdown) {
      paint(e);
    } else setMdown(false);
  };

  // This is to handle when mouse down or pressed the box and start painting
  const handlePaintMouseDown = (e) => {
    setMdown(true);
    paint(e);
  };

  // stop painting when mouse is up and change the state
  const handlePainMouseup = (e) => {
    setMdown(false);
  };

  // reset the mouse state when cursor leaves the play area
  const handleLeaveArea = () => {
    setMdown(false);
    // setMEnter(false);
  };
  // This is to pain the current the current element when mouse is down and entered
  const paint = (ele) => {
    ele.target.style.backgroundColor = activeColor;
  };

  const handlechangeRow = (e) => {
    parseInt(e.target.value) > 0 &&
      setMaxtrix({ ...matrixe, row: parseInt(e.target.value) });
  };

  const handlechangeColumn = (e) => {
    parseInt(e.target.value) > 0 &&
      setMaxtrix({ ...matrixe, column: parseInt(e.target.value) });
  };

  // reset all state
  const handleReset = () => {
    setActiveColor("orange");
    setMdown(false);
    // setMEnter(false);
    setMaxtrix({ row: 7, column: 7 });
    cleanPixels();
  };

  // clean the dirty background color of each pixel
  const cleanPixels = () => {
    const columns = Array.from(document.querySelectorAll(".column"));
    columns &&
      columns.map((item) => {
        return (item.style.backgroundColor = "");
      });
  };

  return (
    <div className="pixelartChallenge">
      <p>
        Note: Pick any color from this pallette and start drawing (Max row &
        columns support is 50x50)
      </p>

      <div className="colorGroup">
        {colors.map((color, key) => {
          return (
            <div
              key={key}
              onClick={() => handleColorpick(color)}
              className={`colorPicker ${activeColor === color && "active"}`}
              style={{ backgroundColor: color }}
            ></div>
          );
        })}
      </div>

      <div className="configRowColumnBox">
        <div>
          <label>Column</label>{" "}
          <input
            type="number"
            value={matrixe.column}
            min="1"
            max="50"
            onChange={handlechangeColumn}
          />
        </div>

        <div>
          <label>Row</label>{" "}
          <input
            type="number"
            value={matrixe.row}
            min="1"
            max="50"
            onChange={handlechangeRow}
          />
        </div>
      </div>

      <div className="artArea" onMouseLeave={() => handleLeaveArea()}>
        {[...Array(matrixe.row)].map((row, key) => {
          return (
            <div className="row" key={key}>
              {[...Array(matrixe.column)].map((column, key) => {
                return (
                  <div
                    key={key}
                    className="column"
                    onMouseEnter={(e) => handlePaintMouseEnter(e)}
                    onMouseDown={(e) => handlePaintMouseDown(e)}
                    onMouseUp={(e) => handlePainMouseup(e)}
                  ></div>
                );
              })}
            </div>
          );
        })}
      </div>

      <button className="resetBtn" type="button" onClick={() => handleReset()}>
        Reset
      </button>
    </div>
  );
};

export default Pixelart;
