import React from "react";
import { Route, Switch } from 'react-router-dom';

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      {/* Switch : only shows 1 component that first matches the path */}
      <Switch>
        {/* exact : shows the component when have exact path, if disable, path="/hats" showing the HomePage as well */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
