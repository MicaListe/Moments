import React, { useEffect, useState } from "react";
import { filterCity, filterCountry, getEvents } from "../../../Redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Playas from "./playas";
import casamiento from "../../../assets/casamiento.jpg";
import Dorado from "../../ramaDorada/rama";
import Back from "../../button back/back";

export default function BodaPlaya() {
    const [selectCountry, setSelectedCountry] = useState([]);
    const [selectCity, setSelectCity] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch]);

    const eventos = useSelector((state) => state.filtered);
    console.log(eventos)
    const bodas = eventos.filter((element) => element.name === "Bodas");
    const bodasYPlayas = bodas.map(evento => evento.Lugars).flat().filter(lugar => lugar.type === 'Playa');

    const getCurrentPageItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return bodasYPlayas.slice(startIndex, endIndex);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <Dorado />
            <a href="/bodas">
                <Back />
            </a>
            <div className="row">
                <div className="col-md-6 mt-5">
                    <img src={casamiento} style={{ boxShadow: "1px 1px 2px black", width: "300px", marginLeft: "200px", borderRadius: "10px" }} alt="Casamiento" />
                </div>
                <div className="col-md-4 position-absolute" style={{ marginTop: "165px", right: "450px", fontSize: "18px" }}>
                    <p>
                        Nada supera la belleza natural de una ceremonia en la playa. 
                        El sonido suave de las olas, la brisa y un horizonte infinito 
                        crean un ambiente mágico y relajante para decir "sí, acepto".
                        Nuestro equipo se encarga de todos los detalles, desde el montaje 
                        del altar hasta la decoración con flores frescas y velas, para que 
                        tu día sea simplemente espectacular.
                    </p>
                </div>
            </div>
            <div className="row mb-5" style={{ marginLeft: "200px", marginTop: "100px" }}>
                {getCurrentPageItems().map((element) => (
                    <div className="card p-3 me-5 mb-4" key={element.id} style={{ width: "350px", height: "350px", boxShadow: "1px 1px 2px black" }}>
                        <div className="card-body d-flex flex-column justify-content-center">
                            <Playas
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

            <div className="d-flex justify-content-center mb-4">
                <button onClick={() => handlePageChange(currentPage - 1)} className={`btn ${currentPage === 1 ? 'btn-secondary disabled' : 'btn-primary'} mx-1`} disabled={currentPage === 1}>{"<"}</button>
                {[...Array(Math.ceil(bodasYPlayas.length / itemsPerPage)).keys()].map((page) => (
                    <button key={page + 1} onClick={() => handlePageChange(page + 1)} className={`btn ${currentPage === page + 1 ? 'btn-primary' : 'btn-secondary'} mx-1`}>
                        {page + 1}
                    </button>
                ))}
                <button onClick={() => handlePageChange(currentPage + 1)} className={`btn ${currentPage === Math.ceil(bodasYPlayas.length / itemsPerPage) ? 'btn-secondary disabled' : 'btn-primary'} mx-1`} disabled={currentPage === Math.ceil(bodasYPlayas.length / itemsPerPage)}>{">"}</button>
            </div>
        </div>
    );
}
