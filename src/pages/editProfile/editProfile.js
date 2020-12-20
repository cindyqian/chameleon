import React, {useState, useEffect} from "react";
import "../main.css";
import EnterInfo from "../../components/enterInfo.js";
import './EditProfile.css';
import { useAuth } from "../../contexts/AuthContexts.js";
import tempPic from "../../components/user.svg";

function EditProfile() {
  document.body.style.backgroundColor = "#FFAF6D";

  const { currentUser } = useAuth();
  console.log(currentUser);

  return (
    <div className='page'>
      <div className = 'editProfileContainer'>
        <div id="editPfp">
          <svg width="350px" height="350px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="24 / basic / user">
              <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM19.3995 17.1246C20.4086 15.6703 21 13.9042 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.9042 3.59138 15.6703 4.6005 17.1246C5.72595 15.6381 8.3706 15 12 15C15.6294 15 18.274 15.6381 19.3995 17.1246ZM17.9647 18.7398C17.672 17.6874 15.5694 17 12 17C8.43062 17 6.328 17.6874 6.03532 18.7398C7.6233 20.1462 9.71194 21 12 21C14.2881 21 16.3767 20.1462 17.9647 18.7398ZM12 15C9.76086 15 8 13.4274 8 10C8 7.75576 9.5791 6 12 6C14.4142 6 16 7.92158 16 10.2C16 13.4796 14.2181 15 12 15ZM10 10C10 12.2693 10.8182 13 12 13C13.1777 13 14 12.2984 14 10.2C14 8.95042 13.2157 8 12 8C10.7337 8 10 8.81582 10 10Z" fill="white"/>
            </g>
          </svg> 
        </div>
        <div id= 'editName'> Name: <br/> <EnterInfo placeholder="Name" /> </div>
        <div id= 'editEmail'> Email: <br/> <EnterInfo placeholder="Email" /> </div>
        <div id= 'editPhoneNum'> Phone Number: <br/> <EnterInfo placeholder="Phone Number"/> </div>
        <div id= 'editLocation'> Location: <br/> <EnterInfo placeholder="Location" /> </div>
        <div id= 'editRate'> Hourly Rate: <br/> <EnterInfo placeholder="Rate" /> </div>
        <div id= 'editWebsite'> Website: <br/> <EnterInfo placeholder="Website" /> </div>
        <div id= 'editIntro'> Introduce yourself and any COVID-19 precautions you may be taking: <br/> <EnterInfo placeholder="Introduction" className = "enterInfoIntro" /> <br/> <br/> Tags: </div>
        <div className = 'edit-tag-container'>
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