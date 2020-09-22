import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavigationBar extends Component {

  render() {
    
    return (
      <div className="navbar">
        <div className="brand">
          <strong>DELTA</strong>
        </div>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    );
  }
}
