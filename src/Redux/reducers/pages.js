import { GET_PAGES_REQ, GET_PAGES_RES , GET_PAGES_ERR } from '../constants';
import { GET_PurePage_REQ, GET_PurePage_RES , GET_PurePage_ERR } from '../constants';
import { GET_PageTYPE_REQ, GET_PageTYPE_RES, GET_PageTYPE_ERR} from '../constants';
import { GET_PageREGION_REQ, GET_PageREGION_RES, GET_PageREGION_ERR} from '../constants';
import { GET_hotelPAGESfooter_REQ, GET_hotelPAGESfooter_RES, GET_hotelPAGESfooter_ERR} from '../constants';

const initState = {
	pages: [],
	pages_loaded: false,
    errors: [],

    purepage: [],
    purepage_loaded: false,
    errors: [],

    pageType: [],
    pageType_loaded: false,
    errors: [],

    pageRegion: [],
    pageRegion_loaded: false,
    errors: [],

    hotelPagesFooter: [],
    hotelPagesFooter_loaded: false,
    errors: []
}


const reducer = ( state = initState, action ) => {
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
				errors: [...state.errors, action.error ]
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
                    errors: [...state.errors, action.error ]
                })

                case GET_PageTYPE_REQ:
                    return({
                        ...state,
                        pageType_loaded: false
                     })
    
                case GET_PageTYPE_RES:
                    return({
                        ...state,
                        pageType_loaded: true,
                        pageType: action.payload
                      })
    
                case GET_PageTYPE_ERR:
                    return({
                        ...state,
                        errors: [...state.errors, action.error ]
                      })

                      case GET_PageREGION_REQ:
                        return({
                            ...state,
                            pageRegion_loaded: false
                         })
        
                    case GET_PageREGION_RES:
                        return({
                            ...state,
                            pageRegion_loaded: true,
                            pageRegion: action.payload
                          })
        
                    case GET_PageREGION_ERR:
                        return({
                            ...state,
                            errors: [...state.errors, action.error ]
                          })

                          case GET_hotelPAGESfooter_REQ:
                            return({
                                ...state,
                                hotelPagesFooter_loaded: false
                             })
            
                        case GET_hotelPAGESfooter_RES:
                            return({
                                ...state,
                                hotelPagesFooter_loaded: true,
                                hotelPagesFooter: action.payload
                              })
            
                        case GET_hotelPAGESfooter_ERR:
                            return({
                                ...state,
                                errors: [...state.errors, action.error ]
                              })
            
        default:
			return state;
    }

}

export default reducer;