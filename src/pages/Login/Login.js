import React from "react";
import "../main.css";
import InputButton from "../../components/InputButton.js";
import Button from "../../components/Button.js";

import { Link } from "react-router-dom";
// CHANGE TO NEW SHORTENED URL THAT ACTUALLY WORKS IEUHRSKJFIUEKRJSHFIUKHEJRD FIDUKJHERSD

function Login() {
  document.body.style.backgroundColor = "#FFAF6D";
  return (
    <div>
      <div className="loginPrompt UserHeader">Log In</div>
      <InputButton placeholder="Username" left="37" top="36" />
      <InputButton placeholder="Password" left="37" top="50" />
      <Button text="Submit" left="37" top="70" path="/search" />
      <div className="footer">
        Don't have an account? <Link to="/signup"> &nbsp; Sign up here!</Link>
      </div>
    </div>
  );
}

export default Login;
