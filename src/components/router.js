import React from "react";
import { Route, Switch, useLocation, Link } from 'react-router-dom';

import ChooseUser from "../pages/ChooseUser/ChooseUser.js";
import Login from "../pages/Login/Login.js";
import SignUp from "../pages/SignUp/SignUp.js";
import EditProfile from "../pages/EditProfile/EditProfile.js"
import MainSearch from "../pages/MainSearch/MainSearch.js"

const routes = [
    { path: "/ChooseUser", name: "ChoseUser", Component: ChooseUser }, 
    { path: "/Login", name: "Login", Component: Login } 
]

const PageRouter = () => {
    let location = useLocation()

    return (
        <Switch location={location} key={location.pathname}>
            {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path} component={Component} />
            ))}
        </Switch>
    )
}

export default PageRouter;

// export default function App() {
//     return (
//         <Router>
//             <div>
//                 <nav>
//                     <ul>
//                         <li>
//                             <Link to="./pages/ChooseUser/ChooserUser.js">ChooseUser</Link>
//                         </li>
//                     </ul>
//                     <ul>
//                         <li>
//                             <Link to="./pages/ChooseUser/ChooserUser.js">ChooseUser</Link>
//                         </li>
//                     </ul>
//                     <ul>
//                         <li>
//                             <Link to="./pages/ChooseUser/ChooserUser.js">ChooseUser</Link>
//                         </li>
//                     </ul>
//                     <ul>
//                         <li>
//                             <Link to="./pages/ChooseUser/ChooserUser.js">ChooseUser</Link>
//                         </li>
//                     </ul>
//                 </nav>

//                 {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//                 {/* <Switch> */}
//                     {/* <Route path="/about">
//                         <About />
//                     </Route>
//                     <Route path="/users">
//                         <Users />
//                     </Route> */}
//                     {/* <Route path="./pages/ChooseUser/ChooserUser.js">
//                         <ChooseUser />
//                     </Route>
//                 </Switch> */}
//             </div>
//         </Router>
//     );
// }
//         // </Router>

//         // ReactDOM.render((
//         //     <Router history = {browserHistory}>
//         //        <Route path = "/" component = {App}>
//         //           <IndexRoute component = {Home} />
//         //           {/* Choose Photographer or Client, redirects to Login or MainSearch */}
//         //           <Route path = "ChooseUser" component = {Home} /> 
//         //           {/* Login, if new user, redirect to SignUp */}
//         //           <Route path = "Login" component = {About} />
//         //           {/* SignUp, redirects MainSearch */}
//         //           <Route path = "SignUp" component = {Contact} />
//         //           {/* MainSearch, can redirect to EditProfile */}
//         //           <Route path = "MainSearch" component = {Contact} />

