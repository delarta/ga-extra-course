import React from "react";
import "./assets/css/style.css";

import PortfolioPage from "./modules/Portfolio/PortfolioPage";
import ContactPage from "./modules/Portfolio/Contact";
import AboutPage from "./modules/Portfolio/About";
import Illustration from "./modules/Portfolio/Illustration";
import UIDesigns from "./modules/Portfolio/UIDesigns";

import NavigationBar from "./modules/Portfolio/NavigationBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IllustrationDetails from "./modules/Portfolio/IllustrationDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={PortfolioPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/illustration" component={Illustration} />
          <Route path="/uidesign" component={UIDesigns} />

          <Route path="/illustration/:id" component={IllustrationDetails} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
