import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/home/Home';
import Chart from './Chart'
import './App.css';

function App() {
  return (
    <div>
      <Router>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/chart" exact component={Chart}/>
      </Switch>
      </Router>
 
    </div>
  );
}

export default App;
