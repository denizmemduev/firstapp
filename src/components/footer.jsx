import React, { Component } from "react";
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="bg-light text-center text-lg-start">
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.01)" }}
        >
          © 2020 Powered:
          <a className="text-dark" href={"https://mdbootstrap.com/"}>
            MDBootstrap.com & DSoftwares.com
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
