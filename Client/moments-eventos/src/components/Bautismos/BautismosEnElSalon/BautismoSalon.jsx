import React, { useEffect } from "react";
import { getEvents } from "../../../Redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Salon from './Salon';
import bautismoQtres from "../../../assets/bautismoQtres.jpg";
import Dorado from "../../ramaDorada/rama";

export default function BautismoSalon() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch]);

    const eventos = useSelector((state) => state.filtered);

    const bsalon = eventos.filter((e) => e.name === "Bautismos");
    const bautismosysalones = bsalon.map(evento => evento.Lugars).flat().filter(lugar => lugar.type === 'Salon');

    const isFewCards = bautismosysalones.length <= 3;

    return (
        <div>
            <Dorado />
            <div className="row">
                <div className="col-md-6 mt-5">
                    <img src={bautismoQtres} style={{ width: "350px", marginLeft: "300px", borderRadius: "10px" }} alt="Casamiento" />
                </div>
                <div className="col-md-4 position-absolute" style={{ marginTop: "165px", right: "450px", fontSize: "18px", marginRight: "-150px" }}>
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
                {bautismosysalones && bautismosysalones.map((element) => (
                    <div key={element.id} className="card p-3 me-3 mb-5" style={{ width: "350px", height: "300px" }}>
                        <div className="card-body d-flex flex-column justify-content-center">
                            <Salon
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
