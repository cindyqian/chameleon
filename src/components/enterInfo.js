import React from 'react';
import "./enterInfo.css";

function EnterInfo(props) {
    return (
        <input className = "field" placeholder={props.placeholder}/>
    )
}

export default EnterInfo;