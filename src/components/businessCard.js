import React from 'react';
import './businessCard.css';

function businessCard(props) {
    return <div className = "card">
        <div className = 'name'>
            <strong>{props.photographerName}</strong>
        </div>



    </div>;
}

export default businessCard;