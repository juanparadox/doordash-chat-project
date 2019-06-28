import { combineReducers } from 'redux';

import { usernameReducer as username } from './usernameReducer';
import { roomsReducer as rooms } from './roomsReducer';
import { roomDetailReducer as roomDetail } from './roomDetailReducer';
import { messagesReducer as messages } from './messagesReducer';
import { messageReducer as message } from './messageReducer';

const rootReducer = combineReducers({
    message,
    messages,
    roomDetail,
    rooms,
    username
})

export default rootReducer