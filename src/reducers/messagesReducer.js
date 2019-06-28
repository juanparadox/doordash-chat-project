import { MessagesActionTypes } from '../actions/messagesActions';

const initialState = {
    payload: null,
    isLoading: false
}

export function messagesReducer(state = initialState, action) {
    switch (action.type) {
        case MessagesActionTypes.GET_MESSAGES_LOADING:
            return {
                ...state,
                payload: null,
                isLoading: true
            }
        case MessagesActionTypes.GET_MESSAGES_SUCCESS:
            return {
                ...state,
                payload: action.payload,
                isLoading: false
            }
        case MessagesActionTypes.GET_MESSAGES_ERROR:
            return {
                ...state,
                payload: null,
                isLoading: false
            }
        default:
            return state
    }
}