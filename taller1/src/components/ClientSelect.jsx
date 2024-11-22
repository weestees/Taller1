import React from "react";

const ClientSelect = ({ selectedCinfest }) => {
    if (!selectedCinfest) {
        return null;
    }

    return (
        <div className="selected-cinfest">
            <hr />
            <h2>Cliente Seleccionado</h2>
            <p>Nombre: {selectedCinfest.nombre}</p>
            <p>Ciudad: {selectedCinfest.ciudad}</p>
            <p>Dirección: {selectedCinfest.direccion}</p>
            <p>Edad: {selectedCinfest.edad}</p>
        </div>
    );
};

export default ClientSelect;
