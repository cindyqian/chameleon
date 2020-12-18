import React from 'react';
import './App.css';

function App() {
  document.body.style.backgroundImage="linear-gradient(to right, #51A8C2, #B6F7DA)";
  return (
    <div className="Body">
      <div classname="NavBar">
        <div className="Header">Chameleon</div>
      </div>


      <div className="LeftColumn">
        <div classname="profile">
        
        </div>
        <div classname="calendarOptions">

        </div>
      </div>


      <div className="RightColumn">
        <div classname="calendar">
          
        </div>
      </div>
      
      
    </div>

  );
}

export default App;
