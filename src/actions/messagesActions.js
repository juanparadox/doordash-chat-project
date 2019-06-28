import { HTTPService } from "../services/http";

/** Action Types */
export const MessagesActionTypes = {
    GET_MESSAGES: 'GET_MESSAGES',
    GET_MESSAGES_LOADING: 'GET_MESSAGES_LOADING',
    GET_MESSAGES_SUCCESS: 'GET_MESSAGES_SUCCESS',
    GET_MESSAGES_ERROR: 'GET_MESSAGES_ERROR'
}

/** Get messages */
export function getMessages(roomId) {
    return async dispatch => {
        const data = await HTTPService(`/rooms/${roomId}/messages`, 'GET');
        dispatch(getMessagesSuccess(data));
    }
}

/** Get messages success */
export function getMessagesSuccess(payload) {
    return {
        type: MessagesActionTypes.GET_MESSAGES_SUCCESS,
        payload
    }
}

/** Get messages error */
export function getMessagesError() {
    return {
        type: MessagesActionTypes.GET_MESSAGES_ERROR,
    }
}

/** Get messages loading */
export function getMessagesLoading() {
    return {
        type: MessagesActionTypes.GET_MESSAGES_LOADING
    }
}