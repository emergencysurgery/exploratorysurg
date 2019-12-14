import { connect } from "react-redux";
import { createFriendRequest, acceptFriendRequest, denyFriendRequest, removeFriend } from "../../actions/friend_request_actions";
import FriendRequestButton from "./friend_request_btn";
import { friendRequestSelector, friendshipSelector } from "../../reducers/selectors";
import { withRouter } from "react-router";

const mSTP = (state, ownProps) => {
    let currentUser = state.entities.users[state.session.id];
    let user = ownProps.match.params ? state.entities.users[ownProps.match.params.userId] : null ;
    return {
        user, 
        currentUser,
        isFriend: user ? currentUser.friendIds.includes(user.id) : false,
        pendingRequest: user ? currentUser.pendingFriendIds.includes(user.id) : false,
        friendRequested: user ? currentUser.friendRequesterIds.includes(user.id) : false,
        friendRequest: user ? friendRequestSelector(state, user, currentUser) : false,
        friendship: user ? friendshipSelector(state, user, currentUser) : false
    }
}

const mDTP = dispatch => {
    return {
        createFriendRequest: friendRequest => dispatch(createFriendRequest(friendRequest)),
        acceptFriendRequest: friendRequest => dispatch(acceptFriendRequest(friendRequest)),
        denyFriendRequest: friendRequest => dispatch(denyFriendRequest(friendRequest)),
        removeFriend: friendship => dispatch(removeFriend(friendship))
    }
}

export default withRouter(connect(mSTP, mDTP)(FriendRequestButton));