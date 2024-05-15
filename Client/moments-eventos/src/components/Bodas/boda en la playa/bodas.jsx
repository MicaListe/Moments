import React from "react"
import playa from "../../../assets/boda en playa.jpg"
import quinta from "../../../assets/boda en quinta.jpg"
import salon from "../../../assets/boda en salon.jpg"
import { Link } from "react-router-dom"

export default function Bodas(){
    return(
        <div className="row justify-content-center mb-5" style={{marginTop:"80px"}}>
            <div className="card p-3 me-3" style={{width:"400px", height:"400px"}}>
                <div className="card-body d-flex flex-column justify-content-center text-center" style={{backgroundImage:`url(${playa})`, backgroundSize:"cover", borderRadius:"5px"}}>
                    <Link to="/playas">
                        <h2 style={{color:"white", textShadow: "2px 2px 2px black"}}>Boda en la playa</h2>
                    </Link>  
                </div>
            </div>
            <div className="card p-3 me-3" style={{width:"400px", height:"400px"}}>
                <div className="card-body d-flex flex-column justify-content-center text-center" style={{backgroundImage:`url(${quinta})`, backgroundSize:"cover", borderRadius:"5px"}}>
                    <Link to="/quintas">
                        <h2 style={{color:"white", textShadow: "2px 2px 2px black"}}>Boda en la quinta</h2>
                    </Link>
                </div>
            </div>
            <div className="card p-3 me-3" style={{width:"400px", height:"400px"}}>
                <div className="card-body d-flex flex-column justify-content-center text-center " style={{backgroundImage:`url(${salon})`, backgroundSize:"cover", borderRadius:"5px"}}>
                    <Link to="/salones">
                        <h2 style={{color:"white", textShadow: "2px 2px 2px black"}}>Boda en el salón</h2> 
                    </Link>                  
                </div>
            </div>
        </div>
        
    )
}