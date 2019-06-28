import { HTTPService } from '../services/http';
import { getMessages } from './messagesActions';

/** Action Types */
export const MessageActionTypes = {
    POST_MESSAGE: 'POST_MESSAGE',
    POST_MESSAGE_LOADING: 'POST_MESSAGE_LOADING',
    POST_MESSAGE_SUCCESS: 'POST_MESSAGE_SUCCESS',
    POST_MESSAGE_ERROR: 'POST_MESSAGE_ERROR'
}

/** Post message */
export function postMessage(roomId, payload) {
    console.log(roomId, payload);
    return async dispatch => {
        await HTTPService(`/rooms/${roomId}/messages`, 'POST', JSON.stringify(payload));
        dispatch(postMessageSuccess());
        dispatch(getMessages(roomId));
    }
}

/** Post message success */
export function postMessageSuccess(payload) {
    return {
        type: MessageActionTypes.POST_MESSAGE_SUCCESS
    }
}

/** Post message error */
export function postMessageError() {
    return {
        type: MessageActionTypes.POST_MESSAGE_ERROR,
    }
}

/** Post message loading */
export function postMessageLoading() {
    return {
        type: MessageActionTypes.POST_MESSAGE_LOADING
    }
}