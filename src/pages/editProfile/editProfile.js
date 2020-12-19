import React from 'react';
import '../main.css';

function EditProfile() {
    document.body.style.backgroundColor="#FFAF6D"
    return (
      <div>
        THIS IS EDIT PROFILE
        <enterInfo type="name" />
        <enterInfo type="location"/>
        <enterInfo type="phone"/>
        <enterInfo type="website"/>
      </div>
    );
}


export default EditProfile;