import React from 'react';
import './App.css';

// import { Route, Switch, useLocation, Link } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import LoginPage from "./pages/ChooseUser/ChooseUser.js";
// import { Switch, Route, RouteComponentProps, Redirect } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ChooseUser from "./pages/ChooseUser/ChooseUser.js";
import Login from "./pages/Login/Login.js";
import SignUp from "./pages/SignUp/SignUp.js";
import EditProfile from "./pages/EditProfile/EditProfile.js"
import MainSearch from "./pages/MainSearch/MainSearch.js"

import PageRouter from './components/router.js';


function App() {
  return (

    <div>
      
      {/* <BrowserRouter>
        <Switch>
          <Route
            component={ChooseUser}
            exact
            path="./pages/ChooseUser/ChooserUser.js"
          />
          <Route
            component={Login}
            exact
            path="./pages/Login/Login.js"
          />
          <Route
            component={SignUp}
            exact
            path="./pages/SignUp/SignUp.js"
          />
          <Route
            component={MainSearch}
            exact
            path="./pages/MainSearch/MainSearch.js"
          />
          <Route
            component={EditProfile}
            exact
            path="./pages/EditProfile/EditProfile.js"
          />
        </Switch>

      </BrowserRouter> */}
      
      
      








      {/* <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="./pages/ChooseUser/ChooserUser.js">ChooseUser</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="./pages/Login/Login.js">LogIn</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="./pages/SignUp/SignUp.js">SignUp</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="./pages/MainSearch/MainSearch.js">MainSearch</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="./pages/EditProfile/EditProfile.js">EditProfile</Link>
                        </li>
                    </ul>
                </nav> */}

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                 {/* <Switch>  
                     <Route path="./pages/EditProfile/EditProfile.js">
                        <EditProfile />
                    </Route>
                    <Route path="./pages/MainSearch/MainSearch.js">
                        <MainSearch />
                    </Route> 
                     <Route path="./pages/ChooseUser/ChooseUser.js">
                        <ChooseUser />
                    </Route>
                    <Route path="./pages/SignUp/SignUp.js">
                        <SignUp />
                    </Route>
                    <Route path="./pages/Login/Login.js">
                        <Login />
                    </Route>
                </Switch>
            </div>
        </Router> */}
    </div>



  
  );
}

export default App;
