import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

var hist = createBrowserHistory();

const Routes = () => {
  return (
    <Router history={hist}>
      <Switch>
        <Route component={Home} path="/" exact/>
        <Route component={PrivacyPolicy} path="/privacy-policy"/>
      </Switch>
    </Router>
  )
}

export default Routes;