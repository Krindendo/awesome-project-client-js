import React, { Suspense, lazy } from "react";
import "./App.scss";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import AuthRoute from "../helpers/AuthRoute";
import { history } from "../helpers";
const LandingPage = lazy(() => import("../pages/LandingPage"));
const MainPage = lazy(() => import("../pages/MainPage"));
const NotePage = lazy(() => import("../pages/NotePage"));
const TodoPage = lazy(() => import("../pages/TodoPage"));
const CloudPage = lazy(() => import("../pages/CloudPage"));
const OldPage = lazy(() => import("../pages/OldPage"));

export const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Suspense
          fallback={
            <div className="loading">
              <p>Loading...</p>
            </div>
          }
        >
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <AuthRoute exact path="/home" component={MainPage} />
            <AuthRoute exact path="/home/:docId" component={NotePage} />
            <AuthRoute exact path="/todo" component={TodoPage} />
            <AuthRoute exact path="/cloud" component={CloudPage} />
            <AuthRoute exact path="/old" component={OldPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};
