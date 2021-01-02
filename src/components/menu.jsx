import React, { Component } from "react";
import img from "./path4747..png";
class Menu extends Component {
  state = {};
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <h1>DSoftwares.com</h1>
          <img src={img} alt="asda" />
          <p>
            Hello everyone, my name is Deniz Memduev, I am Computer Science
            student in University of Economics - Varna. This is my Website wich
            you can use for free educational purposes or to buy developments of
            web applications, websites and desktop applications.
          </p>
          <p>
            <a
              className="btn btn-primary btn-lg"
              id="btn1"
              href={"dsoftwares.com"}
              role="button"
            >
              Read more »
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Menu;
