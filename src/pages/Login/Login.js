import React, { useRef, useState } from "react";
import "../main.css";
import InputButton from "../../components/InputButton.js";
import Button from "../../components/Button.js";
import { useAuth } from "../../contexts/AuthContexts.js";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
// CHANGE TO NEW SHORTENED URL THAT ACTUALLY WORKS IEUHRSKJFIUEKRJSHFIUKHEJRD FIDUKJHERSD

function Login() {
  document.body.style.backgroundColor = "#FFAF6D";

  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    /*if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match!");
    }*/

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }
  return (
    <div>
      <div className="loginPrompt UserHeader">Log In</div>
      <Form onSubmit={handleSubmit}>
        <InputButton placeholder="Username" left="37" top="38" />
        <InputButton placeholder="Password" left="37" top="52" />
        {/* <Button text="Submit" left="37" top="70" /> */}
        <Button buttonType="SubmitButton" path="/search" required left="45" top="67"/* text="submit"*//>
      </Form>
      <div className="footer">
        Don't have an account? <Link to="/signup"> &nbsp; Sign up here!</Link>
      </div>
    </div>
  );
}

export default Login;
