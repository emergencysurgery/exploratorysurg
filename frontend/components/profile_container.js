import { connect } from "react-redux";
import Profile from "./profile";

const mSTP = (state, ownProps) => {
    let user = ownProps.match.params ? state.entities.users[ownProps.match.params.userId] : null;
    let currentUser = state.entities.users[state.session.id];
    return {
        isFriend: user ? currentUser.friendIds.includes(user.id) : false,
        self: user === currentUser
    }
}

export default connect(mSTP)(Profile);