import React from 'react';
  // import { Link, Switch, Route } from 'react-router';
  import { BrowserRouter, Switch, Route } from 'react-router-dom';
  import Nav from './Nav.js';
  import ChooseUser from './pages/ChooseUser/ChooseUser.js';
  import Login from "./pages/Login/Login.js";
  import SignUp from "./pages/SignUp/SignUp.js";
  import MainSearch from "./pages/MainSearch/MainSearch.js"
  import EditProfile from "./pages/editProfile/EditProfile.js"


  export default class App extends React.Component {
    render() {    
      return (
        <div className="App">
          <BrowserRouter>
            <div>
              <Nav />
              <Switch>
                <Route exactly component={ChooseUser} path="./pages/ChooseUser/ChooseUser.js" />
                <Route exactly component={Login} path="./pages/Login/Login.js" />
                <Route exactly component={SignUp} path="./pages/SignUp/SignUp.js" />
                <Route exactly component={MainSearch} path="./pages/MainSearch/MainSearch.js" />
                <Route exactly component={EditProfile} path="./pages/EditProfile/EditProfile.js" />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      );
    }
  }