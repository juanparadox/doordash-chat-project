import { createUsernameActionTypes } from "../actions/usernameActions";

const initialState = {
    payload: null,
    isLoading: false
}

export function usernameReducer(state = initialState, action) {
    switch (action.type) {
        case createUsernameActionTypes.CREATE_USERNAME:
            return {
                ...state,
                payload: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}