import React, { Component } from "react";
class Navlist extends Component {
  state = {};
  render() {
    return (
      <div className="navlist">
        <ul className="list-group">
          <li className="active">Home</li>
          <li className="listitems">News</li>
          <li className="listitems">Projects</li>
          <li className="listitems">Gallery</li>
          <li className="listitems">Contacts</li>
          <li className="listitems">Games</li>
          <li className="listitems">About</li>
        </ul>
      </div>
    );
  }
}

export default Navlist;
