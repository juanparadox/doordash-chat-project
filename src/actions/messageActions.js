import { HTTPService } from '../services/http';
import { getMessages } from './messagesActions';
import { message } from 'antd';

/** Action Types */
export const MessageActionTypes = {
    POST_MESSAGE: 'POST_MESSAGE',
    POST_MESSAGE_LOADING: 'POST_MESSAGE_LOADING',
    POST_MESSAGE_SUCCESS: 'POST_MESSAGE_SUCCESS',
    POST_MESSAGE_ERROR: 'POST_MESSAGE_ERROR'
}

/** Post message */
export function postMessage(roomId, payload) {
    return async dispatch => {
        dispatch(postMessageLoading())
        try {
            await HTTPService(`/rooms/${roomId}/messages`, 'POST', payload);
            dispatch(postMessageSuccess());
            dispatch(getMessages(roomId));
        } catch(error) {
            message.error('There was an error submitting your message. Please try again.');
            dispatch(postMessageError());
        }
    }
}

/** Post message success */
export function postMessageSuccess() {
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