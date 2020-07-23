import React from "react";
import "./App.css";
import Chart from "./chart/Chart";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Evelyn from "./Students/Evelyn";
import Aranka from "./Students/Aranka";
import Floris from "./Students/Floris";
import Hector from "./Students/Hector";
import Martina from "./Students/Martina";
import Maurits from "./Students/Maurits";
import Rahima from "./Students/Rahima";
import Sandra from "./Students/Sandra";
import Storm from "./Students/Storm";
import Wietske from "./Students/Wietske";
import Students from "./Students/Students";

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
