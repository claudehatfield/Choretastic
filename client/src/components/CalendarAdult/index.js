import React from "react";
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import ChoreForm from "../ChoreForm/index";
import DashBoard from "../Dashbord/Dashboard";


function CalendarAdult() {
  return (
      <div>
        <Navbar />
            <h1>Adult Site</h1>
           <DashBoard />
            <ChoreForm />
          <Footer />
      </div>
  );
}

export default CalendarAdult;
