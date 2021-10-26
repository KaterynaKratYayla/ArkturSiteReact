import { GET_HOTEL_CITIES_REQ, GET_HOTEL_CITIES_RES , GET_HOTEL_CITIES_ERR } from '../constants';

const initState = {
		hotel_cities: [],
		hotel_cities_loaded: false,
		hotels_cities_errors: [],
	}
	
	
	const reducer = ( state = initState, action ) => {
		switch( action.type ){
	
			case GET_HOTEL_CITIES_REQ:
				return({
					...state,
					hotel_cities_loaded: false
				})
	
			case GET_HOTEL_CITIES_RES:
				return({
					...state,
					hotel_cities_loaded: true,
					hotel_cities: action.payload
				})
	
	
			case GET_HOTEL_CITIES_ERR:
				return({
					...state,
					hotel_cities_errors: [...state.errors, action.error ]
				})
		            
	        default:
				return state;
	    }
	
	}
	
	export default reducer;
