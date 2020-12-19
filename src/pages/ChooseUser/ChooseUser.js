import React from 'react';
import '/Users/markqian/Desktop/hacklympics/src/pages/main.css';
import InputButton from "/Users/markqian/Desktop/hacklympics/src/components/InputButton.js";
// CHANGE TO NEW SHORTENED URL THAT ACTUALLY WORKS IEUHRSKJFIUEKRJSHFIUKHEJRD FIDUKJHERSD
import Button from '/Users/markqian/Desktop/hacklympics/src/components/Button.js';


function ChooseUser() {
    document.body.style.backgroundColor="#FFAF6D"
    return (
      <div>
        <div className="UserHeader">I am a...</div>
        <div className="CenterItems">
          <Button text="Photographer" left="22" top="50"/>
          <Button text="Client" right="22" top="50"/>
        </div>
      </div>
    );
}

export default ChooseUser;
