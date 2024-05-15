import { GET_EVENTS } from "./actions";

const initialState={
    events:[],
    filtered:[]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_EVENTS:
            const bodasYPlayas =  action.payload.map(evento => evento.Lugars).flat().filter(lugar => lugar.type === 'Playa')
            console.log("l", bodasYPlayas)
            return{
                ...state,
                events: action.payload,
                filtered:bodasYPlayas
            }
    }
}

export default reducer;