import React, { useState } from "react";
import "./scoreBoard.css";

const Scoreboard = () => {
  const [teamname1, setTeamname1] = useState("Team 1");
  const [teamname2, setTeamname2] = useState("Team 2");
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [winner, setWinner] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const handleScoreChange = (team, points) => {
    if (team === teamname1) {
      const newScore = score1 + points;
      if (newScore < 0) {
        setScore1(0);
      } else {
        setScore1(newScore);
        checkForWinner(newScore, team);
      }
    } else {
      const newScore = score2 + points;
      if (newScore < 0) {
        setScore2(0);
      } else {
        setScore2(newScore);
        checkForWinner(newScore, team);
      }
    }
  };

  const checkForWinner = (score, team) => {
    if (score === 15) {
      setGameOver(true);
      setWinner(team);
    }
  };

  const handleTeamnameChange = (teamname, value) => {
    teamname === teamname1 && setTeamname1(value);
    teamname === teamname2 && setTeamname2(value);
  };

  const handlezreset = () => {
    setTeamname1("Team 1");
    setTeamname2("Team 2");
    setScore1(0);
    setScore2(0);
    setWinner("");
    setGameOver(false);
  };

  return (
    <div className="scoreboard-challenge">
      <div className="container">
        <div className="team-container">
          <input
            type="text"
            autoFocus
            value={teamname1}
            readOnly={winner}
            onChange={(e) => {
              handleTeamnameChange(teamname1, e.target.value);
            }}
          />
          <p className="score">{score1}</p>
          {!gameOver && (
            <div className="buttonGroup">
              <button onClick={() => handleScoreChange(teamname1, 1)}>+</button>
              <button onClick={() => handleScoreChange(teamname1, -1)}>
                -
              </button>
            </div>
          )}
        </div>

        {winner && (
          <div className="winner">
            {winner}
            <br />
            WINS!
          </div>
        )}

        <div className="team-container">
          <input
            type="text"
            value={teamname2}
            readOnly={winner}
            onChange={(e) => handleTeamnameChange(teamname2, e.target.value)}
          />
          <p className="score">{score2}</p>
          {!gameOver && (
            <div className="buttonGroup">
              <button onClick={() => handleScoreChange(teamname2, 1)}>+</button>
              <button onClick={() => handleScoreChange(teamname2, -1)}>
                -
              </button>
            </div>
          )}
        </div>
      </div>

      <div>
        <button className="reset-button" onClick={() => handlezreset()}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Scoreboard;
