import { connect } from "react-redux";
import { updateUser, fetchUser } from "../../actions/session_actions";
import ProfileHeader from "./profile_header";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => {
    let id = ownProps.params.userId;
    let profileId = state.session.id;
    if (id) {
        profileId = id;
    }
    let user = state.entities.users[profileId];
    let currentUser = state.entities.users[state.session.id]
    return {
        user,
        profileId: profileId,
        currentUser,
        isFriend: user ? currentUser.friendIds.includes(user.id) : false
    }
}

const mDTP = dispatch => {
    return {
        updateUser: user => dispatch(updateUser(user)),
        openModal: modal => dispatch(openModal(modal)),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default connect(mSTP, mDTP)(ProfileHeader);