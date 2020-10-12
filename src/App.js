import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Footer from './components/common/Footer/footer';

function App() {
  return (
    <div>
      <Router>
      <Switch>

      </Switch>
      <Route path="/Footer" exact component={Footer}/>
      </Router>
      {/* <div class="app-footer">
     <div class="app-footer-menu">
       <Footer/>
     </div>
   </div> */}
 
    </div>
  );
}

export default App;
