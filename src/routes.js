import React from "react";
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import App from "./components/App";
import AuthPage from "./components/auth/AuthPage";
import HomePage from "./components/home/HomePage";
import Landing from "./components/welcome/Landing";

export default (
  <Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="/auth/login/" component={AuthPage} />
    <Route path="/home" component={HomePage} />
    <Route path="/landing" component={Landing} />
  </Route>
  </Router>
);
