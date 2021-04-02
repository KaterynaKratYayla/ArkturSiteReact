import { GET_PAGES_REQ, GET_PAGES_RES , GET_PAGES_ERR } from '../constants';
import { GET_PurePage_REQ, GET_PurePage_RES , GET_PurePage_ERR } from '../constants';

console.log('[file]:const initState', 'src/Redux/reducers/pages.js');
const initState = {
	pages: [],
	pages_loaded: false,
    pages_errors: [],

    purepage: [],
    purepage_loaded: false,
    purepage_errors: []
}

console.log('[file]', 'src/Redux/reducers/pages.js');

const reducer = ( state = initState, action ) => {
    console.log('[file]:const reducer', 'src/Redux/reducers/pages.js');
	switch( action.type ){

		case GET_PAGES_REQ:
			return({
				...state,
				pages_loaded: false
			})

		case GET_PAGES_RES:
			return({
				...state,
				pages_loaded: true,
				pages: action.payload
			})

		case GET_PAGES_ERR:
			return({
				...state,
                pages_errors: [...state.errors, action.error ]
            })

            case GET_PurePage_REQ:
                return({
                    ...state,
                    purepage_loaded: false
                })

            case GET_PurePage_RES:
                return({
                    ...state,
                    purepage_loaded: true,
                    purepage: action.payload
                })

            case GET_PurePage_ERR:
                return({
                    ...state,
                    purepage_errors: [...state.errors, action.error ]
                })

        default:
			return state;
    }

}

export default reducer;
