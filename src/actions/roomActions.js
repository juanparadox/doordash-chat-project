import { getRoomDetail } from './roomDetailActions';
import { getMessages } from './messagesActions';

/** Get room details and messages */
export function getRoom(id) {
    return async dispatch => {
        dispatch(getRoomDetail(id));
        dispatch(getMessages(id))
    }
}