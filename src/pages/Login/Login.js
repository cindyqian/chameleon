import React from "react";
import "../main.css";
import InputButton from "../../components/InputButton.js";
// CHANGE TO NEW SHORTENED URL THAT ACTUALLY WORKS IEUHRSKJFIUEKRJSHFIUKHEJRD FIDUKJHERSD

function Login() {
  document.body.style.backgroundColor = "#FFAF6D";
  return (
    <div>
      {/* <div className=""> */}
        <div className="loginPrompt UserHeader">Log In</div>
      {/* </div> */}
      <InputButton placeholder="Username" left="37" top="36" />
      <InputButton placeholder="Password" left="37" top="50" />
      <div className="footer">
        Don't have an account? <a href="PLACEHOLDER"> &nbsp; Sign up here.</a>
      </div>
    </div>
  );
}

export default Login;
