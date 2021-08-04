import { GET_HTL_ROOM_NUMBER_REQ, GET_HTL_ROOM_NUMBER_RES, GET_HTL_ROOM_NUMBER_ERR} from '../constants'

const initState = {
	// pax: {adults:2,children:0,infants:0,rooms:1},
    room:1,
    room_loaded: true,
    errors: []
}

const reducer = ( state = initState, action ) => {
    console.log('ROOMS_ACTION_pax', action)
    switch( action.type ){

        case GET_HTL_ROOM_NUMBER_REQ:
              return({
                ...state,
                room_loaded: true
                })
        
        case GET_HTL_ROOM_NUMBER_RES:
              return({
                 ...state,
                 room_loaded: true,
                 room: action.payload
                })
        
        case GET_HTL_ROOM_NUMBER_ERR:
              return({
                   ...state,
                   errors: [...state.errors, action.error ]
               })

        default:
			return state;
    }

}

export default reducer;

