import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Illustration extends Component {
  
  render() {
  console.log(this.props)
    return (
      <div className="img-container">
        <Link to="/illustration/1">
          <img src="https://cdn.mos.cms.futurecdn.net/ZcD9zyBoBHt6ATTFmZHr5B.jpg" />
        </Link>
        <Link to="/illustration/2">
          <img src="https://cdn.mos.cms.futurecdn.net/ZcD9zyBoBHt6ATTFmZHr5B.jpg" />
        </Link>
        <Link to="/illustration/3">
          <img src="https://cdn.mos.cms.futurecdn.net/ZcD9zyBoBHt6ATTFmZHr5B.jpg" />
        </Link>
      </div>
    );
  }
}
