import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import CalendarChild from "./components/CalendarChild";
import CalendarAdult from "./components/CalendarAdult";
import Reward from "./components/Reward";




function App() {
  return (
    <Router>
     <Route exact path="/" component={Main} />
     <Route exact path="/calendarchild" component={CalendarChild} />
     <Route exact path="/calendarAdult" component={CalendarAdult} />
     <Route exact path="/reward" component={Reward} />
    </Router>
  );
}

export default App;
