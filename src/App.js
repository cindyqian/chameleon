import React from "react";
// import { Link, Switch, Route } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Nav.js";
import PageRouter from "./components/router.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./contexts/AuthContexts.js";

export default class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <div className="App">
          <BrowserRouter>
            <div>
              <Navigation />
              <PageRouter />
            </div>
          </BrowserRouter>
        </div>
      </AuthProvider>
    );
  }
}
