import React from "react";



function Navbar() {
  return (
<nav className="navbar is-info is-bold" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      <h1>CHORETASTIC</h1>
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a href = "/signup" id ="signUp" className="button btnsign is-primary">
            <strong>Sign up</strong>
          </a>
          <a href = "/login" className="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
</nav>


  );
}


export default Navbar;