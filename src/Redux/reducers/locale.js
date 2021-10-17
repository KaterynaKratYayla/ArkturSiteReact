import config from '../config'
import { CHANGE_LOCALE,GET_LANG_REQ, GET_LANG_RES , GET_LANG_ERR  } from '../constants'
import {GET_LOCALE_REQ, GET_LOCALE_RES, GET_LOCALE_ERR} from '../constants/index'

const initState = {
    current_locale: config.defaultLang,
	current_locale_loaded:true,
	current_locale_errors:[],

	locales:'',
	locales_loaded:false,
	errors:[]
}

const reducer = ( state = initState, action ) => {
	switch( action.type ){

		case GET_LANG_REQ:
			return({
			  ...state,
			  locales_loaded: true
			  })
	  
	  case GET_LANG_RES:
			return({
			   ...state,
			   locales_loaded: true,
			   locales: action.payload
			  })
	  
	  case GET_LANG_ERR:
			return({
				 ...state,
				 errors: [...state.errors, action.error ]
			 })

		// case CHANGE_LOCALE:
		// 	return({
		// 		...state,
		// 		current_locale: action.payload
		// 	})
		case GET_LOCALE_REQ:
			return({
			  ...state,
			  current_locale_loaded: true
			  })
	  
	  case GET_LOCALE_RES:
			return({
			   ...state,
			   current_locale_loaded: true,
			   current_locale: action.payload
			  })
	  
	  case GET_LOCALE_ERR:
			return({
				 ...state,
				 current_locale_errors: [...state.errors, action.error ]
			 })
        default:
			return state;
    }

}

export default reducer;