import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './components/header/header';
import PieChart from './components/common/piechart/Piechart';
function App() {
  return (
    <div>
    <Header/>
    <PieChart/>
      <Router>
        <Switch>
          <Route path="/" exact component={Header} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
