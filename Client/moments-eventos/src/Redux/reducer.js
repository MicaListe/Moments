// import { GET_EVENTS } from "./actions";

// const initialState={
//     events:[],
//     filtered:[]
// }

// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case GET_EVENTS:
//             console.log("l", bodasYPlayas)
//             return{
//                 ...state,
//                 events: action.payload,
//                 filtered:action.payload
//             }
//     }
// }

// export default reducer;




import { GET_EVENTS } from "./actions";

const initialState = {
    events: [],
    filtered: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EVENTS:
            const allEvents = action.payload; // Obtén todos los eventos del payload
            const fiestasCorporativas = allEvents.filter(evento => evento.name === 'Fiestas Corporativas');
            return {
                ...state,
                events: allEvents, // Actualiza todos los eventos
                filtered: fiestasCorporativas // Actualiza solo eventos de 'Fiestas Corporativas'
            };
        default:
            return state; // Devuelve el estado sin cambios para otras acciones
    }
};

export default reducer;