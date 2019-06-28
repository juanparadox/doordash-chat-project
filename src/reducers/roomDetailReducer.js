import { RoomDetailActionTypes } from '../actions/roomDetailActions';

const initialState = {
    payload: null,
    isLoading: false
}

export function roomDetailReducer(state = initialState, action) {
    switch (action.type) {
        case RoomDetailActionTypes.GET_ROOM_DETAIL_LOADING:
            return {
                ...state,
                payload: null,
                isLoading: true
            }
        case RoomDetailActionTypes.GET_ROOM_DETAIL_SUCCESS:
            return {
                ...state,
                payload: action.payload,
                isLoading: false
            }
        case RoomDetailActionTypes.GET_ROOM_DETAIL_ERROR:
            return {
                ...state,
                payload: null,
                isLoading: false
            }
        default:
            return state
    }
}