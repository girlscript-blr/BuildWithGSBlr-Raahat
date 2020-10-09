import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './components/header/header';
import Home from './components/home/Home';
import TakeSurvey from './components/home/TakeSurvey';

function App() {
  return (
    <div>
    <Header/>
      <Router>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/takesurvey" exact component={TakeSurvey}/>
      </Switch>
      </Router>
 
    </div>
  );
}

export default App;
