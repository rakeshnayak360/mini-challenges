import React from "react";
import "./index.css";
import challenges from "./helpers/challenges";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="align-center">
      <h1>Frontend Mini challenges by Rakesh Nayak</h1>
      <div className="challengesList">
        {challenges.map((menu, key) => {
          return (
            <div className="challengeBox" key={key}>
              {menu.isNew && <div className="ribbon">{menu.ribbonTitle}</div>}
              <a href={"/" + menu.link}>{menu.title}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
