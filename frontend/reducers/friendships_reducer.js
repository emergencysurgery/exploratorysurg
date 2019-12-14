import { REMOVE_FRIENDSHIP, ACCEPT_FRIEND_REQUEST } from "../actions/friend_request_actions";
import { RECEIVE_USERS } from "../actions/session_actions";

const FrienshipReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_USERS:
            return Object.assign({}, action.payload.friendships)
        case REMOVE_FRIENDSHIP:
            delete nextState[action.payload.friendship.id];
            return nextState;
        case ACCEPT_FRIEND_REQUEST:
            nextState[action.payload.friendship.id] = action.payload.friendship;
            nextState[action.payload.otherSide.id] = action.payload.otherSide;
            return nextState;
        default:
            return state;
    }
}

export default FrienshipReducer;