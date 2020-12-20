import React, { useRef, useState } from "react";
import "../main.css";
import { Form/*, Button*/, Card, Container, Alert } from "react-bootstrap";
import "../../components/Button.css";
import { useAuth, AuthProvider } from "../../contexts/AuthContexts.js";
import { Link } from "react-router-dom";
import InputButton from "../../components/InputButton.js";
import Button from "../../components/Button.js";
import Submit from '../../components/Submit.js';
import { useHistory } from "react-router-dom";
import { generateUserDocument } from "../../firebase.js";

export default function SignUp() {
  document.body.style.backgroundColor = "#FFAF6D";
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      console.log("Do not match")
      return setError("Passwords do not match!");
    }

    try {
      setError("");
      setLoading(true);
      console.log("signed up")
      const {user} = await signup(emailRef.current.value, passwordRef.current.value);
      generateUserDocument(user, {phone: "425-123-4567", rate: "$50/hr", website: "www.instagram.com/earth"});
      history.push("/profile");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <AuthProvider>
      <div className="UserHeader SignUpHeader">Sign Up</div>
      <Container className="d-flex justify-content-center">
        <div className="w-100" style={{ maxWidth: "400px" }}>
          {/* <h2 className="text-center mb-4">Sign Up</h2> */}
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          
          <Form >
            <Form.Group id="email">
                <InputButton placeholder="Email" type="email" ref={emailRef} required left="37" top="37" />
            </Form.Group>
            <Form.Group id="password">
              <InputButton placeholder="Password" type="password" ref={passwordRef} required left="37" top= "50" />
            </Form.Group>
            <Form.Group id="confirmPassword">
              <InputButton placeholder="Confirm Password" type="password" ref={confirmPasswordRef} required left="37" top="63" />
            </Form.Group>
            <Submit onSubmit={handleSubmit} path="/search" left="47" top="76"/>
          </Form>
          <div className="footer2">
            Already have an account? <Link to="/login" id="toLogin"> &nbsp; Sign In.</Link>
          </div>
        </div>
      </Container>
    </AuthProvider>
  );
}