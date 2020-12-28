import React, { Component } from "react";
import "./components.css";
class List extends Component {
  state = {
    usename: "denizmemdue",
  };
  send() {
    console.log(this.state.usename);
  }

  render() {
    return (
      <div className="formout">
        <form className="form">
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <input
            className="form-control m-1 w-100"
            type="text"
            autoFocus="1"
            placeholder={"Type your username"}
          />
          <input
            className="form-control m-1  w-100"
            type="password"
            placeholder="Type your password"
          />
          <button className="btn btn-dark btn-sms m-1 w-100">Sign in</button>
        </form>
      </div>
    );
  }
}

export default List;
