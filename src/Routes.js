import React from "react";
import {
    Switch,
    Route,
    Redirect,
    withRouter
} from "react-router-dom";

import Home from "./containers/Home";
import Profile from "./containers/Profile";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";

const Routes = () => (
  <div id = "main-content-wrap" >
    <Switch >
      <Route exact path = "/" >
        <Redirect to="/home" ></Redirect>
      </Route>
      <Route path="/sign-in" component={SignIn}/>
      <Route path="/sign-up" component={SignUp}/>
      <Route path="/home" component={Home}/>
      <Route path="/profile" component={Profile}/>
    </Switch>
  </div>
);

export default withRouter(Routes);
