import React from "react";
import "./Submit.css";
import { Link } from "react-router-dom";
// CHANGE TO NEW SHORTENED URL THAT ACTUALLY WORKS IEUHRSKJFIUEKRJSHFIUKHEJRD FIDUKJHERSD

function Submit(props) {
  document.body.style.backgroundColor = "#FFAF6D";
  return (
    <div onClick={props.onSubmit} style={{position: "absolute", left: props.left + "%" || "0%", right: props.right + "%" || "0%", top: props.top + "%"}}>
        <svg className="submit" width="75px" height="75px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="24 / basic / circle-checked">
                <path id="icon" fillRule="evenodd" clipRule="evenodd" d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM15.2929 8.29289L10 13.5858L7.70711 11.2929L6.29289 12.7071L10 16.4142L16.7071 9.70711L15.2929 8.29289Z" fill="white"/>
            </g>
        </svg>
      
    </div>
  );
}

export default Submit;
