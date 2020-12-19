import React from 'react';
import './Login.css';
import InputButton from "./components/InputButton.js";


function LoginPage() {
    document.body.style.backgroundColor="#FFAF6D"
    return (
      <div>
        <div className="UserHeader">I am a uyjerhgsdfugcs</div>
        <InputButton placeholder="Photographer"/>
        <InputButton placeholder="Client"/>
      </div>
    );
}

export default LoginPage;
