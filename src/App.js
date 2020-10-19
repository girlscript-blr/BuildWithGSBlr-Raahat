import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/Home";
import SurveyResult from "./components/SurveyResult/SurveyResult";
function App() {
  return (
    <div>
      <Header />
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
