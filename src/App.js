import "./App.css";
import Homepage from "./components/Homepage.js";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Topic from "./components/pages/Topic";
import Login from "./components/Login";
import Quiz from "./components/pages/Quiz";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/topic" exact>
            <Topic />
          </Route>
          <Route path="/quiz" exact>
            <Quiz />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
