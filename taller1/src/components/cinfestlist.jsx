import React, {useState, useEffect} from "react";
import axios from "axios";
import "./cinfestlist.css";
import ItemCinfest from "./ItemCinefest";
import ClientSelect from "./ClientSelect";

const CinfestList = ({setCinfest}) => { 
    const [Cinfest, setNewCinfest] = useState([]);
    const [selectedCinfest, setSelectedCinfest] = useState(null);

    const loadCinfest = () => {
        axios.get('http://localhost:3001/clientes')
            .then(response => {
                console.log('Datos obtenidos:', response.data);
                setNewCinfest(response.data);
            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
    };

    useEffect(() => {
        loadCinfest();
    }, []);

    useEffect(() => {
        console.log('Lista de clientes actualizada:', Cinfest);
    }, [Cinfest]);

    const mayoresDe18 = Cinfest.filter(cinf => cinf.age >= 18);
    const menoresDe18 = Cinfest.filter(cinf => cinf.age < 18);

    return (
        <div className="app-container">
            <h1>Cinefest Manager</h1>
            <div className="columns">
                <div className="column">
                    <h2>Allowed</h2>
                    {mayoresDe18.map((cinf, index) => (
                        <ItemCinfest
                            key={index}
                            avatarURL={cinf.avatarURL}
                            name={cinf.name}
                            city={cinf.city}
                            country={cinf.country}
                            address={cinf.address}
                            age={cinf.age}
                            onSelect={() => setSelectedCinfest(cinf)}
                        />
                    ))}
                </div>
                <div className="column">
                    <h2>Not Allowed</h2>
                    {menoresDe18.map((cinf, index) => (
                        <ItemCinfest
                            key={index}
                            avatarURL={cinf.avatarURL}
                            name={cinf.name}
                            city={cinf.city}
                            country={cinf.country}
                            address={cinf.address}
                            age={cinf.age}
                            onSelect={() => setSelectedCinfest(cinf)}
                        />
                    ))}
                </div>
            </div>
            <hr />
            <ClientSelect selectedCinfest={selectedCinfest} setSelectedCinfest={setSelectedCinfest} setNewCinfest={setNewCinfest} />
        </div>
    );
};

export default CinfestList;