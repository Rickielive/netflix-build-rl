import React from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen.js';

// using ES6 modules
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from './Screens/LoginScreen';

function App() {
const user = null;

  return (
    <div className="app">

      <Router>
        {!user ? (
          <LoginScreen />
        ): (
          <Switch>
          <Router exact path="/">
              <HomeScreen />
            </Router>
        </Switch>
        )}
        
      </Router>
    </div>
  );
}

export default App;




{/* <Route path="/about">
            <About/>
            </Route>
            <Router path="/users">
              <Users/>
            </Router> */}
