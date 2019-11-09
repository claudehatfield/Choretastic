import React from "react";
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";



function Login() {
  return (
      <div>
        <Navbar />
         
        <div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Text input" value="UserName"></input>
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  <p class="help is-success"></p>
</div>

<div class="field">
  <label class="label">Password</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Text input" value="Password"></input>
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  <p class="help is-success"></p>
</div>

<label class="checkbox">
  <input type="checkbox"></input>
  Child
</label>

<span>     </span>

<label class="checkbox">
  <input type="checkbox"></input>
  Parent
</label>

          <Footer />
      </div>
  );
}

export default Login;
