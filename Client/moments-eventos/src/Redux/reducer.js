import { GET_EVENTS } from "./actions";
import { GET_CATERING } from "./actions";

const initialState={
    events:[],
    filtered:[],
    catering:[]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_EVENTS: 
            return{
                ...state,
                events: action.payload,
                filtered:action.payload
            }

        case GET_CATERING:
            return{
                ...state,
                catering:action.payload,
            }

        default: return state


    }
}

export default reducer;



