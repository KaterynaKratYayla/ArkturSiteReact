import { GET_HOTELS_REQ, GET_HOTELS_RES , GET_HOTELS_ERR } from '../constants';
import { GET_GENERAL_HOTELS_REQ, GET_GENERAL_HOTELS_RES , GET_GENERAL_HOTELS_ERR } from '../constants';
import {GET_HOTEL_NAME_REQ,GET_HOTEL_NAME_RES,GET_HOTEL_NAME_ERR} from '../constants';

const initState = {
		hotels: [],
		hotels_loaded: false,
		hotels_errors: [],

		general_hotels: [],
		general_hotels_loaded: false,
		general_hotels_errors: [],

		hotel_name: '',
		hotel_name_loaded: false,
		hotel_name_errors: [],
	}
	
	
	const reducer = ( state = initState, action ) => {
		switch( action.type ){
	
			case GET_HOTELS_REQ:
				return({
					...state,
					hotels_loaded: false
				})
	
			case GET_HOTELS_RES:
				return({
					...state,
					hotels_loaded: true,
					hotels: action.payload
				})
	
	
			case GET_HOTELS_ERR:
				return({
					...state,
					hotels_errors: [...state.errors, action.error ]
				})
	
	            case GET_GENERAL_HOTELS_REQ:
				return({
					...state,
					general_hotels_loaded: false
				})
	
			case GET_GENERAL_HOTELS_RES:
				return({
					...state,
					general_hotels_loaded: true,
					general_hotels: action.payload
	            })
				
	            case GET_GENERAL_HOTELS_ERR:
	                return({
	                    ...state,
	                    general_hotels_errors: [...state.errors, action.error ]
	                })

					
					case GET_HOTEL_NAME_REQ:
						return({
							...state,
							hotel_name_loaded: false
						})
			
					case GET_HOTEL_NAME_RES:
						return({
							...state,
							hotel_name_loaded: true,
							hotel_name: action.payload
						})
						
						case GET_HOTEL_NAME_ERR:
							return({
								...state,
								hotel_name_errors: [...state.errors, action.error ]
							})
	
	              
	        default:
				return state;
	    }
	
	}
	
	export default reducer;

// import { GET_DESC_REQ, GET_DESC_RES , GET_DESC_ERR,GET_EN_DESC_REQ, GET_EN_DESC_RES , GET_EN_DESC_ERR} from '../constants';
// import { GET_IMAGES_REQ, GET_IMAGES_RES , GET_IMAGES_ERR} from '../constants'

// const initState = {
// 	parts: [],
// 	loaded: false,
// 	errors: [],

//     en_parts: [],
//     en_parts_loaded: false,
//     errors: [],

//     images: [],
//     images_loaded: false,
//     errors: []
// }


// const reducer = ( state = initState, action ) => {
// 	switch( action.type ){

// 		case GET_DESC_REQ:
// 			return({
// 				...state,
// 				loaded: false
// 			})

// 		case GET_DESC_RES:
// 			return({
// 				...state,
// 				loaded: true,
// 				parts: action.payload
// 			})


// 		// case 'REMOVE_DESC':
// 		// 	return({
//         //         ...state,
//         //         htls: state.htls.filter( htl => htl.id !== action.payload )
// 		// 	})


// 		case GET_DESC_ERR:
// 			return({
// 				...state,
// 				errors: [...state.errors, action.error ]
// 			})

//             case GET_EN_DESC_REQ:
// 			return({
// 				...state,
// 				en_parts_loaded: false
// 			})

// 		case GET_EN_DESC_RES:
// 			return({
// 				...state,
// 				en_parts_loaded: true,
// 				en_parts: action.payload
//             })
            
//             case GET_EN_DESC_ERR:
//                 return({
//                     ...state,
//                     errors: [...state.errors, action.error ]
//                 })

//                 case GET_DESC_ERR:
// 			return({
// 				...state,
// 				errors: [...state.errors, action.error ]
// 			})

//         case GET_IMAGES_REQ:
// 			return({
// 				...state,
// 				images_loaded: false
// 			})

// 		case GET_IMAGES_RES:
// 			return({
// 				...state,
// 				images_loaded: true,
// 				images: action.payload
//             })
            
//             case GET_IMAGES_ERR:
//                 return({
//                     ...state,
//                     errors: [...state.errors, action.error ]
//                 })

//         default:
// 			return state;
//     }

// }

// export default reducer;