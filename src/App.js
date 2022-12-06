import React from "react";
// import challenges from "./helpers/challenges";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import all the components here
import Home from "./Home";
import StarRating from "./mc/star-rating";
import Counter from "./mc/counter";
import Cssshapes from "./mc/css-shapes";
import PasswordStrength from "./mc/password-stength";
import TransferList from "./mc/transfer-list";
import TagInputs from "./mc/tag-inputs";
import Progressbar from "./mc/progressbar";
import Header from "./helpers/header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home tile="Home" />} />
          <Route
            path="/star-rating"
            element={<StarRating title="Star Rating" />}
          />
          <Route path="/counter" element={<Counter title="Counter" />} />
          <Route
            path="/css-shapes"
            element={<Cssshapes title="CSS Shapes" />}
          />
          <Route
            path="/password-strength"
            element={<PasswordStrength title="Password Strength" />}
          />
          <Route
            path="/transfer-list"
            element={<TransferList title="Transfer List" />}
          />
          <Route
            path="/tag-inputs"
            element={<TagInputs title="Tag Inputs" />}
          />
          <Route
            path="/progress-bar"
            element={<Progressbar title="Progress Bar" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
