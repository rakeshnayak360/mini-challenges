import React, { useState, useRef } from "react";
import "./styles.css";

const TagInputs = () => {
  const [tags, setTags] = useState([]);
  const textInput = useRef(null);

  const handleInputChange = (event) => {
    if (event.keyCode === "13") {
      if (event.target.value !== "") {
        setTags([...tags, event.target.value]);
        textInput.current.value = "";
      }
    }
  };

  const handleDelete = (id) => {
    setTags([...tags.filter((item, key) => key !== id)]);
  };

  return (
    <div className="tagInput">
      <input
        autoFocus="True"
        type="text"
        ref={textInput}
        onKeyUp={(e) => handleInputChange(e)}
        placeholder="Press enter after typing..."
      />

      {tags.length > 0 && (
        <div className="tagBox">
          {tags.map((item, key) => {
            return (
              <div className="tags" key={key}>
                {item}{" "}
                <span className="deleteTag" onClick={() => handleDelete(key)}>
                  X
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TagInputs;
