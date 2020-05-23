import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="navbar">
      <div class="brand">
        <strong>DELTA</strong>
      </div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/cart-class">Class</Link>
        <Link to="/cart-hooks">Hooks</Link>
        <Link to="/cart-ant">Cart Ant</Link>
      </div>
    </div>
  );
}
