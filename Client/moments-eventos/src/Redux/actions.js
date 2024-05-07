import axios from "axios";


export function getEvents(){
    return async function(dispatch){
        let response = await axios ("/events/events")
        console.log("resp",response)
        return dispatch({
            type: "GET_EVENTS",
            payload: response.data
        })  
    }    
}