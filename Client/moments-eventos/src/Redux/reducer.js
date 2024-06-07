import { GET_EVENTS, GET_CATERING, GET_DECORATION, FILTER_CATERING, FILTER_DECORATION} from "./actions";


const initialState={
    events:[],
    filtered:[],
    catering:[],
    filterCat:[],
    decoration:[],
    filterDeco:[],
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
                filterCat:action.payload
            }

        case FILTER_CATERING:
            const cateringFilter = action.payload;
                
            if (cateringFilter === 'all') {
                return {...state, catering : state.filterCat};
            } else {
                const filteredByCatering = state.filterCat.filter((item) => item.type === cateringFilter);
                console.log("filteredBy", filteredByCatering)
                return {...state, catering : filteredByCatering};
            }




            
        case GET_DECORATION:
            return{
                ...state,
                decoration: action.payload,
                filterDeco: action.payload,
            }
            
        case FILTER_DECORATION:
            const decorationFilter = action.payload;
            
            if (decorationFilter === 'all') {
                return {...state, decoration : state.filterDeco};
            }else{
                const filteredByDecoration= state.filterDeco.filter((item) => item.type === decorationFilter);
                return {...state, decoration : filteredByDecoration}
            }
        
        default: return state


    }
}

export default reducer;



