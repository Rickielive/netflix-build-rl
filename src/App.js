import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen.js';
import { auth } from './firebase';
// import {Router, Route, Switch, withRouter } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from './Screens/LoginScreen';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './Screens/ProfileScreen';

function App() {
const user = useSelector(selectUser);
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
      dispatch(logout());
      //logged out
  }
})
  return unsubscribe;
}, [dispatch])

// useEffect(() => {
//   auth.onAuthStateChanged(userAuth => {
//     if (userAuth) {
//       //logged in
//       console.log(userAuth)
            
//           } else  {
//             //logged out
//         }

//   })
// } ,[])



  return (
    <div className="app">

      <Router>
        {!user ? (
          <LoginScreen />
        ): (
          <Switch>

            <Route exact path = "/profile">
              <ProfileScreen />
            </Route>

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



