import { HTTPService } from '../services/http';

/** Action Types */
export const RoomDetailActionTypes = {
    GET_ROOM_DETAIL: 'GET_ROOM_DETAIL',
    GET_ROOM_DETAIL_LOADING: 'GET_ROOM_DETAIL_LOADING',
    GET_ROOM_DETAIL_SUCCESS: 'GET_ROOM_DETAIL_SUCCESS',
    GET_ROOM_DETAIL_ERROR: 'GET_ROOM_DETAIL_ERROR'
}

/** Get room detail */
export function getRoomDetail(id) {
    return async dispatch => {
        const data = await HTTPService(`/rooms/${id}`, 'GET');
        dispatch(getRoomDetailSuccess(data));
    }
}

/** Get room detail success */
export function getRoomDetailSuccess(payload) {
    return {
        type: RoomDetailActionTypes.GET_ROOM_DETAIL_SUCCESS,
        payload
    }
}

/** Get room detail error */
export function getRoomDetailError() {
    return {
        type: RoomDetailActionTypes.GET_ROOM_DETAIL_ERROR,
    }
}

/** Get room detail loading */
export function getRoomDetailLoading() {
    return {
        type: RoomDetailActionTypes.GET_ROOM_DETAIL_LOADING
    }
}