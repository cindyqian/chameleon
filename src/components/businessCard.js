import React from "react";
import "./businessCard.css";
import FilterMenu from "./FilterMenu.js";
import SearchBar from "./SearchBar.js";

function BusinessCard(props) {
  return (
    <div className="card">
      <img src={props.profilePic} alt="Photographer profile" />
      <div className="contactInfo">
        <p>
          <strong>{props.name}</strong>
        </p>
        <p>{props.location}</p>
        <p>{props.rate}</p>
        <br />
        <p>{props.phone}</p>
        <p>{props.email}</p>
        <p>
          <a href={props.website}>Personal Website</a>
        </p>
      </div>
      <div className="description">
        <p>{props.description}</p>
      </div>
      <div className="tags">
        <div>{props.tags[0]} </div>
        <div>{props.tags[1]} </div>
        <div>{props.tags[2]} </div>
        <div>{props.tags[3]} </div>
        <div>{props.tags[4]} </div>
        <div>{props.tags[5]} </div>
        <div>{props.tags[6]} </div>
        <div>{props.tags[7]} </div>
        <div>{props.tags[8]} </div>
      </div>
    </div>
  );
}

export default BusinessCard;
