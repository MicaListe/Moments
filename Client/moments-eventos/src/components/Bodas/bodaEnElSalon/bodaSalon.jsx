import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Salones from "./salones";
import { getEvents } from "../../../Redux/actions";
import Dorado from "../../ramaDorada/rama";
import pareja from "../../../assets/pareja en salon.jpg"
import Back from "../../button back/back";
export default function BodaEnSalon(){

    const dispatch= useDispatch()
    const allSalones= useSelector((state)=>state.filtered)
    console.log("a", allSalones)
   
    useEffect(()=>{
        dispatch(getEvents())
    },[])

    const bodas= allSalones.filter((e)=>e.name==="Bodas")
    const bodasSalon= bodas.map(e=>e.Lugars).flat().filter(salon=>salon.type==="Salon")

    return(
        <div>
            <Dorado/>
            <a href="/bodas">
               <Back /> 
            </a>
            <div>
                <img src={pareja} alt="Imagen no encontada" style={{boxShadow:"1px 1px 2px black", width:"300px", marginLeft:"200px", borderRadius:"10px"}} />
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
                    bodasSalon && bodasSalon.map((element)=>(
                        <div className="card p-3 me-5 mb-4" key={element.id} style={{width:"350px", height:"350px", boxShadow:"1px 1px 2px black"}}>
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
                }
            </div>
        </div>
    )
}