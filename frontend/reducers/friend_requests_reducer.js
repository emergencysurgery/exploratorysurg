import { RECEIVE_FRIEND_REQUEST, ACCEPT_FRIEND_REQUEST, REMOVE_FRIEND_REQUEST } from "../actions/friend_request_actions"
import { RECEIVE_USERS } from "../actions/session_actions";

const FriendRequestsReducer = ( state = {}, action ) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_FRIEND_REQUEST:
            nextState[action.payload.friendRequest.id] = action.payload.friendRequest;
            return nextState;
        case ACCEPT_FRIEND_REQUEST:
            delete nextState[action.payload.friendRequest.id];
            return nextState;
        case REMOVE_FRIEND_REQUEST:
            delete nextState[action.payload.friendRequest.id];
            return nextState;
        case RECEIVE_USERS:
            return Object.assign({}, nextState, action.payload.friendRequests)
        default:
            return state
    }
}

export default FriendRequestsReducer