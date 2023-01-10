import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import "./passwordGenerator.css";

const Passwordgenerator = () => {
  const [configs, setConfigs] = useState({
    uppercase: true,
    numbers: false,
    special: false,
    length: 6,
    password: "",
  });
  const [showcopied, setShowcopied] = useState(false);

  const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  };
  const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  };
  const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  };
  const getRandomSymbol = () => {
    const symbols = '~!@#$%^&*()_+{}":?><;.,';
    return symbols[Math.floor(Math.random() * symbols.length)];
  };

  const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
  };

  const handleGeneratePassword = () => {
    const { uppercase, numbers, special, length } = configs;
    const pwd = generatePassword(uppercase, numbers, special, length);
    setConfigs({ ...configs, password: pwd });
  };

  const generatePassword = (upper, number, symbol, length) => {
    let generatedPassword = "";
    const lower = 1; // default should be lower
    const typesCount = lower + upper + number + symbol;

    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
      (item) => Object.values(item)[0]
    );

    // Doesn't have a selected type
    if (typesCount === 0) {
      return "";
    }

    // create a loop
    for (let i = 0; i < length; i += typesCount) {
      typesArr.forEach((type) => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
      });
    }

    const finalPassword = generatedPassword
      .slice(0, length)
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

    return finalPassword;
  };

  const handleCopy = () => {
    setShowcopied(true);
    const textarea = document.createElement("textarea");
    textarea.value = configs.password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();

    setTimeout(() => {
      setShowcopied(false);
    }, 500);
  };

  return (
    <div className="passdwordgeneratrorChallenge">
      <div className="inputBox">
        <input type="text" value={configs.password} readOnly />
        <span className="copyIcon" onClick={() => handleCopy()}>
          <FontAwesomeIcon icon={faCopy} />
        </span>
        {showcopied && <div className="copied">Copied</div>}
      </div>
      <div className="passwordConfigs">
        <label>
          <input
            type="range"
            id="slider"
            min="6"
            max="10"
            value={configs.length}
            onChange={(e) => setConfigs({ ...configs, length: e.target.value })}
          />{" "}
          <span className="">{configs.length}</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={configs.uppercase}
            onChange={(e) =>
              setConfigs({ ...configs, uppercase: e.target.checked })
            }
          />
          Include Uppercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={configs.numbers}
            onChange={(e) =>
              setConfigs({ ...configs, numbers: e.target.checked })
            }
          />{" "}
          Include Numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={configs.special}
            onChange={(e) =>
              setConfigs({ ...configs, special: e.target.checked })
            }
          />{" "}
          Include Special chars
        </label>
      </div>
      <button
        type="button"
        className="generatepwdBtn"
        onClick={() => handleGeneratePassword()}
      >
        Generate
      </button>
    </div>
  );
};

export default Passwordgenerator;
