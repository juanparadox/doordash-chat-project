import { HTTPService } from "../services/http";

/** Action Types */
export const roomsActionTypes = {
    GET_ROOMS: 'GET_ROOMS',
    GET_ROOMS_LOADING: 'GET_ROOMS_LOADING',
    GET_ROOMS_SUCCESS: 'GET_ROOMS_SUCCESS',
    GET_ROOMS_ERROR: 'GET_ROOMS_ERROR'
}

/** Get rooms */
export function getRooms() {
    return async dispatch => {
        const data = await HTTPService('/rooms', 'GET');
        dispatch(getRoomsSuccess(data));
    }
}

/** Get rooms success */
export function getRoomsSuccess(payload) {
    return {
        type: roomsActionTypes.GET_ROOMS_SUCCESS,
        payload
    }
}

/** Get rooms error */
export function getRoomsError() {
    return {
        type: roomsActionTypes.GET_ROOMS_ERROR,
    }
}

/** Get rooms loading */
export function getRoomsLoading() {
    return {
        type: roomsActionTypes.GET_ROOMS_LOADING
    }
}