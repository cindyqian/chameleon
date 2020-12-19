import React from "react";
// import { Link, Switch, Route } from 'react-router';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Nav.js";
import PageRouter from "./components/router.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./components/Logo.js";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div><Logo/></div>
        <BrowserRouter>
          <div>
            <Nav />
            <PageRouter />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
