import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEvents } from "../../Redux/actions";
import Salones from "./Salones";
import Fcorp from '../../assets/Fcorp.jpg';
import Dorado from "../ramaDorada/rama";


export default function FiestasCorp() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch]);

    const eventos = useSelector((state) => state.filtered);
    const corporativa=eventos.filter((e)=>e.name === "Fiestas Corporativas")
    const fiestasCorpo = corporativa.filter((evento) => evento.name === 'Fiestas Corporativas') ;
    
    
    return (
        <div>
            <Dorado/>
            {/* <h1 style={{ textAlign: "center", marginTop: "50px" }}>Fiestas Corporativas</h1> */}
            <div className="row">
                <div className="col-md-6 mt-5">
                    <img src={Fcorp} style={{boxShadow:"1px 1px 2px black", width: "400px", marginLeft: "200px", height:"300px", borderRadius:"10px", marginTop:"40px" }} alt="Fcorp" />
                </div>
                <div className="col-md-4 position-absolute" style={{ marginTop: "120px", right: "350px", fontSize: "18px" }}>
                    <p>
                        Nada iguala la elegancia de una celebración corporativa en un salón de eventos.
                        El ambiente cuidadosamente diseñado, la iluminación perfecta y el espacio acogedor
                        crean un escenario ideal para tu próxima fiesta empresarial.

                        Nuestro equipo se encargará de todos los detalles, desde la disposición del espacio hasta
                        la decoración con elementos corporativos y tecnología de vanguardia, para que tu evento sea
                        simplemente espectacular y memorable para todos los asistentes.
                    </p>
                </div>
            </div>

            <div className="row mb-5" style={{ marginLeft: "200px", marginTop: "100px" }}>
                {fiestasCorpo && fiestasCorpo.map((evento) => (
                        evento.Lugars.map((element) => (
                            <div className="card p-3 me-3 mb-4" style={{width: "350px", height: "350px", boxShadow:"1px 1px 2px black" }} key={element.id}>
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
                        ))
                    ))
                }
            </div>
        </div>
    );
}
