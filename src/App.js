import React from "react";
import "./App.css";
import Chart from "./components/Chart";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Evelyn from "./students/Evelyn";
import Aranka from "./students/Aranka";
import Floris from "./students/Floris";
import Hector from "./students/Hector";
import Martina from "./students/Martina";
import Maurits from "./students/Maurits";
import Rahima from "./students/Rahima";
import Sandra from "./students/Sandra";
import Storm from "./students/Storm";
import Wietske from "./students/Wietske";
import Students from "./components/Students";

function App() {
  return (
    <div className="App">
      <Router>
        <ul id="header">
          <li>
            <Link to="/">Dashboard overview</Link>
          </li>
          <li>
            <a href="#students">Students</a>
          </li>
        </ul>

        <Switch>
          <Route path="/Wietske">
            <Wietske />
          </Route>
          <Route path="/Storm">
            <Storm />
          </Route>
          <Route path="/Sandra">
            <Sandra />
          </Route>
          <Route path="/Rahima">
            <Rahima />
          </Route>
          <Route path="/Maurits">
            <Maurits />
          </Route>
          <Route path="/Martina">
            <Martina />
          </Route>
          <Route path="/Hector">
            <Hector />
          </Route>
          <Route path="/Floris">
            <Floris />
          </Route>
          <Route path="/Aranka">
            <Aranka />
          </Route>
          <Route path="/Evelyn">
            <Evelyn />
          </Route>
          <Route path="/">
            <Chart id="Chart" />
          </Route>
        </Switch>
        <h1>
          <a id="students"></a>Students
        </h1>
        <Students />
      </Router>
    </div>
  );
}

export default App;
