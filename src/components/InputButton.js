import React from "react";
import './Button.css';
import { Form, Button, Card, Container, Alert } from "react-bootstrap";

function InputButton(props) {

  return (
    <Form onSubmit={props.handleSubmit}>
      <input className="Button" type="text" 
      style={{
        left: props.left + "%" || " 0%",
        right: props.right + "%" || "0%",
        top: props.top + "%" || "0%",
      }}
      placeholder={props.placeholder}/* value={} *//>
      {/* {error && <Alert variant="danger">{error}</Alert>} */}
    </Form>
  );
}

// var input = document.getElementById("searchInput");
//   input.addEventListener("keyup", function(event) {
//       if (event.keyCode === 13) {
//           event.preventDefault();
//           var userInput = document.getElementById("searchInput").value;
//           startSearch(userInput);
//       }
//   });
export default InputButton;
