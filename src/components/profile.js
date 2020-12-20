import React from "react";
import "./profile.css";

function profile(props) {
  return (
    <div>
      <div className="name">
        <strong>{props.name}</strong>
      </div>
      <div className="location">{props.location}</div>
      <div className="phone">{props.phone}</div>
      <div className="email">{props.email}</div>
      <div className="website">{props.website}</div>
      <div className="description">{props.description}</div>
    </div>
  );
}

export default profile;
