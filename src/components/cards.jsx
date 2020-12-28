import React, { Component } from "react";

class Cards extends Component {
  state = {
    header: "DSoftwares.com",
  };

  render() {
    return (
      <div className="cardds">
        <div className="card" style={{ width: "50%", float: "left" }}>
          <div className="card-body">
            <h5 className="card-title">Old site {this.state.header}</h5>
            <p className="card-text">{this.props.text}</p>
            <a
              href={"http://dsoftwares.epizy.com"}
              className="btn btn-secondary"
            >
              Old website
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
