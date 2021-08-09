import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen.js';
import { auth } from './firebase';

// using ES6 modules
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from './Screens/LoginScreen';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';

function App() {
const user = null;
const dispatch = useDispatch();


useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(userAuth => {
    if (userAuth) {
      //logged in
      console.log(userAuth)
      dispatch(
        login({
        uid: userAuth.uid,
        email: userAuth.email
      })
      )
    } else  {
      dispatch(logout);
      //logged out
  }
})
  return unsubscribe();
}, [])



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
