import React from 'react';
import './Button.css';
import InputButton from "./InputButton.js";
// CHANGE TO NEW SHORTENED URL THAT ACTUALLY WORKS IEUHRSKJFIUEKRJSHFIUKHEJRD FIDUKJHERSD


function Button(props) {
    document.body.style.backgroundColor="#FFAF6D"
    return (
      <div>
        <button className="Button" style={{left: props.left + "%" ||" 0%", right: props.right + "%" || "0%", top: props.top + "%"}} onClick="">{props.text}</button>
      </div>
    );
}

export default Button;
