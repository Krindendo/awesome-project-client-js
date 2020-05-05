import React, { useEffect } from "react";
import "./App.scss";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "../helpers/history";
import { AuthRoute } from "../helpers";
import {
  LandingPage,
  MainPage,
  NotePage,
  OldPage,
  TodoPage,
  CloudPage,
} from "../pages";

export const App = () => {
  useEffect(() => {
    history.listen((location, action) => {
      // Kada menja lokaciju da obrise sve error-e
      //Clear alerts
    });
  }, []);
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={MainPage} />
          <Route exact path="/home/:docId" component={NotePage} />
          <Route exact path="/todo" component={TodoPage} />
          <Route exact path="/cloud" component={CloudPage} />
          <Route exact path="/old" component={OldPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
};

//TODO: https://reactjs.org/docs/code-splitting.html

/*
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <AuthRoute exact path="/home" component={MainPage} />
    <AuthRoute exact path="/home/:docId" component={NotePage} />
    <AuthRoute exact path="/todo" component={TodoPage} />
    <AuthRoute exact path="/cloud" component={CloudPage} />
    <AuthRoute exact path="/old" component={OldPage} />
    <Redirect from="*" to="/" />
  </Switch>
*/
