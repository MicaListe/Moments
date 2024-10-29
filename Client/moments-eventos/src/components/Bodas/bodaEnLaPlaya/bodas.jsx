import React from "react"
import playa from "../../../assets/boda en playa.jpg"
import quinta from "../../../assets/boda en quinta.jpg"
import salon from "../../../assets/boda en salon.jpg"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function Bodas(){

    const navigate = useNavigate()
    const handleOpenQuintas = (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace
        navigate("/quintas", { state: { fromButton: true } }); // Cambia aquí a 'fromButton'
    };

    const handleOpenPlayas= (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace
        navigate("/playas", { state: { fromButton: true } }); // Cambia aquí a 'fromButton'
    };

    const handleOpenSalones = (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace
        navigate("/salones", { state: { fromButton: true } }); // Cambia aquí a 'fromButton'
    };
    return(
        <div className="row justify-content-center mb-5" style={{marginTop:"80px"}}>
            <div className="card p-3 me-3" style={{width:"400px", height:"400px"}}>
                <div className="card-body d-flex flex-column justify-content-center text-center" style={{backgroundImage:`url(${playa})`, backgroundSize:"cover", borderRadius:"5px"}}>
                    <Link to="" onClick={handleOpenPlayas}>
                        <h2 style={{color:"white", textShadow: "2px 2px 2px black"}}>Boda en la playa</h2>
                    </Link>  
                </div>
            </div>
            <div className="card p-3 me-3" style={{width:"400px", height:"400px"}}>
                <div className="card-body d-flex flex-column justify-content-center text-center" style={{backgroundImage:`url(${quinta})`, backgroundSize:"cover", borderRadius:"5px"}}>
                    <Link to="" onClick={handleOpenQuintas}>
                        <h2 style={{color:"white", textShadow: "2px 2px 2px black"}}>Boda en la quinta</h2>
                    </Link>
                </div>
            </div>
            <div className="card p-3 me-3" style={{width:"400px", height:"400px"}}>
                <div className="card-body d-flex flex-column justify-content-center text-center " style={{backgroundImage:`url(${salon})`, backgroundSize:"cover", borderRadius:"5px"}}>
                    <Link to="" onClick={handleOpenSalones}>
                        <h2 style={{color:"white", textShadow: "2px 2px 2px black"}}>Boda en el salón</h2> 
                    </Link>                  
                </div>
            </div>
        </div>
        
    )
}