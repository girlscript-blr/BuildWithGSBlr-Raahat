import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './components/header/header'

function App() {
  return (
    <div>
      <Router>
      <Route path="/" exact component={Header}/>
      </Router>
 
    </div>
  );
}

export default App;
