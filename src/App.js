import React from "react";
import { Route, Switch } from 'react-router-dom';

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      {/* Switch : only shows 1 component that first matches the path */}
      <Switch>
        {/* exact : shows the component when have exact path, if disable, path="/hats" showing the HomePage as well */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
