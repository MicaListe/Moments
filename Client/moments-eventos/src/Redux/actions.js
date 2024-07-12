export const GET_EVENTS = "GET_EVENTS"
export const GET_CATERING = "GET_CATERING"
export const GET_DECORATION = "GET_DECORATION"
export const FILTER_CATERING= "FILTER_CATERING"
export const FILTER_DECORATION = "FILTER_DECORATION"
export const ORDER_BY_DECORATION = "ORDER_BY_DECORATION"
export const FILTER_COUNTRY = "FILTER_COUNTRY"
export const FILTER_CITY = "FILTER_CITY"
export const USER_REGISTER = "USER_REGISTER"
export const GET_USERS = "GET_USERS"
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
    return{
        type: FILTER_CITY,
        payload: payload
    }
}

// export function userRegister(payload){
//     try{
//         return async function(){
//             const response = await axios.post("/users/register", payload)
//             return response
//         }
//     }catch(error){
//         console.error("Error al realizar la solicitud")
//     }
// }

// export function getUsers(){
//     try{
//         return async function (dispatch){
//             const response = await axios.get ("/users/usuarios")
//             return dispatch({
//                 type: GET_USERS,
//                 payload: response
//             })
//         }
//     }catch(error){
//         console.error("Error al realizar la solicitud")
//     }

// }
export function userRegister(payload) {
    return async function (dispatch) {
        try {
            const response = await axios.post('/users/register', payload);
            dispatch({
                type: USER_REGISTER,
                payload: response.data
            });
            return response.data;
        } catch (error) {
            console.error('Error al realizar la solicitud', error);
        }
    };
}

export function getUsers() {
    return async function (dispatch) {
        try {
            const response = await axios.get('/users/usuarios');
            dispatch({
                type: GET_USERS,
                payload: response.data
            });
        } catch (error) {
            console.error('Error al realizar la solicitud', error);
        }
    };
}

