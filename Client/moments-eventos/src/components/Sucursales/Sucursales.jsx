import React from "react";
import Ubicacion from '../../assets/ubicacion.png';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Sucursales() {

    const location = useLocation();
    const [isAuthorized, setIsAuthorized] = useState(false);


    useEffect(() => {
        if (location.state && location.state.fromButton) {
            setIsAuthorized(true); // Acceso permitido solo si es desde el botón
        }
    }, [location.state]);

    if (!isAuthorized) {
        return <div>Error: No tienes permiso para acceder a esta página.</div>;
    }


    const locales = [
        { name: "Argentina - Buenos Aires - Palermo", direccion: "Godoy Cruz 2793" },
        { name: "Argentina - Córdoba - Ciudad de Córdoba", direccion: "Av. Vélez Sarsfield 299" },
        { name: "Argentina - Mendoza - General Alvear", direccion: "26 de Julio 3522" },
        { name: "Brasil - Rio de Janeiro", direccion: "Av. Rio Branco 216" },
        { name: "Brasil - Camboriu", direccion: "Passarela Estaiada Da Barra (Balneario Camboriu)" },
        { name: "Estados Unidos - Miami", direccion: "Collins Avenue 245" },
        { name: "Estados Unidos - Florida", direccion: "Independencia 4524" },
        { name: "Estados Unidos - Nueva York", direccion: "Madison Avenue 344" },
        { name: "España - Madrid", direccion: "Calle de La Laguna 3456" },
        { name: "España - Alicante", direccion: "Calle Pianista Gonzalo Soriano 2534" },
        { name: "España - Valencia", direccion: "Av. del Puerto 3843" }
    ];

    // Función para agrupar las sucursales por país
    const groupByCountry = () => {
        const groupedLocales = {};

        locales.forEach((local) => {
            const country = local.name.split(" - ")[0]; // Obtener el nombre del país
            if (!groupedLocales[country]) {
                groupedLocales[country] = []; // Crear un array vacío para el país si no existe
            }
            groupedLocales[country].push(local); // Agregar la sucursal al array del país correspondiente
        });

        return groupedLocales;
    };

    // Obtener las sucursales agrupadas por país
    const groupedLocales = groupByCountry();

    return (
        <div className="container mt-5 mb-5">
            {Object.keys(groupedLocales).map((country, index) => (
                <div key={index}>
                    <h2 className="mt-4 text-center">{country}</h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {groupedLocales[country].map((local, idx) => (
                            <div key={idx} className="col">
                                <div className="card h-100 d-flex align-items-center justify-content-center">
                                    <div className="card-body text-center">
                                        <img src={Ubicacion} alt="Ubicación" className="mb-2" style={{ maxWidth: "40px", maxHeight: "40px" }} />
                                        <p className="card-title fw-bold mb-1">{local.name}</p>
                                        <p className="card-text">{local.direccion}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Sucursales;

