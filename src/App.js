import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./modules/Home"

import "./assets/css/style.css";
import CartClass from "./modules/CartClass";
import CartHooks from "./modules/CartHooks";
import Header from "./components/Header";
import CartAnt from "./modules/CartAnt";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/cart-class">
            <CartClass />
          </Route>
          <Route exact path="/cart-hooks">
            <CartHooks />
          </Route>
          
          <Route exact path="/cart-ant">
            <CartAnt />
          </Route>
          
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
