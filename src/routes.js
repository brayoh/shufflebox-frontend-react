import React from "react";
import { Route, Switch } from 'react-router-dom';
import App from "./components/App";
import AuthPage from "./components/auth/AuthPage";
import HomePage from "./components/home/HomePage";
import Landing from "./components/welcome/Landing";

const Routes = () => ( 
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/auth/login/" component={AuthPage} />
    <Route path="/home" component={HomePage} />
    <Route path="/landing" component={Landing} />
  </Switch>
);

export default  Routes;
