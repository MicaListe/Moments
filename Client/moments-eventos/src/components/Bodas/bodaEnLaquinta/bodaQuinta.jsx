import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../../Redux/actions";
import Quintas from "./quintas";
import Dorado from "../../ramaDorada/rama";
import casamiento from "../../../assets/casamiento quinta.jpg";
import Back from "../../button back/back";
import { useLocation } from "react-router-dom";
import dinosaurio from "../../../assets/dinosaurioError.png"

export default function BodaQuinta() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch]);

    const location = useLocation();

    const isAuthorized = location.state && location.state.fromButton;
    if (!isAuthorized) {
        return <div className="alert alert-danger text-center" role="alert" style={{ marginTop: '20px', fontSize:"20px" }}>
        Error: No tienes permiso para acceder a esta página.
        <div>
          <img src={dinosaurio} alt="Dinosaurio" style={{ marginTop: '10px', maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
    }

    const lugares = useSelector((state) => state.filtered);
    const bodas = lugares.filter((element) => element.name === "Bodas");
    const bodaYQuintas = bodas.map(evento => evento.Lugars).flat().filter(lugar => lugar.type === "Quinta");

    const getCurrentPageItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return bodaYQuintas.slice(startIndex, endIndex);
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
            <div className="">
                <div className="col-md-6 mt-5">
                    <img src={casamiento} style={{ boxShadow: "1px 1px 2px black", width: "300px", marginLeft: "200px", borderRadius: "10px" }} alt="imagen no encontrada" />
                </div>
                <div className="col-md-4 position-absolute" style={{ top: "300px", marginLeft: "580px", fontSize: "18px" }}>
                    <p>
                        Nada supera la belleza natural de una ceremonia en una quinta. 
                        El encanto rústico del entorno, rodeado de exuberante vegetación 
                        y vistas panorámicas, crea un ambiente único y acogedor para 
                        intercambiar votos y celebrar el amor. Con la brisa suave acariciando 
                        el paisaje y los pájaros cantando en los árboles, cada momento se llena 
                        de magia y serenidad. Nuestro equipo se encarga de todos los detalles, 
                        desde la decoración elegante hasta la iluminación cautivadora, para que tu día sea 
                        simplemente espectacular y quede grabado en tus recuerdos para siempre.
                    </p>
                </div>
            </div>
            <div className="row mb-5" style={{ marginLeft: "200px", marginTop: "100px" }}>
                {getCurrentPageItems().map((element) => (
                    <div className="card p-3 me-5 mb-4" key={element.id} style={{ width: "350px", height: "350px", boxShadow: "1px 1px 2px black" }}>
                        <div className="card-body justify-content-center">
                            <Quintas
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
                {[...Array(Math.ceil(bodaYQuintas.length / itemsPerPage)).keys()].map((page) => (
                    <button key={page + 1} onClick={() => handlePageChange(page + 1)} className={`btn ${currentPage === page + 1 ? 'btn-primary' : 'btn-secondary'} mx-1`}>
                        {page + 1}
                    </button>
                ))}
                <button onClick={() => handlePageChange(currentPage + 1)} className={`btn ${currentPage === Math.ceil(bodaYQuintas.length / itemsPerPage) ? 'btn-secondary disabled' : 'btn-primary'} mx-1`} disabled={currentPage === Math.ceil(bodaYQuintas.length / itemsPerPage)}>{">"}</button>
            </div>
        </div>
    );
}
