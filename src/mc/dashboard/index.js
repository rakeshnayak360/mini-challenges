import React from "react";
import "./dashboard.css";
import challenges from "../../helpers/challenges";

const Dashboard = () => {
  return (
    <div className="align-center">
      <div className="challengesList">
        {challenges.map((menu, key) => {
          return (
            <div className="challengeBox" key={key}>
              {menu.isNew && <div className="ribbon">{menu.ribbonTitle}</div>}
              <a href={"/mini-challenges/" + menu.link}>{menu.title}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
