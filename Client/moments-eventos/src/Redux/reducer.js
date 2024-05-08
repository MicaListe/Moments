import { GET_EVENTS } from "./actions";

const initialState={
    events:[]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_EVENTS:
            return{
                ...state,
                events: action.payload
            }
    }
}

export default reducer;