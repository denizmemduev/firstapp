import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";
import List from "./components/loginform";
import List1 from "./components/signup";
import Navigbar from "./components/navbar";
import Navlist from "./components/navlist";
import Cards from "./components/cards";
import Menu from "./components/menu";
import Footer from "./components/footer";

ReactDOM.render(
  <List />,

  document.getElementById("root")
);

ReactDOM.render(
  <List1 />,

  document.getElementById("form1")
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
  <Menu />,

  document.getElementById("menu")
);

ReactDOM.render(
  <Cards
    text="You can visit DSoftwares's old website and you can use it for free."
    buttons="Old Website"
    header="DSoftwares.bg"
  />,

  document.getElementById("card")
);

ReactDOM.render(
  <Cards
    buttons="Services"
    header="See our's services"
    text="Order professional logo, website, mobile application and others for your business."
  />,

  document.getElementById("card2")
);

ReactDOM.render(
  <Footer />,

  document.getElementById("footer")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
