import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Salones from "./salones";
import { getEvents } from "../../../Redux/actions";
import Dorado from "../../ramaDorada/rama";
import pareja from "../../../assets/pareja en salon.jpg"
export default function BodaEnSalon(){

    const dispatch= useDispatch()
    const allSalones= useSelector((state)=>state.filtered)
    console.log("a", allSalones)
   
    useEffect(()=>{
        dispatch(getEvents())
    },[])

    
    const bodasSalon= allSalones.map(element=>element.Lugars).flat().filter(salon=>salon.type==="Salon")
    console.group("b", bodasSalon)
    const uniqueBodaSalon= [...new Set(bodasSalon.map(element => element.id))].map(id =>bodasSalon.find(element => element.id===id))
    console.log("u", uniqueBodaSalon)
    return(
        <div>
            <Dorado/>
            <div>
                <img src={pareja} alt="Imagen no encontada" style={{width:"300px", marginLeft:"200px", borderRadius:"10px"}} />
            </div>
            <div className="col-md-4 position-absolute" style={{top:"270px", marginLeft:"580px", fontSize:"18px"}}>
                <p>
                    Nada iguala la elegancia y sofisticación de una ceremonia en un salón de eventos. 
                    El ambiente refinado y cuidadosamente decorado crea una atmósfera de ensueño para intercambiar votos y 
                    celebrar el amor. Con cada detalle meticulosamente planeado, desde la disposición de las mesas hasta 
                    la iluminación tenue y las flores exquisitamente arregladas, tu día especial se transforma en un evento 
                    verdaderamente inolvidable. Déjanos encargarnos de todos los aspectos logísticos para que puedas relajarte 
                    y disfrutar de cada momento junto a tus seres queridos. 
                </p>
            </div>
            <div className="row mb-5" style={{marginLeft:"200px", marginTop:"100px"}}>
                {
                    uniqueBodaSalon && uniqueBodaSalon.map((element)=>(
                        <div className="card p-3 me-3 mb-4" key={element.id} style={{width:"350px", height:"300px"}}>
                            <div className="card-body justify-content-center">
                                <Salones
                                    name={element.name}
                                    image={element.image[0]}
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}