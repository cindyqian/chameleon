import React from 'react';
  // import { Link, Switch, Route } from 'react-router';
  import { BrowserRouter, Switch, Route } from 'react-router-dom';
  import Nav from './Nav.js';
  import PageRouter from './components/router.js'

  export default class App extends React.Component {
    render() {    
      return (
        <div className="App">
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