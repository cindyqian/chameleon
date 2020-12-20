import React, { useRef, useState } from "react";
import "../main.css";
import { Form/*, Button*/, Card, Container, Alert } from "react-bootstrap";
import "../../components/Button.css";
import { useAuth, AuthProvider } from "../../contexts/AuthContexts.js";
import { Link } from "react-router-dom";
import InputButton from "../../components/InputButton.js";
import Button from "../../components/Button.js";

export default function SignUp() {
  document.body.style.backgroundColor = "#FFAF6D";

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <AuthProvider>
      <Container className="d-flex justify-content-center">
        <div className="w-100" style={{ maxWidth: "400px" }}>
          {/* <Card style={{ maxWidth: "400px" , color: "#fa692a", borderRadius: "30px"}}> */}

          {/* <Card.Body> */}
          {/* <h2 className="text-center mb-4">Sign Up</h2> */}
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              {/* <Form.Label> */}
                {/* Email */}
                <InputButton placeholder="Email" type="email" ref={emailRef} required left="37" top="30" />
              {/* </Form.Label> */}
              {/* <Form.Control type="email" ref={emailRef} required /> */}
            </Form.Group>
            <Form.Group id="password">
              <InputButton placeholder="Password" type="password" ref={passwordRef} required left="37" top="42" />
              {/* <Form.Label>Password</Form.Label> */}
              {/* <Form.Control type="password" ref={passwordRef} required /> */}
            </Form.Group>
            <Form.Group id="confirmPassword">
              <InputButton placeholder="Confirm Password" type="password" ref={confirmPasswordRef} required left="37" top="54" />
              {/* <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" ref={confirmPasswordRef} required /> */}
            </Form.Group>
            <Button buttonType="SubmitButton" path="/search" required left="45" top="67"/* text="submit"*//>
              {/* <Link to="/search">Submit</Link> */}
              {/* erisfudkhj */}
            {/* </submitButton> */}
          </Form>
          {/* </Card.Body> */}
          {/* </Card> */}
          <div className="w-100 text-center mt-2" style={{color: "#ffffff"/*, position: "absolute", top: "65%", left: "0%"*/}}>
            Already have an account? <Link to="/login">Sign In!</Link>
          </div>
        </div>
      </Container>
    </AuthProvider>
  );
}
