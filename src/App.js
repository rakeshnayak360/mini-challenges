import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import challenges from "./helpers/challenges";

// import all the components here
import Parentcomponent from "./parentComponent";
import Dashboard from "./mc/dashboard";
import StarRating from "./mc/star-rating";
// import Counter from "./mc/counter";
// import Cssshapes from "./mc/css-shapes";
// import PasswordStrength from "./mc/password-stength";
// import TransferList from "./mc/transfer-list";
// import TagInputs from "./mc/tag-inputs";
// import Progressbar from "./mc/progressbar";
// import Searchfilter from "./mc/search-filter";
// import Pixelart from "./mc/pixel-art";
// import Passwordgenerator from "./mc/password-generator";
// import Todolist from "./mc/todo-list";
// import Gradientgenerator from "./mc/gradient-generator";
// import Guessthenumber from "./mc/guess-the-number";
// import LightDarkmode from "./mc/light-dark";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Parentcomponent
                component={<Dashboard />}
                title="Frontend mini challenges by Rakesh Nayak"
                hideLink={true}
              />
            }
          />
          <Route
            path="/star-rating"
            element={
              <Parentcomponent component={<StarRating />} title="Star Rating" />
            }
          />
          {/*<Route
            path="/counter"
            element={
              <Parentcomponent component={<Counter />} title="Counter" />
            }
          />
          <Route
            path="/css-shapes"
            element={
              <Parentcomponent component={<Cssshapes />} title="CSS Shapes" />
            }
          />
          <Route
            path="/password-strength"
            element={
              <Parentcomponent
                component={<PasswordStrength />}
                title="Password Strength"
              />
            }
          />
          <Route
            path="/transfer-list"
            element={
              <Parentcomponent
                component={<TransferList />}
                title="Transfer List"
              />
            }
          />
          <Route
            path="/tag-inputs"
            element={
              <Parentcomponent component={<TagInputs />} title="Tag Inputs" />
            }
          />
          <Route
            path="/search-filter"
            element={
              <Parentcomponent
                component={<Searchfilter />}
                title="Search/Filters"
              />
            }
          />
          <Route
            path="/pixel-art"
            element={
              <Parentcomponent component={<Pixelart />} title="Pixel Art" />
            }
          />
          <Route
            path="/password-generator"
            element={
              <Parentcomponent
                component={<Passwordgenerator />}
                title="Password Generator"
              />
            }
          />
          <Route
            path="/todo-list"
            element={
              <Parentcomponent component={<Todolist />} title="Todo List" />
            }
          />
          <Route
            path="/gradient-generator"
            element={
              <Parentcomponent
                component={<Gradientgenerator />}
                title="Gradient generator"
              />
            }
          />
          <Route
            path="/guess-the-number"
            element={
              <Parentcomponent
                component={<Guessthenumber />}
                title="Guess the number"
              />
            }
          />
          <Route
            path="/light-dark-mode"
            element={
              <Parentcomponent
                component={<LightDarkmode />}
                title="Light-Dark mode"
              />
            }
          /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
