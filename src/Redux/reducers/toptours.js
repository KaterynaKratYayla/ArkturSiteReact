import { GET_TOPTOURS_REQ, GET_TOPTOURS_RES, GET_TOPTOURS_ERR } from '../constants';

console.log('[file]', 'src/Redux/reducers/toptours.js');
const initState = {
	toptours: [],
	toptours_loaded: false,
    errors: [],

}


const reducer = ( state = initState, action ) => {
	switch( action.type ){

		case GET_TOPTOURS_REQ:
			return({
				...state,
				toptours_loaded: false
			})

		case GET_TOPTOURS_RES:
			return({
				...state,
				toptours_loaded: true,
				toptours: action.payload
			})

		case GET_TOPTOURS_ERR:
			return({
				...state,
				errors: [...state.errors, action.error ]
            })

        default:
			return state;
    }

}

export default reducer;
