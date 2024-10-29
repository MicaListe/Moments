import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Dorado from "../ramaDorada/rama";
import { getEvents } from "../../Redux/actions";
import Xv from "./xv";
import fiesta from "../../assets/fiesta de xv.jpg";

export default function FiestaDeXv() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch]);

    const location = useLocation();

    // Comprobar si el usuario tiene autorización
    const isAuthorized = location.state && location.state.fromButton;
        if (!isAuthorized) {
            return <div>Error: No tienes permiso para acceder a esta página.</div>;
        }

    const eventos = useSelector((state) => state.filtered);
    const fiestasDeXv = eventos.filter((element) => element.name === "Fiestas de XV");

    const getCurrentPageItems = () => {
        const startIndex = (currentPage - 1) * 6;
        const endIndex = startIndex + 6;
        return fiestasDeXv.flatMap(evento => evento.Lugars).slice(startIndex, endIndex);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div className="row">
                <Dorado />
                <div className="col-md-6 mt-5">
                    <img style={{ boxShadow: "1px 1px 2px black", width: "300px", height: "350px", marginLeft: "200px", borderRadius: "10px", marginTop: "40px" }} src={fiesta} alt="Imagen no encontrada" />
                </div>
                <div className="col-md-4 position-absolute" style={{ marginTop: "150px", right: "450px", fontSize: "18px" }}>
                    <p>
                        Imagina una noche llena de magia y encanto, donde cada detalle refleje tu personalidad 
                        y estilo único. En nuestro exclusivo salón de eventos, tu fiesta de quince años se convierte 
                        en un cuento de hadas hecho realidad. Cada rincón del salón estará cuidadosamente diseñado 
                        para crear el escenario perfecto para celebrar este hito tan especial en tu vida.  
                        Nuestro equipo se encargará de todos los detalles para que puedas relajarte y disfrutar 
                        de cada momento de tu noche mágica.
                    </p>
                </div>
                <div className="container mb-5">
                    <div className="container">
                        <div className="row gx-1 gy-1" style={{ marginLeft: "90px", marginTop: "100px" }}>
                            {getCurrentPageItems().map((element) => (
                                <div className="col-md-4" key={element.id}>
                                    <div className="card p-2 mb-4" style={{ width: "350px", height: "350px", boxShadow: "1px 1px 2px black" }}>
                                        <div className="card-body d-flex flex-column justify-content-center">
                                            <Xv 
                                                name={element.name} 
                                                image={element.image} 
                                                description={element.description} 
                                                country={element.country} 
                                                city={element.city} 
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>               

                <div className="d-flex justify-content-center mb-4">
                    <button onClick={() => handlePageChange(currentPage - 1)} className={`btn ${currentPage === 1 ? 'btn-secondary disabled' : 'btn-primary'} mx-1`} disabled={currentPage === 1}>{"<"}</button>
                    {[...Array(Math.ceil(fiestasDeXv.flatMap(evento => evento.Lugars).length / 6)).keys()].map((page) => (
                        <button key={page + 1} onClick={() => handlePageChange(page + 1)} className={`btn ${currentPage === page + 1 ? 'btn-primary' : 'btn-secondary'} mx-1`}>
                            {page + 1}
                        </button>
                    ))}
                    <button onClick={() => handlePageChange(currentPage + 1)} className={`btn ${currentPage === Math.ceil(fiestasDeXv.flatMap(evento => evento.Lugars).length / 6) ? 'btn-secondary disabled' : 'btn-primary'} mx-1`} disabled={currentPage === Math.ceil(fiestasDeXv.flatMap(evento => evento.Lugars).length / 6)}>{">"}</button>
                </div>
            </div>
        </div>
    );
}
