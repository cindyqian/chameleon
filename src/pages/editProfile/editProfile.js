import React, {useState, useEffect} from "react";
import "../main.css";
import EnterInfo from "../../components/enterInfo.js";
import './EditProfile.css';
import { useAuth } from "../../contexts/AuthContexts.js";

function EditProfile() {
  document.body.style.backgroundColor = "#FFAF6D";

  const { currentUser } = useAuth();
  console.log(currentUser);

  return (
    <div className='page'>
      <div className = 'editProfileContainer'>
        <div id= 'editName'> Name: <br/> <EnterInfo placeholder="Name" /> </div>
        <div id= 'editEmail'> Email: <br/> <EnterInfo placeholder="Email" /> </div>
        <div id= 'editPhoneNum'> Phone Number: <br/> <EnterInfo placeholder="Phone Number"/> </div>
        <div id= 'editLocation'> Location: <br/> <EnterInfo placeholder="Location" /> </div>
        <div id= 'editWebsite'> Website: <br/> <EnterInfo placeholder="Website" /> </div>
        <div id= 'editIntro'> Introduce yourself and any COVID-19 precautions you may be taking: <br/> <EnterInfo placeholder="Introduction" /> Tags: </div>
        <div className = 'edit-tag-container'> <br/> 
          <div className = 'grid-col-1'>
            <div> <input type = "checkbox"/> professional </div>
            <div> <input type = "checkbox"/> portrait </div>
            <div> <input type = "checkbox"/> wedding </div>
          </div>
          <div className = 'grid-col-2'>
            <div> <input type = "checkbox"/> engagement </div>
            <div> <input type = "checkbox"/> prom / dance </div>
            <div> <input type = "checkbox"/> party </div>
          </div>
          <div className = 'grid-col-3'>
            <div> <input type = "checkbox"/> graduation </div>
            <div> <input type = "checkbox"/> product </div>
            <div> <input type = "checkbox"/> real estate </div>
          </div>
          <div className = 'grid-col-4'>
            <div> <input type = "checkbox"/> landscape </div>
            <div> <input type = "checkbox"/> sport </div>
            <div> <input type = "checkbox"/> custom </div>
          </div>
        </div>
      </div>
      <button id="save">Save</button>
    </div>
    
  );
}

export default EditProfile;


// value={currentUser.email}
// value={currentUser.phone} 
// value={currentUser.website} 