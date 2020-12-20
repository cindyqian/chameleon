import React from "react";
import Camera from "./camera.svg";
import "./Logo.css";

function Logo() {
  return (
    <div className="logo">
      <a className="container" href="/">
        <img src={Camera} alt="camera"/>
        <div className="a > div">Chameleon</div>
      </a>
    </div>
  );
}

export default Logo;
