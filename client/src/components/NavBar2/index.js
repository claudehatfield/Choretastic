import React from "react";
import { Link } from 'react-router-dom';



function NavbarTwo() {
  return (
<nav className="navbar is-success is-bold" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <Link className="navbar-item" to="/">
      <h1>CHORETASTIC</h1>
    </Link>

  </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <Link to = "/dashboard" id ="dashboard" className="button btnsign is-primary">
            <strong>DashBoard</strong>
          </Link>
        </div>
      </div>
    </div>
</nav>


  );
}


export default NavbarTwo;