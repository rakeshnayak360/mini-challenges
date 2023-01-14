import React, { useState } from "react";
import "./lightDark.css";

const LightDarkmode = () => {
  const [dark, setDark] = useState(false);

  const handleChange = () => {
    setDark(!dark);
  };

  return (
    <div className="lightDarkChallenge">
      <p>
        The following container color theme is controlled using CSS class and
        React state
      </p>
      <label>
        <input type="checkbox" checked={dark} onChange={() => handleChange()} />{" "}
        Switch to Dark mode
      </label>
      <div className={`themBox ${dark ? "dark" : ""}`}>
        <p>
          Dolore qui qui irure cillum qui cupidatat incididunt irure laborum
          aute veniam nisi <span style={{ color: "#f00" }}>excepteur</span>.
          Deserunt cupidatat tempor culpa eu veniam. Magna sunt nulla
          consectetur cillum. <a href="https://github.com/rakeshnayak360">github</a>. Ullamco sunt sint sit id
          esse proident laborum cupidatat. Eu elit sit quis fugiat nulla eiusmod
          excepteur nostrud duis qui nulla. Veniam aute elit consectetur dolor
          ut sint Lorem eiusmod labore. This is a
        </p>
      </div>
    </div>
  );
};

export default LightDarkmode;
