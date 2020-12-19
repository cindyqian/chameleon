import React from 'react';
import '/Users/markqian/Desktop/hacklympics/src/components/Button.css';
import InputButton from "/Users/markqian/Desktop/hacklympics/src/components/InputButton.js";
// CHANGE TO NEW SHORTENED URL THAT ACTUALLY WORKS IEUHRSKJFIUEKRJSHFIUKHEJRD FIDUKJHERSD


function Button(props) {
    document.body.style.backgroundColor="#FFAF6D"
    return (
      <div>
        <button className="Button" style={{left: props.left + "%" ||" 0%", right: props.right + "%" || "0%", top: props.top + "%"}} onClick={() => nextPath('/Users/markqian/Desktop/hacklympics/src/pages/ChooseUser/ChooseUser.js') }>{props.text}</button>
      </div>
    );
}

export default Button;
