import React, { useState } from "react";
import "./password.css";

const Passwordstrength = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  //check the strength of the password on change of input value
  const checkStrength = (e) => {
    const passwordValue = e.target.value;
    setPassword(e.target.value);

    const number = /([0-9])/;
    const alphabets = /([a-zA-Z])/;
    const special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
    const pwd = passwordValue.trim();

    if (passwordValue.length === 0) {
      setStrength("");
    } else if (passwordValue.length < 6) {
      setStrength("weak");
    } else {
      if (
        pwd.match(number) &&
        pwd.match(alphabets) &&
        pwd.match(special_characters)
      ) {
        setStrength("strong");
      } else {
        setStrength("medium");
      }
    }
  };

  return (
    <div className="main">
      <div className="passwordBox">
        <label>Enter the password</label>
        <input
          type="text"
          value={password}
          onChange={checkStrength}
          placeholder="Start typing here..."
        />
      </div>
      <div className={"status " + strength}>{strength}</div>
    </div>
  );
};

export default Passwordstrength;
