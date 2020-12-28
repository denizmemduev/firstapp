import React, { Component } from "react";

import "./navlist";
import "./loginform";
import $ from "jquery";

$(document).ready(function () {
  $(".navbar-toggler").click(function navbar() {
    $(".navlist").toggleClass("change_me navlistclose ");
    $(".form").toggleClass("change_me formoutdisable ");
    $(".cardds").toggleClass("change_me carddss ");
  });
});

class Navigbar extends Component {
  state = {};

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a
          className="navbar-brand mr-auto mr-lg-0 m-2 "
          href={"dsoftwares.com"}
        >
          DSoftwares.com
        </a>
      </nav>
    );
  }
}

export default Navigbar;
