import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../../Redux/actions";
import Quintas from "./quintas";
import Dorado from "../../ramaDorada/rama";
import casamiento from "../../../assets/casamiento quinta.jpg"
import Back from "../../button back/back"
export default function BodaQuinta(){
    
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getEvents())
    },[])

    const lugares= useSelector((state)=>state.filtered)
   
    const bodas= lugares.filter((element)=>element.name==="Bodas")
    const bodaYQuintas= bodas.map(evento=>evento.Lugars).flat().filter(lugar=>lugar.type==="Quinta")
    
    //Se hace un nuevo set (array) de lo que contiene bodas y quintas (solo id), pero se mapea para encontrar 
    //el elemento que coincida con el id duplicado y se almacenan los NO duplicados
    
    return(
        <div>
            <Dorado/>
            <a href="/bodas">
               <Back /> 
            </a>
            <div className="">
                <div className="col-md-6 mt-5">
                    <img src={casamiento} style={{boxShadow:"1px 1px 2px black",width:"300px", marginLeft:"200px", borderRadius:"10px"}} alt="imagen no encontrada"/>
                </div>
                <div className="col-md-4 position-absolute" style={{top:"300px", marginLeft:"580px", fontSize:"18px"}}>
                    <p>
                        Nada supera la belleza natural de una ceremonia en una quinta. 
                        El encanto rústico del entorno, rodeado de exuberante vegetación 
                        y vistas panorámicas, crea un ambiente único y acogedor para 
                        intercambiar votos y celebrar el amor. Con la brisa suave acariciando 
                        el paisaje y los pájaros cantando en los árboles, cada momento se llena 
                        de magia y serenidad. Nuestro equipo se encarga de todos los detalles, 
                        desde la decoración elegante hasta la iluminación cautivadora, para que tu día sea 
                        simplemente espectacular y quede grabado en tus recuerdos para siempre.
                    </p>
                </div>
            </div>
            <div className="row mb-5 " style={{marginLeft:"200px", marginTop:"100px"}}>
                {bodaYQuintas && bodaYQuintas.map((element)=>(
                    <div className="card p-3 me-5 mb-4" key={element.id} style={{width:"350px", height:"350px", boxShadow:"1px 1px 2px black"}}>
                       <div className="card-body  justify-content-center" >
                            <Quintas
                                name={element.name}
                                image={element.image}
                                description={element.description}
                            />  
                        </div>   
                    </div>
                    
                ))}
            </div>
           
        </div>
    )
}