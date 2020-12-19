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
import EditProfile from "./pages/EditProfile/editProfile.js"
import MainSearch from "./pages/MainSearch/MainSearch.js"

import PageRouter from './components/router.js';


function App() {
  return (

    <div>
      
      {/* <BrowserRouter> */}

           {/* <Route
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
        </Switch> */}

      {/* </BrowserRouter> */}      







    </div>



  
  );
}

