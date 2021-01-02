import React, { Component } from "react";
import "./components.css";
import "./loginform";
import $ from "jquery";

$(document).ready(function () {
  $(".sgu").click(function signin() {
    $(".formout2").css({
      display: "none",
    });
    $(".formout").css({
      display: "flex",
    });
  });
});

class List1 extends Component {
  state = {
    usename: "denizmemdue",
  };
  send() {
    console.log(this.state.usename);
  }

  render() {
    return (
      <div className="formout2">
        <form className="form">
          <h1 className="h3 mb-3 fw-normal">Registration</h1>
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-lock"></i>
          </span>
          <input
            className="form-control m-1 w-100"
            type="text"
            autoFocus="1"
            placeholder={"Your Name"}
            required
          />
          <input
            className="form-control m-1 w-100"
            type="email"
            autoFocus="1"
            placeholder={"Email"}
            required
          />
          <input
            className="form-control m-1 w-100"
            type="text"
            autoFocus="1"
            placeholder={"Username"}
            required
          />
          <input
            className="form-control m-1  w-100"
            type="password"
            placeholder="Password"
            required
          />
          <button className="btn btn-dark btn-sms m-1 w-100">Sign up</button>

          <div className="sgu">Already have an account</div>
        </form>
      </div>
    );
  }
}

export default List1;
