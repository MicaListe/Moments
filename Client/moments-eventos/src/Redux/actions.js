export const GET_EVENTS = "GET_EVENTS"
import axios from "axios"

export function getEvents(){
    return async function(dispatch){
        const response= await axios.get("/events/events")
        return dispatch({
            type: GET_EVENTS,
            payload: response.data
        })
    }
    
}