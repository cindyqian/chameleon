import React from 'react';
import './App.css';
import LoginPage from "./pages/Login/Login.js";


function App() {
  return (
    <div>
      <button onClick={LoginPage()}>
        Login Page
      </button>
    </div>
  );
}

export default App;
