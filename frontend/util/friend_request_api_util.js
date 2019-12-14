export const createFriendRequest = friendRequest => {
    return $.ajax({
        url: `/api/friend_requests`,
        method: 'POST',
        data: { friend_request: friendRequest }
    })
}

export const acceptFriendRequest = friendRequestId => {
    return $.ajax({
        url: `/api/friend_requests/${friendRequestId}`,
        method: 'PATCH'
    })
}

export const denyFriendRequest = friendRequestId => {
    return $.ajax({
        url: `/api/friend_requests/${friendRequestId}`,
        method: 'DELETE'
    })
}

export const removeFriend = friendshipId => {
    return $.ajax({
        url: `/api/friendships/${friendshipId}`,
        method: 'DELETE'
    })
}