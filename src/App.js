
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import PieChart from "./components/common/piechart/Piechart";
import Navbar from './components/common/navbar/navbar'
import "./App.css";
import SurveyResult from "./components/SurveyResult.js/SurveyResult";


function App() {
  return (
    <div>
      <PieChart />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/survey-result" exact component={SurveyResult} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
