import { MessageActionTypes } from '../actions/messageActions';

const initialState = {
    payload: null,
    isLoading: false
}

export function messageReducer(state = initialState, action) {
    switch (action.type) {
        case MessageActionTypes.POST_MESSAGE_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case MessageActionTypes.POST_MESSAGE_SUCCESS:
        case MessageActionTypes.POST_MESSAGE_ERROR:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}