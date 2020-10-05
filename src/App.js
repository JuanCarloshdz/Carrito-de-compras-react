import React from 'react';
import './App.css';

import Header from './Header';
import Home from './Home';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login';
function App() {
  return (

    <Router>
      <div className="App">
        
        <Switch >

        <Route path="/login">
            {/* Login */}
            <Login />
          </Route>

          <Route path="/checkout">
            {/* Header */}
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            {/* Home */}
            <Header />
            <Home />
          </Route>


        </Switch>
      </div>
    </Router>



  );
}

export default App;
