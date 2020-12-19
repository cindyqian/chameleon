import React from "react";
import Camera from "./camera.svg";
import "./Logo.css"

function Logo() {
    return (
        <div className="logo">
            <img src={Camera} alt="camera"/>
            Chameleon
        </div>
    )
}


export default Logo;