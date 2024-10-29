import React from "react";
import bautismoQuno from "../../../assets/bautismoQdos.jpg";
import bautismoQtres from "../../../assets/bautismoS.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Bautismos() {

    const navigate = useNavigate()

    const handleOpenBautismoQuintas = (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace
        navigate("/bautismoquinta", { state: { fromButton: true } }); // Cambia aquí a 'fromButton'
    };
    const handleOpenBautismoSalones = (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace
        navigate("/bautismosalon", { state: { fromButton: true } }); // Cambia aquí a 'fromButton'
    };
    return (
        <div className="row justify-content-center mb-5" style={{ marginTop: "80px" }}>
            <div className="card p-3 me-5" style={{ width: "400px", height: "400px"}}>
                <div className="card-body d-flex flex-column justify-content-center text-center" style={{ backgroundImage: `url(${bautismoQuno})`, backgroundSize: "cover", borderRadius: "5px" }}>
                    <Link to="" onClick={handleOpenBautismoQuintas}>
                        <h2 style={{ color: "white", textShadow: "2px 2px 2px black" }}>Bautismo en la quinta</h2>
                    </Link>
                </div>
            </div>
            <div className="card p-3" style={{ width: "400px", height: "400px" }}>
                <div className="card-body d-flex flex-column justify-content-center text-center" style={{ backgroundImage: `url(${bautismoQtres})`, backgroundSize: "cover", borderRadius: "5px" }}>
                    <Link to="" onClick={handleOpenBautismoSalones}>
                        <h2 style={{ color: "white", textShadow: "2px 2px 2px black" }}>Bautismo en el salón</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
}
