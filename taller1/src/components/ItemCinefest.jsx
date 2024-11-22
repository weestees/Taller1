// ItemCinfest.jsx
import React from 'react';

const ItemCinfest = ({ nombre, ciudad, direccion, edad }) => {
    return (
        <div className="item-cinfest">
            <h4>{nombre}</h4>
            <p> {ciudad}</p>
            <p> {direccion}</p>
            <p> {edad}</p>
        </div>
    );
};

export default ItemCinfest;