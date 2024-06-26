import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEvents } from "../../Redux/actions";
import Salon from "./Salon";
import salonEgresados from '../../assets/salon egre.jpg';
import Dorado from "../ramaDorada/rama";

export default function FiestasEgre() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch]);

    const eventos = useSelector((state) => state.filtered);
    const egresado=eventos.filter((e) => e.name === "Fiestas de Egresados" )
    const fiestasEgre = egresado.filter((evento) => evento.name === 'Fiestas de Egresados') ;
    
    return (
        <div>
            <Dorado/>
            <div className="row">
                <div className="col-md-6 mt-5">
                    <img  src={salonEgresados} style={{boxShadow:"1.5px 1.5px 2px black",width: "400px", marginLeft: "200px", borderRadius:"10px", marginTop:"40px" }} alt="Fcorp" />
                </div>
                <div className="col-md-4 position-absolute" style={{ marginTop: "145px", right: "350px", fontSize: "18px" }}>
                    <p>
                    Nada se compara a la emoción de una fiesta de egresados en un salón de eventos.
                     Nuestro equipo cuidará cada detalle, desde la decoración temática hasta la tecnología
                      de vanguardia, para crear un ambiente espectacular y memorable. Con una pista de baile
                       iluminada y estaciones de comida y bebida, cada rincón estará diseñado para una experiencia
                        inolvidable.
                    </p>
                </div>
            </div>
            <div className="row mb-5" style={{ marginLeft: "200px", marginTop: "100px" }}>
                {fiestasEgre && fiestasEgre.map((evento) => (
                        evento.Lugars.map((element) => (
                            <div className="card p-3 me-3 mb-4" style={{boxShadow:"1px 1px 2px black" ,width: "350px", height: "350px" }} key={element.id}>
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
                        ))
                    ))
                }
            </div>
        </div>
    );
}