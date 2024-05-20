import React from "react";
import bautismoQuno from "../../../assets/bautismoQdos.jpg";
import bautismoQtres from "../../../assets/bautismoS.jpg";
import { Link } from "react-router-dom";

export default function Bautismos() {
    return (
        <div className="row justify-content-center mb-5" style={{ marginTop: "80px" }}>
            <div className="card p-3 me-5" style={{ width: "400px", height: "400px"}}>
                <div className="card-body d-flex flex-column justify-content-center text-center" style={{ backgroundImage: `url(${bautismoQuno})`, backgroundSize: "cover", borderRadius: "5px" }}>
                    <Link to="/playas">
                        <h2 style={{ color: "white", textShadow: "2px 2px 2px black" }}>Bautismo en la quinta</h2>
                    </Link>
                </div>
            </div>
            <div className="card p-3" style={{ width: "400px", height: "400px" }}>
                <div className="card-body d-flex flex-column justify-content-center text-center" style={{ backgroundImage: `url(${bautismoQtres})`, backgroundSize: "cover", borderRadius: "5px" }}>
                    <Link to="/salones">
                        <h2 style={{ color: "white", textShadow: "2px 2px 2px black" }}>Bautismo en el salón</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
}
