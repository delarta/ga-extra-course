import React, { Component } from "react";
import {Link, Route, Switch} from "react-router-dom"
import Illustration from "./Illustration";
import UIDesigns from "./UIDesigns";

export default class PortfolioPage extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="portfolio">
        <div>
          <h1>Hi, I'm Delarta</h1>
          <p>Illustrator, UI Designer and Frontend Developer</p>
          <div>
            <Link to="/illustration">Illustration</Link>
            <br/>
            <Link to="/uidesign">UI Design</Link>
          </div>

        </div>
      </div>
    );
  }
}
