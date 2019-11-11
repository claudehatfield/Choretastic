import React from "react";
import Navbar from "../Navbar/index";
import Table from "../Table/index";
import Footer from "../Footer/index";
import ChoreForm from "../ChoreForm/index";



function CalendarAdult() {
  return (
      <div>
        <Navbar />
            <h1>Adult Site</h1>
         
            <ChoreForm />
          <Footer />
      </div>
  );
}

export default CalendarAdult;
