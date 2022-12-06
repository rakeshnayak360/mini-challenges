import React, { useState } from "react";
import "./styles.css";

const TransferList = () => {
  const [leftItems, setLeftitems] = useState([
    "JS",
    "html",
    "Css",
    "Ts",
    "Vue",
  ]);

  const [rightItems, setRightitems] = useState(["React", "Angular", "Node"]);

  const [leftChecked, setLeftChecked] = useState([]);
  const [rightChecked, setRightChecked] = useState([]);

  const handleLeftcheck = (e, id) => {
    if (e.target.checked) setLeftChecked([...leftChecked, id]);
    else {
      setLeftChecked(leftChecked.filter((item) => item !== id));
    }
  };
  const handleRightcheck = (e, id) => {
    if (e.target.checked) setRightChecked([...rightChecked, id]);
    else {
      setRightChecked(rightChecked.filter((item) => item !== id));
    }
  };

  const handleMoveAlltoLeft = () => {
    setLeftitems([...leftItems, ...rightItems]);
    setRightitems([]);
  };

  const handleMoveAlltoRight = () => {
    setRightitems([...rightItems, ...leftItems]);
    setLeftitems([]);
  };

  const handleMoveLeft = () => {
    // We can use this filter method but this cause extra execution time so used map function
    // const b = rightItems.filter((item, index) => !rightChecked.includes(index));
    // const a = rightItems.filter((item, index) => rightChecked.includes(index));

    let a = [],
      b = [];
    rightItems.map((item, index) => {
      rightChecked.includes(index) ? a.push(item) : b.push(item);
    });
    setRightitems([...b]);
    setLeftitems([...leftItems, ...a]);
    setRightChecked([]);
  };

  const handleRightLeft = () => {
    let a = [],
      b = [];
    leftItems.map((item, index) => {
      leftChecked.includes(index) ? a.push(item) : b.push(item);
    });
    setLeftitems([...b]);
    setRightitems([...rightItems, ...a]);
    setLeftChecked([]);
  };

  return (
    <div className="transferList">
      <div className="box leftBox">
        <ul>
          {leftItems.map((item, key) => {
            return (
              <li key={key}>
                <label>
                  <input
                    type="checkbox"
                    value={key}
                    checked={leftChecked.includes(key)}
                    onChange={(e) => handleLeftcheck(e, key)}
                  />
                  {item}
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="buttonGroup">
        <button
          className="moveAllLeftBtn"
          title="Move all to left"
          onClick={handleMoveAlltoLeft}
        >
          {"<<"}
        </button>
        <button
          className="moveLeftBtn"
          title="Move to left"
          onClick={handleMoveLeft}
        >
          {"<"}
        </button>
        <button
          className="moveRightBtn"
          title="Move to right"
          onClick={handleRightLeft}
        >
          {">"}
        </button>
        <button
          className="moveAllRightBtn"
          title="Move all to right"
          onClick={handleMoveAlltoRight}
        >
          {">>"}
        </button>
      </div>
      <div className="box rightBox">
        <ul>
          {rightItems.map((item, key) => {
            return (
              <li key={key}>
                <label>
                  <input
                    type="checkbox"
                    value={key}
                    checked={rightChecked.includes(key)}
                    onChange={(e) => handleRightcheck(e, key)}
                  />
                  {item}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TransferList;
