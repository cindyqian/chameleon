import React from 'react';
  // import { Link, Switch, Route } from 'react-router';
  import { BrowserRouter, Switch, Route } from 'react-router-dom';
  import Nav from './Nav.js';
  import ChooseUser from '/Users/markqian/Desktop/hacklympics/src/pages/ChooseUser/ChooseUser.js';
  import Login from "/Users/markqian/Desktop/hacklympics/src/pages/Login/Login.js";
  import SignUp from "/Users/markqian/Desktop/hacklympics/src/pages/SignUp/SignUp.js";
  import MainSearch from "/Users/markqian/Desktop/hacklympics/src/pages/MainSearch/MainSearch.js"
  import EditProfile from "/Users/markqian/Desktop/hacklympics/src/pages/EditProfile/EditProfile.js"


  export default class App extends React.Component {
    render() {    
      return (
        <div className="App">
          <BrowserRouter>
            <div>
              <Nav />
              <Switch>
                <Route exactly component={ChooseUser} path="/Users/markqian/Desktop/hacklympics/src/pages/ChooseUser/ChooseUser.js" />
                <Route exactly component={Login} path="/Users/markqian/Desktop/hacklympics/src/pages/Login/Login.js" />
                <Route exactly component={SignUp} path="/Users/markqian/Desktop/hacklympics/src/pages/SignUp/SignUp.js" />
                <Route exactly component={MainSearch} path="/Users/markqian/Desktop/hacklympics/src/pages/MainSearch/MainSearch.js" />
                <Route exactly component={EditProfile} path="/Users/markqian/Desktop/hacklympics/src/pages/EditProfile/EditProfile.js" />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      );
    }
  }