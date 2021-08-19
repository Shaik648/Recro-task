import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeScreen from "../Screens/HomeScreen";
import TaskScreen from "../Screens/TaskScreen";

function PrivateRoute() {
  return (
    <div>
      <Router>
        <Switch>
          <Route excat path="/task">
            <TaskScreen />
          </Route>

          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default PrivateRoute;
