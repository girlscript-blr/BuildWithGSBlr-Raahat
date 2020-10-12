import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/common/navbar/navbar'
import Header from './components/header/header'

function App() {
  return (
    <div>
      <Router>
      <Switch>
      <Navbar>
      <Route path="/" exact component={Header}/>
      </Navbar>
      </Switch>
      </Router>

    </div>
  );
}

export default App;
