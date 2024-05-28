import { GET_EVENTS, GET_CATERING, GET_DECORATION } from "./actions";


const initialState={
    events:[],
    filtered:[],
    catering:[],
    decoration:[]
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
        case GET_DECORATION:
            return{
                ...state,
                decoration: action.payload
            }
        default: return state


    }
}

export default reducer;



