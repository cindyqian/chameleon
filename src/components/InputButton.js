import React from "react";
import './Button.css';

function InputButton(props) {
  return (
    <form>
      <input className="Button" type="text" 
      style={{
        left: props.left + "%" || " 0%",
        right: props.right + "%" || "0%",
        top: props.top + "%" || "0%",
      }}
      value={props.placeholder} />
    </form>
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
