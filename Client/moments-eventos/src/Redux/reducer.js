import { GET_EVENTS, GET_CATERING, GET_DECORATION, FILTER_CATERING, FILTER_DECORATION, FILTER_COUNTRY, USER_REGISTER, GET_USERS, DELETE_USER, UPDATE_CATERING, DELETE_CATERING, DELETE_EVENT, UPDATE_DECORATION, DELETE_DECORATION, UPDATE_LUGAR} from "./actions";


const initialState={
    events:[],
    filtered:[],
    catering:[],
    filterCat:[],
    decoration:[],
    filterDeco:[],
    users:[]
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
        case FILTER_COUNTRY:
            const countryFilter = action.payload
            console.log("e", state.events)
            if( countryFilter === "all"){
                return{
                    ...state, filtered: state.countryFilter
                }
            }else{
                const filteredByCountry = state.events.filter((item)=>item.country === countryFilter)
                console.log("f",filteredByCountry)
                return {
                    ...state, filtered: filteredByCountry
                }
            }
        case USER_REGISTER:
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        case GET_USERS:{
            return{
                ...state,
                users: action.payload
            }
        }

        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            };
        
        case DELETE_CATERING:
            return {
                ...state,
                catering: state.catering.filter(cateringItem => cateringItem.id !== action.payload)
            };
        case UPDATE_CATERING:
            return {
                ...state,
                catering: state.catering.map(cateringItem => 
                    cateringItem.id === action.payload.id ? action.payload : cateringItem
                )
            };

        case DELETE_EVENT:
            return {
                ...state,
                events: state.events.filter(event => event.id !== action.payload)
            };
        case UPDATE_LUGAR:
            return {
                ...state,
                events: state.events.map(event => ({
                    ...event,
                    Lugars: event.Lugars.map(lugar =>
                        lugar.id === action.payload.id
                            ? { ...lugar, ...action.payload }
                            : lugar
                    )
                }))
            };
        case DELETE_DECORATION:
            return {
                ...state,
                decoration: state.decoration.filter(decorationItem => decorationItem.id !== action.payload)
            };
        case UPDATE_DECORATION:
            return {
                ...state,
                decoration: state.decoration.map(decorationItem => 
                    decorationItem.id === action.payload.id ? action.payload : decorationItem
                )
            };
        default: return state
    }
}

export default reducer;



