import { GET_LOCALES_REQ, GET_LOCALES_RES, GET_LOCALES_ERR, CHANGE_LOCALE } from '../constants'
import config from '../config';

console.log('[file]', 'src/Redux/reducers/localization.js');
const defaultLocale = config.defaultLocale;

console.log('[file]:const initState', 'src/Redux/reducers/localization.js');
const initState = {
	locales: [],
	locales_loaded: false,
	current_locale: defaultLocale,
    errors: []
}


const reducer = ( state = initState, action ) => {
	console.log('[file]:const reducer', 'src/Redux/reducers/localization.js');
	switch( action.type ){

		case GET_LOCALES_REQ:
			return({
				...state,
				locales_loaded: false
			})

		case GET_LOCALES_RES:
			return({
				...state,
				locales_loaded: true,
				locales: action.payload
			})

		case GET_LOCALES_ERR:
			return({
				...state,
				errors: [...state.errors, action.error ]
            })

		case CHANGE_LOCALE:
			return({
				...state,
				current_locale: action.payload
			})

        default:
			return state;
    }

}

export default reducer;
