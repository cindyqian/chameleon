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
        <div id= 'email'> Email: <br/> <EnterInfo placeholder="Email" value={currentUser.email} /> </div>
        <div id= 'phoneNum'> Phone Number: <br/> <EnterInfo placeholder="Phone Number" value={currentUser.phone} /> </div>
        <div id= 'location'> Location: <br/> <EnterInfo placeholder="Location" /> </div>
        <div id= 'website'> Website: <br/> <EnterInfo placeholder="Website" value={currentUser.website} /> </div>
        <div id= 'introduction'> Introduce yourself and any COVID-19 precautions you may be taking: <br/> <EnterInfo placeholder="Introduction" /> </div>
        <div className = 'tag-container'> Tags: <br/> <EnterInfo placeholder="Tags"/> </div>
      </div>
    </div>
    
  );
}

export default EditProfile;
