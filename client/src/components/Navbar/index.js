import React from "react";
import { Link } from 'react-router-dom';



function Navbar() {
  return (
<nav className="navbar is-success is-bold" role="navigation" aria-label="main navigation">
  <div className="navbar-brand ">
    <Link className="navbar-item" to="/">
      <h1 className = "title is-4 has-text-white">CHORETASTIC</h1>
    </Link>

  </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <Link to = "/register" id ="signUp" className="button btnsign is-primary">
            <strong>Sign Up</strong>
          </Link>
          <Link to = "/login" className="button is-warning">
            Log in
          </Link>
        </div>
      </div>
    </div>
</nav>


  );
}


export default Navbar;