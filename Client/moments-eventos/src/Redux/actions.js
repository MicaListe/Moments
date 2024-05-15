export const GET_EVENTS = "GET_EVENTS"
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