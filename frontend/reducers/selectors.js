export const selectCommentsForPost = ({ entities }, post) => {
    let comments = entities.comments;
    return post.commentIds.map( commentId => comments[commentId])
}

export const subscribeCommentsToItem = ({ entities }, post) => {
    let comments = [];
    Object.values(entities.comments).forEach(comment => {
        if (comment.postId === post.id) {
            comments.push(comment)
        }
    });
    return comments;
}

export const subscribeLikestoItem = ({ entities }, item) => {
    let likes = [];
    let type = item.profileId ? "Post" : "Comment"
    Object.values(entities.likes).forEach( like => {
        if (like.likeableType === type && like.likeableId === item.id ) {
            likes.push(like);
        }
    })
    return likes;
}

export const friends = ({ entities }, user) => {
    let friends = [];
    let ids = user.friendIds;
    ids.forEach( id => {
        friends.push(entities.users[id])
    })
    friends.reverse();
    return friends;
}

export const isLiked = (state, item) => {
    let liked = false;
    let type = item.profileId ? "Post" : "Comment";
    Object.values(state.entities.likes).forEach(like => {
        if (like.likeableType === type && like.likeableId === item.id && like.userId === state.session.id) {
            liked = true;
        }
    })
    return liked;
}

export const friendRequestSelector = ({ entities }, user, currentUser) => {
    let requests = entities.friendRequests
    let wantedRequest;
    for ( let req in requests ) {
        if (requests[req].friendId === user.id && requests[req].userId === currentUser.id ){
            wantedRequest = requests[req];
        } else if (requests[req].userId === user.id && requests[req].friendId === currentUser.id ) {
            wantedRequest = requests[req];
        }
    } 
    return wantedRequest;
}

export const friendshipSelector = ({entities}, user, currentUser) => {
    let friendships = entities.friendships;
    let wantedFriendship;
    for ( let ship in friendships ) {
        if (friendships[ship].friendId === user.id && friendships[ship].userId === currentUser.id) {
            wantedFriendship = friendships[ship];
        }
    }
    return wantedFriendship;
}

const shuffle = (array) => {
    array.sort(() => Math.random() - .5)
    return array;
}