import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ListStores from "Pages/ListStores";

const hist = createBrowserHistory();

const Routes = () => {
  return (
    <Router history={hist}>
      <Switch>
        <Route component={Home} path="/" exact/>
        <Route component={PrivacyPolicy} path="/privacy-policy"/>
        <Route component={ListStores} path="/list-stores"/>
      </Switch>
    </Router>
  )
}

export default Routes;