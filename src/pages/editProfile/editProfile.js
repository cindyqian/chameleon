import React from "react";
import "../main.css";
import EnterInfo from "../../components/enterInfo.js";
import './EditProfile.css';
import db from "../.."

function EditProfile() {
  document.body.style.backgroundColor = "#FFAF6D";

  function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email
      //some more user data
    });
  }

  return (
    <div className = 'container'>
      <div id= 'name'> Name: <br/> <EnterInfo placeholder="Name" /> </div>
      <div id= 'email'> Email: <br/> <EnterInfo placeholder="Email" /> </div>
      <div id= 'phoneNum'> Phone Number: <br/> <EnterInfo placeholder="Phone Number" /> </div>
      <div id= 'location'> Location: <br/> <EnterInfo placeholder="Location" /> </div>
      <div id= 'website'> Website: <br/> <EnterInfo placeholder="Website" /> </div>
      <div id= 'introduction'> Introduce yourself and any COVID-19 precautions you may have: <br/> <EnterInfo placeholder="Introduction" /> </div>
      <div className = 'tag-container'> Tags: </div>
    </div>
  );
}

export default EditProfile;
