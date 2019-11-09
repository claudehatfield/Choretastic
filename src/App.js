import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import CalendarChild from "./components/CalendarChild";
import CalendarAdult from "./components/CalendarAdult";
import RewardChild from "./components/RewardChild";
import RewardAdult from "./components/RewardAdult";
import SignUp from "./components/SignUp";
import Login from "./components/Login"




function App() {
  return (
    <Router>
     <Route exact path="/" component={Main} />
     <Route exact path="/calendarchild" component={CalendarChild} />
     <Route exact path="/calendarAdult" component={CalendarAdult} />
     <Route exact path="/rewardchild" component={RewardChild} />
     <Route exact path="/rewardadult" component={RewardAdult} />
     <Route exact path="/signup" component={SignUp} />
     <Route exact path="/login" component={Login} />
    </Router>
  );
}

export default App;
