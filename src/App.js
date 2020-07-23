import React from "react";
import "./App.css";
import Chart from "./components/Chart";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Evelyn from "./studentComponents/Evelyn";
import Aranka from "./studentComponents/Aranka";
import Floris from "./studentComponents/Floris";
import Hector from "./studentComponents/Hector";
import Martina from "./studentComponents/Martina";
import Maurits from "./studentComponents/Maurits";
import Rahima from "./studentComponents/Rahima";
import Sandra from "./studentComponents/Sandra";
import Storm from "./studentComponents/Storm";
import Wietske from "./studentComponents/Wietske";
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
