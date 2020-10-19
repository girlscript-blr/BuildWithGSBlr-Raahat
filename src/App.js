import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './components/header/header';
import Home from './components/home/Home';
import PieChart from './components/common/piechart/Piechart';
function App() {
  return (
    <div>
    <Header/>
    <PieChart/>
      <Router>
      <Switch>
      <Route path="/" exact component={Home}/>
      </Switch>
      </Router>
 
    </div>
  );
}

export default App;
