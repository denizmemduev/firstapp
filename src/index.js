import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";
import List from "./components/loginform";
import Navigbar from "./components/navbar";
import Navlist from "./components/navlist";
import Cards from "./components/cards";

ReactDOM.render(
  <List />,

  document.getElementById("root")
);

ReactDOM.render(
  <Navigbar />,

  document.getElementById("navigation")
);

ReactDOM.render(
  <Navlist />,

  document.getElementById("navlist")
);

ReactDOM.render(
  <Cards text="You can visit my old site and you can use it for free educational and play games" />,

  document.getElementById("card")
);

ReactDOM.render(
  <Cards />,

  document.getElementById("card2")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
