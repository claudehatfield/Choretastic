import React from "react";
import { BrowserRouter as Router,  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

import Footer from "./components/Footer";
import InfoBody from "./components/InfoBody";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
      
          <Header />
          

          <InfoBody />

         

          <Footer />
      </div>
    </Router>
  );
}

export default App;
