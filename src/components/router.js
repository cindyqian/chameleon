import React from "react";
import { Route, Switch, useLocation, Link } from "react-router-dom";

import ChooseUser from "../pages/ChooseUser/ChooseUser.js";
import Login from "../pages/Login/Login.js";
import SignUp from "../pages/SignUp/SignUp.js";
import EditProfile from "../pages/editProfile/editProfile.js";
import MainSearch from "../pages/MainSearch/MainSearch.js";

const routes = [
  { path: "/", name: "", Component: ChooseUser },
  { path: "/login", name: "login", Component: Login },
  { path: "/signup", name: "signup", Component: SignUp },
  { path: "/search", name: "search", Component: MainSearch },
  { path: "/profile", name: "profile", Component: EditProfile },
];

const PageRouter = () => {
  let location = useLocation();

  return (
    <Switch location={location} key={location.pathname}>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path} component={Component} />
      ))}
    </Switch>
  );
};

export default PageRouter;


