import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './components/header/header';
import Home from './components/home/Home';
import surveyResult from './components/home/surveyResult';

function App() {
  return (
    <div>
    <Header/>
      <Router>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/surveyResult" exact component={surveyResult}/>
      </Switch>
      </Router>
 
    </div>
  );
}

export default App;
