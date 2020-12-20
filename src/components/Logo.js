import React from "react";
import Camera from "./camera.svg";
import "./Logo.css";

function Logo() {
  return (
    <div className="logo">
      <a className="no-decoration" href="/">
        <img src={Camera} alt="camera" />
        &nbsp; Chameleon
      </a>
    </div>
  );
}

export default Logo;
