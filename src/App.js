import React from "react";
// import { Link, Switch, Route } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav.js";
import PageRouter from "./components/router.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./components/Logo.js";
import { AuthProvider } from "./contexts/AuthContexts.js";

export default class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <div className="App">
          <Logo />
          <BrowserRouter>
            <div>
              <Nav />
              <PageRouter />
            </div>
          </BrowserRouter>
        </div>
      </AuthProvider>
    );
  }
}
