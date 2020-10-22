import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/home/Home';
import './App.css';

function App() {
  return (
    <div>
      <Router>
      <Switch>
      <Route path="/" exact component={Home}/>
      </Switch>
      </Router>
 
    </div>
  );
}

export default App;
