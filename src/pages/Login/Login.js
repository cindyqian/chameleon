import React from "react";
import "../main.css";
import InputButton from "../../components/InputButton.js";
// CHANGE TO NEW SHORTENED URL THAT ACTUALLY WORKS IEUHRSKJFIUEKRJSHFIUKHEJRD FIDUKJHERSD

function Login() {
  document.body.style.backgroundColor = "#FFAF6D";
  return (
    <div>
      <InputButton placeholder="Username" />
      <InputButton placeholder="Password" />
    </div>
  );
}

export default Login;
