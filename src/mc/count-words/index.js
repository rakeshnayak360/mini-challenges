import React, { useState } from "react";
import "./Countwords.css";

const Countwords = () => {
  const [text, setText] = useState("");
  const [words, setWords] = useState(0);
  const [letters, setLetters] = useState(0);
  const [spaces, setSpaces] = useState(0);

  const handleCount = (text) => {
    const wordsFromText =
      text.length > 0 ? text.replace(/\s+/g, " ").trim().split(" ") : ""; // combine all the multiple spaces and consider a single space
    const lettersFromText = text.split("");
    const spacesFromText = text.split(" ").length - 1;

    setWords(wordsFromText.length);
    setSpaces(spacesFromText);
    setLetters(lettersFromText.length);
  };

  const handleTextChange = (e) => {
    const inputText = e.target.value;

    setText(inputText);
    handleCount(inputText);
  };

  return (
    <div className="countwords-challenge">
      <textarea
        autoFocus
        placeholder="Start typing..."
        value={text}
        onChange={(e) => handleTextChange(e)}
      />

      <div className="word-details">
        <p>
          Words: <b>{words}</b>
        </p>
        <p>
          Letters: <b>{letters}</b>
        </p>
        <p>
          Spaces: <b>{spaces}</b>
        </p>
      </div>
      <p>[Note: Space is considered as character]</p>
    </div>
  );
};

export default Countwords;
