import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatering } from "../../Redux/actions";
import caterin from '../../assets/caterintres.jpg';
import Dorado from "../ramaDorada/rama";
import Comidas from "../Catering/comidas";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Catering() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(getCatering());
    }, [dispatch]);

    const catering = useSelector((state) => state.catering);

    const getCurrentPageItems = () => {
        const startIndex = (currentPage - 1) * 6;
        const endIndex = startIndex + 6;
        return catering.slice(startIndex, endIndex);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <Dorado />
            <div className="row">
                <div className="col-md-6 mt-5">
                    <img src={caterin} style={{ boxShadow: "1.5px 1.5px 2px black", width: "400px", marginLeft: "200px", borderRadius: "10px", marginTop: "40px"}} alt="Fcorp" />
                </div>
                <div className="col-md-4 position-absolute" style={{ marginTop: "145px", right: "350px", fontSize: "18px" }}>
                    <p>
                        Nada se iguala a la experiencia de una fiesta, donde el catering eleva cada momento.
                        Nuestro equipo se dedica a cuidar cada detalle gastronómico, desde la selección de ingredientes
                        frescos y de calidad hasta la presentación elegante de cada plato. Con una amplia variedad de
                        opciones culinarias que satisfacen todos los gustos y dietas, transformamos cada evento en una
                        experiencia gastronómica memorable. Desde pequeñas reuniones hasta grandes celebraciones,
                        el catering es el ingrediente secreto que hace que cada ocasión sea especial y única.
                    </p>
                </div>
            </div>
            <div className="row mb-5" style={{ marginLeft: "200px", marginTop: "100px" }}>
                {getCurrentPageItems().map((element) => (
                    <div className="card p-3 me-3 mb-4" style={{ boxShadow: "1px 1px 2px black", width: "350px", height: "300px" }} key={element.id}>
                        <div className="card-body d-flex flex-column justify-content-center">
                            <Comidas
                                name={element.name}
                                image={element.image[0]}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-center">
                <button onClick={() => handlePageChange(currentPage - 1)} className={`btn ${currentPage === 1 ? 'btn-secondary disabled' : 'btn-primary'} mx-1`} disabled={currentPage === 1}><FaArrowLeft /></button>
                {[...Array(Math.ceil(catering.length / 6)).keys()].map((page) => (
                    <button key={page + 1} onClick={() => handlePageChange(page + 1)} className={`btn ${currentPage === page + 1 ? 'btn-primary' : 'btn-secondary'} mx-1`}>{page + 1}</button>
                ))}
                <button onClick={() => handlePageChange(currentPage + 1)} className={`btn ${currentPage === Math.ceil(catering.length / 6) ? 'btn-secondary disabled' : 'btn-primary'} mx-1`} disabled={currentPage === Math.ceil(catering.length / 6)}><FaArrowRight /></button>
            </div>
        </div>
    );
}
