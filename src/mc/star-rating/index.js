import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Emoji from "./Emoji";
import "./styles.css";

const StarRating = () => {
  const totalStars = 5;
  const [active, setActive] = useState(3);

  const handleClick = (id) => {
    if (active !== id + 1) setActive(id + 1);
    else setActive(0);
  };

  return (
    <>
      {[...Array(totalStars)].map((item, key) => {
        return (
          <FontAwesomeIcon
            key={key}
            className={`star ${key < active ? "actived" : ""}`}
            icon={faStar}
            size="5x"
            onClick={() => handleClick(key)}
          />
        );
      })}
      <Emoji rating={active} />
    </>
  );
};

export default StarRating;
