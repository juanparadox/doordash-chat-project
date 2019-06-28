import { MessageActionTypes } from '../actions/messageActions';

const initialState = {
    payload: null,
    isLoading: false,
    hasError: false
}

export function messageReducer(state = initialState, action) {
    switch (action.type) {
        case MessageActionTypes.POST_MESSAGE_LOADING:
            return {
                ...state,
                isLoading: true,
                hasError: false
            }
        case MessageActionTypes.POST_MESSAGE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                hasError: false
            }
        case MessageActionTypes.POST_MESSAGE_ERROR:
            return {
                ...state,
                isLoading: false,
                hasError: true
            }
        default:
            return state
    }
}