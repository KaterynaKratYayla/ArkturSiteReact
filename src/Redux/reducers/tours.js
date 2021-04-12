import { GET_TOUR_REQ, GET_TOUR_RES , GET_TOUR_ERR} from '../constants'
import { GET_EN_TOUR_REQ, GET_EN_TOUR_RES , GET_EN_TOUR_ERR} from '../constants'
import { GET_IMAGES_TOUR_REQ, GET_IMAGES_TOUR_RES , GET_IMAGES_TOUR_ERR} from '../constants'
import { GET_CONTENT_REQ ,GET_CONTENT_RES, GET_CONTENT_ERR} from '../constants'

console.log('[file]', 'src/Redux/reducers/tours.js');
console.log('[file]:const initState', 'src/Redux/reducers/tours.js');
const initState = {
	touritems: [],
	touritems_loaded: false,
    touritems_errors: [],

    en_touritems: [],
    en_touritems_loaded: false,
    en_touritems_errors: [],

    images: [],
    images_loaded: false,
    images_errors: [],

    content: [],
    content_loaded: false,
    content_errors: []
}


const reducer = ( state = initState, action ) => {
    console.log('[file]:const reducer', 'src/Redux/reducers/tours.js');
	switch( action.type ){

		case GET_TOUR_REQ:
			return({
				...state,
				touritems_loaded: false
			})

		case GET_TOUR_RES:
			return({
				...state,
				touritems_loaded: true,
				touritems: action.payload
			})


		case GET_TOUR_ERR:
			return({
				...state,
                touritems_errors: [...state.touritems_errors, action.error ]
			})

            case GET_EN_TOUR_REQ:
                return({
                    ...state,
                    en_touritems_loaded: false
                })

            case GET_EN_TOUR_RES:
                return({
                    ...state,
                    en_touritems_loaded: true,
                    en_touritems: action.payload
                })


            case GET_EN_TOUR_ERR:
                return({
                    ...state,
                    en_touritems_errors: [...state.en_touritems_errors, action.error ]
                })


        case GET_IMAGES_TOUR_REQ:
			return({
				...state,
				images_loaded: false
			})

		case GET_IMAGES_TOUR_RES:
			return({
				...state,
				images_loaded: true,
				images: action.payload
            })

            case GET_IMAGES_TOUR_ERR:
                return({
                    ...state,
                    images_errors: [...state.images_errors, action.error ]
                })

        case GET_CONTENT_REQ:
              return({
                ...state,
                content_loaded: false
                })

        case GET_CONTENT_RES:
              return({
                 ...state,
                 content_loaded: true,
                 content: action.payload
                })


        case GET_CONTENT_ERR:
              return({
                   ...state,
                  content_errors: [...state.content_errors, action.error ]
               })

        default:
			return state;
    }

}

export default reducer;
