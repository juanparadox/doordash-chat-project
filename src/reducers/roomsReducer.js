import { roomsActionTypes } from '../actions/roomsActions';

const initialState = {
    payload: null,
    isLoading: false
}

export function roomsReducer(state = initialState, action) {
    switch (action.type) {
        case roomsActionTypes.GET_ROOMS_LOADING:
            return {
                ...state,
                payload: null,
                isLoading: true
            }
        case roomsActionTypes.GET_ROOMS_SUCCESS:
            return {
                ...state,
                payload: action.payload,
                isLoading: false
            }
        case roomsActionTypes.GET_ROOMS_ERROR:
            return {
                ...state,
                payload: null,
                isLoading: false
            }
        default:
            return state
    }
}