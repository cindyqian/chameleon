import React from "react";
import './Button.css';

function InputButton(props) {
  return (
    <form>
      <input className="button" type="text" value={props.placeholder} />
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
