import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './components/header/header';
import TakeSurvey from './components/home/TakeSurvey';


function App() {
  return (
    <div>
      <Router>
      <Switch>
      <Route path="/" exact component={Header}/>
      <Route path="/takesurvey" exact component={TakeSurvey}/>
      </Switch>
      </Router>
 
    </div>
  );
}

export default App;
