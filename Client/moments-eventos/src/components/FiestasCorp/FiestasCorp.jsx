import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import  { useLocation} from "react-router-dom"
import { getEvents } from "../../Redux/actions";
import Salones from "./Salones";
import Fcorp from '../../assets/Fcorp.jpg';
import Dorado from "../ramaDorada/rama";

export default function FiestasCorp() {
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
    const corporativa = eventos.filter((e) => e.name === "Fiestas Corporativas");
    const fiestasCorpo = corporativa.filter((evento) => evento.name === 'Fiestas Corporativas');

    const getCurrentPageItems = () => {
        const startIndex = (currentPage - 1) * 6;
        const endIndex = startIndex + 6;
        return fiestasCorpo.flatMap(evento => evento.Lugars).slice(startIndex, endIndex);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <Dorado />
            <div className="row">
                <div className="col-md-6 mt-5">
                    <img src={Fcorp} style={{ boxShadow: "1px 1px 2px black", width: "400px", marginLeft: "200px", height: "300px", borderRadius: "10px", marginTop: "40px" }} alt="Fcorp" />
                </div>
                <div className="col-md-4 position-absolute" style={{ marginTop: "120px", right: "350px", fontSize: "18px" }}>
                    <p>
                        Nada iguala la elegancia de una celebración corporativa en un salón de eventos.
                        El ambiente cuidadosamente diseñado, la iluminación perfecta y el espacio acogedor
                        crean un escenario ideal para tu próxima fiesta empresarial.
                    </p>
                </div>
            </div>

            <div className="row mb-5" style={{ marginLeft: "200px", marginTop: "100px" }}>
                {getCurrentPageItems().map((element) => (
                    <div className="card p-3 me-3 mb-4" style={{ width: "350px", height: "350px", boxShadow: "1px 1px 2px black" }} key={element.id}>
                        <div className="card-body d-flex flex-column justify-content-center">
                            <Salones
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
                {[...Array(Math.ceil(fiestasCorpo.flatMap(evento => evento.Lugars).length / 6)).keys()].map((page) => (
                    <button key={page + 1} onClick={() => handlePageChange(page + 1)} className={`btn ${currentPage === page + 1 ? 'btn-primary' : 'btn-secondary'} mx-1`}>{page + 1}</button>
                ))}
                <button onClick={() => handlePageChange(currentPage + 1)} className={`btn ${currentPage === Math.ceil(fiestasCorpo.flatMap(evento => evento.Lugars).length / 6) ? 'btn-secondary disabled' : 'btn-primary'} mx-1`} disabled={currentPage === Math.ceil(fiestasCorpo.flatMap(evento => evento.Lugars).length / 6)}>{">"}</button>
            </div>
        </div>
    );
}
