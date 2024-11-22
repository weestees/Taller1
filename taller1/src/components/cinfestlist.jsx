import React, {useState, useEffect} from "react";
import axios from "axios";
import "./cinfestlist.css";
import ItemCinfest from "./ItemCinefest";
import ClientSelect from "./ClientSelect";

const CinfestList = ({setCinfest}) => { 
    const [Cinfest, setNewCinfest] = useState([]);
    const [selectedCinfest, setSelectedCinfest] = useState(null);

    useEffect(() => {
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
        loadCinfest();
    }, []);

    const mayoresDe18 = Cinfest.filter(cinf => cinf.edad >= 18);
    const menoresDe18 = Cinfest.filter(cinf => cinf.edad < 18);

    return (
        <div className="app-container">
            <h1>Cinefest Manager</h1>
            <div className="columns">
                <div className="column">
                    <h2>Allowed</h2>
                    {mayoresDe18.map((cinf, index) => (
                        <div key={index}>
                            <ItemCinfest
                                nombre={cinf.nombre}
                                ciudad={cinf.ciudad}
                                direccion={cinf.direccion}
                                edad={cinf.edad}
                            />
                            <button onClick={() => setSelectedCinfest(cinf)}>Select</button>
                        </div>
                    ))}
                </div>
                <div className="column">
                    <h2>Not Allowed</h2>
                    {menoresDe18.map((cinf, index) => (
                        <div key={index}>
                            <ItemCinfest
                                nombre={cinf.nombre}
                                ciudad={cinf.ciudad}
                                direccion={cinf.direccion}
                                edad={cinf.edad}
                            />
                            <button onClick={() => setSelectedCinfest(cinf)}>Select</button>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            <ClientSelect selectedCinfest={selectedCinfest} />
        </div>
    );
};

export default CinfestList;