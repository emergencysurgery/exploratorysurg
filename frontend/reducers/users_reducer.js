import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_USER, RECEIVE_USERS } from  "../actions/session_actions";
import { RECEIVE_FRIEND_REQUEST, ACCEPT_FRIEND_REQUEST, REMOVE_FRIEND_REQUEST, REMOVE_FRIENDSHIP } from "../actions/friend_request_actions"

const UsersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    let req, currentUser, friendUser;
    if (action.payload && action.payload.friendRequest) {
        req = action.payload.friendRequest;
        currentUser = nextState[req.userId];
        friendUser = nextState[req.friendId];
    }
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.user.id] = action.user;
            return nextState;
        case RECEIVE_USER:
            nextState[action.user.id] = action.user;
            return nextState;
        case RECEIVE_USERS: 
            return Object.assign({}, state, action.payload.users )
        case LOGOUT_CURRENT_USER:
            return {};
        case RECEIVE_FRIEND_REQUEST:
            currentUser.pendingFriendIds.push(req.friendId);
            friendUser.friendRequesterIds.push(req.userId);
            return nextState;
        case ACCEPT_FRIEND_REQUEST:
            currentUser.friendIds.push(req.friendId);
            friendUser.friendIds.push(req.userId);
            currentUser.pendingFriendIds = removeId(currentUser.pendingFriendIds, req.friendId);
            friendUser.friendRequesterIds = removeId(friendUser.friendRequesterIds, req.userId);
            return nextState;
        case REMOVE_FRIEND_REQUEST:
            currentUser.pendingFriendIds = removeId(currentUser.pendingFriendIds, req.friendId);
            friendUser.friendRequesterIds = removeId(friendUser.friendRequesterIds, req.userId);
            return nextState;
        case REMOVE_FRIENDSHIP:
            currentUser = nextState[action.payload.friendship.userId];
            friendUser = nextState[action.payload.friendship.friendId];
            currentUser.friendIds = removeId(currentUser.friendIds, action.payload.friendship.friendId);
            friendUser.friendIds = removeId(friendUser.friendIds, action.payload.friendship.userId);
            return nextState;
        default:
            return state;
    }
}

const removeId = (array, id) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === id) array.splice(i, 1);
    }
    return array;
}

export default UsersReducer;