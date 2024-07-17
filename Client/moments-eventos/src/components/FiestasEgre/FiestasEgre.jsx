import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEvents } from "../../Redux/actions";
import Salon from "./Salon";
import salonEgresados from '../../assets/salon egre.jpg';
import Dorado from "../ramaDorada/rama";

export default function FiestasEgre() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch]);

    const eventos = useSelector((state) => state.filtered);
    const egresado = eventos.filter((e) => e.name === "Fiestas de Egresados");
    const fiestasEgre = egresado.filter((evento) => evento.name === 'Fiestas de Egresados');

    const getCurrentPageItems = () => {
        const startIndex = (currentPage - 1) * 6;
        const endIndex = startIndex + 6;
        return fiestasEgre.flatMap(evento => evento.Lugars).slice(startIndex, endIndex);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <Dorado />
            <div className="row">
                <div className="col-md-6 mt-5">
                    <img src={salonEgresados} style={{ boxShadow: "1.5px 1.5px 2px black", width: "400px", marginLeft: "200px", borderRadius: "10px", marginTop: "40px" }} alt="Egresados" />
                </div>
                <div className="col-md-4 position-absolute" style={{ marginTop: "145px", right: "350px", fontSize: "18px" }}>
                    <p>
                        Nada se compara a la emoción de una fiesta de egresados en un salón de eventos.
                        Nuestro equipo cuidará cada detalle, desde la decoración temática hasta la tecnología
                        de vanguardia, para crear un ambiente espectacular y memorable.
                    </p>
                </div>
            </div>
            <div className="row mb-5" style={{ marginLeft: "200px", marginTop: "100px" }}>
                {getCurrentPageItems().map((element) => (
                    <div className="card p-3 me-3 mb-4" style={{ boxShadow: "1px 1px 2px black", width: "350px", height: "350px" }} key={element.id}>
                        <div className="card-body d-flex flex-column justify-content-center">
                            <Salon
                                name={element.name}
                                image={element.image}
                                description={element.description}
                                country={element.country}
                                city={element.city}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="d-flex justify-content-center">
                <button onClick={() => handlePageChange(currentPage - 1)} className={`btn ${currentPage === 1 ? 'btn-secondary disabled' : 'btn-primary'} mx-1`} disabled={currentPage === 1}>{"<"}</button>
                {[...Array(Math.ceil(fiestasEgre.flatMap(evento => evento.Lugars).length / 6)).keys()].map((page) => (
                    <button key={page + 1} onClick={() => handlePageChange(page + 1)} className={`btn ${currentPage === page + 1 ? 'btn-primary' : 'btn-secondary'} mx-1`}>{page + 1}</button>
                ))}
                <button onClick={() => handlePageChange(currentPage + 1)} className={`btn ${currentPage === Math.ceil(fiestasEgre.flatMap(evento => evento.Lugars).length / 6) ? 'btn-secondary disabled' : 'btn-primary'} mx-1`} disabled={currentPage === Math.ceil(fiestasEgre.flatMap(evento => evento.Lugars).length / 6)}>{">"}</button>
            </div>
        </div>
    );
}
