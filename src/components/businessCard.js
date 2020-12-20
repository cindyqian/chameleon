import React from "react";
import "./businessCard.css";

function BusinessCard(props) {
  return (
    <div className="quickView">
      {/* <img src={props.profilePic} alt="Photographer profile pic" /> */}
      <div className="contactInfo">
        <p id="name">{props.name}</p>

        <svg id="locationIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Iconly/Bold/Location">
            <g id="Location">
              <path id="Location_2" fill-rule="evenodd" clip-rule="evenodd" d="M3.5 10.3178C3.5 5.71789 7.34388 2 11.9934 2C16.6561 2 20.5 5.71789 20.5 10.3178C20.5 12.6357 19.657 14.7876 18.2695 16.6116C16.7388 18.6235 14.8522 20.3765 12.7285 21.7524C12.2425 22.0704 11.8039 22.0944 11.2704 21.7524C9.13474 20.3765 7.24809 18.6235 5.7305 16.6116C4.34198 14.7876 3.5 12.6357 3.5 10.3178ZM9.19423 10.5768C9.19423 12.1177 10.4517 13.3297 11.9934 13.3297C13.5362 13.3297 14.8058 12.1177 14.8058 10.5768C14.8058 9.0478 13.5362 7.77683 11.9934 7.77683C10.4517 7.77683 9.19423 9.0478 9.19423 10.5768Z" fill="white"/>
            </g>
          </g>
        </svg>

        <p id="location">{props.location}</p>
        <p id="rate">{props.rate}</p>
        <br />
        <p id="phone">{props.phone}</p>
        <p id="email">{props.email}</p>
        <p>
          <a id="website" href={"http://" + props.website}>{props.website}</a>
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
