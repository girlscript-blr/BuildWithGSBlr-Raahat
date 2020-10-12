import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './components/header/header';
import Home from './components/home/Home';
import Navbar from './components/common/navbar/navbar'

function App() {
  return (
    <div>
    <Header/>
      <Router>
      <Switch>
      <Route path="/" exact component={Home}/>
      </Switch>
      </Router>

    </div>
  );
}

export default App;
