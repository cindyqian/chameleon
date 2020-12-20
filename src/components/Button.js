import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
// CHANGE TO NEW SHORTENED URL THAT ACTUALLY WORKS IEUHRSKJFIUEKRJSHFIUKHEJRD FIDUKJHERSD

function Button(props) {
  document.body.style.backgroundColor = "#FFAF6D";
  return (
    <div>
      <Link to={props.path}>
        <button
          className={props.buttonType}
          style={{
            left: props.left + "%" || " 0%",
            right: props.right + "%" || "0%",
            top: props.top + "%",
          }}
        >
          {props.text}
        </button>
      </Link>
    </div>
  );
}

export default Button;
