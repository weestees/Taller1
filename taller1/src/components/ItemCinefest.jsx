// ItemCinfest.jsx
import React from 'react';

const ItemCinfest = ({ avatarURL, name, city, country, address, age, onSelect }) => {
    return (
        <div className="item-cinfest">
            <img src={avatarURL} alt={`${name}'s avatar`} className="user-icon" />
            <div className="item-details">
                <h4>{name}</h4>
                <p>{city}, {country}</p>
                <p>{address}</p>
                <p>{age}</p>
                <button className="select-button" onClick={onSelect}>Select</button>
            </div>
        </div>
    );
};

export default ItemCinfest;