import React, { useEffect, useState } from "react";
import { getEvents } from "../../../Redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Salon from './Salon';
import bautismoQtres from "../../../assets/bautismoQtres.jpg";
import Dorado from "../../ramaDorada/rama";
import Back from "../../button back/back";
import { useLocation } from "react-router-dom";
import dinosaurio from "../../../assets/dinosaurioError.png"

export default function BautismoSalon() {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);

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

    const eventos = useSelector((state) => state.filtered);
    const bsalon = eventos.filter((e) => e.name === "Bautismos");
    const bautismosysalones = bsalon.map(evento => evento.Lugars).flat().filter(lugar => lugar.type === 'Salon');

    const itemsPerPage = 6;

    const getCurrentPageItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return bautismosysalones.slice(startIndex, endIndex);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const isFewCards = bautismosysalones.length <= itemsPerPage;

    return (
        <div>
            <Dorado />
            <a href="/bautismos">
                <Back />
            </a>
            <div className="row">
                <div className="col-md-6 mt-5">
                    <img src={bautismoQtres} style={{ boxShadow: "1.5px 1.5px 2px black", width: "300px", marginLeft: "200px", borderRadius: "10px" }} alt="Bautismo" />
                </div>
                <div className="col-md-4 position-absolute" style={{ marginTop: "155px", right: "600px", fontSize: "18px", marginRight: "-150px" }}>
                    <p>
                        Nada supera la elegancia y sofisticación de un bautismo en un salón de eventos. La iluminación suave,
                        la música cuidadosamente seleccionada y un espacio exquisitamente decorado crean un ambiente mágico
                        y memorable para celebrar este momento tan especial.
                        Nuestro equipo se encarga de todos los detalles, desde el diseño del altar hasta la decoración
                        con flores frescas y velas, para que tu día sea simplemente espectacular.
                    </p>
                </div>
            </div>
            <div className={`row mb-5 ${isFewCards ? "justify-content-center" : ""}`} style={{ marginLeft: isFewCards ? "0" : "200px", marginTop: "100px" }}>
                {getCurrentPageItems().map((element) => (
                    <div key={element.id} className="card p-3 me-3 mb-5" style={{ boxShadow: "1px 1px 2px black", width: "350px", height: "350px" }}>
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
            <div className="d-flex justify-content-center mb-4">
                <button onClick={() => handlePageChange(currentPage - 1)} className={`btn ${currentPage === 1 ? 'btn-secondary disabled' : 'btn-primary'} mx-1`} disabled={currentPage === 1}>{"<"}</button>
                {[...Array(Math.ceil(bautismosysalones.length / itemsPerPage)).keys()].map((page) => (
                    <button key={page + 1} onClick={() => handlePageChange(page + 1)} className={`btn ${currentPage === page + 1 ? 'btn-primary' : 'btn-secondary'} mx-1`}>
                        {page + 1}
                    </button>
                ))}
                <button onClick={() => handlePageChange(currentPage + 1)} className={`btn ${currentPage === Math.ceil(bautismosysalones.length / itemsPerPage) ? 'btn-secondary disabled' : 'btn-primary'} mx-1`} disabled={currentPage === Math.ceil(bautismosysalones.length / itemsPerPage)}>{">"}</button>
            </div>
        </div>
    );
}
