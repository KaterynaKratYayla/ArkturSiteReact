
import { GET_HTL_ROOM_NUMBER_REQ, GET_HTL_ROOM_NUMBER_RES , GET_HTL_ROOM_NUMBER_ERR } from '../constants';

//action creator
export const roomsChoiceResponse = ( res ) => ({
    type: GET_HTL_ROOM_NUMBER_RES,
    payload: res,
});

// console.log('[CONTENTRESPONCE]' , contentResponse)

export const getRoomsChoice = (rooms) => ( dispatch, getState ) => {
    // console.log('GET_PAX1:', getState())
    dispatch({ type: GET_HTL_ROOM_NUMBER_REQ });

    // const newObj = {rooms: rooms, picked: index};
    dispatch(roomsChoiceResponse(rooms))
    console.log('GET_PAX4', rooms)
   }
