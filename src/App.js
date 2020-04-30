import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import "./App.scss";
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";
import NotePage from "./pages/NotePage";
import OldPage from "./pages/OldPage";
import TodoPage from "./pages/TodoPage";

//axios
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/home" component={MainPage}></Route>
          <Route exact path="/home/:docId" component={NotePage}></Route>
          <Route exact path="/todo" component={TodoPage}></Route>
          <Route exact path="/old" component={OldPage}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

//TODO: https://reactjs.org/docs/code-splitting.html
