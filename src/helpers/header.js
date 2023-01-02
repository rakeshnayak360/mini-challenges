import React from "react";
import github from "./assets/github.png";

const Header = ({ title, hideLink }) => {
  return (
    <div className="header">
      {!hideLink && (
        <a href="mini-challenges/" className="homeLink">
          Home
        </a>
      )}
      <h1>{title}</h1>
      <a href="/" target="_blank">
        <img className="githubIcon" src={github} alt="github" />
      </a>
    </div>
  );
};

export default Header;
