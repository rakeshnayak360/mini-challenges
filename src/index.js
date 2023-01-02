import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {console.log(`#   ______   _______ ___   _ _______ _______ __   __   __    _ _______ __   __ _______ ___   _ 
#  |    _ | |   _   |   | | |       |       |  | |  | |  |  | |   _   |  | |  |   _   |   | | |
#  |   | || |  |_|  |   |_| |    ___|  _____|  |_|  | |   |_| |  |_|  |  |_|  |  |_|  |   |_| |
#  |   |_||_|       |      _|   |___| |_____|       | |       |       |       |       |      _|
#  |    __  |       |     |_|    ___|_____  |       | |  _    |       |_     _|       |     |_ 
#  |   |  | |   _   |    _  |   |___ _____| |   _   | | | |   |   _   | |   | |   _   |    _  |
#  |___|  |_|__| |__|___| |_|_______|_______|__| |__| |_|  |__|__| |__| |___| |__| |__|___| |_|`)}
  </React.StrictMode>
);
