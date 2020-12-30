import React, { Component } from "react";

class Cards extends Component {
  state = {};

  render() {
    return (
      <div className="cardds m-2">
        <div className="card" style={{ width: "auto" }}>
          <div className="card-body">
            <h5 className="card-title">{this.props.header}</h5>
            <p className="card-text">{this.props.text}</p>
            <a
              href={"http://dsoftwares.epizy.com"}
              className="btn btn-secondary"
            >
              {this.props.buttons}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
