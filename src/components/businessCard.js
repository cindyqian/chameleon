import React from 'react';
import './businessCard.css';

function businessCard(props) {
    return <div className = "card">
        <img src = {props.profilePic} />
        <div className = 'contactInfo'>
            <p><strong>{props.name}</strong></p>
            <p>{props.location}</p>
            <p>{props.number}</p>
            <p>{props.email}</p>
            <p>{props.website}</p>
        </div>
        <div className = 'description'>
            <p>hello i am looking for job opportunities please hire me</p>
        </div>
        <div className = 'tags'>

        </div>

    </div>;
}

export default businessCard;