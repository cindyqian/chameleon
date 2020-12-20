import React from "react";
import "./Button.css";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";

const InputButton = React.forwardRef((props, ref) => {
  return (
    <input
      className="Button"
      type="text"
      ref={ref}
      style={{
        left: props.left + "%" || " 0%",
        right: props.right + "%" || "0%",
        top: props.top + "%" || "0%",
      }}
      placeholder={props.placeholder}
    />
  );
});

export default InputButton;
