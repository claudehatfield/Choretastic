import React from "react";
import { BrowserRouter as Router,  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      
        
          <Header />
      </div>
    </Router>
  );
}

export default App;
