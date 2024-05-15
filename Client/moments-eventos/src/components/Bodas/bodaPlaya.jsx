import React, { useEffect } from "react";
import { getEvents } from "../../Redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Playas from "./playas";
import casamiento from "../../assets/casamiento.jpg"

export default function BodaPlaya() {
    const eventos = useSelector((state) => state.filtered);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEvents());
    }, []);

    //eventos.map(evento => evento.Lugars) obtiene todas las matrices de lugares de cada evento.
    //.flat() aplana estas matrices en una sola matriz.
    const bodasYPlayas =  eventos.map(evento => evento.Lugars).flat().filter(lugar => lugar.type === 'Playa');

    return (
        <div>
            <div className="row">
                <div className="col-md-6 mt-5">
                    <img src={casamiento} style={{ width: "300px", marginLeft:"200px" }} alt="Casamiento" />
                </div>
                <div className="col-md-4 position-absolute" style={{marginTop:"150px",right:"450px", fontSize:"18px"}}>
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
            <div className="row mb-5" style={{marginLeft:"200px", marginTop:"100px"}}>
                {bodasYPlayas.map((element) => (
                    <div className="card p-3 me-3 mb-4" style={{width:"350px", height:"300px",}}>
                        <div className=" card-body d-flex flex-column justify-content-center" key={element.id}>
                            <Playas
                                name={element.name}
                                image={element.image[0]}
                            />  
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    );
}    