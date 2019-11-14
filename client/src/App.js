import React from "react";
import { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import CalendarChild from "./components/CalendarChild";
import CalendarAdult from "./components/CalendarAdult";
import RewardChild from "./components/RewardChild";
import RewardAdult from "./components/RewardAdult";
// import SignUp from "./components/SignUp";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/private-route/Private-Route";
import Dashboard from "./components/Dashbord/Dashboard";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}



class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/calendarchild" component={CalendarChild} />
          <Route exact path="/calendarAdult" component={CalendarAdult} />
          <Route exact path="/rewardchild" component={RewardChild} />
          <Route exact path="/rewardadult" component={RewardAdult} />
          {/* <Route exact path="/signup" component={SignUp} /> */}
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
      </Router>
      </Provider>
    );
  }
}





export default App;
