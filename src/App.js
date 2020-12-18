import React from 'react';
import './App.css';
import InputButton from "./components/InputButton.js";

function App() {
  document.body.style.backgroundColor="#FFAF6D"
  return (
    <div>
      <div className="UserHeader">I am a</div>
      <InputButton placeholder="Photographer"/>
      <InputButton placeholder="Client"/>
    </div>
  );
}

export default App;
