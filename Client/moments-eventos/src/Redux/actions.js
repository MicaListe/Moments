export const GET_EVENTS = "GET_EVENTS"
export const GET_CATERING = "GET_CATERING"
export const GET_DECORATION = "GET_DECORATION"
export const FILTER_CATERING= "FILTER_CATERING"
export const FILTER_DECORATION = "FILTER_DECORATION"
export const ORDER_BY_DECORATION = "ORDER_BY_DECORATION"
export const FILTER_COUNTRY = "FILTER_COUNTRY"
export const FILTER_CITY = "FILTER_CITY"
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

export function getDecoration(){
    try{
        return async function(dispatch){
            const response= await axios.get("/decoration/decoration")
            return dispatch({
                type: GET_DECORATION,
                payload: response.data
            })
        }
    }catch(error){
        console.error("Error al realizar la solicitud")
    }
}

export function filterCatering(payload) {
    console.log("payload", payload)
    return{
        type:FILTER_CATERING,
        payload:payload,
    }
}

export function filterDecoration(payload) {
    return{
        type:FILTER_DECORATION,
        payload:payload,
    }
}

export function filterCountry(payload){
    return{
        type: FILTER_COUNTRY,
        payload: payload
    }
}

export function filterCity(payload){
    console.log("p",payload)
    return{
        type: FILTER_CITY,
        payload: payload
    }
}

