import React from "react";
import axios from "axios";

const ClientSelect = ({ selectedCinfest, setSelectedCinfest, setNewCinfest }) => {
    if (!selectedCinfest) {
        return null;
    }

    const increaseAge = () => {
        const newAge = selectedCinfest.age + 1;
        axios.put(`http://localhost:3001/clientes/${selectedCinfest.id}`, { ...selectedCinfest, age: newAge })
            .then(response => {
                setSelectedCinfest(response.data);
                setNewCinfest(prevCinfest => {
                    const updatedCinfest = prevCinfest.map(cinf => 
                        cinf.id === response.data.id ? response.data : cinf
                    );
                    return [...updatedCinfest];
                });
            })
            .catch(error => {
                console.error('Error al actualizar la edad:', error);
            });
    };

    return (
        <div className="selected-cinfest">
            <hr />
            <h2>Cliente Seleccionado</h2>
            <img src={selectedCinfest.avatarURL} alt={`${selectedCinfest.name}'s avatar`} className="user-icon" />
            <p>Nombre: {selectedCinfest.name}</p>
            <p>Ciudad: {selectedCinfest.city}, {selectedCinfest.country}</p>
            <p>Dirección: {selectedCinfest.address}</p>
            <p>Edad: {selectedCinfest.age}</p>
            <button onClick={increaseAge}>Increase Age</button>
        </div>
    );
};

export default ClientSelect;
