import { GET_EVENTS } from "./actions";

const initialState={
    events:[],
    filtered:[]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_EVENTS: 
            return{
                ...state,
                events: action.payload,
                filtered:action.payload
            }
        default: return state
    }
}

export default reducer;



