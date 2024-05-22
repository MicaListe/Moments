import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import Dorado from "../ramaDorada/rama";
import { getEvents } from "../../Redux/actions";
import Xv from "./xv";
import fiesta from "../../assets/fiesta de xv.jpg"
export default function FiestaDeXv(){

    const dispatch = useDispatch()
    const eventos = useSelector((state)=>state.filtered)

    useEffect(()=>{
        dispatch(getEvents())
    },[])

    const fiestasDeXv= eventos.filter((element)=>element.name==="Fiestas de XV")

    return(
        <div>
            <div className="row">
                <Dorado/>
                <div className="col-md-6 mt-5">
                    <img style={{width:"300px", height:"350px", marginLeft:"200px", borderRadius:"10px"}} src={fiesta} alt="Imagen no encontrada" />
                </div>
                <div className="col-md-4 position-absolute" style={{marginTop:"165px", right:"450px", fontSize:"18px"}}>
                    <p>
                        Imagina una noche llena de magia y encanto, donde cada detalle refleje tu personalidad 
                        y estilo único. En nuestro exclusivo salón de eventos, tu fiesta de quince años se convierte 
                        en un cuento de hadas hecho realidad. Cada rincón del salón estará cuidadosamente diseñado 
                        para crear el escenario perfecto para celebrar este hito tan especial en tu vida.  
                        Nuestro equipo se encargará de todos los detalles para que puedas relajarte y disfrutar 
                        de cada momento de tu noche mágica.
                    </p>
                </div>
                <div className="row mb-5" style={{ marginLeft: "200px", marginTop: "100px" }}>
                {fiestasDeXv && fiestasDeXv.map((evento) => (
                        evento.Lugars.map((element) => (
                            <div className="card p-3 me-3 mb-4" style={{ width: "350px", height: "300px" }} key={element.id}>
                                <div className="card-body d-flex flex-column justify-content-center">
                                    <Xv
                                        name={element.name}
                                        image={element.image[0]}
                                    />
                                </div>
                            </div>
                        ))
                    ))
                }
            </div>
                
            </div>
        </div>
    )
}