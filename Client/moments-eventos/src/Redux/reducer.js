import { GET_EVENTS, GET_CATERING, GET_DECORATION, FILTER_CATERING } from "./actions";


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
            case FILTER_CATERING:
                const cateringFilter = action.payload;
                
                if (cateringFilter === 'all') {
                    return state;
                } else {
                    const filteredByCatering = state.catering.filter((item) => item.type === cateringFilter);
                    console.log("filteredBy", filteredByCatering)
                    return {...state, filtered: filteredByCatering};
                }
            
            
        
        default: return state


    }
}

export default reducer;



