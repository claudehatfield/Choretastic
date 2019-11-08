import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Calendar from "./components/Calendar";
import Reward from "./components/Reward";




function App() {
  return (
    <Router>
     <Route exact path="/" component={Main} />
     <Route exact path="/calendar" component={Calendar} />
     <Route exact path="/reward" component={Reward} />
    </Router>
  );
}

export default App;
