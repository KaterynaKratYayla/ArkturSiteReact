import { GET_AVAIL_REQ ,GET_AVAIL_RES, GET_AVAIL_ERR} from '../constants'

const initState = {
	avail_rooms: {avail_rooms:1},
    avail_loaded: true,
    errors: []
}

const reducer = ( state = initState, action ) => {
    console.log('ACTION_avail', action)
    switch( action.type ){

        case GET_AVAIL_REQ:
              return({
                ...state,
                avail_loaded: true
                })
        
        case GET_AVAIL_RES:
              return({
                 ...state,
                 avail_loaded: true,
                 avail_rooms: action.payload
                })
        
        case GET_AVAIL_ERR:
              return({
                   ...state,
                   errors: [...state.errors, action.error ]
               })

        default:
			return state;
    }

}

export default reducer;