export const GET_EVENTS = "GET_EVENTS"
export const GET_CATERING = "GET_CATERING"
export const GET_DECORATION = "GET_DECORATION"
import axios from "axios"

export function getEvents(){
    try{
        return async function(dispatch){
            const response= await axios.get("/events/events")
            console.log(response)
            return dispatch({
                type: GET_EVENTS,
                payload: response.data
            })
        }
    }catch(error){
        console.error("Error al realizar la solicitud")
    }  
}


export function getCatering(){
    try{
        return async function(dispatch){
            const respuesta=await axios.get("/catering/catering")
            console.log("resp", respuesta)

            return dispatch({
                type:GET_CATERING,
                payload:respuesta.data
            })
        }

    }catch(error){
        console.error("Error al realizar la solicitud")
    }
}

export function getDecorations(){
    try{
        return async function(dispatch){
            const response= await axios.get("/decoration/decoration")
            return dispatch({
                type: GET_DECORATION,
                payload: response.data
            })
        }
    }catch(error){

    }
}