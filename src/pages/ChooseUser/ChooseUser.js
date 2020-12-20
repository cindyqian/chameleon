import React from "react";
import "../main.css";

import Button from "../../components/Button.js";

function ChooseUser() {
  document.body.style.backgroundColor = "#FFAF6D";
  return (
    <div>
      <div className="UserHeader">I am a...</div>
      <div className="CenterItems">
        <Button buttonType="Button" text="Photographer" left="22" top="50" path="/login" />
        <Button buttonType="Button" text="Client" right="22" top="50" path="/search" />
      </div>
    </div>
  );
}

export default ChooseUser;
