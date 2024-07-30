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
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_CATERING="UPDATE_CATERING";
export const DELETE_CATERING="DELETE_CATERING";
export const UPDATE_EVENT="UPDATE_EVENT";
export const DELETE_EVENT="DELETE_EVENT";
export const UPDATE_DECORATION="UPDATE_DECORATION";
export const DELETE_DECORATION="DELETE_DECORATION";

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



export function deleteUser(userId) {
    return async function(dispatch) {
        try {
            await axios.delete(`/users/delete_users/${userId}`);
            dispatch({
                type: DELETE_USER,
                payload: userId
            });
        } catch (error) {
            console.error('Error al eliminar el usuario:', error);
        }
    };
}

export function deleteCatering(cateringId) {
    return async function(dispatch) {
        try {
            await axios.delete(`/catering/delete_catering/${cateringId}`);
            dispatch({
                type: DELETE_CATERING,
                payload: cateringId
            });
        } catch (error) {
            console.error('Error al eliminar el catering:', error);
        }
    };
}


export function updateCatering(cateringId, updatedCatering) {
    console.log("id", cateringId, "cat", updatedCatering)
    return async function(dispatch) {
        try {
            const response = await axios.put(`/catering/update_catering/${cateringId}`, updatedCatering);
            dispatch({
                type: UPDATE_CATERING,
                payload: response.data
            });
            return response.data;
        } catch (error) {
            console.error('Error al actualizar el catering:', error);
        }
    };
}



export function deleteEvent(eventId) {
    return async function(dispatch) {
        try {
            await axios.delete(`/events/delete_event/${eventId}`);
            dispatch({
                type: DELETE_EVENT,
                payload: eventId
            });
        } catch (error) {
            console.error('Error al eliminar el evento:', error);
        }
    };
}


export function updateEvent(eventId, updatedEvent) {
    return async function(dispatch) {
        try {
            const response = await axios.put(`/events/update/${eventId}`, updatedEvent);
            dispatch({
                type: UPDATE_EVENT,
                payload: response.data
            });
            return response.data;
        } catch (error) {
            console.error('Error al actualizar el evento:', error);
        }
    };
}



export function deleteDecoration(decorationId) {
    return async function(dispatch) {
        try {
            await axios.delete(`/decoration/delete_decoration/${decorationId}`);
            dispatch({
                type: DELETE_DECORATION,
                payload: decorationId
            });
        } catch (error) {
            console.error('Error al eliminar la decoración:', error);
        }
    };
}


export function updateDecoration(decorationId, updatedDecoration) {
    return async function(dispatch) {
        try {
            const response = await axios.put(`/decoration/update_decoration/${decorationId}`, updatedDecoration);
            dispatch({
                type: UPDATE_DECORATION,
                payload: response.data
            });
            return response.data;
        } catch (error) {
            console.error('Error al actualizar la decoración:', error);
        }
    };
}