export const RECEIVE_FRIEND_REQUEST = "RECEIVE_FRIEND_REQUEST";
export const ACCEPT_FRIEND_REQUEST = "ACCEPT_FRIEND_REQUEST";
export const REMOVE_FRIEND_REQUEST = "REMOVE_FRIEND_REQUEST";
export const REMOVE_FRIENDSHIP = "REMOVE_FRIENDSHIP";
import * as FriendRequestUtil from "../util/friend_request_api_util";

const receieveFriendRequest = payload => {
    return {
        type: RECEIVE_FRIEND_REQUEST,
        payload
    }
}

const receiveAcceptedFriendRequest = payload => {
    return {
        type: ACCEPT_FRIEND_REQUEST,
        payload
    }
}

const removeFriendRequest = friendRequest => {
    return {
        type: REMOVE_FRIEND_REQUEST,
        payload: { friendRequest }
    }
}

const removeFriendship = friendship => {
    return {
        type: REMOVE_FRIENDSHIP,
        payload: { friendship }
    }
}

export const createFriendRequest = friendRequest => dispatch => {
    return FriendRequestUtil.createFriendRequest(friendRequest)
        .then( (payload) => dispatch(receieveFriendRequest(payload)))
}

export const acceptFriendRequest = friendRequest => dispatch => {
    return FriendRequestUtil.acceptFriendRequest(friendRequest.id)
        .then( (payload) => dispatch(receiveAcceptedFriendRequest(payload)))
}

export const denyFriendRequest = friendRequest => dispatch => {
    return FriendRequestUtil.denyFriendRequest(friendRequest.id)
        .then( () => dispatch(removeFriendRequest(friendRequest)))
}

export const removeFriend = friendship => dispatch => {
    return FriendRequestUtil.removeFriend(friendship.id)
        .then( () => dispatch(removeFriendship(friendship)))
}