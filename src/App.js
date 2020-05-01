import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import "./App.scss";
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";
import NotePage from "./pages/NotePage";
import OldPage from "./pages/OldPage";
import TodoPage from "./pages/TodoPage";
import CloudPage from "./pages/CloudPage";

//axios
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

const App = () => {
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
        </Switch>
      </Router>
    </div>
  );
};

export default App;

//TODO: https://reactjs.org/docs/code-splitting.html
