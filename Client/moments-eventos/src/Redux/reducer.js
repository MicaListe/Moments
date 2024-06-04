import { GET_EVENTS, GET_CATERING, GET_DECORATION, FILTER_CATERING, FILTER_DECORATION, ORDER_BY_CATERING} from "./actions";


const initialState={
    events:[],
    filtered:[],
    catering:[],
    filterCat:[],
    decoration:[],
    filterDeco:[],
    descending:[,]
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

        // case ORDER_BY_CATERING:
        //     const descending = !state.descending;
            
        //     const sortedCatering=[...state.filterCat].sort((a, b) => {
        //         if(descending){
        //             return a.type > b.type ? -1 : 1;
        //         }else{
        //             return a.type < b.type ? -1 : 1;
        //         }
        //     })

        //     return{...state, filterCat : sortedCatering, descending}

        case ORDER_BY_CATERING:
            const order = action.payload;
            const sortedCatering = [...state.filterCat].sort((a, b) => {
                if (order === 'Ascendente') {
                    return a.name.localeCompare(b.name);
                } else {
                    return b.name.localeCompare(a.name);
                }
            });
            return { ...state, filterCat: sortedCatering, descending: order === 'Descendente' };
            
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



