import { connect } from "react-redux"
import { acceptFriendRequest, denyFriendRequest } from "../../actions/friend_request_actions";
import { fetchUsers } from "../../actions/session_actions";
import NavFriendRequest from "./nav_friend_request";
import { friendRequestSelector } from "../../reducers/selectors";

const mSTP = (state, ownProps) => {
    let currentUser = state.entities.users[state.session.id];
    let user = state.entities.users[ownProps.request];
    return {
        request: state.entities[ownProps.request],
        user,
        friendRequest: user ? friendRequestSelector(state, user, currentUser) : false
    }
}

const mDTP = dispatch => {
    return {
        accept: friendRequest => dispatch(acceptFriendRequest(friendRequest)),
        deny: friendRequest => dispatch(denyFriendRequest(friendRequest)),
        fetch: () => dispatch(fetchUsers())
    }
}

export default connect(mSTP, mDTP)(NavFriendRequest);