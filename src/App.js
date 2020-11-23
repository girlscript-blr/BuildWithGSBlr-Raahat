import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import "./App.css";
import SurveyResult from "./components/surveyResult/SurveyResult";


function App() {
  return (
    <div>
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
