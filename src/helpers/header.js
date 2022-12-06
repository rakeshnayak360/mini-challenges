import React from "react";
import { useRouteMatch } from "react-router-dom";
import challenges from "./challenges";

const Header = () => {
  const match = challenges.filter(
    (item) => item.link === useRouteMatch(item.link)
  );

  return (
    <div className="header">
      <a href="/">Home</a>
      <h2>Hi</h2>
      <a href="" target="_blank">
        GitHub
      </a>
    </div>
  );
};

export default Header;
