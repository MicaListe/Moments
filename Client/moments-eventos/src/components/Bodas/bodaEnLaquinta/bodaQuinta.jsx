import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../../Redux/actions";
import Quintas from "./quintas";
import Dorado from "../../ramaDorada/rama";
import casamiento from "../../../assets/casamiento quinta.jpg"

export default function BodaQuinta(){
    
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getEvents())
    },[])

    const lugares= useSelector((state)=>state.filtered)
   

    const bodaYQuintas= lugares.map(evento=>evento.Lugars).flat().filter(lugar=>lugar.type==="Quinta")
    console.log(bodaYQuintas)
    return(
        <div>
            <Dorado/>
            <div className="row">
                <div className="col-md-6 mt-5">
                    <img src={casamiento} style={{width:"300px", marginLeft:"200px", borderRadius:"10px"}} alt="imagen no encontrada"/>
                </div>
                <div className="col-md-6 position-absolute" style={{marginTop:"165px", }}>
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
            {bodaYQuintas && bodaYQuintas.map((element)=>(
                <div key={element.id}>
                    <Quintas
                        name={element.name}
                        image={element.image[0]}
                    />  
                </div>
                
            ))}
        </div>
    )
}