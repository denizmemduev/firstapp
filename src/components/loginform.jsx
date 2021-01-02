import React, { Component } from "react";
import "./components.css";
import "./signup";
import $ from "jquery";

$(document).ready(function () {
  $(".formout2").css({
    display: "none",
  });
  $(".sgn").click(function signupp() {
    $(".formout").css({
      display: "none",
    });
    $(".formout2").css({
      display: "flex",
    });
  });
});

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
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-lock"></i>
          </span>
          <input
            className="form-control m-1 w-100"
            type="text"
            autoFocus="1"
            placeholder={"Type your Username"}
          />
          <input
            className="form-control m-1  w-100"
            type="password"
            placeholder="Type your Password"
          />
          <button className="btn btn-dark btn-sms m-1 w-100">Sign in</button>

          <div className="sgn">Create new account</div>
        </form>
      </div>
    );
  }
}

export default List;
