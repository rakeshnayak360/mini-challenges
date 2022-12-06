import React from "react";

const Header = ({ title }) => {
  return (
    <div className="header">
      <a href="/">Home</a>
      <h2>{title}</h2>
      <a href="" target="_blank">
        GitHub
      </a>
    </div>
  );
};

export default Header;
