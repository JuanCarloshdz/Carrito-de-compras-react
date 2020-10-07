import React, { useEffect } from 'react';
import './App.css';

import Header from './Header';
import Home from './Home';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login';

import { auth } from './firebase'
import { useStateValue } from './StateProvider';

function App() {

const [{}, dispatch] = useStateValue(); 

  useEffect(() => {
    auth.onAuthStateChanged(authUser => { 
      console.log("The user id  >>> ", authUser); 
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser

        })
        // the useri is login
      }else{
        // the user is log put

        dispatch({
          type:'SET_USER',
          user:null

        })
      }
    }

    )
  }, []);

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
